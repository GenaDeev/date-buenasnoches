import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PersonaProfile from './pages/PersonaProfile';
import Aplicar from './pages/Apply';
import NotFound from './pages/NotFound';
import Candidatura from "./pages/Candidatura";
import { getOneSignal } from "./tools/Utils";

const pageVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: 100,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<AnimatedPage component={<Home />} />} />
        <Route path="/:persona" element={<AnimatedPage component={<PersonaProfile />} />} />
        <Route path="/aplicar/:persona" element={<AnimatedPage component={<Aplicar />} />} />
        <Route path="/candidatura/:id" element={<AnimatedPage component={<Candidatura />} />} />
        <Route path="*" element={<AnimatedPage component={<NotFound />} />} />
      </Routes>
    </AnimatePresence>
  );
};

const AnimatedPage = ({ component }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {component}
    </motion.div>
  );
};

export default function App() {
  useEffect(() => {
    getOneSignal();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

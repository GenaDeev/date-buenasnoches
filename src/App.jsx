import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import PersonaProfile from './pages/PersonaProfile'
import Aplicar from './pages/Apply'
import NotFound from './pages/NotFound'
import Candidatura from "./pages/Candidatura"


export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:persona" element={<PersonaProfile />} />
                <Route path="/aplicar/:persona" element={<Aplicar />} />
                <Route path="/candidatura/:id" element={<Candidatura />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
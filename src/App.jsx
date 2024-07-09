import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import PersonaProfile from './pages/PersonaProfile'
import Aplicar from './pages/Apply'
import NotFound from './pages/NotFound'
import Candidatura from "./pages/Candidatura"
import getOneSignal from "./tools/getOneSignal"

export default function App() {
    useEffect(() => {
        getOneSignal();
      })
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
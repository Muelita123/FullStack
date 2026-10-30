import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Catalogo from './pages/Catalogo.jsx'
import Contacto from './pages/Contacto.jsx'
import Inicio from './pages/Inicio.jsx'
import NoEncontrada from './pages/NoEncontrada.jsx'
import Servicios from './pages/Servicios.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="contenedor contenido-principal">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NoEncontrada />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

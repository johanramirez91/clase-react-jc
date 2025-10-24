import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import EjemplosSimple from './pages/EjemplosSimple'
import EjerciciosSimple from './pages/EjerciciosSimple'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
        <Link to="/" style={{ margin: '0 1rem' }}>🏠 Inicio</Link>
        <Link to="/ejemplos" style={{ margin: '0 1rem' }}>📖 Ejemplos</Link>
        <Link to="/ejercicios" style={{ margin: '0 1rem' }}>🎯 Ejercicio</Link>
      </nav>
      
      <main style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ejemplos" element={<EjemplosSimple />} />
          <Route path="/ejercicios" element={<EjerciciosSimple />} />
          <Route path="*" element={<div><h1>Página no encontrada</h1><Link to="/">Ir al inicio</Link></div>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
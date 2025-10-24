import { useState } from 'react'
import { Link } from 'react-router-dom'

import PokemonSimple from '../ejemplos/useEffect/PokemonFetch'
import Title from '../ejemplos/useEffect/Title'
import Contador from '../ejemplos/useState/Contador'
import ListaTareas from '../ejemplos/useState/ListaTareas'
import Toggle from '../ejemplos/useState/Toggle'

function Ejemplos() {
  const [ejemploActivo, setEjemploActivo] = useState('contador')

  const ejemplos = {
    contador: { titulo: 'useState: Contador', componente: Contador },
    lista: { titulo: 'useState: Lista', componente: ListaTareas },
    toggle: { titulo: 'useState: Toggle', componente: Toggle },
    pokemon: { titulo: 'useEffect: API', componente: PokemonSimple },
    title: { titulo: 'useEffect: Title', componente: Title }
  }

  const EjemploActual = ejemplos[ejemploActivo]?.componente

  return (
    <div>
      <Link to="/">⬅️ Inicio</Link>
      <h1>📖 Ejemplos</h1>

      <div style={{ margin: '1rem 0' }}>
        {Object.entries(ejemplos).map(([key, ejemplo]) => (
          <button
            key={key}
            onClick={() => setEjemploActivo(key)}
            style={{
              margin: '0.5rem',
              padding: '1rem',
              backgroundColor: ejemploActivo === key ? '#007bff' : '#f8f9fa',
              color: ejemploActivo === key ? 'white' : 'black',
              border: '1px solid #ddd',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            {ejemplo.titulo}
          </button>
        ))}
      </div>

      <div style={{ border: '1px solid #ddd', padding: '1rem', marginTop: '1rem' }}>
        {EjemploActual && <EjemploActual />}
      </div>
    </div>
  )
}

export default Ejemplos
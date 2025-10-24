import { useState } from 'react'

function ListaTareas() {
  const [tareas, setTareas] = useState(['Aprender React'])
  const [nuevaTarea, setNuevaTarea] = useState('')

  const agregar = () => {
    if (nuevaTarea.trim()) {
      setTareas([...tareas, nuevaTarea])
      setNuevaTarea('')
    }
  }

  return (
    <div>
      <h3>useState: Lista</h3>
      <input
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nueva tarea..."
      />
      <button onClick={agregar}>Agregar</button>

      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            {tarea}
            <button onClick={() => setTareas(tareas.filter((_, i) => i !== index))} style={{marginLeft: '12px'}}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaTareas
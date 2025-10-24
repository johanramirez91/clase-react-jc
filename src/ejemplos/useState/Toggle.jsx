import { useState } from 'react'

function Toggle() {
  const [visible, setVisible] = useState(true)
  
  const toggleVisibilidad = () => {
    setVisible(!visible)  
  }
  
  return (
    <div className="toggle-container">
      <button onClick={toggleVisibilidad}>
        {visible ? 'Ocultar' : 'Mostrar'} Contenido
      </button>
      
      {visible && (
        <div className="contenido">
          <h3>¡Contenido Visible! 👀</h3>
          <p>Este contenido se muestra y oculta con useState</p>
        </div>
      )}
    </div>
  )
}

export default Toggle
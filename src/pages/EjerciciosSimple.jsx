import { Link } from 'react-router-dom'
import EjercicioIntegrador from '../ejercicios/EjercicioIntegrador'

function Ejercicios() {
  return (
    <div>
      <Link to="/">⬅️ Inicio</Link>
      <h1>🎯 Ejercicio Integrador</h1>
      <p>useState + useEffect + React Router</p>
      <EjercicioIntegrador />
    </div>
  )
}

export default Ejercicios
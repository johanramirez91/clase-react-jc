import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div>
      <h1>🎓 React Hooks</h1>
      <p>useState • useEffect • React Router</p>
      
      <Link to="/ejemplos" className='ejemplos'>
        📖 Ver Ejemplos
      </Link>
      
      <Link to="/ejercicios" className='ejercicios'>
        🎯 Hacer Ejercicio
      </Link>
      
    </div>
  )
}

export default Home
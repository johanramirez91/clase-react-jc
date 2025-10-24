import { useState } from 'react'

function Contador() {
  const [contador, setContador] = useState(0)

  return (
    <div>
      <h3>useState: Contador</h3>
      <div style={{ fontSize: '2rem', margin: '1rem 0' }}>{contador}</div>
      <button onClick={() => setContador(contador - 1)}>-</button>
      <button onClick={() => setContador(0)} style={{ margin: '0 1rem' }}>Reset</button>
      <button onClick={() => setContador(contador + 1)}>+</button>
      <p>const [contador, setContador] = useState(0)</p>
    </div>
  )
}

export default Contador
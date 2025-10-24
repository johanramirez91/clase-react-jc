import { useEffect, useState } from 'react';

export default function Title() {
  const [contador, setContador] = useState(0)
  
  // useEffect se ejecuta cada vez que contador cambia
  useEffect(() => {
    document.title = `Contador: ${contador}`
    
    // Función de limpieza (opcional aquí)
    return () => {
      document.title = 'React App'
    }
  }, [contador])  // 👈 Dependencia: se ejecuta cuando contador cambia
  
  return (
    <div className="cambiador-titulo">
      <h2>Mira el título de la pestaña del navegador 👆</h2>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  )
}

    
// function InfiniteLoopExample() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`Effect runs with count: ${count}`);
//     setCount(prevCount => prevCount + 1); // This will cause an infinite loop
//   }, [count]); // Dependency array includes 'count'

//   return <p>Count: {count}</p>;
// }

// export default InfiniteLoopExample;
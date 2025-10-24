import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function EjercicioIntegrador() {
  const [pokemones, setPokemones] = useState([])
  const [favoritos, setFavoritos] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(response => response.json())
      .then(data => {
        Promise.all(
          data.results.map(pokemon => 
            fetch(pokemon.url).then(res => res.json())
          )
        ).then(detalles => {
          setPokemones(detalles)
          setLoading(false)
        })
      })
  }, [])

  const toggleFavorito = (pokemon) => {
    const esFavorito = favoritos.find(fav => fav.id === pokemon.id)
    if (esFavorito) {
      setFavoritos(favoritos.filter(fav => fav.id !== pokemon.id))
    } else {
      setFavoritos([...favoritos, pokemon])
    }
  }

  if (loading) return <div>Cargando...</div>

  return (
    <div>
      <button onClick={() => navigate('/')}>⬅️ Inicio</button>
      <button onClick={() => navigate('/ejemplos')}>📚 Ejemplos</button>
      
      <h3>Favoritos: {favoritos.length}</h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
        {pokemones.map(pokemon => {
          const esFavorito = favoritos.find(fav => fav.id === pokemon.id)
          return (
            <div key={pokemon.id} style={{ border: '1px solid #ddd', padding: '1rem', textAlign: 'center' }}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <h4>{pokemon.name}</h4>
              <button 
                onClick={() => toggleFavorito(pokemon)}
                style={{ backgroundColor: esFavorito ? '#ff6b6b' : '#f8f9fa' }}
              >
                {esFavorito ? '❤️' : '🤍'}
              </button>
            </div>
          )
        })}
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f8f9fa' }}>
        <h4>Conceptos aplicados:</h4>
        <p><strong>useState:</strong> pokemones, favoritos, loading</p>
        <p><strong>useEffect:</strong> fetch API al montar</p>
        <p><strong>React Router:</strong> useNavigate() para navegar</p>
      </div>
    </div>
  )
}

export default EjercicioIntegrador
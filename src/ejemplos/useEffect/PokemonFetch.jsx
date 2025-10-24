import { useEffect, useState } from 'react'

function PokemonSimple() {
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(false)
  const [pokemonId, setPokemonId] = useState(1)

  useEffect(() => {
    setLoading(true)
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(response => response.json())
      .then(data => {
        setPokemon(data)
        setLoading(false)
      })
  }, [pokemonId])

  return (
    <div>
      <h3>useEffect: Pokemon API</h3>
      
      <button onClick={() => setPokemonId(pokemonId - 1)} disabled={pokemonId <= 1}>
        ⬅️
      </button>
      <span> Pokemon #{pokemonId} </span>
      <button onClick={() => setPokemonId(pokemonId + 1)}>
        ➡️
      </button>

      {loading && <p>Cargando...</p>}
      
      {pokemon && (
        <div>
          <h4>{pokemon.name}</h4>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}

      <p>useEffect(() =&gt; {}, [pokemonId]) // Se ejecuta cuando cambia pokemonId</p>
    </div>
  )
}

export default PokemonSimple
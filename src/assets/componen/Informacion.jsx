import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Informacion() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!pokemon) return <h1>Cargando...</h1>;

  return (
    <div style={{padding: "20px", color: "black", backgroundColor: "rgba(255, 255, 255, 0.604)" }}>
      <h2>Información del Pokémon {pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Altura: {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
    </div>
  );
}
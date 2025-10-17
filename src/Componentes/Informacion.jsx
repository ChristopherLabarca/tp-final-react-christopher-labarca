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
  
  useEffect(() => {
    if (pokemon?.cries?.latest) {
      const audio = new Audio(pokemon.cries.latest);
      audio.volume = 0.2;
      audio.play();
    }
  },[pokemon]);

  if (!pokemon) return <h1>Cargando...</h1>;

  return (
    <div className="pokemon-info">
      <audio src="https://vgmsite.com/soundtracks/pokemon-gameboy-sound-collection/oxgqbdlc/01%20-%20Pokemon%20Theme%20Song.mp3" autoplay="true" loop="true"></audio>

      <h2>Información del Pokémon {pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Altura: {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
      <p>
        Tipo: {pokemon.types.map((typeInfo) => typeInfo.type.name).join(", ")}
      </p>
      
      <p>
        Habilidades:{" "}
        {pokemon.abilities
          .map((abilityInfo) => abilityInfo.ability.name)
          .join(", ")}
      </p>
      <p>Estadísticas:</p>
      <ul>
        {pokemon.stats.map((statInfo) => (
          <li key={statInfo.stat.name}>
            {statInfo.stat.name}: {statInfo.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}

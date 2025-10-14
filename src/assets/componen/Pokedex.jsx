import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Pokedex() {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=30`)
      .then((res) => res.json())
      .then((data) => setPokemones(data.results))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Pokedex</h1>
      <h2>Bienvenido a la Pokedex</h2>

      <p>Aquí puedes encontrar información sobre todos los Pokémon.</p>

      <div className="pokemon-card-box">
        {pokemones.map((pokemon) => (
          <div className="card card-hover text-center" key={pokemon.name}>
            <h5 className="card-title">{pokemon.name}</h5>
            <img
              className="card-img-top"
              alt={`Pokemon ${pokemon.name}`}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.match(/\/(\d+)\/?$/)?.[1]}.png`}
            ></img>
            <div className="card-body"></div>
            <h5 className="card-title">{pokemon.name}</h5>
            <p className="card-text">Tipo: {pokemon.type}</p>
            <Link to={`/informacion/${pokemon.url.match(/\/(\d+)\/?$/)?.[1]}`}>Ver más</Link>

            <button className="boton-favo" title="Agregar a favoritos" type="button">
              <span className="corazon-vacio">🤍</span>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

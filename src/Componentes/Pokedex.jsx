import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "./Button.jsx";
import "../Hooks/UseFavories.jsx";
import useFavorites from "../Hooks/UseFavories.jsx";

export default function Pokedex() {
  const [pokemones, setPokemones] = useState([]);
  const { favorites } = useFavorites();

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=30`)
      .then((res) => res.json())
      .then((data) => setPokemones(data.results))
      .catch((err) => console.log(err));
  };

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleToggleFavorite = (pokemon) => {
    const id = pokemon.url.match(/\/(\d+)\/?$/)?.[1];
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite({ id, name: pokemon.name, url: pokemon.url });
    }
  };

  return (
    <>
      <h1>Pokedex</h1>
      <h2>Bienvenido a la Pokedex</h2>
      <p>Aquí puedes encontrar información sobre todos los Pokémon.</p>

      <div className="pokemon-card-box">
        {pokemones.map((pokemon) => {
          const id = pokemon.url.match(/\/(\d+)\/?$/)?.[1];
          return (
            <div className="card card-hover text-center" key={pokemon.name}>
              <img
                className="card-img-top"
                alt={`Pokemon ${pokemon.name}`}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
              />
              <div className="card-body"></div>
              <h5 className="card-title">{pokemon.name}</h5>
              <Link to={`/informacion/${id}`}>Ver más</Link>
              <FavoriteButton
                itemId={id}
                isFavorite={isFavorite(id)}
                onToggle={() => handleToggleFavorite(pokemon)}
              />
            </div>
          );
        })}
      </div>

      <p>
        Total de Favoritos: {Array.isArray(favorites) ? favorites.length : 0}
      </p>
      <div className="favorites-list">
        {(Array.isArray(favorites) ? favorites : []).map((pokemon) => (
          <div key={pokemon.id} className="favorite-pokemon">
            <h4>{pokemon.name}</h4>
            <FavoriteButton
              itemId={pokemon.id}
              isFavorite={true}
              onToggle={() => removeFavorite(pokemon.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

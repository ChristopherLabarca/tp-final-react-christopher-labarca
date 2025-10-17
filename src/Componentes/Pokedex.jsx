import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "../Componentes/FavoriteButton.jsx"; // ← Ruta corregida
import useFavorites from "../Hooks/useFavorites.jsx"; // ← Ruta corregida

export default function Pokedex() {
  const [pokemones, setPokemones] = useState([]);
  const { favorites, isFavorite, toggleFavorite } = useFavorites(); // ← SOLO UNA VEZ

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=30")
      .then((res) => res.json())
      .then((data) => setPokemones(data.results))
      .catch((err) => console.log(err));
  }, []);

  const handleToggleFavorite = (pokemon) => {
    const id = pokemon.url.match(/\/(\d+)\/?$/)?.[1];
    toggleFavorite({ id, name: pokemon.name, url: pokemon.url });
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
              <div className="card-body">
                <h5 className="card-title">{pokemon.name}</h5>
                <Link to={`/informacion/${id}`}>Ver más</Link>
                <FavoriteButton
                  pokemonId={id} // ← Usá pokemonId, NO itemId
                  isFavorite={isFavorite(id)}
                  onToggle={() => handleToggleFavorite(pokemon)}
                />
              </div>
            </div>
          );
        })}
      </div>

      <h2>Cargar más Pokémon</h2>

      <button
        style={{
          backgroundColor: "lightblue",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px",
        }}
        onClick={() => {
          fetch(
            `https://pokeapi.co/api/v2/pokemon?offset=${pokemones.length}&limit=30`
          )
            .then((res) => res.json())
            .then((data) => setPokemones((prev) => [...prev, ...data.results]))
            .catch((err) => console.log(err));
        }}
      >
        Cargar más Pokémon
      </button>

      <h3>Pokemones Favoritos</h3>

      <p>Total de Favoritos: {favorites.length}</p>
      <div className="favorites-list">
        {favorites.map((pokemon) => (
          <div key={pokemon.id} className="favorite-pokemon">
            <h4>{pokemon.name}</h4>
            <img
              alt={`Pokemon ${pokemon.name}`}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              style={{ width: "auto", height: "auto" }}
            />
            <FavoriteButton
              pokemonId={pokemon.id}
              isFavorite={true}
              onToggle={() => toggleFavorite(pokemon)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "myReactFavorites";

export default function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Error al cargar favoritos:", e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = (pokemonId) => {
    return favorites.some((pokemon) => pokemon.id === pokemonId);
  };

  const addFavorite = (pokemon) => {
    setFavorites((prev) => [...prev, pokemon]);
  };

  const removeFavorite = (pokemonId) => {
    setFavorites((prev) => prev.filter((p) => p.id !== pokemonId));
  };

  const toggleFavorite = (pokemon) => {
    if (isFavorite(pokemon.id)) {
      removeFavorite(pokemon.id);
    } else {
      addFavorite(pokemon);
    }
  };

  return { favorites, isFavorite, addFavorite, removeFavorite, toggleFavorite};
}
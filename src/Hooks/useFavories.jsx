import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "myReactFavorites";

// Hook personalizado (Arrow Function)
export const useFavorites = () => {
  // 1. Cargar estado desde localStorage al inicio
  const [favoriteIds, setFavoriteIds] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Error al cargar favoritos:", e);
      return [];
    }
  });

  // 2. Guardar estado en localStorage cada vez que cambie favoriteIds
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  // 3. Función para verificar si es favorito (Arrow Function implícita)
  const isFavorite = (pokemonId) => favoriteIds.includes(pokemonId);

  // 4. Función para alternar el estado (Arrow Function)
  const toggleFavorite = (pokemonId) => {
    setFavoriteIds(
      (prevIds) =>
        prevIds.includes(pokemonId)
          ? prevIds.filter((id) => id !== pokemonId) // Eliminar
          : [...prevIds, pokemonId] // Añadir
    );
  };

  return { favoriteIds, isFavorite, toggleFavorite };
};

export default useFavorites;

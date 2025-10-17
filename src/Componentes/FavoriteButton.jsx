import React from "react";

const FavoriteButton = ({ pokemonId, isFavorite, onToggle }) => {
  const icon = isFavorite ? "❤" : "🤍";

  return (
    <button
      onClick={() => onToggle(pokemonId)}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "1.5em",
      }}
      aria-label={isFavorite ? "Eliminar de favoritos" : "Añadir a favoritos"}
    >
      {icon}
    </button>
  );
};

export default FavoriteButton;
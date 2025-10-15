import React from 'react';

// Componente del botón (Arrow Function)
const FavoriteButton = ({ pokemonId, isFavorite, onToggle }) => {

  // Lógica de visualización
  const icon = isFavorite ? '❤️' : '🤍';

  return (
    <button 
      // Arrow Function para manejar el evento onClick
      onClick={() => onToggle(pokemonId)} 
      style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5em' }}
      aria-label={isFavorite ? 'Eliminar de favoritos' : 'Añadir a favoritos'}
    >
      {icon}
    </button>
  );
};

export default FavoriteButton;


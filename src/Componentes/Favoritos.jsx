import useFavorites from "../Hooks/UseFavories.jsx";
import FavoriteButton from "./Button.jsx";

export default function Favoritos() {
  const { favorites } = useFavorites();

  return (
    <>
      <h1>Página de Favoritos</h1>
      <p>Aquí puedes encontrar información sobre tus Pokemon favoritos.</p>
      <div className="favorites-list">
        {favorites.map((pokemon) => (
          <div key={pokemon.id} className="favorite-pokemon">
            <h4>{pokemon.name}</h4>
            <FavoriteButton
              pokemonId={pokemon.url.match(/\/(\d+)\/?$/)?.[1]}
              isFavorite={true}
              onToggle={() => {}}
            />
            
          </div>
        ))}
      </div>
    </>
  );
}


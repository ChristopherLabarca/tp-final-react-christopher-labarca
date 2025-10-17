import useFavorites from "../Hooks/UseFavories.jsx";
import FavoriteButton from "./Button.jsx";

export default function Favoritos() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <>
      <h1>Página de Favoritos</h1>
      <p>Aquí puedes encontrar a tus Pokemon favoritos.</p>
      <div className="favorites-list">
        {favorites.map((pokemon) => (
          <div key={pokemon.id} className="favorite-pokemon">
            <h4>{pokemon.name}</h4>
            <img
              alt={`Pokemon ${pokemon.name}`}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              style={{ width: "200px", height: "200px" }}
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

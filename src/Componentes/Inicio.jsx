export default function Inicio() {
  return (
    <div>
      <h1>Bienvenido al Inicio</h1>
      <h2>¡Explora el mundo de los Pokémon!</h2>
      <p>
        Esta es una aplicación sencilla de Pokédex donde puedes buscar y
        descubrir información sobre tus Pokémon favoritos.
      </p>
      <p>¡Adivina cual es este pokemon!</p>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src="https://m.media-amazon.com/images/I/51gq6mwvB3L.jpg"
              alt="who is that pokemon"
              style={{ width: "300px", height: "300px" }}
              title="¿Quién es ese Pokémon?"
            />
          </div>
          <div className="flip-card-back">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
              alt="is charmander"
              style={{ width: "300px", height: "300px" }}
              title="¡Es Charmander!"
            />
          </div>
        </div>
      </div>
      <p>¡Diviértete explorando!</p>
      <p>Recuerda que puedes buscar cualquier Pokémon en la pokedex en la barra de búsqueda.</p>
    </div>
  );
}

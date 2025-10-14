export default function Pokedex() {
  return (
    <>
      <h1>Pokedex</h1>
              <h2>Bienvenido a la Pokedex</h2>

                <p>Aquí puedes encontrar información sobre todos los Pokémon.</p>



                
            <div className="pokemon-card-box">
        <div className="contenedor">
          <div className="card card-hover text-center">
            <img className="card-img-top" alt="Pokemon 151" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png"></img>
            <div className="card-body"></div>
              <h5 className="card-title">Mew</h5>
              <p className="card-text">Tipo: Psíquico</p>
              <a href="https://pokeapi.co/api/v2/pokemon/151/" target="_blank" className="btn btn-primary">Ver más</a>
              <button className="boton-favo" title="Agregar a favoritos" type="button"><span className="corazon-vacio">🤍</span></button>

            </div>
          </div>
          <div className="card card-hover text-center">
            <img className="card-img-top" alt="Pokemon 150" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"></img>
            <div className="card-body"></div>
              <h5 className="card-title">Mewtwo</h5>
              <p className="card-text">Tipo: Psíquico</p>
              <a href="https://pokeapi.co/api/v2/pokemon/150/" target="_blank" className="btn btn-primary">Ver más</a>
              <button className="boton-favo" title="Agregar a favoritos" type="button"><span className="corazon-vacio">🤍</span></button>
            </div>

                      <div className="card card-hover text-center">
            <img className="card-img-top" alt="Pokemon 149" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png"></img>
            <div className="card-body"></div>
              <h5 className="card-title">dragonite</h5>
              <p className="card-text">Tipo: Dragón</p>
              <a href="https://pokeapi.co/api/v2/pokemon/149/" target="_blank" className="btn btn-primary">Ver más</a>
              <button className="boton-favo" title="Agregar a favoritos" type="button"><span className="corazon-vacio">🤍</span></button>
            </div>
          </div>

    </>
  );
}


import pokeLogo from "./assets/International_Pokémon_logo.svg.png";
import "./App.css";
import Navbar from "./Navbar.jsx";


/* RECUERDA REVISAR EL SEARCHRESULTS Y EL SEARCHBAR, NO CARGA PORQUE NO ESTA PUESTA LA CONST*/
function App() {
  return (
    
    <>
      <div>
        <a href="https://pokeapi.co/" target="_blank">
          <img src={pokeLogo} className="logo" alt="Poke logo" width={300} />
        </a>
      </div>
      <h1>¡Bienvenidos a la Pokedex!</h1>

      <Navbar />
      <div className="main">
        <h2>Bienvenido a la Pokedex</h2>
        <p>Aquí puedes encontrar información sobre tus Pokemon favoritos.</p>
      </div>




      <p>
        Haz clic en los logotipos de pokemons para obtener más información
      </p>
    </>

    
  );
}

export default App;

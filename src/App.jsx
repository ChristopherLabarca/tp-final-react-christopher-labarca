import pokeLogo from "./assets/International_Pokémon_logo.svg.png";
import "./App.css";
import Navbar from "./Componentes/Navbar.jsx";

import { Routes, Route } from "react-router-dom";
import Favoritos from "./Componentes/Favoritos.jsx";
import Informacion from "./Componentes/Informacion.jsx";
import Pokedex from "./Componentes/Pokedex.jsx";
import Inicio from "./Componentes/Inicio.jsx";
import Error from "./Componentes/Error.jsx";
const BASE = "https://pokeapi.co/api/v2";

function App() {
  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={pokeLogo} className="logo" alt="Poke logo" width={300} />
        </a>
      </div>

      <Navbar />
      <div className="main"></div>


      <div>
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/informacion/:id" element={<Informacion />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/*" element={<Error />} />
          <Route path="/" element={<Inicio />} />
          
        </Routes>
      </div>
    </>
  );
}

/*en pokedex es el listado de pokemones
en informacion es la informacion de los pokemones
en favoritos es el listado de pokemones favoritos
en inicio es la pagina de inicio
*/

export default App;


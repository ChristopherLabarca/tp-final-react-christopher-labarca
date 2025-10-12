import React, { useEffect, useState } from "react";
import pokeLogo from "./assets/International_Pokémon_logo.svg.png";
import "./App.css";
import Navbar from "./Navbar.jsx";

import { Routes, Route } from 'react-router-dom';
import Favoritos from './assets/componen/Favoritos.jsx';
import Informacion from './assets/componen/Informacion.jsx';
import Pokedex from './assets/componen/Pokedex.jsx';
import Inicio from './assets/componen/Inicio.jsx';

const BASE = 'https://pokeapi.co/api/v2';

function App() {
  const [pokemon, setPokemon] = useState([{ name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' }]);

  useEffect(() => {
    console.log('al montar el componente');

    fetch(`${BASE}/pokemon/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setPokemon(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

      <div>
        <Routes>
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/informacion' element={<Informacion />} />
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/favoritos' element={<Favoritos />} />
        </Routes>
      </div>

      <p>Haz clic en los logotipos de pokemons para obtener más información</p>
    </>
  );
}

export default App;

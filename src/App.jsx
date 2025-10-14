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

  return (
    <>
      <div>
        <a href="https://pokeapi.co/" target="_blank">
          <img src={pokeLogo} className="logo" alt="Poke logo" width={300} />
        </a>
      </div>
      <h1>¡Bienvenidos!</h1>

      <Navbar />
      <div className="main">
      </div>

      <div>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Inicio' element={<Inicio />} />
          <Route path='/informacion' element={<Informacion />} />
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/favoritos' element={<Favoritos />} />
          <Route path='*' element={<h2>404 Not Found</h2>} />
        </Routes>
      </div>

    </>
    
  );
  
}

export default App;

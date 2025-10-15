import React, { useState } from "react";
import "../App.css";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <>
      <span className="openbtn" onClick={openNav}>
        ☰ Abrir
      </span>
      <div className={`sidenav ${isOpen ? "open" : ""}`} id="mySidenav">
        <p className="closebtn" onClick={closeNav}>
          &times;Cerrar
        </p>
        <span className="sidenavbar" id="myNavbar">
          Navbar
        </span>
        <div id="mySidenav" className={`sidenav ${isOpen ? "open" : ""}`}>
          <a href="/Inicio">Inicio</a>
          <a href="/Informacion">Información</a>
          <a href="/Pokedex">Pokedex</a>
          <a href="/Favoritos">Favoritos</a>
        </div>
      </div>
    </>
  );
}

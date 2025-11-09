import React, { useState, useEffect, useRef } from "react"; // 👈 Importa useEffect y useRef
import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // 1. Crear la referencia al elemento del menú lateral
  const navRef = useRef(null); 

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };
  
  // 2. Lógica para manejar el clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Si está abierto Y la referencia existe Y el clic NO fue dentro del menú
      if (
        isOpen && 
        navRef.current && 
        !navRef.current.contains(event.target)
      ) {
        closeNav(); // Cerrar el menú
      }
    };

    // Agregar el listener al documento
    document.addEventListener("mousedown", handleClickOutside);

    // Limpieza: Remover el listener cuando el componente se desmonte
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]); // 👈 Dependencia en 'isOpen' para que el listener se actualice correctamente

  return (
    <>
      {/* Botón para abrir el menú (debe estar fuera del contenedor navRef) */}
      <span className="openbtn" onClick={openNav}>
        ☰ Abrir
      </span>
      
      {/* 3. Asignar la referencia (ref) al contenedor principal del menú */}
      <div 
        className={`sidenav ${isOpen ? "open" : ""}`} 
        id="mySidenav"
        ref={navRef} // 👈 ¡Aquí asignamos la referencia!
      >
        <p className="closebtn" onClick={closeNav}>
          &times;Cerrar
        </p>
        <span className="sidenavbar" id="myNavbar">
          
        </span>
        
        {/* Usamos el `closeNav` en cada Link para cerrar el menú después de navegar */}
        <nav>
          <Link to="/Inicio" onClick={closeNav}>Inicio</Link>
          <Link to="/Informacion" onClick={closeNav}>Información</Link>
          <Link to="/Pokedex" onClick={closeNav}>Pokedex</Link>
          <Link to="/Favoritos" onClick={closeNav}>Favoritos</Link>
        </nav>
      </div>
    </>
  );
}
import { Link } from 'react-router-dom';

function Navegacion() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='./Inicio'>Inicio</Link>
        </li>
        <li>
          <Link to='./pokedex'>Pokedex</Link>
        </li>
        <li>
          <Link to='./Informacion'>Información</Link>
        </li>
        <li>
          <Link to='./Favoritos'>Favoritos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navegacion;
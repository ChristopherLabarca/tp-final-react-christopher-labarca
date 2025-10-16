Desarrollado por: Christopher Labarca
Curso: Desarrollo Web FrontEnd - UTN

✨ Características Principales

🎯 Funcionalidades
📋 Listado completo de Pokémon con paginación
❤️ Sistema de favoritos con persistencia en Local Storage
⚡ Navegación fluida con React Router DOM

🎮 Experiencia de Usuario
Página de perfil detallada para cada Pokémon
Estadísticas completas (HP, Ataque, Defensa, etc.)
Tipos de Pokémon

🛠️ Tecnologías Utilizadas
Tecnología	Propósito
Vite	Tooling de desarrollo rápido
React Router DOM	Navegación entre páginas
Redux Toolkit	Gestión del estado global
PokeAPI	Fuente de datos de Pokémon


⚙️ Instalación y ejecución

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/ChristopherLabarca/tp-final-react-christopher-labarca.git
   ```
2. Accedé al directorio del proyecto:
   ```bash
   cd tp-final-react-christopher-labarca
   ```
3. Instalá las dependencias:
   ```bash
   npm install
   ```

4. Ejecutá la aplicación en modo desarrollo:
   ```bash
   npm run dev
   ```
5. Abrí tu navegador en [http://localhost:5173](http://localhost:5173)  
   (o el puerto que indique la consola).

---

## 📁 Estructura del proyecto

```
src/
├── assets/
│   ├── store (aun no completado, a espera de futuras actualizaciones)
│   │   ├── cardslice.jsx
│   │   ├── favslice.jsx
│   │   ├── index.jsx
│   │   ├── pokedetails.jsx
│   │   ├── 
├── componentes/
│   ├── button.jsx
│   ├── error.jsx
│   ├── favoritebutton.jsx
│   ├── favoritos.jsx
│   ├── informacion.jsx
│   ├── inicio.jsx
│   ├── navbar.jsx
│   └── Pokedex.jsx
├── hooks/
│   └── usefavorites.jsx
├── public (vacio)
├── App.jsx
├── app.css
├── index.css
├── main.jsx


```

---

## 📡 API utilizada

Datos obtenidos de la **[PokeAPI](https://pokeapi.co/)**  
Endpoint principal utilizado:

```
https://pokeapi.co/api/v2/pokemon
```
Listo!
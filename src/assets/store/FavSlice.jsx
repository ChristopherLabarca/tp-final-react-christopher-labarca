/*import { createSlice, createSelector } from "@reduxjs/toolkit";
// NOTA: En JavaScript, las interfaces (CardPokemon, RootState) y los 'type'
// de TypeScript se eliminan.

// El estado inicial es un array vacío, que representará la lista de favoritos.
const initialState = [];

// --- Slice de Redux (FavSlice) ---
export const FavSlice = createSlice({
  name: "FavPokemon",
  initialState, // []. Representa el array de CardPokemon
  reducers: {
    // Reducer para añadir un favorito (Arrow Function)
    addFav: (state, action) => {
      const newPokemon = action.payload;
      // Comprueba si el Pokémon ya está en la lista antes de añadirlo
      if (!state.some((pokemon) => pokemon.id === newPokemon.id)) {
        state.push(newPokemon);
      }
      // NOTA: Gracias a Immer (incluido en Redux Toolkit),
      // podemos usar state.push() directamente (mutación 'segura').
    },

    // Reducer para eliminar un favorito (Arrow Function)
    deleteFav: (state, action) => {
      const pokemonToDelete = action.payload;
      // Retorna un nuevo array sin el Pokémon que coincide con el ID.
      // Cuando se retorna un nuevo valor, Immer lo usa como el nuevo estado.
      return state.filter((pokemon) => pokemon.id !== pokemonToDelete.id);
    },
  },
});

// --- Acciones y Reducer (Exportaciones) ---
export const { addFav, deleteFav } = FavSlice.actions;
export default FavSlice.reducer;

// ---------------------------------------------------------------------
// --- Selectores (Para leer datos del estado) ---

// Selector base: Obtiene la lista de favoritos del estado global (RootState).
// Asume que la clave en el store global es 'Favoritos'.
const selectFavoriteList = (state) => state.Favoritos;

/**
 * Selector Creador: Crea una función de selección optimizada
 * que verifica si un Pokémon con un ID específico es favorito.
 * @param {number} pokemonId - El ID del Pokémon a verificar.
 * @returns {function} Un selector memorizado que toma el estado (RootState).
 */
/*export const makeSelectIsFavorite = (pokemonId) =>
  createSelector(
    // Dependencia 1: El resultado del selector selectFavoriteList
    [selectFavoriteList],

    // Función de transformación: (Arrow Function)
    // Se ejecuta solo si la lista de favoritos cambia.
    (favoritesList) => {
      return favoritesList.some((pokemon) => pokemon.id === pokemonId);
    }
  );*/

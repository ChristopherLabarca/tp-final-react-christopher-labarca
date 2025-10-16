/*import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from '@reduxjs/toolkit'; // combineReducers es parte de @reduxjs/toolkit

// Importar los reducers (asumimos que ahora son archivos .js)
import pokemonReducer from './cardSlice.jsx'; 
import FavSlice from './FavSlices.js';

// Importar las funciones de persistencia
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // El almacenamiento por defecto (localStorage)

// --- Configuración de Persistencia para Favoritos ---
const favPersistConfig = {
  key: 'favs', // Clave única para guardar el estado en el storage
  storage,
  // Solo queremos guardar el estado manejado por el reducer 'FavSlice'
  whitelist: ['Favoritos'], 
};

// --- Combinación de Reducers ---
// Usa una Arrow Function si fuera necesario para definir la función, 
// pero combineReducers es una función que se llama, no un callback.
const rootReducer = combineReducers({
  CardPokemon: pokemonReducer, 
  Favoritos: FavSlice,
});

// Aplicar la persistencia al rootReducer
const persistedReducer = persistReducer(favPersistConfig, rootReducer);

// --- Configuración Final del Store ---
export const store = configureStore({
  
  // Usar el reducer que incluye la lógica de persistencia
  reducer: persistedReducer, 
  
  // Middleware personalizado para ignorar acciones de Redux Persist
  // Es una Arrow Function (getDefaultMiddleware) => {...}
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignoramos estas acciones para evitar warnings de serialización
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});
    
// --- Exportar el Persistor ---
// Necesario para integrar la persistencia con tu componente React (e.g., PersistGate)
export const persistor = persistStore(store);*/
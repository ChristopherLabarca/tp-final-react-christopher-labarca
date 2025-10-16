/*
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// --- Thunk Asíncrono para obtener Pokémons (Arrow Function) ---
export const fetchPokemons = createAsyncThunk(
  "pokemon/fetchPokemons",
  async (offset = 0, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
      );

      if (!response.ok) {
        return rejectWithValue(`Error al obtener pokémons: ${response.status}`);
      }

      const data = await response.json();
      
      // Mapeamos y usamos Promise.all para obtener los detalles de cada Pokémon
      const detailPromises = data.results.map(pokemon => 
        fetch(pokemon.url).then(res => {
          if (!res.ok) {
            // Un error individual no debería romper todo el Promise.all
            console.error(`Fallo al obtener detalle de ${pokemon.name}`);
            return null; // Retornamos null para filtrar después
          }
          return res.json();
        }).catch(err => {
            console.error(`Error de red al obtener detalle de ${pokemon.name}:`, err);
            return null; // Capturamos errores de red/parseo para no romper Promise.all
        })
      );
      
      const detailedResults = await Promise.all(detailPromises);
      
      // Filtramos resultados nulos y formateamos los datos
      const formattedResults = detailedResults
        .filter(detail => detail !== null)
        .map(detail => ({
          id: detail.id,
          name: detail.name,
          // Usamos la imagen frontal estándar
          images: detail.sprites.other?.['official-artwork']?.front_default 
            || detail.sprites.front_default 
            || '', 
          sprites: detail.sprites,
          types: detail.types,
        }));
        
      return {
        results: formattedResults,
        offset: offset + 20,
        hasMore: !!data.next,
      };

    } catch (err) { console.error("Error de red o parseo:", err);
      return rejectWithValue("Fallo la conexión o el parseo de datos.");
    }
  }
);

// --- Slice de Redux ---
const initialState = {
  list: [],
  offset: 0,
  hasMore: true,
  loading: false,
  error: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    // Reducer usando Arrow Function
    resetPokemons: (state) => {
      state.list = [];
      state.offset = 0;
      state.hasMore = true;
      state.error = null;
      state.loading = false;
    },
  },
  // Manejo de las acciones generadas por el createAsyncThunk
  extraReducers: (builder) => {
    builder
      // Estado Pendiente (Arrow Function)
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Estado Cumplido (Arrow Function)
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.loading = false;
        const { results, offset, hasMore } = action.payload;
        state.list = [...state.list, ...results]; 
        state.offset = offset;
        state.hasMore = hasMore;
      })
      // Estado Rechazado (Arrow Function)
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.loading = false;
        // Obtenemos el mensaje de error del payload si existe, si no, del error de JS
        state.error = action.payload || action.error?.message || "Fallo desconocido al cargar pokémons";
      });
  },
});

// Exportar las acciones y el reducer
export const { resetPokemons } = pokemonSlice.actions;
export default pokemonSlice.reducer;*/
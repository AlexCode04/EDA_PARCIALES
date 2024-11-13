// pokemonSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPokemon = createAsyncThunk(
  'pokemon/fetchPokemon',
  async (id, { getState }) => {
    const { pokemonCache } = getState().pokemon;

    // Si el Pokémon ya está en la caché, devuelve los datos almacenados
    if (pokemonCache[id]) {
      return pokemonCache[id];
    }

    // Si no está en la caché, realiza la solicitud a la API
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}`);
    const data = await response.json();
    return data;
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemonData: null,
    isLoading: false,
    hasError: null,
    counter: 1,
    pokemonCache: {}  // Objeto para almacenar los datos en caché
  },
  reducers: {
    incrementCounter: (state) => {
      state.counter += 1;
    },
    decrementCounter: (state) => {
      if (state.counter > 1) {
        state.counter -= 1;
      }
    },
    resetCounter: (state) => {
      state.counter = 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.isLoading = true;
        state.hasError = null;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pokemonData = action.payload;
        const id = action.payload.id;
        // Almacenar los datos en la caché
        state.pokemonCache[id] = action.payload;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = action.error.message;
      });
  }
});

export const { incrementCounter, decrementCounter, resetCounter } = pokemonSlice.actions;
export default pokemonSlice.reducer;

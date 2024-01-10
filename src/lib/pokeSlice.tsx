import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../data/data";
import { RootState } from "./store";

const initialState: {pokemon: Pokemon}= {
    pokemon: {
        abilities: [],
        base_experience: 0,
        height: 0,
        id: 0,
        moves: [],
        name: "",
        order: 0,
        sprites: {front_default: ""},
        stats: [],
        types: [],
        weight: 0,
        url: "",
    }
}

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        update: (state, action: PayloadAction<Pokemon> ) => {
            const pok: Pokemon = action.payload;
            state.pokemon = pok;
        },
    },
});

export const { update } = pokemonSlice.actions;
export const getStoredPokemon = (state: RootState) => state.pokemon.pokemon;
export default pokemonSlice.reducer;
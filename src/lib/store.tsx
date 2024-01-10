import { configureStore } from "@reduxjs/toolkit";
import pokeReducer from "./pokeSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            pokemon: pokeReducer
        },
    });
} 

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
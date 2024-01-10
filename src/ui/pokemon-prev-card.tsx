'use client'
import { Pokemon } from "@/data/data";
import { getHexaColorByType, getPokemonType } from "@/lib/lib";
import { getStoredPokemon, update } from "@/lib/pokeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/reduxHooks";

export default function PokemonPreviewCard({pokemon}:{pokemon: Pokemon}) {
    const type = getPokemonType(pokemon);
    const colorHexa = getHexaColorByType(type);
    const dispatch = useAppDispatch();

    function showCard() {
        dispatch(update(pokemon));
    }

    return <div className="poke-card-wrap flex-column" style={{backgroundColor: `${colorHexa}`}}>
        <h3 className="poke-card-name">{pokemon.name}</h3>
        <div className="poke-card-image" style={{backgroundImage: `url(${pokemon.sprites.front_default})`}}></div>
        <button onClick={showCard} className="poke-card-button">Show card</button>
    </div>
}
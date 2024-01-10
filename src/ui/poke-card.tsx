
import { Pokemon } from "@/data/data";
import { getHexaColorByType, getPokemonType, kebabToWritten } from "@/lib/lib";
import { getStoredPokemon } from "@/lib/pokeSlice"
import { getPokemon } from "@/lib/pokeapi";
import { useAppSelector } from "@/lib/reduxHooks"
import { useState } from "react";

export default async function PokeCard() {
    const data:Pokemon = await getPokemon("https://pokeapi.co/api/v2/pokemon/614");
    const type = getPokemonType(data);
    const colorHexa = getHexaColorByType(type);
    const showCard = true;

    return (showCard ? 
        <div className="mask-bg">
            <div className="poke-card card-static">
                <div className="poke-card-border">
                    <div className="poke-card-wrap flex-column" style={{backgroundColor: `${colorHexa}`}}>
                        <div className="flex-row-spaceb">
                            <h3 className="poke-card-name">{data.name}</h3>
                            <div className="poke-card-tdata">
                                <span className="poke-card-stat">HP</span>
                                <h4 className="poke-card-num">{data.stats[0].base_stat}</h4>
                                <div className="poke-card-type">
                                    <h5>{type}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="poke-card-image" style={{backgroundImage: `url(${data.sprites.front_default})`}}></div>
                        <div className="poke-card-image-footer flex-center">
                            <span>No. {data.id} HT: {data.height/10}m WT: {data.weight/10}kg</span>
                        </div>
                        <div className="poke-card-abwrap">
                            {data.abilities.map(ab => (
                                ab.is_hidden ?  (<></>) : (
                                <div key={`${data.id}slot${ab.slot}`} className="poke-card-ab">
                                    <p>{kebabToWritten(ab.ability.name)}</p>
                                </div>
                                )
                            ))}
                        </div>
                        <div className="grid-stats">
                            {data.stats.map(st => (
                                st.stat.name == "hp" ? (<></>) :
                                <div key={`${data.id}stat${st.stat.name}`} className="flex-center">
                                    <span className="poke-card-stat">{kebabToWritten(st.stat.name)}</span>
                                    <h4 className="poke-card-num">{st.base_stat}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    :
    <></>)
}
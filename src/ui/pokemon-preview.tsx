import { Pokemon } from "../data/data"
import { getPokemon } from "../lib/pokeapi"
import { Suspense } from "react";
import PokemonPreviewCard from "./pokemon-prev-card";

export default async function PokePreview({ pokemon }:{pokemon:{name: string, url: string}}) {
    const data:Pokemon = pokemon.url ? await getPokemon(pokemon.url) : null;

    return <div className="poke-card">
        <div className="poke-card-border">
            <Suspense fallback={ <PokePreviewSkeleton /> }>
                <PokemonPreviewCard pokemon={data} />
            </Suspense>
        </div>
    </div>
}

function PokePreviewSkeleton() {
    return <div className="poke-card-wrap flex-column" style={{backgroundColor: "#c4c4c4"}}>
        <div className="skeleton-animation"></div>
    </div>
}
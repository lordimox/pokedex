export async function getPokemons() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=21`);
    const data = await res.json();
    return data.results;
}

export async function getPokemon(url: string) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}
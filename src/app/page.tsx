import SearchInput from '../ui/search-input'
import PokePreview from '../ui/pokemon-preview'
import { getPokemons } from '../lib/pokeapi'
import PokeCard from '@/ui/poke-card';

export default async function Home() {
  let pokemons: [{name: string, url: string}] = await getPokemons();
  return <>
    <h1>Pokedex with React over NextJS</h1>
    <p style={{fontSize: "0.8rem"}}>Using PokeAPI and Unsplash images</p>
    <SearchInput />
    <div className='grid-3col mt-32 pb-32'>
      {pokemons?.map((pokemon) => (
        <PokePreview key={pokemon.name} pokemon={pokemon}/>
      ))}
    </div>
    <PokeCard />
  </>
}
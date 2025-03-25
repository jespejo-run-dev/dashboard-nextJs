import { SimplePokemon, PokemonResponse, PokemonGrid } from "@/pokemons";


export const metadata = {
 title: 'Favoritos',
 description: 'Pokemon collection',
};


export default async function PokemonPage() {

    return (
    <div className="flex flex-col">
        <span className="text-5xl font-bold my-2">Pokemon Favoritos <small className="text-blue-500">Global State</small> </span>
        <PokemonGrid pokemons={[]} />
    </div>
  );
}
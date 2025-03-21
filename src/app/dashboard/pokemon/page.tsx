import { SimplePokemon, PokemonResponse, PokemonGrid } from "@/app/pokemons";
import Image from "next/image";

const getPokemon = async (limit = 20, offset = 0):Promise<SimplePokemon[]> => {
    const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then((res) => res.json())

    const pokemons = data.results.map((pokemon) => {
        const id = pokemon.url.split('/').at(-2)!;
        return {
            id,
            name: pokemon.name
        }
    })

    throw new Error('Error al obtener los pokemons');
    
    return pokemons;
}

export default async function PokemonPage() {

    const pokemons = await getPokemon(151);

    return (
    <div className="flex flex-col">
        <span className="text-5xl font-bold my-2">Listado de Pokemon small <small>estatico</small> </span>
        <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
import { SimplePokemon, PokemonResponse } from "@/app/pokemons";
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
    return pokemons;
}

export default async function PokemonPage() {

    const pokemons = await getPokemon(151);

    return (
    <div className="flex flex-col">
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {
                pokemons.map((pokemon) => (
                    <Image 
                        key={pokemon.id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                        alt="pokemon"
                        width={100}
                        height={100}
                    />
                ))
            }
        </div>
    </div>
  );
}
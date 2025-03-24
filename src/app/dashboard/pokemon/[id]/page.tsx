import { Pokemon } from "@/pokemons/interfaces/pokemon";
import Image from "next/image";


interface Props {
    params: {
        id: string;
    }
}


export const metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
};

const getPokemon = async (id: string): Promise<Pokemon> => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        cache: 'force-cache' // TODO cambiar esto en un futuro
    }).then(resp => resp.json());
    return pokemon;
}

export default async function PokemonPage({params}: Props)     {

    const pokemon = await getPokemon(params.id);

  return (
    <div>
        <h1>Pokemon {params.id}</h1>
        <div>
            {JSON.stringify(pokemon)}
        </div>
    </div>
  );
}
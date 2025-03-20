
const getPokemon = async (limit = 20, offset = 0) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then((res) => res.json())
    return data;
}

export default async function PokemonPage() {

    const pokemons = await getPokemon();

    return (
    <div>
      <pre>{JSON.stringify(pokemons, null, 2)}</pre>
    </div>
  );
}
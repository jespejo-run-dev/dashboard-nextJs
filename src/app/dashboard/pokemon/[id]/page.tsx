import Image from "next/image";


interface Props {
    params: {
        id: string;
    }
}

export default function PokemonPage({params}: Props)     {

  return (
    <div>
        <h1>Pokemon Page</h1>
        <h2>{params.id}</h2>
    </div>
  );
}
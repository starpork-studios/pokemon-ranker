import React from "react";
import Image from "next/image";
import { Pokemon, PokemonCardData } from "../type";

export function PokemonCard({
  pokemonData,
  opponent,
  postResult,
  onWin,
}: {
  pokemonData: PokemonCardData;
  opponent: PokemonCardData;
  postResult: (
    winner: PokemonCardData,
    loser: PokemonCardData
  ) => Promise<Pokemon[]>;
  onWin: () => void;
}) {
  return (
    <div
      className="flex flex-col w-1/2 items-center"
      onClick={() => {
        postResult(pokemonData, opponent);
        onWin();
      }}
    >
      <h1>{pokemonData.name}</h1>
      <div className="w-[150px] h-[150px]  bg-red-500 flex items-center justify-center rounded-[150px]">
        <Image
          src={pokemonData.imageUrl}
          alt={`${pokemonData.name} front image`}
          width={110}
          height={110}
        />
      </div>

      <h2>{pokemonData.dexId}</h2>
    </div>
  );
}

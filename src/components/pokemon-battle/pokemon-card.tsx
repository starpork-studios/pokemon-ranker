import React from "react";
import { PokemonCardData } from "../pokemon-battle/usePanelBattle";
import Image from "next/image";
import { Pokemon } from "../list/types";

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
      onClick={() => {
        postResult(pokemonData, opponent);
        onWin();
      }}
    >
      <h1>{pokemonData.name}</h1>
      <Image
        src={pokemonData.imageUrl}
        alt={`${pokemonData.name} front image`}
        width={80}
        height={80}
      />
      <h2>{pokemonData.dexId}</h2>
    </div>
  );
}

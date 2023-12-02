"use client";
import React from "react";
import { usePanelBattle } from "./usePanelBattle";
import { PokemonCard } from "./pokemon-card";
import { Pokemon, PokemonCardData } from "../type";

const POKE_DEX_MAX_ID = 151;
const INITIAL_LOAD_MAX = 10;

export const PanelBattle = ({
  postResult,
}: {
  postResult: (
    winner: PokemonCardData,
    loser: PokemonCardData
  ) => Promise<Pokemon[]>;
}) => {
  const {
    data: { isPending, error, results, currentPokemon },
    operations: { onWin },
  } = usePanelBattle();
  if (isPending) return "Loading...";

  if (error || currentPokemon === null) return "An error has occurred";

  

  return (
    <div className="flex flex-row w-full h-full items-center justify-center" >
      <PokemonCard
        pokemonData={currentPokemon.a}
        opponent={currentPokemon.b}
        postResult={postResult}
        onWin={onWin}
      />
      <PokemonCard
        pokemonData={currentPokemon.b}
        opponent={currentPokemon.a}
        postResult={postResult}
        onWin={onWin}
      />
    </div>
  );
};

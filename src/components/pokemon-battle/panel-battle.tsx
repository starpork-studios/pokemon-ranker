"use client";
import React, { useEffect, useState } from "react";

import { useQueries } from "@tanstack/react-query";
import { Pokemon } from "../list/types";
import { PokemonCardData, usePanelBattle } from "./usePanelBattle";
import { PokemonCard } from "./pokemon-card";

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

  if (error || currentPokemon === null) return "An error has occurred ";

  

  return (
    <div>
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

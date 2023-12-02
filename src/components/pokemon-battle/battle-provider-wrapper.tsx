"use client";
import React, { useEffect, useState } from "react";

import {
  QueryClient,
  QueryClientProvider,
  useQueries,
} from "@tanstack/react-query";
import { PanelBattle } from "./panel-battle";
import { Pokemon, PokemonCardData } from "../type";
const queryClient = new QueryClient();

export const PanelBattleWrapper = ({
  postResult,
}: {
  postResult: (
    winner: PokemonCardData,
    loser: PokemonCardData
  ) => Promise<Pokemon[]>;
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <PanelBattle postResult={postResult} />
    </QueryClientProvider>
  );
};

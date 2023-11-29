import { useCallback, useEffect, useMemo, useState } from "react";
import { Pokemon } from "../list/types";
import { useQueries, useQuery } from "@tanstack/react-query";

const POKE_DEX_MAX_ID = 151;
const INITIAL_LOAD_MAX = 10;

type PokemonType =
  | "normal"
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy"
  | "unknown"
  | "shadow";

export type PokemonCardData = {
  name: string;
  dexId: number;
  imageUrl: string;
  types: PokemonType[];
};

const randomPokeDexId = () => {
  return Math.floor(Math.random() * POKE_DEX_MAX_ID) + 1;
};

const getUnseenPokedexId = (pokedexIds: number[]) => {
  let randomId = randomPokeDexId();
  while (pokedexIds.some((id) => randomId === id)) randomId = randomPokeDexId();
  return randomId;
};

const getInitialDataIds = () => {
  let initialPokedata = [];
  for (let i = 0; i < INITIAL_LOAD_MAX; i++) {
    initialPokedata.push(randomPokeDexId());
  }
  return initialPokedata;
};

const getPokemonCardData = (data: any) => {
  const types = data.types.map((type: any) => type.type.name);
  return {
    name: data.name,
    dexId: data.id,
    imageUrl: data.sprites.front_default,
    types,
  } as PokemonCardData;
};

const getBattlers = (pokemonQueue: PokemonCardData[]) => {
  const a = Math.floor(Math.random() * pokemonQueue.length);
  let b = Math.floor(Math.random() * pokemonQueue.length);
  while (a === b) b = Math.floor(Math.random() * pokemonQueue.length);
  return { a: pokemonQueue[a], b: pokemonQueue[b] };
};

export const usePanelBattle = () => {
  const createQueryObj = (id: number) => {
    return {
      queryKey: ["pokeApi", id],
      queryFn: () =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
          res.json()
        ),
    };
  };
  const initIds = getInitialDataIds();
  const [initialIds] = useState<number[]>(initIds);
  const [nextId, setNextId] = useState<number>(getUnseenPokedexId(initIds));
  const [previousMatchups, setPreviousMatchups] = useState<number[][]>();

  const [pokemonQueue, setPokemonQueue] = useState<PokemonCardData[]>([]);
  const [currentPokemon, setCurrentPokemon] = useState<{
    a: PokemonCardData;
    b: PokemonCardData;
  } | null>(null);

  console.log(pokemonQueue);

  const results = useQueries({
    queries: initialIds.map((id) => createQueryObj(id)),
  });
  const allFinished = results.every((res) => res.isSuccess);

  useEffect(() => {
    
    if (allFinished) {
      const queue = results.map((res) => getPokemonCardData(res.data));
      setPokemonQueue(queue);
      setCurrentPokemon(getBattlers(queue));
    }
  }, [allFinished]);

  const { refetch: fetchNext } = useQuery({
    queryKey: ["pokeApi", nextId],
    queryFn: () =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${nextId}`).then((res) =>
        res.json()
      ),
    enabled: false,
  });

  const fetchNextPokemon = async () => {
    const res = await fetchNext();
    if (res.isSuccess) {
      const nextPokemon = getPokemonCardData(res.data);
      setPokemonQueue((queue) => {
        return [...queue, nextPokemon];
      });
    }
  };
  useEffect(() => {
    fetchNextPokemon()
  },[nextId])

  const isPending = results.some((res) => res.isPending);
  const error = results.some((res) => res.error);

  const onWin = () => {
    setNextId(getUnseenPokedexId(pokemonQueue.map((pokemon) => pokemon.dexId)));
    setCurrentPokemon(getBattlers(pokemonQueue));
  };

  console.log(currentPokemon);

  return {
    data: {
      results: pokemonQueue,
      currentPokemon,
      isPending,
      error,
    },
    operations: { onWin },
  };
};

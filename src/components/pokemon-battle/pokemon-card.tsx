import React from "react";
import Image from "next/image";

import { Pokemon, PokemonCardData, PokemonType, typeColors } from "../type";
import { bgColor, bgColorDark, outlineColorDark } from "./type-color-helpers";
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
  
  const pokemonType = pokemonData.types[0];

  const nameCapitalised =
    pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);

  return (
    <div
      className={`transition-all group flex flex-col w-1/2 items-center justify-between h-full cursor-pointer bg-repeat flex-grow rounded-3xl ${bgColorDark(
        pokemonType
      )} hover:bg-opacity-60`}
      style={{
        backgroundImage: `url(type-icons/${pokemonType}.svg)`,
        backgroundSize: "60px",
        backgroundPosition: "center",
      }}
      onClick={() => {
        postResult(pokemonData, opponent);
        onWin();
      }}
    >
      <div
        className={`transition-colors py-3 px-8 rounded-[60px] mt-8 z-20 ${bgColorDark(
          pokemonType
        )} group-hover:bg-brand-primary`}
      >
        <h1 className="transition-all text-[48px] font-pokemonSolid text-brand-primary tracking-wider text-shadow-lg shadow-brand-secondary group-hover:font-pokemonHollow group-hover:text-shadow group-hover:text-brand-secondary">
          {nameCapitalised}
        </h1>
      </div>

      <div className="transition-all z-20 relative group-hover:scale-125"> 
        <div
          className={`transition-all w-[150px] h-[150px] flex items-center justify-center rounded-[150px] z-20 outline outline-[40px] ${outlineColorDark(
            pokemonType
          )} ${bgColor(
            pokemonType
          )}  group-hover:outline-brand-primary  group-hover:outline-[20px] group-hover:bg-opacity-80`}
        >
          <Image
            src={pokemonData.imageUrl}
            alt={`${pokemonData.name} front image`}
            width={110}
            height={110}
          />
          
        </div>
        <div
            className={`absolute w-[150px] h-[150px] rounded-[150px] z-[-1] bg-black top-0`}
          />
      </div>
      <div
        className={`transition-colors ${bgColorDark(
          pokemonType
        )} rounded-[60px] mb-8 w-[150px] h-16 justify-center items-center flex z-20 group-hover:bg-brand-primary`}
      >
        <h2 className="transition-all tracking-wider text-brand-primary font-pokemonSolid text-lg text-shadow-sm shadow-brand-secondary group-hover:font-pokemonHollow group-hover:text-shadow group-hover:text-brand-secondary">
          {pokemonData.dexId}
        </h2>
      </div>
      <div
        className={`${bgColorDark(
          pokemonType
        )} transition-colors absolute w-16 h-[calc(100%-5.25rem)] z-0 mt-8 mb-8 group-hover:bg-brand-primary `}
      />
    </div>
  );
}

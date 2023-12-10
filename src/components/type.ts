export type PokemonType =
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

export const typeColors = {
  normal: "#A0A29F",
  normalDark: "#414140",
  fighting: "#D3425F",
  fightingDark: "#561b26",
  flying: "#A1BBEC",
  flyingDark: "#414b60",
  poison: "#B763CF",
  poisonDark: "#4a2853",
  ground: "#DA7C4D",
  groundDark: "#58321f",
  rock: "#C9BB8A",
  rockDark: "#514c38",
  bug: "#92BC2C",
  bugDark: "#3b4b14",
  ghost: "#5F6DBC",
  ghostDark: "#262c4c",
  steel: "#5695A3",
  steelDark: "#233d42",
  fire: "#FBA54C",
  fireDark: "#654320",
  water: "#539DDF",
  waterDark: "#22405a",
  grass: "#5FBD58",
  grassDark: "#274c23",
  electric: "#F2D94E",
  electricDark: "#625820",
  psychic: "#FA8581",
  psychicDark: "#653635",
  ice: "#75D0C1",
  iceDark: "#2f544e",
  dragon: "#0C69C8",
  dragonDark: "#092b51",
  dark: "#595761",
  darkDark: "#242327",
  fairy: "#EE90E6",
  fairyDark: "#603a5d",
  unknown: "#000000",
  unknownDark: "#000000",
  shadow: "#000000",
  shadowDark: "#000000",
};

export interface Pokemon {
    elo: number,
    dex_id: number,
    name: string,
    id: number,
    loss: number,
    wins: number
  
  }

export type PokemonCardData = {
    name: string;
    dexId: number;
    imageUrl: string;
    types: PokemonType[];
  };
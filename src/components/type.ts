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
  fighting: "#D3425F",
  flying: "#A1BBEC",
  poison: "#B763CF",
  ground: "#DA7C4D",
  rock: "#C9BB8A",
  bug: "#92BC2C",
  ghost: "#5F6DBC",
  steel: "#5695A3",
  fire: "#FBA54C",
  water: "#539DDF",
  grass: "#5FBD58",
  electric: "#F2D94E",
  psychic: "#FA8581",
  ice: "#75D0C1",
  dragon: "#0C69C8",
  dark: "#595761",
  fairy: "#EE90E6",
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
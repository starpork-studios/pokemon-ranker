import { PokemonType } from "../type";

export const bgColor = (type: PokemonType) => {
  switch (type) {
    case "bug":
      return "bg-type-bug";
    case "dark":
      return "bg-type-dark";
    case "dragon":
      return "bg-type-dragon";
    case "grass":
      return "bg-type-grass";
    case "electric":
      return "bg-type-electric";
    case "fairy":
      return "bg-type-fairy";
    case "fighting":
      return "bg-type-fighting";
    case "fire":
      return "bg-type-fire";
    case "flying":
      return "bg-type-flying";
    case "ghost":
      return "bg-type-ghost";
    case "ground":
      return "bg-type-ground";
    case "ice":
      return "bg-type-ice";
    case "normal":
      return "bg-type-normal";
    case "poison":
      return "bg-type-poison";
    case "psychic":
      return "bg-type-psychic";
    case "rock":
      return "bg-type-rock";
    case "shadow":
      return "bg-type-shadow";
    case "steel":
      return "bg-type-steel";
    case "unknown":
      return "bg-type-unknown";
    case "water":
      return "bg-type-water";
  }
};

export const bgColorDark = (type: PokemonType) => {
    switch (type) {
      case "bug":
        return "bg-type-bugDark";
      case "dark":
        return "bg-type-darkDark";
      case "dragon":
        return "bg-type-dragonDark";
      case "grass":
        return "bg-type-grassDark";
      case "electric":
        return "bg-type-electricDark";
      case "fairy":
        return "bg-type-fairyDark";
      case "fighting":
        return "bg-type-fightingDark";
      case "fire":
        return "bg-type-fireDark";
      case "flying":
        return "bg-type-flyingDark";
      case "ghost":
        return "bg-type-ghostDark";
      case "ground":
        return "bg-type-groundDark";
      case "ice":
        return "bg-type-iceDark";
      case "normal":
        return "bg-type-normalDark";
      case "poison":
        return "bg-type-poisonDark";
      case "psychic":
        return "bg-type-psychicDark";
      case "rock":
        return "bg-type-rockDark";
      case "shadow":
        return "bg-type-shadowDark";
      case "steel":
        return "bg-type-steelDark";
      case "unknown":
        return "bg-type-unknownDark";
      case "water":
        return "bg-type-waterDark";
    }
  };


  export const outlineColorDark = (type: PokemonType) => {
    switch (type) {
      case "bug":
        return "outline-type-bugDark";
      case "dark":
        return "outline-type-darkDark";
      case "dragon":
        return "outline-type-dragonDark";
      case "grass":
        return "outline-type-grassDark";
      case "electric":
        return "outline-type-electricDark";
      case "fairy":
        return "outline-type-fairyDark";
      case "fighting":
        return "outline-type-fightingDark";
      case "fire":
        return "outline-type-fireDark";
      case "flying":
        return "outline-type-flyingDark";
      case "ghost":
        return "outline-type-ghostDark";
      case "ground":
        return "outline-type-groundDark";
      case "ice":
        return "outline-type-iceDark";
      case "normal":
        return "outline-type-normalDark";
      case "poison":
        return "outline-type-poisonDark";
      case "psychic":
        return "outline-type-psychicDark";
      case "rock":
        return "outline-type-rockDark";
      case "shadow":
        return "outline-type-shadowDark";
      case "steel":
        return "outline-type-steelDark";
      case "unknown":
        return "outline-type-unknownDark";
      case "water":
        return "outline-type-waterDark";
    }
  };
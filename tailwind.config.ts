import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  variants: {
    width: ["responsive", "hover", "focus"],
  },
  theme: {
    extend: {
      fontFamily: {
        pokemonSolid: ["pokemon-solid", "sans-serif"],
        pokemonHollow: ["pokemon-hollow", "sans"],
      },
      textShadow: {
        sm: "-1px -1px 0 var(--tw-shadow-color), 1px -1px 0 var(--tw-shadow-color), -1px 1px 0 var(--tw-shadow-color), 1px 1px 0 var(--tw-shadow-color)",
        lg: "-3px -3px 0 var(--tw-shadow-color), 3px -3px 0 var(--tw-shadow-color), -3px 3px 0 var(--tw-shadow-color), 3px 3px 0 var(--tw-shadow-color)",
        DEFAULT: "unset",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: {
          primary: "#ffcc02",
          secondary: "#2e69b2",
        },
        type: {
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
        },
      },
    },
  },
  plugins: [
    plugin(function ({
      matchUtilities,
      theme,
    }: {
      matchUtilities: any;
      theme: any;
    }) {
      matchUtilities(
        {
          "text-shadow": (value: any) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
export default config;

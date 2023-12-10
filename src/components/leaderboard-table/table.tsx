"use client"
import React from "react";
import { Pokemon } from "../type";

const PokemonTable = ({ pokemonList }: { pokemonList: Pokemon[] }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Pokedex Id</th>
          <th>Name</th>
          <th>Elo</th>
          <th>Wins</th>
          <th>Losses</th>
        </tr>
      </thead>
      <tbody>
        {pokemonList.map((pokemon: Pokemon, index: number) => {
          return (
            <tr key={pokemon.id}>
              <td>{pokemon.dex_id}</td>
              <td>{pokemon.name}</td>
              <td>{Math.round(pokemon.elo)}</td>
              <td>{pokemon.wins}</td>
              <td>{pokemon.loss}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PokemonTable;

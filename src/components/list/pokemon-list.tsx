"use client";
import { useState } from "react";
import { Pokemon } from "../type";

export function PokemonList({
  rows,
  onSubmit,
}: {
  rows: Pokemon[];
  onSubmit: (dexId: number, name: string, elo: number) => Promise<Pokemon[]>;
}) {
  const [dexId, setDexId] = useState<number>(0);
  const [name, setName] = useState("");
  const [elo, setElo] = useState<number>(0);
  const [updatedRows, setUpdatedRows] = useState(rows);

  return (
    <div>
      {updatedRows.map((row, index) => (
        <div className="mb-5" key={index}>
          <div className="font-semibold text-2xl">{row.name}</div>
          <div className="ml-5 mt-2 italic">Dex Id: {row.dex_id}</div>
          <div className="ml-5 mt-2 italic">ELO: {row.elo}</div>
        </div>
      ))}
      <div className="flex items-center gap-4">
        <label htmlFor="title">Name:</label>
        <input
          className="w-full flex-grow text-black"
          id="title"
          name="title"
          onChange={(evt) => {
            setName(evt.target.value);
          }}
          type="text"
          value={name}
        />
        <label htmlFor="dexId">Dex Id:</label>
        <input
          className="w-full flex-grow text-black"
          id="dexId"
          name="dexId"
          onChange={(evt) => {
            setDexId(parseInt(evt.target.value));
          }}
          type="number"
          value={dexId}
        />
        <label htmlFor="elo">ELO:</label>
        <input
          className="w-full flex-grow text-black"
          id="elo"
          name="elo"
          onChange={(evt) => {
            setElo(parseInt(evt.target.value));
          }}
          type="number"
          value={elo}
        />
        <button
          className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={async () => {
            setUpdatedRows(await onSubmit(dexId,name, elo));
          }}
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

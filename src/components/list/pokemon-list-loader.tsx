
import { createClient } from "@libsql/client";
import { PokemonList } from "./pokemon-list";
import { Pokemon } from "../type";

const client = createClient({
  url: process.env.TURSO_URL!,
  authToken: process.env.TURSO_TOKEN!,
});

export async function PokemonListLoader() {
  const { rows } = await client.execute("SELECT * FROM pokemon");
  
  async function postPokemon(dexId: number, name: string, elo: number) {
    "use server";
    await client.execute({
      sql: "INSERT INTO pokemon (dex_id, name, elo) VALUES ($dex_id, $name, $elo)",
      args: {
        dex_id: dexId,
        name,
        elo
      },
    });
    const { rows: updatedRows } = await client.execute("SELECT * FROM pokemon");
    return updatedRows as unknown as Pokemon[];
  }

  return (
    <PokemonList onSubmit={postPokemon} rows={rows as unknown as Pokemon[]} />
  );
}

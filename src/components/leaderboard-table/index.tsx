import { createClient } from "@libsql/client";
import { Pokemon } from "../type";
import PokemonTable from "./table-two";

const client = createClient({
  url: process.env.TURSO_URL!,
  authToken: process.env.TURSO_TOKEN!,
});

export async function LeaderboardLoader() {
  const { rows } = await client.execute(
    "SELECT * FROM pokemon ORDER BY elo DESC, wins DESC"
  );

  if (!rows) {
    return <div>Loading...</div>;
  }
  const data = rows as unknown as Pokemon[];
  return (
    <div className=" mt-16">
      <h1>Leaderboard</h1>
      <PokemonTable pokemonData={data}/>
    </div>
  );
}

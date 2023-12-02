import { createClient } from "@libsql/client";
import { PanelBattleWrapper } from "./battle-provider-wrapper";
import { calcNewElos } from "@/eloFormula";
import { Pokemon, PokemonCardData } from "../type";

const client = createClient({
  url: process.env.TURSO_URL!,
  authToken: process.env.TURSO_TOKEN!,
});

export async function BattleLoader() {
  const { rows } = await client.execute("SELECT * FROM pokemon");
  async function postResult(winner: PokemonCardData, loser: PokemonCardData) {
    "use server";

    const { rows } = await client.execute("SELECT * FROM pokemon");

    const existingData = rows as unknown as Pokemon[];

    const winnerExists = existingData.find(
      (pokemon) => winner.dexId === pokemon.dex_id
    );

    const loserExists = existingData.find(
      (pokemon) => loser.dexId === pokemon.dex_id
    );

    const { playerA: winnerNewElo, playerB: loserNewElo } = calcNewElos(
      winnerExists?.elo || 1200,
      loserExists?.elo || 1200
    );

    if (winnerExists) {
      client.execute({
        sql: "UPDATE pokemon SET wins = wins + 1, elo = $new_elo WHERE dex_id = $dex_id",
        args: {
          dex_id: winner.dexId,
          new_elo: winnerNewElo,
        },
      });
    } else {
      console.log("winner: ", winner);
      client.execute({
        sql: "INSERT INTO pokemon (dex_id, name, elo, wins, loss) VALUES ($dex_id, $name, $elo, $wins, $loss)",
        args: {
          dex_id: winner.dexId,
          name: winner.name,
          elo: winnerNewElo,
          wins: 1,
          loss: 0,
        },
      });
    }

    if (loserExists) {
      client.execute({
        sql: "UPDATE pokemon SET loss = loss + 1, elo = $new_elo WHERE dex_id = $dex_id",
        args: {
          dex_id: loser.dexId,
          new_elo: loserNewElo,
        },
      });
    } else {
      client.execute({
        sql: "INSERT INTO pokemon (dex_id, name, elo, wins, loss) VALUES ($dex_id, $name, $elo, $wins, $loss)",
        args: {
          dex_id: loser.dexId,
          name: loser.name,
          elo: loserNewElo,
          wins: 0,
          loss: 1,
        },
      });
    }

    const { rows: updatedRows } = await client.execute("SELECT * FROM pokemon");
    return updatedRows as unknown as Pokemon[];
  }
  return <PanelBattleWrapper postResult={postResult} />;
}

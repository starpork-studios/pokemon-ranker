import { calcNewElos } from "@/eloFormula";
import { Pokemon, PokemonCardData } from "../type";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export function Nav() {
  return (
    <div className="w-full bg-brand-primary border-b-2 border-brand-secondary h-16 fixed top-0">
      <div className="max-w-6xl mx-auto">
        <Link href={"/"}>Home </Link>
        <Link href={"/leaderboard"}>Leaderboard</Link>
        <UserButton />

      </div>
    </div>
  );
}

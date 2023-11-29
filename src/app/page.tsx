import { BattleLoader } from "@/components/pokemon-battle/BattleLoader";
import { UserButton, useUser, } from "@clerk/nextjs";


export default async function Home() {
  //const { isSignedIn, user, isLoaded } = useUser();

  return (
    <main className="mx-auto max-w-6xl mt-5">
      <UserButton />
      <BattleLoader />
    </main>
  );
}

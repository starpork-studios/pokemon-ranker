const K = 20;

/* Formula: new elo = current elo + K(S-E) 
    K is a constant that determines how much elo can change
    S is 1 for win or 0 for a loss
    E is the expected score which has its own formula:
    
    E_A = 1/(1+10^((R_B - R_A) /400))
    E_A is expected score of player A
    R_B is player B current rating
    R_A is player A current rating

*/
export const calcNewElo = (
  myElo: number,
  opponentElo: number,
  win: boolean
) => {
  const S = win ? 1 : 0;
  const E = calcExpectedOutcome(myElo, opponentElo);

  return myElo + K * (S - E);
};

const calcExpectedOutcome = (myElo: number, opponentElo: number) => {
  return 1 / (1 + Math.pow(10, (opponentElo - myElo) / 400));
};

export const calcNewElos = (
  winnerElo: number,
  loserElo: number,
) => {
  return {
    playerA: calcNewElo(winnerElo, loserElo, true),
    playerB: calcNewElo(loserElo, winnerElo, false),
  };
};

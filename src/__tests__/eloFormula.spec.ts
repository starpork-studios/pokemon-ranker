import "@testing-library/jest-dom";

import { calcNewElo, calcNewElos } from "../eloFormula";

describe("eloFormula", () => {
  it("should calc new elo correctly for default elo win", () => {
    const eloA = 1200;
    const eloB = 1200;
    const newElo = calcNewElo(eloA, eloB, true);
    expect(newElo).toBe(1210);
  });
  it("should calc new elo correctly for default elo loss", () => {
    const eloA = 1200;
    const eloB = 1200;
    const newElo = calcNewElo(eloA, eloB, false);
    expect(newElo).toBe(1190);
  });

  it("should calc new elo correctly for unexpected win", () => {
    const eloA = 1200;
    const eloB = 1500;
    const {playerA, playerB} = calcNewElos(eloA, eloB);
    expect(Math.round(playerA)).toBe(1217);
    expect(Math.round(playerB)).toBe(1483);
  });

  it("should calc new elo correctly for expected win", () => {
    const eloA = 1500;
    const eloB = 1200;
    const {playerA, playerB} = calcNewElos(eloA, eloB);
    expect(Math.round(playerA)).toBe(1503);
    expect(Math.round(playerB)).toBe(1197);
  });
});

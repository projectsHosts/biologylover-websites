import { LEVELS } from "./level";

export const getLevelFromXp = (xp: number): string => {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].minXp) {
      return LEVELS[i].name;
    }
  }
  return "Learner";
};
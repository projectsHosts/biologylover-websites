export interface Quiz {
  id: number;
  question: string;
  options: string[];
}

export interface LeaderboardEntry {
  userId: number;
  displayName: string;
  score: number;
  timeTaken: number;
  rank: number;
}

export interface LeaderboardResponse {
  totalQuestions: number;
  top50: LeaderboardEntry[];
  self?: LeaderboardEntry;
  totalXp: number;
  streak?: number;
}

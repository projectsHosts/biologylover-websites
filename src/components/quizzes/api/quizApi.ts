import axios from "axios";
import type { LeaderboardResponse } from "../types/quiz";

const API_BASE =
  import.meta.env.VITE_API_BASE || "https://api.biologylover.com";

export const getDailyQuizzes = async () => {
  const res = await fetch(`${API_BASE}/api/quiz/daily/start`, {
     method: "POST", 
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token") || ""}`
    }
  });

  if (!res.ok) throw new Error("Failed to load quizzes");
  return res.json();
};

export const submitQuiz = async (
  quizId: number,
  selectedOption: number,
  quizStartTime: number | null
) => {
  const res = await fetch(`${API_BASE}/api/quiz/${quizId}/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token") || ""}`
    },
    body: JSON.stringify({
      selectedOption,
      quizStartTime 
    })
  });

  if (!res.ok) throw new Error("Submit failed");
  return res.json();
};


export const getDailyQuizStatus = async () => {
  const res = await fetch(`${API_BASE}/api/quiz/daily/status`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch quiz status");
  return res.json();
};

export const getLeaderboard = async (): Promise<LeaderboardResponse> => {
  const res = await axios.get("/api/quiz/daily/leaderboard", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return res.data;
};

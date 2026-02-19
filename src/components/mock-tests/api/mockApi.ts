// src/features/mocktest/api/mockApi.ts
import type { MockTest } from "../types/mock";

const API_BASE =
  import.meta.env.VITE_API_BASE || "http://localhost:8080";


/* ================= MOCK TEST ================= */

export const fetchMockTests = async (): Promise<MockTest[]> => {

  const res = await fetch(`${API_BASE}/api/mock-tests`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token") || ""}`
    }
  });

  if (!res.ok) throw new Error("Failed to fetch mock tests");
  return res.json();
};


export const fetchMockTestsByStream = async (
  stream: string
): Promise<MockTest[]> => {

  const res = await fetch(
    `${API_BASE}/api/mock-tests/stream/${stream}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`
      }
    }
  );

  if (!res.ok) throw new Error("Failed stream fetch");
  return res.json();
};


export const fetchMockTestsByExam = async (
  examType: string
): Promise<MockTest[]> => {

  const res = await fetch(
    `${API_BASE}/api/mock-tests/exam/${examType}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`
      }
    }
  );

  if (!res.ok) throw new Error("Failed exam fetch");
  return res.json();
};


export const fetchMockTestById = async (
  id: number
): Promise<MockTest> => {

  const res = await fetch(
    `${API_BASE}/api/mock-tests/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`
      }
    }
  );

  if (!res.ok) throw new Error("Failed test fetch");
  return res.json();
};


/* ================= ATTEMPT FLOW ================= */

export const startAttempt = async (testId: number) => {

  const res = await fetch(
    `${API_BASE}/api/mock-attempt/start/${testId}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`
      }
    }
  );

  if (!res.ok) throw new Error("Start attempt failed");
  return res.json();
};


export const fetchAttemptQuestion = async (
  attemptId: number,
  index: number
) => {

  const res = await fetch(
    `${API_BASE}/api/mock-attempt/${attemptId}/question/${index}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`
      }
    }
  );

  if (!res.ok) throw new Error("Fetch question failed");
  return res.json();
};


export const saveAttemptAnswer = async (
  attemptId: number,
  payload: any
) => {

  const res = await fetch(
    `${API_BASE}/api/mock-attempt/${attemptId}/answer`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`
      },
      body: JSON.stringify(payload)
    }
  );

  if (!res.ok) throw new Error("Save answer failed");
};


export const submitAttempt = async (attemptId: number) => {

  const res = await fetch(
    `${API_BASE}/api/mock-attempt/${attemptId}/submit`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`
      }
    }
  );

  if (!res.ok) throw new Error("Submit failed");
  return res.json();
};

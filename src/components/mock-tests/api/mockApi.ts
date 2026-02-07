// src/features/mocktest/api/mockApi.ts
import axios from "axios";
import type { MockTest } from "../types/mock";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "http://localhost:8080",
  withCredentials: true,
});

export async function fetchMockTests(): Promise<MockTest[]> {
  const res = await API.get("/api/mock-tests");
  return res.data;
}

export async function fetchMockTestsByStream(stream: string): Promise<MockTest[]> {
  const res = await API.get(`/api/mock-tests/stream/${stream}`);
  return res.data;
}

export async function fetchMockTestsByExam(examType: string): Promise<MockTest[]> {
  const res = await API.get(`/api/mock-tests/exam/${examType}`);
  return res.data;
}





export async function fetchMockTestById(id: number): Promise<MockTest> {
  const res = await API.get(`/api/mock-tests/${id}`);
  return res.data;
}

// ===== ATTEMPT FLOW =====

export async function startAttempt(testId:number){
  const res = await API.post(`/api/mock-attempt/start/${testId}`);
  return res.data;
}

export async function fetchAttemptQuestion(
  attemptId:number,
  index:number
){
  const res = await API.get(
    `/api/mock-attempt/${attemptId}/question/${index}`
  );
  return res.data;
}

export async function saveAttemptAnswer(
  attemptId:number,
  payload:any
){
  await API.post(
    `/api/mock-attempt/${attemptId}/answer`,
    payload
  );
}

export async function submitAttempt(attemptId:number){
  const res = await API.post(
    `/api/mock-attempt/${attemptId}/submit`
  );
  return res.data;
}

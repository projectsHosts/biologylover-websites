// src/features/mocktest/api/mockApi.ts
import axios from "axios";
import type { MockTest, Question } from "../types/mock";

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


export async function submitMock(
  testId: number,
  answers: any[]
) {
  const res = await API.post(
    `/api/mock-questions/submit/${testId}`,
    answers
  );

  return res.data;
}




export async function fetchMockTestById(id: number): Promise<MockTest> {
  const res = await API.get(`/api/mock-tests/${id}`);
  return res.data;
}

export async function fetchQuestions(testId: number): Promise<Question[]> {
  const res = await API.get(`/api/mock-questions/test/${testId}`);
  return res.data;
}
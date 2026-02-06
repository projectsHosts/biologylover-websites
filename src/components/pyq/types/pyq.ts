import type { ReactNode } from "react";

export interface PyqCard {
  examId: number;
  examName: string;
  subject: string;
  year: number;
  totalQuestions: number;
  totalMarks: number;
}

export interface Instruction {
  examName: string;
  totalQuestions: number;
  totalMarks: number;
  durationMinutes: number;
}

export interface Question {
  questionNo: ReactNode;
  id: number;
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
}

export interface AnswerPayload {
  questionId: number;
  selectedOption: string | null;
}

export interface PyqResult {
  totalQuestions: number;
  attempted: number;
  correct: number;
  wrong: number;
  skipped: number;
  marks: number;
  accuracy: number;
  speed: number;
}

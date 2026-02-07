export interface MockTest {
  attemptCount: undefined;
  id: number;
  title: string;
  stream: string;
  examType: string;
  subject: string;
  chapter: string;
  difficulty: string;
  duration: number;
  totalQuestions: number;
  fullMock: boolean;
}

export interface Question {
  marks: number;
  id: number;
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctOption: string;
}

export interface Category {
  id: string;
  name: string;
  icon?: string;
  subcategories?: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  examType: string;
  stream?: string;
}
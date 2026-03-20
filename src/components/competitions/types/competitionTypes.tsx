export interface Competition {
  registrationEnd: string | number | Date
  registrationStart: any
  id: number
  title: string
  description: string
  bannerUrl: string
  startTime: string
  endTime: string
  durationMinutes: number
  isFree: boolean
  price: number
}

export type AttemptStatusResponse = {
  attempted: boolean
  status?: string
  score?: number
}

export interface SafeQuestion {
  totalQuestions(totalQuestions: any): unknown
  id: number
  questionText: string
  optionA: string
  optionB: string
  optionC: string
  optionD: string
}

export interface AttemptQuestionResponse {
  selectedOption: null
  question: SafeQuestion | null
  totalQuestions: number
  remainingSeconds: number
}

export interface StartAttemptResponse {
  attemptId: number
  durationMinutes: number
}

export interface CompetitionResult {
  score: number
  totalQuestions: number
  rank: number
}

export interface Leaderboard {
  userId: number
  displayName: string
  score: number
  rankPosition  : number
  profileImage?: string
}

export interface CompetitionLeaderboardResponse {
  top10: Leaderboard[]
  self?: Leaderboard | null
}

export interface Result {
  score: number
  totalQuestions: number
  rank: number
}
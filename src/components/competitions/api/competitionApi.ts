import type {
  Competition,
  CompetitionResult,
  AttemptQuestionResponse,
  StartAttemptResponse,
  AttemptStatusResponse
} from "../types/competitionTypes"

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8080"

const getAuthHeaders = () => {
  const token = localStorage.getItem("token")
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  }
}

export const getUpcomingCompetitions = async (): Promise<Competition[]> => {
  const res = await fetch(`${API_BASE}/api/competitions/upcoming`)
  if (!res.ok) throw new Error("Failed to fetch upcoming")
  return res.json()
}

export const getLiveCompetitions = async (): Promise<Competition[]> => {
  const res = await fetch(`${API_BASE}/api/competitions/live`)
  if (!res.ok) throw new Error("Failed to fetch live")
  return res.json()
}

export const getCompletedCompetitions = async (): Promise<Competition[]> => {
  const res = await fetch(`${API_BASE}/api/competitions/completed`)
  if (!res.ok) throw new Error("Failed to fetch completed")
  return res.json()
}

export const getCompetitionById = async (id: number): Promise<Competition> => {
  const res = await fetch(`${API_BASE}/api/competitions/${id}`)
  if (!res.ok) throw new Error("Failed to fetch competition")
  return res.json()
}

export const registerCompetition = async (id: number, data: any) => {
  const res = await fetch(
    `${API_BASE}/api/competitions/${id}/register`,
    {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    }
  )

  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || "Registration failed")
  }

  return res.text()  // ← Return as text, not res.json()
}

export const checkRegistrationStatus = async (id: number): Promise<boolean> => {
  const token = localStorage.getItem("token")
  const res = await fetch(`${API_BASE}/api/competitions/${id}/registration-status`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  if (!res.ok) throw new Error("Failed to check status")
  return res.json()
}

export const startCompetitionAttempt = async (
  competitionId: number
): Promise<StartAttemptResponse> => {

  const res = await fetch(
    `${API_BASE}/api/competition-attempt/start/${competitionId}`,
    {
      method: "POST",
      headers: getAuthHeaders()
    }
  )

  if (!res.ok) throw new Error("Failed to start attempt")

  return res.json()
}

export const getAttemptQuestion = async (
  attemptId: number,
  index: number
): Promise<AttemptQuestionResponse> => {

  const res = await fetch(
    `${API_BASE}/api/competition-attempt/${attemptId}/question/${index}`,
    {
      headers: getAuthHeaders()
    }
  )

  if (!res.ok) throw new Error("Failed to fetch question")

  return res.json()
}

export const saveCompetitionAnswer = async (attemptId: number, questionId: number, option: string) => {
  const res = await fetch(
    `${API_BASE}/api/competition-attempt/${attemptId}/answer?questionId=${questionId}&option=${option}`,
    { method: "POST", headers: getAuthHeaders() }
  )
  if (!res.ok) throw new Error("Failed to save answer")
}

export const submitCompetitionAttempt = async (attemptId: number): Promise<CompetitionResult> => {
  const res = await fetch(`${API_BASE}/api/competition-attempt/${attemptId}/submit`, {
    method: "POST",
    headers: getAuthHeaders()
  })
  if (!res.ok) throw new Error("Submit failed")
  return res.json()
}

export const getCompetitionLeaderboard = async (competitionId: number) => {
  const res = await fetch(
    `${API_BASE}/api/competitions/${competitionId}/leaderboard`,
    { headers: getAuthHeaders() }
  )

  if (res.status === 403) {
    throw new Error("RESULT_NOT_PUBLISHED")
  }

  if (!res.ok) {
    throw new Error("LEADERBOARD_FAILED")
  }

  return res.json()
}

export const getCompetitionDetails = async (id: number) => {
  const res = await fetch(
    `${API_BASE}/api/competitions/${id}/details`, 
    {
      method: "GET", 
      headers: getAuthHeaders()
    }
  )

  if (!res.ok) throw new Error("Failed to fetch details")
  return res.json()
}

// ================= PAYMENT (COMPETITION) =================

export const createCompetitionOrder = async (competitionId: number) => {
  const res = await fetch(
    `${API_BASE}/api/payment/competition/create-order/${competitionId}`,
    {
      method: "POST",
      headers: getAuthHeaders()
    }
  )

  if (!res.ok) throw new Error("Failed to create order")

  return res.json()
}

export const verifyCompetitionPayment = async (
  competitionId: number,
  data: {
    razorpayOrderId: string
    razorpayPaymentId: string
    razorpaySignature: string
  }
) => {
  const res = await fetch(
    `${API_BASE}/api/payment/competition/verify/${competitionId}`,
    {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    }
  )

  if (!res.ok) throw new Error("Payment verification failed")
}

// ================= ATTEMPT STATUS =================

export const getAttemptStatus = async (
  competitionId: number
): Promise<AttemptStatusResponse> => {

  const res = await fetch(
    `${API_BASE}/api/competition-attempt/status/${competitionId}`,
    {
      headers: getAuthHeaders()
    }
  )

  if (!res.ok) throw new Error("Failed to fetch attempt status")

  return res.json()
}

// competitionApi.ts ke end mein certificate section replace karo

// ================= CERTIFICATE =================

export const downloadCompetitionCertificate = async (
  competitionId: number,
  recipientName: string
): Promise<void> => {
  const token = localStorage.getItem("token")

  if (!token) {
    throw new Error("You are not logged in. Please log in and try again.")
  }

  const res = await fetch(
    `${API_BASE}/api/certificate/${competitionId}/download`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  if (res.status === 401) {
    throw new Error("Session expired. Please log in again.")
  }

  if (res.status === 500) {
    const text = await res.text()
    throw new Error(text || "Server error. Please try again later.")
  }

  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || "Failed to generate certificate.")
  }

  const blob = await res.blob()

  if (blob.size === 0) {
    throw new Error("Certificate file is empty. Please try again.")
  }

  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = `certificate-${recipientName.replace(/\s+/g, "-")}.pdf`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export const verifyCertificate = async (uuid: string): Promise<{
  uuid: string
  recipientName: string
  competitionTitle: string
  certificateType: string
  rankPosition: number
  issuedAt: string
}> => {
  const res = await fetch(`${API_BASE}/api/certificate/verify/${uuid}`)
  if (res.status === 404) throw new Error("Certificate not found.")
  if (!res.ok) throw new Error("Verification failed. Please try again.")
  return res.json()
}


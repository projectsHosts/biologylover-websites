// Base URL (env based)
export const API_BASE =
  import.meta.env.VITE_API_BASE || "https://api.biologylover.com";

/* =========================
   PYQ APIs
========================= */

// 1️⃣ Get PYQ cards (year + subject)
export const getPyqCards = async (
year?: number, subject?: string, examType?: string) => {
  const params = new URLSearchParams();
  if (year) params.append("year", year.toString());
  if (subject) params.append("subject", subject);
  if (examType) params.append("examType", examType);
  const res = await fetch(
    `${API_BASE}/api/pyq/cards?${params.toString()}`
  );

  if (!res.ok) throw new Error("Failed to fetch PYQ cards");
  return res.json();
};

// 2️⃣ Get instructions
export const getInstructions = async (examId: number) => {
  const res = await fetch(
    `${API_BASE}/api/pyq/${examId}/instructions`
  );

  if (!res.ok) throw new Error("Failed to fetch instructions");
  return res.json();
};

// 3️⃣ Start PYQ (returns attemptId)
// 3️⃣ Start PYQ (JWT based – SAFE)
export const startPyq = async (examId: number) => {
  const res = await fetch(
    `${API_BASE}/api/pyq/${examId}/start`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to start PYQ");
  return res.json(); // attemptId
};

// 4️⃣ Submit PYQ
export const submitPyq = async (
  attemptId: number,
  answers: { questionId: number; selectedOption: string | null }[]
) => {
  const res = await fetch(
    `${API_BASE}/api/pyq/submit/${attemptId}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers }),
    }
  );

  if (!res.ok) throw new Error("Failed to submit PYQ");
  return res.json();
};

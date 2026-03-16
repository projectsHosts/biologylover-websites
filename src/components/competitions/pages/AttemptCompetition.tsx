import { useEffect, useState, useRef, useCallback } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
  getAttemptQuestion,
  saveCompetitionAnswer,
  submitCompetitionAttempt
} from "../api/competitionApi"
import type { SafeQuestion } from "../types/competitionTypes"
import "../../../styles/compitions/competitionAttempt.css"
import { useAntiCheat } from "./AntiCheatState "

export default function AttemptCompetition() {
  const { attemptId } = useParams()
  const navigate = useNavigate()
  const numericAttemptId = Number(attemptId)

  const [question, setQuestion] = useState<SafeQuestion | null>(null)
  const [index, setIndex] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)
  const [loading, setLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [timeLeft, setTimeLeft] = useState(0)
  const [antiCheatActive, setAntiCheatActive] = useState(true)
  const [autoSubmitCountdown, setAutoSubmitCountdown] = useState<number | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [redirectCountdown, setRedirectCountdown] = useState(5)

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const hasSubmittedRef = useRef(false)

  /* ================= HIDE NAVBAR/FOOTER ================= */
  useEffect(() => {
    // test-active class may already be set by PreTest, but ensure it's there
    document.body.classList.add("test-active")

    const style = document.createElement("style")
    style.id = "test-active-hide-chrome"
    style.textContent = `
      body.test-active nav,
      body.test-active header,
      body.test-active footer,
      body.test-active aside,
      body.test-active [class*="navbar"],
      body.test-active [class*="Navbar"],
      body.test-active [class*="nav-bar"],
      body.test-active [class*="footer"],
      body.test-active [class*="Footer"],
      body.test-active [class*="sidebar"],
      body.test-active [class*="Sidebar"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
      body.test-active { overflow: hidden; }
    `
    document.head.appendChild(style)

    return () => {
      document.body.classList.remove("test-active")
      const el = document.getElementById("test-active-hide-chrome")
      if (el) el.remove()
    }
  }, [])

  /* ================= SUBMIT ================= */
  const handleSubmit = useCallback(async () => {
    if (hasSubmittedRef.current) return
    hasSubmittedRef.current = true
    setAntiCheatActive(false)
    if (timerRef.current) clearInterval(timerRef.current)

    try {
      await submitCompetitionAttempt(numericAttemptId)
    } catch (err) {
      console.error("Submit error:", err)
    }

    if (document.fullscreenElement) {
      try { await document.exitFullscreen() }
      catch (e) { console.warn("Fullscreen exit failed:", e) }
    }

    document.body.classList.remove("test-active")
    const s = document.getElementById("test-active-hide-chrome")
    if (s) s.remove()

    setShowSuccess(true)
    let cd = 5
    setRedirectCountdown(cd)
    const cdInterval = setInterval(() => {
      cd -= 1
      setRedirectCountdown(cd)
      if (cd <= 0) { clearInterval(cdInterval); navigate("/competition") }
    }, 1000)
  }, [numericAttemptId, navigate])

  /* ================= ANTI-CHEAT ================= */
  const {
    violationCount,
    isFullscreen,
    warningVisible,
    warningMessage,
    requestFullscreen,
    dismissWarning,
  } = useAntiCheat({
    enabled: antiCheatActive,
    maxWarnings: 3,
    onViolation: (type: any, count: any) => {
      console.warn(`[AntiCheat] Violation: ${type} | Total: ${count}`)
    },
    onAutoSubmit: () => {
      if (!antiCheatActive) return
      setAntiCheatActive(false)
      let cd = 3
      setAutoSubmitCountdown(cd)
      const cdInterval = setInterval(() => {
        cd -= 1
        setAutoSubmitCountdown(cd)
        if (cd <= 0) { clearInterval(cdInterval); handleSubmit() }
      }, 1000)
    },
  })

  /* ================= LOAD QUESTION ================= */
  const loadQuestion = async (questionIndex: number) => {
    try {
      setLoading(true)
      const response = await getAttemptQuestion(numericAttemptId, questionIndex)
      setTotalQuestions(response.totalQuestions ?? 0)
      if (questionIndex === 0) setTimeLeft(response.remainingSeconds ?? 0)
      setQuestion(response.question ?? null)
      setSelectedOption(response.selectedOption ?? null)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!numericAttemptId) return
    loadQuestion(0)
  }, [numericAttemptId])

  /* ================= TIMER ================= */
  useEffect(() => {
    if (timeLeft <= 0) return
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        const next = prev - 1
        if (next <= 0) { clearInterval(timerRef.current!); timerRef.current = null; handleSubmit(); return 0 }
        return next
      })
    }, 1000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [timeLeft])

  /* ================= HANDLERS ================= */
  const handleSelect = (option: string) => setSelectedOption(option)

  const handleSaveAndNext = async () => {
    if (!question) return
    await saveCompetitionAnswer(numericAttemptId, question.id, selectedOption ?? "")
    if (index + 1 < totalQuestions) {
      const next = index + 1; setIndex(next); loadQuestion(next)
    }
  }

  const handlePrevious = () => {
    if (index > 0) { const prev = index - 1; setIndex(prev); loadQuestion(prev) }
  }

  const formatTime = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`

  /* ================= SUCCESS ================= */
  if (showSuccess) {
    return (
      <div className="ac-container">
        <div className="ac-success-overlay">
          <div className="ac-success-modal">
            <div className="ac-check-wrapper">
              <svg className="ac-checkmark" viewBox="0 0 52 52">
                <circle className="ac-checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                <path className="ac-checkmark__check" fill="none" d="M14 27l7 7 17-17" />
              </svg>
            </div>
            <h2 className="ac-success-title">Test Submitted!</h2>
            <p className="ac-success-msg">Your answers have been recorded successfully. Great job!</p>
            <div className="ac-redirect-bar">
              <div className="ac-redirect-fill" style={{ animationDuration: "5s" }} />
            </div>
            <p className="ac-redirect-text">Redirecting in <strong>{redirectCountdown}s</strong></p>
            <button className="ac-redirect-btn" onClick={() => navigate("/competition")}>Go Now →</button>
          </div>
        </div>
      </div>
    )
  }

  /* ================= FULLSCREEN PROMPT ================= */
  // isFullscreen is initialized from actual browser state, so no false positives on mount
  if (!isFullscreen) {
    return (
      <div className="ac-container">
        <div className="ac-fullscreen-prompt">
          <div className="ac-fullscreen-icon">⛶</div>
          <h2>Fullscreen Required</h2>
          <p>You exited fullscreen. Return to continue your test.</p>
          <p className="ac-fs-warning">This exit has been recorded as a violation.</p>
          <div className="ac-violation-badge">Violations: {violationCount} / 3</div>
          <button className="ac-pretest-start-btn" onClick={requestFullscreen}>
            Return to Fullscreen
          </button>
        </div>
      </div>
    )
  }

  /* ================= AUTO-SUBMIT ================= */
  if (autoSubmitCountdown !== null) {
    return (
      <div className="ac-container">
        <div className="ac-autosubmit-overlay">
          <div className="ac-autosubmit-icon">🚨</div>
          <h2>Too Many Violations</h2>
          <p>Your test is being auto-submitted due to repeated violations.</p>
          <div className="ac-autosubmit-countdown">{autoSubmitCountdown}</div>
          <p className="ac-autosubmit-sub">Submitting in {autoSubmitCountdown}s...</p>
        </div>
      </div>
    )
  }

  if (loading && index === 0) return <div className="ac-loading">Loading...</div>

  /* ================= MAIN TEST ================= */
  return (
    <div className="ac-container" onContextMenu={e => e.preventDefault()}>
      {warningVisible && (
        <div className="ac-violation-toast">
          <span className="ac-toast-msg">{warningMessage}</span>
          <span className="ac-toast-count">{violationCount}/3</span>
          <button className="ac-toast-close" onClick={dismissWarning}>✕</button>
        </div>
      )}
      <div className="ac-violation-tracker">
        {[1, 2, 3].map(i => (
          <div key={i} className={`ac-violation-dot ${violationCount >= i ? "active" : ""}`} />
        ))}
        <span className="ac-violation-label">
          {violationCount === 0 ? "No violations" : `${violationCount} violation${violationCount !== 1 ? "s" : ""}`}
        </span>
      </div>
      <div className="ac-header">
        <h2>Competition Test</h2>
        <div className={`ac-timer ${timeLeft <= 60 ? "warning" : ""}`}>{formatTime(timeLeft)}</div>
      </div>
      {loading ? (
        <div className="ac-question-card">
          <p style={{ color: "#7a80a8", textAlign: "center" }}>Loading question...</p>
        </div>
      ) : question ? (
        <>
          <div className="ac-question-card">
            <h3>Question {index + 1} of {totalQuestions}</h3>
            <p>{question.questionText}</p>
          </div>
          <div className="ac-options-grid">
            {(["A", "B", "C", "D"] as const).map(opt => (
              <button
                key={opt}
                className={`ac-option-btn ${selectedOption === opt ? "selected" : ""}`}
                onClick={() => handleSelect(opt)}
              >
                <strong>{opt}.</strong> {question[`option${opt}`]}
              </button>
            ))}
          </div>
          <div className="ac-navigation">
            <button onClick={handlePrevious} disabled={index === 0} className="ac-nav-btn">Previous</button>
            {index < totalQuestions - 1
              ? <button onClick={handleSaveAndNext} className="ac-nav-btn primary">Save & Next</button>
              : <button onClick={handleSubmit} className="ac-nav-btn submit">Submit Test</button>
            }
          </div>
        </>
      ) : (
        <div className="ac-question-card">
          <p style={{ color: "#ff6b6b", textAlign: "center" }}>Question not found.</p>
        </div>
      )}
    </div>
  )
}
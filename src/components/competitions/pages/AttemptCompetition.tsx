import { useEffect, useState, useRef, useCallback } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
  getAttemptQuestion,
  saveCompetitionAnswer,
  submitCompetitionAttempt
} from "../api/competitionApi"
import type { SafeQuestion } from "../types/competitionTypes"
import "../../../styles/compitions/competitionCard.css"
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
  const [testStarted, setTestStarted] = useState(false)
  const [autoSubmitCountdown, setAutoSubmitCountdown] = useState<number | null>(null)

  // ✅ Success popup states
  const [showSuccess, setShowSuccess] = useState(false)
  const [redirectCountdown, setRedirectCountdown] = useState(5)

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const hasSubmittedRef = useRef(false)

  /* ================= SUBMIT ================= */

  const handleSubmit = useCallback(async () => {
    if (hasSubmittedRef.current) return
    hasSubmittedRef.current = true

    if (timerRef.current) clearInterval(timerRef.current)

    try {
      await submitCompetitionAttempt(numericAttemptId)
    } catch (err) {
      console.error("Submit error:", err)
    }

    // Show success popup
    setShowSuccess(true)

    // 5-second countdown then redirect
    let cd = 5
    setRedirectCountdown(cd)
    const cdInterval = setInterval(() => {
      cd -= 1
      setRedirectCountdown(cd)
      if (cd <= 0) {
        clearInterval(cdInterval)
        navigate("/competition")
      }
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
    enabled: testStarted,
    maxWarnings: 3,
    onViolation: (type, count) => {
      console.warn(`[AntiCheat] Violation: ${type} | Total: ${count}`)
    },
    onAutoSubmit: () => {
      let cd = 3
      setAutoSubmitCountdown(cd)
      const cdInterval = setInterval(() => {
        cd -= 1
        setAutoSubmitCountdown(cd)
        if (cd <= 0) {
          clearInterval(cdInterval)
          handleSubmit()
        }
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
    if (timeLeft <= 0 || !testStarted) return
    if (timerRef.current) clearInterval(timerRef.current)

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        const next = prev - 1
        if (next <= 0) {
          clearInterval(timerRef.current!)
          timerRef.current = null
          handleSubmit()
          return 0
        }
        return next
      })
    }, 1000)

    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [testStarted, timeLeft > 0])

  /* ================= HANDLERS ================= */

  const handleSelect = (option: string) => setSelectedOption(option)

  const handleSaveAndNext = async () => {
    if (!question) return
    await saveCompetitionAnswer(numericAttemptId, question.id, selectedOption ?? "")
    if (index + 1 < totalQuestions) {
      const nextIndex = index + 1
      setIndex(nextIndex)
      loadQuestion(nextIndex)
    }
  }

  const handlePrevious = () => {
    if (index > 0) {
      const prevIndex = index - 1
      setIndex(prevIndex)
      loadQuestion(prevIndex)
    }
  }

  const handleStartTest = () => {
    requestFullscreen()
    setTestStarted(true)
  }

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
  }

  /* ================= PRE-TEST SCREEN ================= */

if (!testStarted) {
  return (
    <div className="attempt-container">
      <div className="pretest-card">

        <span className="pretest-eyebrow">Competition Rules</span>
        <h1>Ready to Begin?</h1>
        <p className="pretest-sub">Read the rules carefully before starting your test</p>

        <div className="pretest-divider" />

        <ul className="pretest-rules">
          <li>
            <span className="rule-icon" />
            <span>Test runs in <strong>fullscreen mode</strong> — exiting will be counted as a violation</span>
          </li>
          <li>
            <span className="rule-icon" />
            <span><strong>Tab switching</strong> or app switching is strictly not allowed</span>
          </li>
          <li>
            <span className="rule-icon" />
            <span><strong>Copy / Paste</strong> is disabled for the duration of the test</span>
          </li>
          <li>
            <span className="rule-icon" />
            <span><strong>Right-click</strong> and context menus are disabled</span>
          </li>
          <li>
            <span className="rule-icon" />
            <span>Keyboard shortcuts like <strong>Ctrl+C, F12, Alt+Tab</strong> are blocked</span>
          </li>
          <li className="rule-warn">
            <span className="rule-icon" />
            <span>After <strong>3 violations</strong>, your test will be auto-submitted immediately</span>
          </li>
          <li>
            <span className="rule-icon" />
            <span>The timer starts the moment you click <strong>Start Test</strong></span>
          </li>
        </ul>

        <button className="pretest-start-btn" onClick={handleStartTest}>
          Start Test
        </button>

      </div>
    </div>
  )
}

  /* ================= FULLSCREEN PROMPT ================= */

  if (!isFullscreen && !showSuccess) {
    return (
      <div className="attempt-container">
        <div className="fullscreen-prompt">
          <div className="fullscreen-icon">⛶</div>
          <h2>Fullscreen Required</h2>
          <p>You exited fullscreen. Return to continue your test.</p>
          <p className="fs-warning">This exit has been recorded as a violation.</p>
          <div className="violation-badge">Violations: {violationCount} / 3</div>
          <button className="pretest-start-btn" onClick={requestFullscreen}>
            Return to Fullscreen
          </button>
        </div>
      </div>
    )
  }

  /* ================= AUTO-SUBMIT SCREEN ================= */

  if (autoSubmitCountdown !== null && !showSuccess) {
    return (
      <div className="attempt-container">
        <div className="autosubmit-overlay">
          <div className="autosubmit-icon">🚨</div>
          <h2>Too Many Violations</h2>
          <p>Your test is being auto-submitted due to repeated violations.</p>
          <div className="autosubmit-countdown">{autoSubmitCountdown}</div>
          <p className="autosubmit-sub">Submitting in {autoSubmitCountdown}s...</p>
        </div>
      </div>
    )
  }

  /* ================= MAIN TEST ================= */

  if (loading && index === 0) {
    return <div className="attempt-loading">Loading...</div>
  }

  return (
    <div className="attempt-container" onContextMenu={e => e.preventDefault()}>

      {/* ✅ SUCCESS POPUP OVERLAY */}
      {showSuccess && (
        <div className="success-overlay">
          <div className="success-modal">
            {/* Animated checkmark */}
            <div className="success-check-wrapper">
              <svg className="success-checkmark" viewBox="0 0 52 52">
                <circle className="success-checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                <path className="success-checkmark__check" fill="none" d="M14 27l7 7 17-17" />
              </svg>
            </div>

            <h2 className="success-title">Test Submitted!</h2>
            <p className="success-msg">
              Your answers have been recorded successfully. Great job completing the competition!
            </p>

            <div className="success-redirect-bar">
              <div
                className="success-redirect-fill"
                style={{ animationDuration: "5s" }}
              />
            </div>

            <p className="success-redirect-text">
              Redirecting to competitions in <strong>{redirectCountdown}s</strong>
            </p>

            <button
              className="success-redirect-btn"
              onClick={() => navigate("/competition")}
            >
              Go Now →
            </button>
          </div>
        </div>
      )}

      {/* VIOLATION TOAST */}
      {warningVisible && (
        <div className="violation-toast">
          <span className="toast-msg">{warningMessage}</span>
          <span className="toast-count">{violationCount}/3</span>
          <button className="toast-close" onClick={dismissWarning}>✕</button>
        </div>
      )}

      {/* VIOLATION DOTS */}
      <div className="violation-tracker">
        {[1, 2, 3].map(i => (
          <div key={i} className={`violation-dot ${violationCount >= i ? "active" : ""}`} title={`Violation ${i}`} />
        ))}
        <span className="violation-label">
          {violationCount === 0 ? "No violations" : `${violationCount} violation${violationCount !== 1 ? "s" : ""}`}
        </span>
      </div>

      {/* HEADER */}
      <div className="attempt-header">
        <h2>Competition Test</h2>
        <div className={`attempt-timer ${timeLeft <= 60 ? "warning" : ""}`}>
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* QUESTION */}
      {loading ? (
        <div className="question-card">
          <p style={{ color: "#7a80a8", textAlign: "center" }}>Loading question...</p>
        </div>
      ) : question ? (
        <>
          <div className="question-card">
            <h3>Question {index + 1} of {totalQuestions}</h3>
            <p>{question.questionText}</p>
          </div>

          <div className="options-grid">
            {(["A", "B", "C", "D"] as const).map(opt => (
              <button
                key={opt}
                className={`option-btn ${selectedOption === opt ? "selected" : ""}`}
                onClick={() => handleSelect(opt)}
              >
                <strong>{opt}.</strong> {question[`option${opt}`]}
              </button>
            ))}
          </div>

          <div className="navigation-buttons">
            <button onClick={handlePrevious} disabled={index === 0} className="nav-btn">
              Previous
            </button>
            {index < totalQuestions - 1 ? (
              <button onClick={handleSaveAndNext} className="nav-btn primary">Save & Next</button>
            ) : (
              <button onClick={handleSubmit} className="nav-btn submit">Submit Test</button>
            )}
          </div>
        </>
      ) : (
        <div className="question-card">
          <p style={{ color: "#ff6b6b", textAlign: "center" }}>Question not found.</p>
        </div>
      )}
    </div>
  )
}
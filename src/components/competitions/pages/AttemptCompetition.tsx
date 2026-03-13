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
  // const [testStarted, setTestStarted] = useState(false)
  const [antiCheatActive, setAntiCheatActive] = useState(true)
  const [autoSubmitCountdown, setAutoSubmitCountdown] = useState<number | null>(null)

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
    if (document.fullscreenElement) {
    try {
        await document.exitFullscreen()
      } catch (e) {
        console.warn("Failed to exit fullscreen")
      }
    }
    setShowSuccess(true)
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
    enabled: antiCheatActive,
    maxWarnings: 3,
    onViolation: (type, count) => {
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

  //auto returns fullscreen
  useEffect(() => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  }

}, [])

  /* ================= TIMER ================= */
 useEffect(() => {
  if (timeLeft <= 0) return

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

  return () => {
    if (timerRef.current) clearInterval(timerRef.current)
  }

}, [timeLeft])

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

  // const handleStartTest = () => {
  //   requestFullscreen()
  //   setTestStarted(true)
  // }

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
  }

  /* ================= PRE-TEST SCREEN ================= */
  // if (!testStarted) {
  //   return (
  //     <div className="ac-container">
  //       <div className="ac-pretest-card">
  //         <span className="ac-pretest-eyebrow">Competition Rules</span>
  //         <h1>Ready to Begin?</h1>
  //         <p className="ac-pretest-sub">Read the rules carefully before starting your test</p>
  //         <div className="ac-pretest-divider" />
  //         <ul className="ac-pretest-rules">
  //           <li>
  //             <span className="ac-rule-icon" />
  //             <span>Test runs in <strong>fullscreen mode</strong> — exiting will be counted as a violation</span>
  //           </li>
  //           <li>
  //             <span className="ac-rule-icon" />
  //             <span><strong>Tab switching</strong> or app switching is strictly not allowed</span>
  //           </li>
  //           <li>
  //             <span className="ac-rule-icon" />
  //             <span><strong>Copy / Paste</strong> is disabled for the duration of the test</span>
  //           </li>
  //           <li>
  //             <span className="ac-rule-icon" />
  //             <span><strong>Right-click</strong> and context menus are disabled</span>
  //           </li>
  //           <li>
  //             <span className="ac-rule-icon" />
  //             <span>Keyboard shortcuts like <strong>Ctrl+C, F12, Alt+Tab</strong> are blocked</span>
  //           </li>
  //           <li className="ac-rule-warn">
  //             <span className="ac-rule-icon" />
  //             <span>After <strong>3 violations</strong>, your test will be auto-submitted immediately</span>
  //           </li>
  //           <li>
  //             <span className="ac-rule-icon" />
  //             <span>The timer starts the moment you click <strong>Start Test</strong></span>
  //           </li>
  //         </ul>
  //         <button className="ac-pretest-start-btn" onClick={handleStartTest}>
  //           Start Test
  //         </button>
  //       </div>
  //     </div>
  //   )
  // }

  /* ================= FULLSCREEN PROMPT ================= */
  if (!isFullscreen && !showSuccess) {
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

  /* ================= AUTO-SUBMIT SCREEN ================= */
  if (autoSubmitCountdown !== null && !showSuccess) {
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

  /* ================= MAIN TEST ================= */
  if (loading && index === 0) {
    return <div className="ac-loading">Loading...</div>
  }

  return (
    <div className="ac-container" onContextMenu={e => e.preventDefault()}>

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="ac-success-overlay">
          <div className="ac-success-modal">
            <div className="ac-check-wrapper">
              <svg className="ac-checkmark" viewBox="0 0 52 52">
                <circle className="ac-checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                <path className="ac-checkmark__check" fill="none" d="M14 27l7 7 17-17" />
              </svg>
            </div>
            <h2 className="ac-success-title">Test Submitted!</h2>
            <p className="ac-success-msg">
              Your answers have been recorded successfully. Great job completing the competition!
            </p>
            <div className="ac-redirect-bar">
              <div className="ac-redirect-fill" style={{ animationDuration: "5s" }} />
            </div>
            <p className="ac-redirect-text">
              Redirecting to competitions in <strong>{redirectCountdown}s</strong>
            </p>
            <button className="ac-redirect-btn" onClick={() => navigate("/competition")}>
              Go Now →
            </button>
          </div>
        </div>
      )}

      {/* VIOLATION TOAST */}
      {warningVisible && (
        <div className="ac-violation-toast">
          <span className="ac-toast-msg">{warningMessage}</span>
          <span className="ac-toast-count">{violationCount}/3</span>
          <button className="ac-toast-close" onClick={dismissWarning}>✕</button>
        </div>
      )}

      {/* VIOLATION DOTS */}
      <div className="ac-violation-tracker">
        {[1, 2, 3].map(i => (
          <div key={i} className={`ac-violation-dot ${violationCount >= i ? "active" : ""}`} title={`Violation ${i}`} />
        ))}
        <span className="ac-violation-label">
          {violationCount === 0 ? "No violations" : `${violationCount} violation${violationCount !== 1 ? "s" : ""}`}
        </span>
      </div>

      {/* HEADER */}
      <div className="ac-header">
        <h2>Competition Test</h2>
        <div className={`ac-timer ${timeLeft <= 60 ? "warning" : ""}`}>
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* QUESTION */}
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
            <button onClick={handlePrevious} disabled={index === 0} className="ac-nav-btn">
              Previous
            </button>
            {index < totalQuestions - 1 ? (
              <button onClick={handleSaveAndNext} className="ac-nav-btn primary">Save & Next</button>
            ) : (
              <button onClick={handleSubmit} className="ac-nav-btn submit">Submit Test</button>
            )}
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
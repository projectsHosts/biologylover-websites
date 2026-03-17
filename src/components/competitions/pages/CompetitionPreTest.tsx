import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { startCompetitionAttempt } from "../api/competitionApi"

export default function CompetitionPreTest() {
  const { id } = useParams()
  const navigate = useNavigate()

  /* Hide navbar/footer on pre-test screen */
  useEffect(() => {
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
           body.test-active {
        overflow-y: auto !important;
      }

    `
    document.head.appendChild(style)

    return () => {
      // Do NOT remove test-active here — AttemptCompetition will manage it
      // Only remove the style tag to avoid duplicate
      const s = document.getElementById("test-active-hide-chrome")
      if (s) s.remove()
    }
  }, [])

  const startTest = async () => {
    try {
      // 1. Request fullscreen HERE — inside user click gesture (guaranteed to work)
      const el = document.documentElement
      try {
        if (el.requestFullscreen) await el.requestFullscreen()
        else if ((el as any).webkitRequestFullscreen) (el as any).webkitRequestFullscreen()
        else if ((el as any).mozRequestFullScreen) (el as any).mozRequestFullScreen()
      } catch (e) {
        console.warn("Fullscreen request failed:", e)
      }

      // 2. Start attempt on server
      const res = await startCompetitionAttempt(Number(id))

      // 3. Navigate — fullscreen is already active, no re-request needed
      navigate(`/competition/attempt/${res.attemptId}`)
    } catch (err) {
      alert("Unable to start test. Please try again.")
    }
  }

  return (
    <div className="ac-container">
      <div className="ac-pretest-card">
        <span className="ac-pretest-eyebrow">Competition Rules</span>
        <h1>Ready to Begin?</h1>
        <p className="ac-pretest-sub">Read the rules carefully before starting your test</p>
        <div className="ac-pretest-divider" />
        <ul className="ac-pretest-rules">
          <li>
            <span className="ac-rule-icon" />
            <span>Test runs in <strong>fullscreen mode</strong> — exiting will be counted as a violation</span>
          </li>
          <li>
            <span className="ac-rule-icon" />
            <span><strong>Tab switching</strong> or app switching is strictly not allowed</span>
          </li>
          <li>
            <span className="ac-rule-icon" />
            <span><strong>Copy / Paste</strong> is disabled for the duration of the test</span>
          </li>
          <li>
            <span className="ac-rule-icon" />
            <span><strong>Right-click</strong> and context menus are disabled</span>
          </li>
          <li>
            <span className="ac-rule-icon" />
            <span>Keyboard shortcuts like <strong>Ctrl+C, F12, Alt+Tab</strong> are blocked</span>
          </li>
          <li className="ac-rule-warn">
            <span className="ac-rule-icon" />
            <span>After <strong>3 violations</strong>, your test will be auto-submitted immediately</span>
          </li>
          <li>
            <span className="ac-rule-icon" />
            <span>The timer starts the moment you click <strong>Start Test</strong></span>
          </li>
        </ul>
        <button className="ac-pretest-start-btn" onClick={startTest}>
          Start Test
        </button>
      </div>
    </div>
  )
}
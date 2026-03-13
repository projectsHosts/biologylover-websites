import { useNavigate, useParams } from "react-router-dom"
import { startCompetitionAttempt } from "../api/competitionApi"

export default function CompetitionPreTest(){

  const { id } = useParams()
  const navigate = useNavigate()

 const startTest = async () => {
 try {

    const res = await startCompetitionAttempt(Number(id))

    navigate(`/competition/attempt/${res.attemptId}`)

  } catch(err) {
    alert("Unable to start test")
  }
}

  return(
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
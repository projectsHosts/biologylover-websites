import { useLocation, useNavigate } from "react-router-dom"
import "../../../styles/compitions/competitionPages.css"
import type { Result } from "../competitions/types/competitionTypes"
import { isLoggedIn } from "../../utils/auth"

export default function CompetitionResult() {
  const location = useLocation()
  const navigate = useNavigate()
  const result = location.state as Result

  if (!result) {
    return (
      <div className="cp-scope">
        <div className="cp-bg" />
        <div className="cp-loading">
          <div className="cp-loading-spinner" />
        </div>
      </div>
    )
  }

  const percentage = Math.round((result.score / result.totalQuestions) * 100)

  const getMessage = () => {
    if (percentage >= 90) return "Outstanding Performance! 🌟"
    if (percentage >= 75) return "Great Job! Keep It Up 🎯"
    if (percentage >= 50) return "Good Effort! Room to Grow 💪"
    return "Keep Practicing! You'll Get There 📚"
  }

  return (
    <div className="cp-scope">
      <div className="cp-bg" />

      <div className="cp-result-page">
        <span className="cp-result-trophy">🏆</span>

        <h1 className="cp-result-title">Test Complete!</h1>
        <p className="cp-result-subtitle">{getMessage()}</p>

        <div className="cp-result-stats">
          <div className="cp-result-stat">
            <div className="cp-result-stat-value green">{result.score}</div>
            <div className="cp-result-stat-label">Score</div>
          </div>
          <div className="cp-result-stat">
            <div className="cp-result-stat-value blue">{result.totalQuestions}</div>
            <div className="cp-result-stat-label">Total Qs</div>
          </div>
          <div className="cp-result-stat">
            <div className="cp-result-stat-value gold">#{result.rank}</div>
            <div className="cp-result-stat-label">Your Rank</div>
          </div>
        </div>

        {/* Score bar */}
        <div style={{ marginBottom: 40, width: "100%" }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 8,
            fontSize: 13,
            color: "#8a9abb"
          }}>
            <span style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: 1, textTransform: "uppercase", fontSize: 11 }}>Accuracy</span>
            <span style={{ fontFamily: "'Rajdhani', sans-serif", color: "#00ffc8", fontWeight: 700 }}>{percentage}%</span>
          </div>
          <div style={{ height: 6, background: "#0d1320", borderRadius: 100, overflow: "hidden" }}>
            <div style={{
              height: "100%",
              width: `${percentage}%`,
              background: "linear-gradient(90deg, #00ffc8 0%, #00d4aa 100%)",
              borderRadius: 100,
              transition: "width 1s ease"
            }} />
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            className="cp-btn-leaderboard"
            onClick={() => {
              if (!isLoggedIn()) {
                (window as any).openLogin(); // 🔥 auth modal
                return;
              }
              navigate(`/competition/leaderboard/${result.rank}`)
            }}
          >
            View Leaderboard
          </button>
          <button
            className="cp-btn-submit-test"
            onClick={() => navigate("/competitions")}
          >
            Back to Competitions
          </button>
        </div>
      </div>
    </div>
  )
}
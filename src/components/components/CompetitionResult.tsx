import { useLocation, useNavigate } from "react-router-dom"
import "../../../styles/compitions/competitionPages.css"
import type { Result } from "../competitions/types/competitionTypes"

export default function CompetitionResult() {
  const location = useLocation()
  const navigate = useNavigate()
  const result = location.state as Result

  if (!result) {
    return (
      <div style={{ background: "var(--bg-base)", minHeight: "100vh" }}>
        <div className="comp-bg" />
        <div className="comp-loading"><div className="loading-spinner" /></div>
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
    <div style={{ background: "var(--bg-base)", minHeight: "100vh" }}>
      <div className="comp-bg" />

      <div className="result-page">
        <div className="result-trophy">🏆</div>

        <h1 className="result-title">Test Complete!</h1>
        <p className="result-subtitle">{getMessage()}</p>

        <div className="result-stats">
          <div className="result-stat">
            <div className="result-stat-value green">{result.score}</div>
            <div className="result-stat-label">Score</div>
          </div>
          <div className="result-stat">
            <div className="result-stat-value blue">{result.totalQuestions}</div>
            <div className="result-stat-label">Total Qs</div>
          </div>
          <div className="result-stat">
            <div className="result-stat-value gold">#{result.rank}</div>
            <div className="result-stat-label">Your Rank</div>
          </div>
        </div>

        {/* Score bar */}
        <div style={{ marginBottom: 40, width: "100%" }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 8,
            fontSize: 13,
            color: "var(--text-secondary)"
          }}>
            <span style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: 1, textTransform: "uppercase", fontSize: 11 }}>Accuracy</span>
            <span style={{ fontFamily: "'Rajdhani', sans-serif", color: "var(--accent)", fontWeight: 700 }}>{percentage}%</span>
          </div>
          <div style={{ height: 6, background: "var(--bg-card)", borderRadius: 100, overflow: "hidden" }}>
            <div style={{
              height: "100%",
              width: `${percentage}%`,
              background: "linear-gradient(90deg, var(--accent) 0%, #00d4aa 100%)",
              borderRadius: 100,
              transition: "width 1s ease"
            }} />
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            className="btn-leaderboard"
            onClick={() => navigate(`/competition/leaderboard/${result.rank}`)}
          >
            View Leaderboard
          </button>
          <button
            className="btn-submit-test"
            onClick={() => navigate("/competitions")}
          >
            Back to Competitions
          </button>
        </div>
      </div>
    </div>
  )
}
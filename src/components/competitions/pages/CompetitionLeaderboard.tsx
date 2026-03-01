import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCompetitionLeaderboard } from "../api/competitionApi"
import type { CompetitionLeaderboardResponse } from "../types/competitionTypes"
import "../../../styles/compitions/leaderboard.css"

export default function CompetitionLeaderboard() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<CompetitionLeaderboardResponse | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  if (!id) return

  getCompetitionLeaderboard(Number(id))
    .then(res => {
      setData(res)
      setError(null)
    })
    .catch(err => {
        if (err.message === "RESULT_NOT_PUBLISHED") {
          setError("Result not published yet")
        } else {
          setError("Unable to load leaderboard")
        }
      })
    .finally(() => setLoading(false))
}, [id])

  /* ---------- helpers ---------- */
  const getInitials = (name: string) => name.charAt(0).toUpperCase()

  const getMedalEmoji = (rank: number) =>
    rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : null

  const getRankClass = (rank: number) =>
    rank === 1 ? "gold" : rank === 2 ? "silver" : rank === 3 ? "bronze" : ""

  /* ---------- loading ---------- */
  if (loading) {
    return (
      <div className="lb-root">
        <div className="lb-loading">
          <div className="lb-spinner" />
          <span>Loading leaderboard…</span>
        </div>
      </div>
    )
  }

  const top10 = data?.top10 ?? []
  const self  = data?.self ?? null

  if (error === "Result not published yet") {
  return (
    <div className="lb-root">
      <div className="lb-page">
        <div className="lb-hero">
          <div className="lb-trophy">⏳</div>
          <h1 className="lb-title">Result Not Published</h1>
          <p className="lb-subtitle">
            The result will be available once it is officially published.
          </p>
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button className="lb-back" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}

  /* podium order: silver | gold | bronze */
  const top3 = top10.slice(0, 3)
  const podiumOrder   = top3.length >= 3 ? [top3[1], top3[0], top3[2]] : []
  const podiumClasses = ["second", "first", "third"]
  const podiumEmoji   = ["🥈", "🥇", "🥉"]
  const podiumHeights = ["podium-h2", "podium-h1", "podium-h3"]

  const selfInTop10 = top10.some(u => u.userId === self?.userId)

  return (
    <div className="lb-root">

      {/* ambient glow blobs */}
      <div className="lb-blob lb-blob-1" />
      <div className="lb-blob lb-blob-2" />

      <div className="lb-page">

        {/* ── Back button ── */}
        <button className="lb-back" onClick={() => navigate(-1)}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </button>

        {/* ── Hero title ── */}
        <div className="lb-hero">
          <div className="lb-trophy">🏆</div>
          <h1 className="lb-title">Leaderboard</h1>
          <p className="lb-subtitle">Top performers from this competition</p>
        </div>

        {/* ── Podium ── */}
        {podiumOrder.length === 3 && (
          <div className="lb-podium-wrapper">
            {podiumOrder.map((entry, i) => (
              <div key={entry.userId} className={`lb-podium-item ${podiumClasses[i]}`}>
                {/* Avatar */}
                <div className="lb-podium-avatar">
                  {getInitials(entry.displayName)}
                  <div className="lb-podium-medal">{podiumEmoji[i]}</div>
                </div>

                {/* Name */}
                <div className="lb-podium-name">{entry.displayName}</div>
                <div className="lb-podium-score">{entry.score} <span>pts</span></div>

                {/* Stage block */}
                <div className={`lb-podium-stage ${podiumHeights[i]}`}>
                  <span className="lb-podium-pos">
                    {i === 0 ? "2ND" : i === 1 ? "1ST" : "3RD"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Stats strip ── */}
        <div className="lb-stats-strip">
          <div className="lb-stat">
            <span className="lb-stat-value">{top10.length}</span>
            <span className="lb-stat-label">Participants</span>
          </div>
          <div className="lb-stat-divider" />
          <div className="lb-stat">
            <span className="lb-stat-value">{top10[0]?.score ?? "—"}</span>
            <span className="lb-stat-label">Top Score</span>
          </div>
          <div className="lb-stat-divider" />
          <div className="lb-stat">
            <span className="lb-stat-value">
              {self ? `#${self.rankPosition}` : "—"}
            </span>
            <span className="lb-stat-label">Your Rank</span>
          </div>
        </div>

        {/* ── Table ── */}
        <div className="lb-table">

          {/* Header */}
          <div className="lb-table-head">
            <span className="lb-col-rank">Rank</span>
            <span className="lb-col-name">Participant</span>
            <span className="lb-col-score">Score</span>
          </div>

          {/* Rows */}
          {top10.length === 0 ? (
            <div className="lb-empty">
              <span>🎯</span>
              <p>No participants yet</p>
            </div>
          ) : (
            top10.map((entry, idx) => {
              const isMe = self?.userId === entry.userId
              const medal = getMedalEmoji(entry.rankPosition)
              const rankCls = getRankClass(entry.rankPosition)

              return (
                <div
                  key={entry.userId}
                  className={`lb-row ${rankCls} ${isMe ? "lb-row-me" : ""}`}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  {/* Rank */}
                  <span className={`lb-rank-cell ${rankCls}`}>
                    {medal ?? <span className="lb-rank-num">#{entry.rankPosition}</span>}
                  </span>

                  {/* User */}
                  <div className="lb-user-cell">
                    <div className={`lb-avatar ${rankCls}`}>
                      {getInitials(entry.displayName)}
                    </div>
                    <span className="lb-username">
                      {entry.displayName}
                      {isMe && <span className="lb-you-badge">YOU</span>}
                    </span>
                  </div>

                  {/* Score */}
                  <span className={`lb-score-cell ${rankCls}`}>
                    {entry.score}
                    <span className="lb-pts">pts</span>
                  </span>
                </div>
              )
            })
          )}
        </div>

        {/* ── Self rank card (if outside top 10) ── */}
        {self && !selfInTop10 && (
          <div className="lb-self-card">
            <div className="lb-self-label">Your Position</div>
            <div className="lb-self-row">
              <div className="lb-self-rank">#{self.rankPosition}</div>
              <div className="lb-self-user">
                <div className="lb-avatar">{getInitials(self.displayName)}</div>
                <span className="lb-username">
                  {self.displayName}
                  <span className="lb-you-badge">YOU</span>
                </span>
              </div>
              <div className="lb-self-score">
                {self.score} <span>pts</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
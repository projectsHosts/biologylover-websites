import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { downloadCompetitionCertificate, getCompetitionLeaderboard } from "../api/competitionApi"
import type { CompetitionLeaderboardResponse } from "../types/competitionTypes"
import "../../../styles/compitions/leaderboard.css"

export default function CompetitionLeaderboard() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<CompetitionLeaderboardResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [downloading, setDownloading] = useState<number | null>(null)

  useEffect(() => {
    if (!id) return
    getCompetitionLeaderboard(Number(id))
      .then(res => { setData(res); setError(null) })
      .catch(err => {
        if (err.message === "RESULT_NOT_PUBLISHED") {
          setError("Result not published yet")
        } else {
          setError("Unable to load leaderboard")
        }
      })
      .finally(() => setLoading(false))
  }, [id])

  const getInitials = (name: string) => name.charAt(0).toUpperCase()

  const getMedalEmoji = (rank: number) =>
    rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : null

  const getRankClass = (rank: number) =>
    rank === 1 ? "gold" : rank === 2 ? "silver" : rank === 3 ? "bronze" : ""

  const getRankLabel = (rank: number) =>
    rank === 1 ? "1st Place" : rank === 2 ? "2nd Place" : rank === 3 ? "3rd Place" : null

  const handleDownload = async (userId: number, name: string) => {
    if (!id) return
    setDownloading(userId)
    try {
      await downloadCompetitionCertificate(Number(id), name)
    } catch (err: any) {
      console.error("Certificate error:", err)
      alert(err?.message || "Failed to generate certificate. Please try again.")
    } finally {
      setDownloading(null)
    }
  }

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
            <p className="lb-subtitle">The result will be available once it is officially published.</p>
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button className="lb-back" onClick={() => navigate(-1)}>Go Back</button>
          </div>
        </div>
      </div>
    )
  }

  const top3        = top10.slice(0, 3)
  const podiumOrder = top3.length >= 3 ? [top3[1], top3[0], top3[2]] : []
  const podiumConfig = [
    { cls: "second", emoji: "🥈", label: "2ND", stageClass: "lb-stage-silver" },
    { cls: "first",  emoji: "🥇", label: "1ST", stageClass: "lb-stage-gold"   },
    { cls: "third",  emoji: "🥉", label: "3RD", stageClass: "lb-stage-bronze" },
  ]
  const selfInTop10 = top10.some(u => u.userId === self?.userId)
  const isWinner    = self ? self.rankPosition <= 3 : false

  return (
    <div className="lb-root">
      <div className="lb-blob lb-blob-1" />
      <div className="lb-blob lb-blob-2" />

      <div className="lb-page">

        {/* Back */}
        <button className="lb-back" onClick={() => navigate(-1)}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </button>

        {/* Hero */}
        <div className="lb-hero">
          <div className="lb-trophy">🏆</div>
          <h1 className="lb-title">Leaderboard</h1>
          <p className="lb-subtitle">Top performers from this competition</p>
        </div>

        {/* Podium */}
        {podiumOrder.length === 3 && (
          <div className="lb-podium-wrapper">
            {podiumOrder.map((entry, i) => {
              const cfg = podiumConfig[i]
              return (
                <div key={entry.userId} className={`lb-podium-item ${cfg.cls}`}>
                  <div className="lb-podium-avatar">
                    {entry.profileImage ? (
                      <img src={entry.profileImage} alt={entry.displayName} className="lb-podium-img" />
                    ) : (
                      <span>{getInitials(entry.displayName)}</span>
                    )}
                    <div className="lb-podium-medal">{cfg.emoji}</div>
                  </div>
                  <div className="lb-podium-name">{entry.displayName}</div>
                  <div className="lb-podium-score">{entry.score}</div>
                  <div className={`lb-podium-stage ${cfg.stageClass}`}>
                    <div className="lb-stage-glow-line" />
                    <div className="lb-stage-shimmer" />
                    <span className="lb-podium-pos">{cfg.label}</span>
                  </div>
                </div>
              )
            })}
            <div className="lb-podium-floor" />
          </div>
        )}

        {/* Stats */}
        <div className="lb-stats-strip">
          <div className="lb-stat">
            <span className="lb-stat-value">Top {top10.length}</span>
            <span className="lb-stat-label">Participants</span>
          </div>
          <div className="lb-stat-divider" />
          <div className="lb-stat">
            <span className="lb-stat-value">{top10[0]?.score ?? "—"}</span>
            <span className="lb-stat-label">Top Score</span>
          </div>
          <div className="lb-stat-divider" />
          <div className="lb-stat">
            <span className="lb-stat-value">{self ? `#${self.rankPosition}` : "—"}</span>
            <span className="lb-stat-label">Your Rank</span>
          </div>
        </div>

        {/* Table — 3 columns only, no certificate column */}
        <div className="lb-table">
          <div className="lb-table-head">
            <span className="lb-col-rank">Rank</span>
            <span className="lb-col-name">Participant</span>
            <span className="lb-col-score">Score</span>
          </div>

          {top10.length === 0 ? (
            <div className="lb-empty">
              <span>🎯</span>
              <p>No participants yet</p>
            </div>
          ) : (
            top10.map((entry, idx) => {
              const isMe   = self?.userId === entry.userId
              const medal  = getMedalEmoji(entry.rankPosition)
              const rankCls = getRankClass(entry.rankPosition)
              return (
                <div
                  key={entry.userId}
                  className={`lb-row ${rankCls} ${isMe ? "lb-row-me" : ""}`}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <span className={`lb-rank-cell ${rankCls}`}>
                    {medal ?? <span className="lb-rank-num">#{entry.rankPosition}</span>}
                  </span>
                  <div className="lb-user-cell">
                    <div className={`lb-avatar ${rankCls}`}>
                      {entry.profileImage ? (
                        <img src={entry.profileImage} alt={entry.displayName} className="lb-avatar-img" />
                      ) : (
                        getInitials(entry.displayName)
                      )}
                    </div>
                    <span className="lb-username">
                      {entry.displayName}
                      {isMe && <span className="lb-you-badge">YOU</span>}
                    </span>
                  </div>
                  <span className={`lb-score-cell ${rankCls}`}>{entry.score}</span>
                </div>
              )
            })
          )}
        </div>

        {/* Self card — outside top 10 */}
        {self && !selfInTop10 && (
          <div className="lb-self-card">
            <div className="lb-self-label">Your Position</div>
            <div className="lb-self-row">
              <div className="lb-self-rank">#{self.rankPosition}</div>
              <div className="lb-self-user">
                <div className="lb-avatar">
                  {self.profileImage ? (
                    <img src={self.profileImage} alt={self.displayName} className="lb-avatar-img" />
                  ) : (
                    getInitials(self.displayName)
                  )}
                </div>
                <span className="lb-username">
                  {self.displayName}
                  <span className="lb-you-badge">YOU</span>
                </span>
              </div>
              <div className="lb-self-score">{self.score}</div>
            </div>
          </div>
        )}

        {/* ── Your Certificate Section ── */}
        {self && (
          <div className="lb-cert-section">
            <div className="lb-cert-section-label">Your Certificate</div>
            <div className="lb-cert-section-card">

              {/* Left — info */}
              <div className="lb-cert-section-info">
                <div className="lb-cert-section-name">{self.displayName}</div>
                <div className="lb-cert-section-meta">
                  {isWinner
                    ? `Winner — ${getRankLabel(self.rankPosition)}`
                    : `Participant — Rank #${self.rankPosition}`
                  }
                  <span className="lb-cert-section-dot" />
                  Score: {self.score}
                </div>
                <div className="lb-cert-section-note">
                  Download your certificate. Each certificate has a unique ID and can be verified online.{" "}
                   <span
                    className="lb-cert-verify-link"
                    onClick={() => navigate("/certificate/verify")}
                  >
                    Verify a certificate →
                  </span>
                </div>
              </div>

              {/* Right — download button */}
              <button
                className={`lb-cert-section-btn ${isWinner ? "lb-csb-winner" : "lb-csb-participant"}`}
                onClick={() => handleDownload(self.userId, self.displayName)}
                disabled={downloading === self.userId}
              >
                {downloading === self.userId ? (
                  <><span className="lb-cert-loading" /> Generating...</>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2v8M4 7l4 4 4-4M2 13h12"
                        stroke="currentColor" strokeWidth="1.8"
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Download Certificate
                  </>
                )}
              </button>

            </div>
          </div>
        )}

      </div>
    </div>
  )
}
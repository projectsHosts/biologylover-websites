import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  getLiveCompetitions,
  getUpcomingCompetitions,
  getCompletedCompetitions
} from "../api/competitionApi"
import type { Competition } from "../types/competitionTypes"
import "../../../styles/compitions/competitionPages.css"

/* ─── Competition Card Component ─── */
function CompCard({
  comp,
  variant = "default"
}: {
  comp: Competition
  variant?: "live" | "upcoming" | "default"
}) {
  const navigate = useNavigate()

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })

  return (
    <div
      className={`cp-card${variant === "live" ? " cp-live-card" : ""}`}
      onClick={() => navigate(`/competition/${comp.id}`)}
    >
      {comp.bannerUrl ? (
        <img className="cp-card-banner" src={comp.bannerUrl} alt={comp.title} />
      ) : (
        <div className="cp-card-banner-placeholder">🏆</div>
      )}

      <div className="cp-card-body">
        <div className="cp-card-meta">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {variant === "live" && <div className="cp-status-dot" />}
            <span className={`cp-tag ${comp.isFree ? "free" : "paid"}`}>
              {comp.isFree ? "Free" : `₹${comp.price}`}
            </span>
          </div>
          <span style={{ fontSize: 12, color: "#4a5568" }}>
            {comp.durationMinutes} min
          </span>
        </div>

        <h3 className="cp-card-title">{comp.title}</h3>
        <p className="cp-card-desc">{comp.description}</p>

        <div className="cp-card-footer">
          <div className="cp-time-info">
            {variant === "live" ? (
              <>Ends <span>{formatDate(comp.endTime)}</span></>
            ) : variant === "upcoming" ? (
              <>Starts <span>{formatDate(comp.startTime)}</span></>
            ) : (
              <>Ended <span>{formatDate(comp.endTime)}</span></>
            )}
          </div>
          <button
            className="cp-btn-view"
            onClick={(e) => { e.stopPropagation(); navigate(`/competition/${comp.id}`) }}
          >
            {variant === "default" ? "Results" : "View"}
          </button>
        </div>
      </div>
    </div>
  )
}

/* ─── Main Competition List Page ─── */
export default function CompetitionList() {
  const [live, setLive] = useState<Competition[]>([])
  const [upcoming, setUpcoming] = useState<Competition[]>([])
  const [completed, setCompleted] = useState<Competition[]>([])
  const visibleCompleted = completed.slice(0, 3)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    const load = async () => {
      const [l, u, c] = await Promise.all([
        getLiveCompetitions(),
        getUpcomingCompetitions(),
        getCompletedCompetitions()
      ])
      setLive(l)
      setUpcoming(u)
      setCompleted(c)
      setLoading(false)
    }
    load()
  }, [])

  if (loading) {
    return (
      <div className="cp-scope">
        <div className="cp-bg" />
        <div className="cp-loading">
          <div className="cp-loading-spinner" />
        </div>
      </div>
    )
  }

  return (
    <div className="cp-scope">
      <div className="cp-bg" />

      <div className="cp-page">
        {/* Hero */}
        <div className="cp-hero">
          <span className="cp-hero-eyebrow">Test Your Skills</span>
          <h1 className="cp-hero-title">
            Competition <em>Arena</em>
          </h1>
          <p className="cp-hero-sub">
            Compete with top performers, climb the leaderboard, and prove your knowledge in real-time challenges.
          </p>
        </div>

        {/* Live */}
        <div className="cp-section-header">
          <div className="cp-section-badge live">
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor", display: "inline-block" }} />
            Live Now
          </div>
          <div className="cp-section-line" />
          <span className="cp-section-count">{live.length} active</span>
        </div>

        {live.length > 0 ? (
          <div className="cp-grid">
            {live.map(c => <CompCard key={c.id} comp={c} variant="live" />)}
          </div>
        ) : (
          <div className="cp-empty">No live competitions right now</div>
        )}

        {/* Upcoming */}
        <div className="cp-section-header">
          <div className="cp-section-badge upcoming">⏳ Upcoming</div>
          <div className="cp-section-line" />
          <span className="cp-section-count">{upcoming.length} scheduled</span>
        </div>

        {upcoming.length > 0 ? (
          <div className="cp-grid">
            {upcoming.map(c => <CompCard key={c.id} comp={c} variant="upcoming" />)}
          </div>
        ) : (
          <div className="cp-empty">No upcoming competitions scheduled</div>
        )}

        {/* Completed */}
       {/* Completed */}
<div className="cp-section-header">
  <div className="cp-section-badge completed">✓ Completed</div>
  <div className="cp-section-line" />
  <span className="cp-section-count">{completed.length} finished</span>
</div>

{completed.length > 0 ? (
  <>
    <div className="cp-grid">
      {visibleCompleted.map(c => (
        <CompCard key={c.id} comp={c} variant="default" />
      ))}
    </div>

    {completed.length > 3 && (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          className="cp-btn-viewall-clean"
          onClick={() => navigate("/competition/completed")}
        >
          View All →
        </button>
      </div>
    )}
  </>
) : (
  <div className="cp-empty">No completed competitions yet</div>
)}
      </div>
    </div>

    
  )
}
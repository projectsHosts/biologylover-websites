import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  getLiveCompetitions,
  getUpcomingCompetitions,
  getCompletedCompetitions
} from "../api/competitionApi"
import type { Competition } from "../types/competitionTypes"
import "../../../styles/compitions/competitionPages.css"

/* ─────────────────────────────────────
   Competition Card Component (inline)
───────────────────────────────────── */
function CompCard({
  comp,
  variant = "default"
}: {
  comp: Competition
  variant?: "live" | "upcoming" | "default"
}) {
  const navigate = useNavigate()

  const formatDate = (iso: string) => {
    return new Date(iso).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })
  }

  return (
    <div
      className={`comp-card${variant === "live" ? " live-card" : ""}`}
      onClick={() => navigate(`/competition/${comp.id}`)}
    >
      {comp.bannerUrl ? (
        <img
          className="comp-card-banner"
          src={comp.bannerUrl}
          alt={comp.title}
        />
      ) : (
        <div className="comp-card-banner-placeholder">🏆</div>
      )}

      <div className="comp-card-body">
        <div className="comp-card-meta">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {variant === "live" && <div className="comp-status-dot" />}
            <span className={`comp-tag ${comp.isFree ? "free" : "paid"}`}>
              {comp.isFree ? "Free" : `₹${comp.price}`}
            </span>
          </div>
          <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
            {comp.durationMinutes} min
          </span>
        </div>

        <h3 className="comp-card-title">{comp.title}</h3>
        <p className="comp-card-desc">{comp.description}</p>

        <div className="comp-card-footer">
          <div className="comp-time-info">
            {variant === "live" ? (
              <>Ends <span>{formatDate(comp.endTime)}</span></>
            ) : variant === "upcoming" ? (
              <>Starts <span>{formatDate(comp.startTime)}</span></>
            ) : (
              <>Ended <span>{formatDate(comp.endTime)}</span></>
            )}
          </div>
          <button className="btn-view" onClick={(e) => { e.stopPropagation(); navigate(`/competition/${comp.id}`) }}>
            {variant === "default" ? "Results" : "View"}
          </button>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────
   Main Competition List Page
───────────────────────────────────── */
export default function CompetitionList() {
  const [live, setLive] = useState<Competition[]>([])
  const [upcoming, setUpcoming] = useState<Competition[]>([])
  const [completed, setCompleted] = useState<Competition[]>([])
  const [loading, setLoading] = useState(true)

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
      <div style={{ background: "var(--bg-base)", minHeight: "100vh" }}>
        <div className="comp-bg" />
        <div className="comp-loading">
          <div className="loading-spinner" />
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: "var(--bg-base)", minHeight: "100vh" }}>
      <div className="comp-bg" />

      <div className="comp-page">
        {/* Hero */}
        <div className="comp-hero">
          <p className="comp-hero-eyebrow">Test Your Skills</p>
          <h1 className="comp-hero-title">
            Competition <em>Arena</em>
          </h1>
          <p className="comp-hero-sub">
            Compete with top performers, climb the leaderboard, and prove your knowledge in real-time challenges.
          </p>
        </div>

        {/* ── Live ── */}
        <div className="section-header">
          <div className="section-badge live">
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor", display: "inline-block" }} />
            Live Now
          </div>
          <div className="section-line" />
          <span className="section-count">{live.length} active</span>
        </div>

        {live.length > 0 ? (
          <div className="comp-grid">
            {live.map(c => <CompCard key={c.id} comp={c} variant="live" />)}
          </div>
        ) : (
          <div className="comp-empty">No live competitions right now</div>
        )}

        {/* ── Upcoming ── */}
        <div className="section-header">
          <div className="section-badge upcoming">⏳ Upcoming</div>
          <div className="section-line" />
          <span className="section-count">{upcoming.length} scheduled</span>
        </div>

        {upcoming.length > 0 ? (
          <div className="comp-grid">
            {upcoming.map(c => <CompCard key={c.id} comp={c} variant="upcoming" />)}
          </div>
        ) : (
          <div className="comp-empty">No upcoming competitions scheduled</div>
        )}

        {/* ── Completed ── */}
        <div className="section-header">
          <div className="section-badge completed">✓ Completed</div>
          <div className="section-line" />
          <span className="section-count">{completed.length} finished</span>
        </div>

        {completed.length > 0 ? (
          <div className="comp-grid">
            {completed.map(c => <CompCard key={c.id} comp={c} variant="default" />)}
          </div>
        ) : (
          <div className="comp-empty">No completed competitions yet</div>
        )}
      </div>
    </div>
  )
}
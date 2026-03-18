import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCompletedCompetitions } from "../api/competitionApi"
import type { Competition } from "../types/competitionTypes"
import "../../../styles/compitions/competitionPages.css"

export default function CompletedPage() {
  const [completed, setCompleted] = useState<Competition[]>([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    getCompletedCompetitions()
      .then(setCompleted)
      .finally(() => setLoading(false))
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

        {/* 🔙 Back Button */}
        <button className="cp-btn-back" onClick={() => navigate(-1)}>
          ← Back
        </button>

        {/* 🔥 Header SAME as list */}
        <div className="cp-section-header" style={{ marginTop: "20px" }}>
          <div className="cp-section-badge completed">✓ Completed</div>
          <div className="cp-section-line" />
          <span className="cp-section-count">{completed.length} finished</span>
        </div>

        {/* Cards */}
        {completed.length > 0 ? (
          <div className="cp-grid">
            {completed.map(c => (
              <div key={c.id} onClick={() => navigate(`/competition/${c.id}`)}>
                <div className="cp-card">
                  {c.bannerUrl ? (
                    <img className="cp-card-banner" src={c.bannerUrl} />
                  ) : (
                    <div className="cp-card-banner-placeholder">🏆</div>
                  )}

                  <div className="cp-card-body">
                    <div className="cp-card-meta">
                      <span className={`cp-tag ${c.isFree ? "free" : "paid"}`}>
                        {c.isFree ? "Free" : `₹${c.price}`}
                      </span>
                      <span style={{ fontSize: 12, color: "#4a5568" }}>
                        {c.durationMinutes} min
                      </span>
                    </div>

                    <h3 className="cp-card-title">{c.title}</h3>
                    <p className="cp-card-desc">{c.description}</p>

                    <div className="cp-card-footer">
                      <div className="cp-time-info">
                        Ended{" "}
                        <span>
                          {new Date(c.endTime).toLocaleString("en-US", {
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit"
                          })}
                        </span>
                      </div>

                      <button
                        className="cp-btn-view"
                        onClick={(e) => {
                          e.stopPropagation()
                          navigate(`/competition/${c.id}`)
                        }}
                      >
                        Results
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="cp-empty">No completed competitions yet</div>
        )}
      </div>
    </div>
  )
}
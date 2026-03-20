import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { verifyCertificate } from "../api/competitionApi"
import "../../../styles/compitions/certificate-verify.css"

interface CertificateData {
  uuid: string
  recipientName: string
  competitionTitle: string
  certificateType: string
  rankPosition: number
  issuedAt: string
}

export default function CertificateVerify() {
  const { uuid } = useParams<{ uuid?: string }>()
  const navigate = useNavigate()

  const [inputUuid, setInputUuid] = useState(uuid ?? "")
  const [data, setData] = useState<CertificateData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searched, setSearched] = useState(false)

  useEffect(() => {
    if (uuid) handleVerify(uuid)
  }, [uuid])

  const handleVerify = async (id: string) => {
    if (!id.trim()) return
    setLoading(true)
    setError(null)
    setData(null)
    setSearched(true)
    try {
      const result = await verifyCertificate(id.trim().toUpperCase())
      setData(result)
    } catch (err: any) {
      setError(
        err?.message === "Certificate not found."
          ? "No certificate found with this ID. Please check and try again."
          : "Verification failed. Please try again."
      )
    } finally {
      setLoading(false)
    }
  }

  const getRankLabel = (rank: number) =>
    rank === 1 ? "1st Place" : rank === 2 ? "2nd Place" : rank === 3 ? "3rd Place" : `Rank #${rank}`

  const formatDate = (iso: string) => {
    try {
      return new Date(iso).toLocaleDateString("en-IN", {
        year: "numeric", month: "long", day: "numeric",
      })
    } catch { return iso }
  }

  const isWinner = data?.certificateType === "WINNER"

  return (
    <div className="cv-root">

      {/* ── Full-width hero banner ── */}
      <div className="cv-hero-banner">
        <div className="cv-hero-inner">
          <button className="cv-back-btn" onClick={() => navigate(-1)}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back
          </button>
          <h1 className="cv-hero-title">Certificate Verification</h1>
          <p className="cv-hero-sub">
            Verify the authenticity of any BiologyLover certificate instantly
          </p>
        </div>
      </div>

      {/* ── Main body — full width 2-col layout ── */}
      <div className="cv-body">

        {/* LEFT — Search + Result */}
        <div className="cv-left">

          {/* Search card */}
          <div className="cv-search-card">
            <div className="cv-search-header">
              <div className="cv-search-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="cv-search-title">Enter Certificate ID</div>
                <div className="cv-search-desc">Paste the unique ID from the certificate</div>
              </div>
            </div>
            <div className="cv-input-wrap">
              <input
                className="cv-input"
                type="text"
                placeholder="e.g. F0D202FB-F9BE-400C-BE96-....."
                value={inputUuid}
                onChange={e => setInputUuid(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleVerify(inputUuid)}
                spellCheck={false}
              />
            </div>
            <button
              className="cv-verify-btn"
              onClick={() => handleVerify(inputUuid)}
              disabled={loading}
            >
              {loading ? (
                <><span className="cv-spinner" /> Verifying...</>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Verify Certificate
                </>
              )}
            </button>
          </div>

          {/* Result */}
          {searched && !loading && (
            data ? (
              <div className="cv-result-card">
                <div className="cv-status-bar cv-status-valid">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="rgba(34,197,94,0.15)"/>
                    <path d="M8 12l3 3 5-5" stroke="#22c55e" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Certificate Successfully Verified
                </div>

                <div className={`cv-cert-info ${isWinner ? "cv-info-gold" : "cv-info-blue"}`}>
                  <div className={`cv-cert-type-tag ${isWinner ? "cv-tag-gold" : "cv-tag-blue"}`}>
                    {isWinner ? "Winner Certificate" : "Participation Certificate"}
                  </div>

                  <div className="cv-cert-name">{data.recipientName}</div>

                  <div className="cv-cert-sentence">
                    {isWinner
                      ? `Achieved ${getRankLabel(data.rankPosition)} in`
                      : "Successfully participated in"
                    }
                  </div>
                  <div className={`cv-cert-comp-name ${isWinner ? "cv-gold" : "cv-indigo"}`}>
                    {data.competitionTitle}
                  </div>

                  <div className="cv-meta-grid">
                    <div className="cv-meta-item">
                      <span className="cv-meta-lbl">Date of Issue</span>
                      <span className="cv-meta-val">{formatDate(data.issuedAt)}</span>
                    </div>
                    <div className="cv-meta-item">
                      <span className="cv-meta-lbl">Rank</span>
                      <span className="cv-meta-val">{getRankLabel(data.rankPosition)}</span>
                    </div>
                    <div className="cv-meta-item">
                      <span className="cv-meta-lbl">Certificate Type</span>
                      <span className="cv-meta-val">{data.certificateType}</span>
                    </div>
                    <div className="cv-meta-item">
                      <span className="cv-meta-lbl">Issued By</span>
                      <span className="cv-meta-val">BiologyLover</span>
                    </div>
                  </div>

                  <div className="cv-uuid-row">
                    <span className="cv-meta-lbl">Certificate ID</span>
                    <span className="cv-uuid-val">{data.uuid}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="cv-result-card">
                <div className="cv-status-bar cv-status-invalid">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="rgba(239,68,68,0.15)"/>
                    <path d="M15 9l-6 6M9 9l6 6" stroke="#ef4444" strokeWidth="2"
                      strokeLinecap="round"/>
                  </svg>
                  {error}
                </div>
              </div>
            )
          )}
        </div>

        {/* RIGHT — Info panel */}
        <div className="cv-right">
          <div className="cv-info-panel">
            <div className="cv-info-heading">How to Verify</div>
            <div className="cv-steps">
              <div className="cv-step">
                <div className="cv-step-num">01</div>
                <div className="cv-step-text">
                  <strong>Find the Certificate ID</strong>
                  <span>Located at the bottom-left of your downloaded certificate PDF.</span>
                </div>
              </div>
              <div className="cv-step">
                <div className="cv-step-num">02</div>
                <div className="cv-step-text">
                  <strong>Paste the ID</strong>
                  <span>Enter the full UUID in the verification field on the left.</span>
                </div>
              </div>
              <div className="cv-step">
                <div className="cv-step-num">03</div>
                <div className="cv-step-text">
                  <strong>Verify Instantly</strong>
                  <span>Click Verify to instantly confirm the certificate details.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cv-trust-panel">
            <div className="cv-trust-heading">Certificate Types</div>
            <div className="cv-trust-item cv-trust-gold">
              <div className="cv-trust-dot cv-dot-gold" />
              <div>
                <strong>Winner Certificate</strong>
                <span>Awarded to top 3 rank holders</span>
              </div>
            </div>
            <div className="cv-trust-item cv-trust-indigo">
              <div className="cv-trust-dot cv-dot-indigo" />
              <div>
                <strong>Participation Certificate</strong>
                <span>Awarded to all participants</span>
              </div>
            </div>
          </div>

          <div className="cv-secure-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L4 6v6c0 5.25 3.5 9.74 8 11 4.5-1.26 8-5.75 8-11V6l-8-4z"
                stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All certificates are cryptographically secured with a unique UUID and verifiable online.
          </div>
        </div>

      </div>
    </div>
  )
}
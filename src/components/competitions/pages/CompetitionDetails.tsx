import { useEffect, useState, useCallback } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
  checkRegistrationStatus,
  createCompetitionOrder,
  getAttemptStatus,
  getCompetitionById,
  getCompetitionDetails,
  registerCompetition,
  verifyCompetitionPayment
} from "../api/competitionApi"
import type { Competition, CompetitionDetails } from "../types/competitionTypes"
import "../../../styles/compitions/competitionPages.css"
import { isLoggedIn } from "../../../utils/auth"

type ToastType = "success" | "error" | "info"
interface ToastItem { id: number; message: string; type: ToastType }

function ToastNotification({ toast, onClose, index }: { toast: ToastItem; onClose: (id: number) => void; index: number }) {
  const [visible, setVisible] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const duration = 3800

  useEffect(() => {
    const enterTimer = setTimeout(() => setVisible(true), 10)
    const leaveTimer = setTimeout(() => { setLeaving(true); setTimeout(() => onClose(toast.id), 400) }, duration)
    return () => { clearTimeout(enterTimer); clearTimeout(leaveTimer) }
  }, [toast.id, onClose])

  const handleClose = () => { setLeaving(true); setTimeout(() => onClose(toast.id), 400) }

  const config = {
    success: {
      bar: "#4ade80", glow: "rgba(74,222,128,0.18)", title: "Registration Successful!",
      icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="rgba(74,222,128,0.15)" stroke="#4ade80" strokeWidth="1.5" /><path d="M7.5 12.5l3 3 6-6" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>),
    },
    error: {
      bar: "#f87171", glow: "rgba(248,113,113,0.18)", title: "Something went wrong",
      icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="rgba(248,113,113,0.15)" stroke="#f87171" strokeWidth="1.5" /><path d="M15 9l-6 6M9 9l6 6" stroke="#f87171" strokeWidth="2" strokeLinecap="round" /></svg>),
    },
    info: {
      bar: "#60a5fa", glow: "rgba(96,165,250,0.18)", title: "Heads up!",
      icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="rgba(96,165,250,0.15)" stroke="#60a5fa" strokeWidth="1.5" /><path d="M12 8v4M12 16h.01" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" /></svg>),
    },
  }
  const { bar, glow, title, icon } = config[toast.type]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,600;1,9..40,400&display=swap');
        @keyframes toast-shrink-${toast.id} { from { width: 100%; } to { width: 0%; } }
      `}</style>
      <div style={{ position: "fixed", top: `${24 + index * 88}px`, right: "24px", zIndex: 9999 + index, maxWidth: "360px", width: "calc(100vw - 48px)", transform: visible && !leaving ? "translateX(0) scale(1)" : "translateX(120%) scale(0.9)", opacity: visible && !leaving ? 1 : 0, transition: "transform 0.45s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease" }}>
        <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px", padding: "14px 16px 14px 20px", display: "flex", alignItems: "flex-start", gap: "11px", boxShadow: `0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), 0 0 40px ${glow}`, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "-30px", left: "-30px", width: "140px", height: "140px", borderRadius: "50%", background: glow, filter: "blur(35px)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", left: 0, top: "12%", height: "76%", width: "3px", borderRadius: "0 3px 3px 0", background: `linear-gradient(to bottom, ${bar}, ${bar}88)`, boxShadow: `0 0 10px ${bar}` }} />
          <div style={{ flexShrink: 0, marginTop: "1px" }}>{icon}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ margin: 0, fontSize: "13.5px", fontWeight: 600, color: "#f1f5f9", letterSpacing: "0.01em", fontFamily: "'DM Sans', sans-serif" }}>{title}</p>
            <p style={{ margin: "3px 0 0", fontSize: "12.5px", color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif", lineHeight: "1.45" }}>{toast.message}</p>
          </div>
          <button onClick={handleClose} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.25)", cursor: "pointer", padding: "0 2px", fontSize: "18px", lineHeight: 1, flexShrink: 0, transition: "color 0.2s", fontFamily: "sans-serif" }} onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}>×</button>
          <div style={{ position: "absolute", bottom: 0, left: 0, height: "2.5px", background: `linear-gradient(to right, ${bar}, ${bar}55)`, borderRadius: "0 0 14px 14px", animation: `toast-shrink-${toast.id} ${duration}ms linear forwards` }} />
        </div>
      </div>
    </>
  )
}

function ToastContainer({ toasts, onClose }: { toasts: ToastItem[]; onClose: (id: number) => void }) {
  return <>{toasts.map((toast, index) => <ToastNotification key={toast.id} toast={toast} onClose={onClose} index={index} />)}</>
}

function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([])
  const showToast = useCallback((message: string, type: ToastType = "success") => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, message, type }])
  }, [])
  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])
  return { showToast, toasts, removeToast }
}

export default function CompetitionDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { showToast, toasts, removeToast } = useToast()

  const [comp, setComp] = useState<Competition>()
  const [registered, setRegistered] = useState(false)
  const [loading, setLoading] = useState(false)
  const [pageLoading, setPageLoading] = useState(true)
  const [now, setNow] = useState(new Date())
  const [showModal, setShowModal] = useState(false)
  const [attempted, setAttempted] = useState(false)
  const [attemptStatus, setAttemptStatus] = useState("")
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [details, setDetails] = useState<CompetitionDetails | null>(null)

  // ✅ city, state, pincode added
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    instagramHandle: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "", 
  })

  const handleFinalRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!id || !comp) return

    // ✅ All fields validation including new ones
    if (
      !formData.fullName.trim() ||
      !formData.contactNumber.trim() ||
      !formData.instagramHandle.trim() ||
      !formData.email.trim() ||
      !formData.address.trim() ||
      !formData.city.trim() ||
      !formData.state.trim() ||
      !formData.pincode.trim()
    ) {
      showToast("Please fill all required fields", "error")
      return
    }

    if (!/^[0-9]{10}$/.test(formData.contactNumber)) {
      showToast("Enter a valid 10 digit contact number", "error")
      return
    }

    // ✅ Pincode validation
    if (!/^[0-9]{6}$/.test(formData.pincode)) {
      showToast("Enter a valid 6 digit pincode", "error")
      return
    }

    try {
      setLoading(true)
      if (comp.isFree) {
        const response = await registerCompetition(Number(id), formData)
        if (response.trim() === "REGISTERED") {
          setRegistered(true)
          setShowRegisterModal(false)
          showToast("You're all set! Good luck in the competition 🎉", "success")
        }
        return
      }
      const order = await createCompetitionOrder(Number(id))
      setLoading(false)
      const options = {
        key: order.key,
        amount: order.amount,
        currency: order.currency,
        name: comp.title,
        order_id: order.orderId,
        handler: async function (response: any) {
          try {
            await verifyCompetitionPayment(Number(id), {
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            })
            setRegistered(true)
            setShowRegisterModal(false)
            showToast("Payment successful! You're registered 🎉", "success")
          } catch {
            showToast("Payment done but registration failed. Contact support.", "error")
          }
        },
        modal: { ondismiss: () => {} },
      }
      const rzp = new (window as any).Razorpay(options)
      rzp.open()
      return
    } catch {
      showToast("Something went wrong. Please try again.", "error")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date())
      if (comp) {
        const msToStart = new Date(comp.startTime).getTime() - Date.now()
        const msToEnd = new Date(comp.endTime).getTime() - Date.now()
        const nearTransition =
          (msToStart > -5_000 && msToStart < 5_000) ||
          (msToEnd > -5_000 && msToEnd < 5_000)
        if (nearTransition) {
          getCompetitionById(Number(id)).then(setComp).catch(() => {})
        }
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [comp, id])


  useEffect(() => {
  if (!id) return

  const load = async () => {
    try {
      const data = await getCompetitionById(Number(id))
      setComp(data)

      const detailsData = await getCompetitionDetails(Number(id))
      setDetails(detailsData)

      const attempt = await getAttemptStatus(Number(id))
      if (attempt.attempted) {
        setAttempted(true)
        setAttemptStatus(attempt.status || "")
      }

      const status = await checkRegistrationStatus(Number(id))
      setRegistered(status)

    } catch (err) {
      console.error(err)
    } finally {
      setPageLoading(false)
    }
  }

  load()
}, [id])

  useEffect(() => {
    if (!id) return
    const interval = setInterval(() => {
      getCompetitionById(Number(id)).then(setComp).catch(() => {})
      checkRegistrationStatus(Number(id)).then(setRegistered).catch(() => {})
    }, 30_000)
    return () => clearInterval(interval)
  }, [id])

  useEffect(() => {
    if (!id) return
    const load = async () => {
      try {
        const data = await getCompetitionById(Number(id))
        setComp(data)
        const attempt = await getAttemptStatus(Number(id))
        if (attempt.attempted) {
          setAttempted(true)
          setAttemptStatus(attempt.status || "")
        }
        const status = await checkRegistrationStatus(Number(id))
        setRegistered(status)
      } catch (err) {
        console.error(err)
      } finally {
        setPageLoading(false)
      }
    }
    load()
  }, [id])

  if (pageLoading || !comp) {
    return (
      <div className="cp-scope">
        <div className="cp-loading"><div className="cp-loading-spinner" /></div>
      </div>
    )
  }

  const startTime = new Date(comp.startTime)
  const endTime = new Date(comp.endTime)
  const regStart = comp.registrationStart ? new Date(comp.registrationStart) : null
  const regEnd = comp.registrationEnd ? new Date(comp.registrationEnd) : null

  const isBeforeStart = now < startTime
  const isLive = now >= startTime && now <= endTime
  const isEnded = now > endTime

  const isRegistrationOpen = regStart && regEnd && now >= regStart && now <= regEnd
  const isRegistrationClosed = regEnd && now > regEnd

  const getCountdown = () => {
    const diff = startTime.getTime() - now.getTime()
    if (diff <= 0) return "Starting..."
    const totalSeconds = Math.floor(diff / 1000)
    const days = Math.floor(totalSeconds / (24 * 3600))
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60
    if (days > 0) return `${days} Day${days > 1 ? "s" : ""} ${hours}h ${minutes}m ${seconds}s`
    return `${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`
  }

  const getRegistrationCountdown = () => {
  if (!regEnd) return ""

  const diff = regEnd.getTime() - now.getTime()

  if (diff <= 0) return "Registration Closed"

  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / (24 * 3600))
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  if (days > 0) {
    return `${days}d ${hours}h ${minutes}m ${seconds}s`
  }

  return `${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`
}

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleString("en-US", {
      weekday: "short", month: "short", day: "numeric",
      hour: "2-digit", minute: "2-digit",
    })

  const formatShortDate = (date: Date) => {
   return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
  })
}

  const statusBadge = isLive ? (
    <div className="cp-section-badge live">● Live Now</div>
  ) : isBeforeStart ? (
    <div className="cp-section-badge upcoming">⏳ Upcoming</div>
  ) : (
    <div className="cp-section-badge completed">✓ Completed</div>
  )

  function parseRewards(rewards: string) {
    return rewards
      .split('\n')
      .map(line => line.replace(/^\?\s*/, '').trim())
      .filter(Boolean)
  }

  return (
    <div className="cp-scope">
      <ToastContainer toasts={toasts} onClose={removeToast} />

      <div className="cp-detail-page">
        <button className="cp-btn-back" onClick={() => navigate("/competition")}>← Back</button>
        <div className="cp-banner-wrapper">
        {comp.bannerUrl ? (
          <img className="cp-detail-banner" src={comp.bannerUrl} alt={comp.title} />
        ) : (
          <div className="cp-detail-banner-placeholder">🏆</div>
        )}
     </div>
        <div className="cp-detail-header">
          <div className="cp-detail-tags">
            {statusBadge}
            <span className={`cp-tag ${comp.isFree ? "free" : "paid"}`}>
              {comp.isFree ? "Free Entry" : `₹${comp.price}`}
            </span>
          </div>
          <h1>{comp.title}</h1>
          <p>{comp.description}</p>
        </div>

        <div className="cp-action-area">
          {/* UPCOMING */}
          {isBeforeStart && (
            <>
              {!registered && isRegistrationOpen && (
                 <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <button className="cp-btn-primary" onClick={() => {
                  if (!isLoggedIn()) { (window as any).openLogin(); return }
                  setShowRegisterModal(true)
                }} disabled={loading}>
                  {loading ? "Registering..." : "Register Now →"}
                </button>
                 <div className="cp-countdown-display">
                   Ends on {formatShortDate(regEnd!)} • {getRegistrationCountdown()}
                </div>
                </div>
                

              )}
              {!registered && isRegistrationClosed && (
                <button className="cp-btn-disabled">Registration Closed</button>
              )}
              {registered && (
                <>
                  <button className="cp-btn-primary" disabled>
                    🔒 Starts at {formatDate(comp.startTime)}
                  </button>
                  <div className="cp-countdown-display">Starts in {getCountdown()}</div>
                </>
              )}
            </>
          )}

          {/* LIVE */}
          {isLive && (
            <>
              {attempted && (attemptStatus === "SUBMITTED" || attemptStatus === "TIME_UP") ? (
                <button className="cp-btn-submitted">Submitted – Wait for Result</button>
              ) : registered ? (
                <button className="cp-btn-start" onClick={() => {
                  if (!isLoggedIn()) { (window as any).openLogin(); return }
                  navigate(`/competition/pretest/${comp.id}`)
                }}>
                  Enter Competition
                </button>
              ) : (
                <button className="cp-btn-warning" onClick={() => setShowModal(true)}>
                  Registration Required
                </button>
              )}
            </>
          )}

          {/* COMPLETED */}
          {isEnded && (
            <>
              <button className="cp-btn-ended"> Competition Ended</button>
              <button className="cp-btn-leaderboard" onClick={() => {
                if (!isLoggedIn()) { (window as any).openLogin(); return }
                navigate(`/competition/leaderboard/${comp.id}`)
              }}>
                View Result
              </button>
            </>
          )}
        </div>
{details && (
  <div className="cp-unstop-info">
    <div className="cp-unstop-header">
      <span className="cp-unstop-bar" />
      All that you need to know — {comp.title}
    </div>

    <div className="cp-unstop-grid">

      {/* Overview */}
      <div className="cp-unstop-card overview">
        <div className="cp-card-label overview-label">Overview</div>
        <p>{details.overview}</p>
      </div>

      {/* Eligibility */}
      <div className="cp-unstop-card eligibility">
        <div className="cp-card-label eligibility-label">Eligibility</div>
        <p>{details.eligibility}</p>
      </div>

      {/* Rules */}
      <div className="cp-unstop-card rules">
        <div className="cp-card-label rules-label">Rules</div>
        <ul className="cp-bullet-list">
          {details.rules.split('\n').filter(Boolean).map((rule, i) => (
            <li key={i}>{rule.replace(/^\d+\.\s*/, '')}</li>
          ))}
        </ul>
      </div>

      {/* Syllabus */}
      <div className="cp-unstop-card syllabus">
        <div className="cp-card-label syllabus-label">Syllabus</div>
        <p className="syllabus-text">{details.syllabus}</p>
      </div>

    </div>

    {/* Rewards — 2 boxes */}
    <div className="cp-rewards-label-header">
      Rewards & Prizes
    </div>
    <div className="cp-rewards-grid">
      {parseRewards(details.rewards).map((item, i) => {
        const [tier, ...rest] = item.split('?')
        const prize = rest.join('').trim()
        const tierClean = tier.trim()
        const rankColors = [
          { bg: "#1a1400", border: "rgba(250,204,21,0.3)", accent: "#facc15", rank: "🥇" },
          { bg: "#0f1a10", border: "rgba(74,222,128,0.25)", accent: "#4ade80", rank: "🥈" },
          { bg: "#0f1520", border: "rgba(96,165,250,0.25)", accent: "#60a5fa", rank: "🥉" },
        ]
        const color = rankColors[i] || rankColors[2]
        return (
          <div key={i} className="cp-reward-box" style={{
            background: color.bg,
            border: `1px solid ${color.border}`,
          }}>
            <div className="cp-reward-rank" style={{ color: color.accent }}>
              {tierClean}
            </div>
            <div className="cp-reward-prize" style={{ borderTop: `1px solid ${color.border}` }}>
              {prize}
            </div>
          </div>
        )
      })}
    </div>

  </div>
)}

        {/* Not Registered Modal */}
        {showModal && (
          <div className="cp-modal">
            <div className="cp-modal-content">
              <h3>Not Registered</h3>
              <p>You were not registered during the registration period.</p>
              <div className="cp-modal-actions">
                <button className="cp-btn-cancel" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          </div>
        )}

        {/* ✅ Register Modal — with city, state, pincode */}
        {showRegisterModal && (
          <div className="cp-modal">
            <div className="cp-modal-content large">
              <h3>Competition Registration</h3>
              <div className="cp-payment-summary">
                <p>Entry Fee</p>
                <h2>{comp.isFree ? "Free Entry" : `₹${comp.price}`}</h2>
              </div>
              <form onSubmit={handleFinalRegister}>

                <input
                  type="text" required placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
                <input
                  type="text" required placeholder="Contact Number (10 digits)"
                  value={formData.contactNumber}
                  onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                />
                <input
                  type="text" required placeholder="Instagram Handle (e.g. @username)"
                  value={formData.instagramHandle}
                  onChange={(e) => setFormData({ ...formData, instagramHandle: e.target.value })}
                />
                <input
                  type="email" required placeholder="Email ID"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <textarea
                  required placeholder="Address (House No, Street, Area)"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />

                {/* ✅ City + Pincode in one row */}
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    type="text" required placeholder="City"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    style={{ flex: 1 }}
                  />
                  <input
                    type="text" required placeholder="Pincode (6 digits)"
                    value={formData.pincode} maxLength={6}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value.replace(/\D/g, "") })}
                    style={{ flex: 1 }}
                  />
                </div>

                {/* ✅ State Dropdown — all Indian states + UTs */}
                <select
                  required
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "#1e293b",
                    color: formData.state ? "#f1f5f9" : "rgba(255,255,255,0.4)",
                    fontSize: "14px",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  <option value="" disabled>Select State / UT</option>
                  <optgroup label="States">
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                  </optgroup>
                  <optgroup label="Union Territories">
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                  </optgroup>
                </select>

                <div className="cp-modal-actions">
                  <button type="submit" className="cp-btn-primary" disabled={loading}>
                    {loading ? "Processing..." : comp.isFree ? "Submit Registration" : "Proceed to Pay"}
                  </button>
                  <button type="button" className="cp-btn-cancel" onClick={() => setShowRegisterModal(false)}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
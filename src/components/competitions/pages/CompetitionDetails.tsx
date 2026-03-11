import { useEffect, useState, useCallback } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
  checkRegistrationStatus,
  createCompetitionOrder,
  getAttemptStatus,
  getCompetitionById,
  registerCompetition,
  startCompetitionAttempt,
  verifyCompetitionPayment
} from "../api/competitionApi"
import type { Competition } from "../types/competitionTypes"
import "../../../styles/compitions/competitionPages.css"
import { isLoggedIn } from "../../../utils/auth"

/* ================= TOAST SYSTEM ================= */

type ToastType = "success" | "error" | "info"

interface ToastItem {
  id: number
  message: string
  type: ToastType
}

function ToastNotification({
  toast,
  onClose,
  index,
}: {
  toast: ToastItem
  onClose: (id: number) => void
  index: number
}) {
  const [visible, setVisible] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const duration = 3800

  useEffect(() => {
    const enterTimer = setTimeout(() => setVisible(true), 10)
    const leaveTimer = setTimeout(() => {
      setLeaving(true)
      setTimeout(() => onClose(toast.id), 400)
    }, duration)
    return () => {
      clearTimeout(enterTimer)
      clearTimeout(leaveTimer)
    }
  }, [toast.id, onClose])

  const handleClose = () => {
    setLeaving(true)
    setTimeout(() => onClose(toast.id), 400)
  }

  const config = {
    success: {
      bar: "#4ade80",
      glow: "rgba(74,222,128,0.18)",
      title: "Registration Successful!",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="rgba(74,222,128,0.15)" stroke="#4ade80" strokeWidth="1.5" />
          <path d="M7.5 12.5l3 3 6-6" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    error: {
      bar: "#f87171",
      glow: "rgba(248,113,113,0.18)",
      title: "Something went wrong",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="rgba(248,113,113,0.15)" stroke="#f87171" strokeWidth="1.5" />
          <path d="M15 9l-6 6M9 9l6 6" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    info: {
      bar: "#60a5fa",
      glow: "rgba(96,165,250,0.18)",
      title: "Heads up!",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="rgba(96,165,250,0.15)" stroke="#60a5fa" strokeWidth="1.5" />
          <path d="M12 8v4M12 16h.01" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  }

  const { bar, glow, title, icon } = config[toast.type]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,600;1,9..40,400&display=swap');
        @keyframes toast-shrink-${toast.id} {
          from { width: 100%; }
          to   { width: 0%; }
        }
      `}</style>
      <div
        style={{
          position: "fixed",
          top: `${24 + index * 88}px`,
          right: "24px",
          zIndex: 9999 + index,
          maxWidth: "360px",
          width: "calc(100vw - 48px)",
          transform: visible && !leaving ? "translateX(0) scale(1)" : "translateX(120%) scale(0.9)",
          opacity: visible && !leaving ? 1 : 0,
          transition: "transform 0.45s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "14px",
            padding: "14px 16px 14px 20px",
            display: "flex",
            alignItems: "flex-start",
            gap: "11px",
            boxShadow: `0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), 0 0 40px ${glow}`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: "-30px", left: "-30px", width: "140px", height: "140px", borderRadius: "50%", background: glow, filter: "blur(35px)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", left: 0, top: "12%", height: "76%", width: "3px", borderRadius: "0 3px 3px 0", background: `linear-gradient(to bottom, ${bar}, ${bar}88)`, boxShadow: `0 0 10px ${bar}` }} />
          <div style={{ flexShrink: 0, marginTop: "1px" }}>{icon}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ margin: 0, fontSize: "13.5px", fontWeight: 600, color: "#f1f5f9", letterSpacing: "0.01em", fontFamily: "'DM Sans', sans-serif" }}>{title}</p>
            <p style={{ margin: "3px 0 0", fontSize: "12.5px", color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif", lineHeight: "1.45" }}>{toast.message}</p>
          </div>
          <button
            onClick={handleClose}
            style={{ background: "none", border: "none", color: "rgba(255,255,255,0.25)", cursor: "pointer", padding: "0 2px", fontSize: "18px", lineHeight: 1, flexShrink: 0, transition: "color 0.2s", fontFamily: "sans-serif" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
          >×</button>
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

/* ================= MAIN COMPONENT ================= */

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

  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    instagramHandle: "",
    email: "",
    address: "",
  })

  const handleFinalRegister = async () => {
    if (!id || !comp) return
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

  /* ================= LIVE CLOCK ================= */
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
    const interval = setInterval(() => {
      getCompetitionById(Number(id)).then(setComp).catch(() => {})
      checkRegistrationStatus(Number(id)).then(setRegistered).catch(() => {})
    }, 30_000)
    return () => clearInterval(interval)
  }, [id])

  /* ================= LOAD DATA ================= */
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
        <div className="cp-loading">
          <div className="cp-loading-spinner" />
        </div>
      </div>
    )
  }

  /* ================= TIME LOGIC ================= */
  const startTime = new Date(comp.startTime)
  const endTime = new Date(comp.endTime)
  const regStart = comp.registrationStart ? new Date(comp.registrationStart) : null
  const regEnd = comp.registrationEnd ? new Date(comp.registrationEnd) : null

  const isBeforeStart = now < startTime
  const isLive = now >= startTime && now <= endTime
  const isEnded = now > endTime

  const isRegistrationOpen = regStart && regEnd && now >= regStart && now <= regEnd
  const isRegistrationClosed = regEnd && now > regEnd

  /* ================= COUNTDOWN ================= */
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

  /* ================= START TEST ================= */
  const startTest = async () => {
    if (!id) return
    try {
      const res = await startCompetitionAttempt(Number(id))
      navigate(`/competition/attempt/${res.attemptId}`, {
        state: { duration: res.durationMinutes },
      })
    } catch {
      showToast("Unable to start the test. Please try again.", "error")
    }
  }

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleString("en-US", {
      weekday: "short", month: "short", day: "numeric",
      hour: "2-digit", minute: "2-digit",
    })

  const statusBadge = isLive ? (
    <div className="cp-section-badge live">● Live Now</div>
  ) : isBeforeStart ? (
    <div className="cp-section-badge upcoming">⏳ Upcoming</div>
  ) : (
    <div className="cp-section-badge completed">✓ Completed</div>
  )

  return (
    <div className="cp-scope">
      <ToastContainer toasts={toasts} onClose={removeToast} />

      <div className="cp-detail-page">
        <button className="cp-btn-back" onClick={() => navigate("/competition")}>
          ← Back
        </button>

        {comp.bannerUrl ? (
          <img className="cp-detail-banner" src={comp.bannerUrl} alt={comp.title} />
        ) : (
          <div className="cp-detail-banner-placeholder">🏆</div>
        )}

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

        {/* ================= CTA SECTION ================= */}
        <div className="cp-action-area">

          {/* UPCOMING */}
          {isBeforeStart && (
            <>
              {!registered && isRegistrationOpen && (
                <button className="cp-btn-primary" onClick={() => {
                  if (!isLoggedIn()) {
                    (window as any).openLogin(); // 🔥 auth modal
                    return;
                  }
                  setShowRegisterModal(true)}} disabled={loading}>
                  {loading ? "Registering..." : "Register Now →"}
                </button>
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
                   if (!isLoggedIn()) {
                    (window as any).openLogin(); // 🔥 auth modal
                    return;
                  }
                  startTest()}}>

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
              <button className="cp-btn-ended">❌ Competition Ended</button>
              <button className="cp-btn-leaderboard" onClick={() => navigate(`/competition/leaderboard/${comp.id}`)}>
                View Leaderboard
              </button>
            </>
          )}
        </div>

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

        {/* Register Modal */}
        {showRegisterModal && (
          <div className="cp-modal">
            <div className="cp-modal-content large">
              <h3>Competition Registration</h3>
              <input type="text" placeholder="Full Name" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
              <input type="text" placeholder="Contact Number" value={formData.contactNumber} onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })} />
              <input type="text" placeholder="Instagram Handle" value={formData.instagramHandle} onChange={(e) => setFormData({ ...formData, instagramHandle: e.target.value })} />
              <input type="email" placeholder="Email ID" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              <textarea placeholder="Address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
              <div className="cp-modal-actions">
                <button className="cp-btn-primary" onClick={handleFinalRegister} disabled={loading}>
                  {loading ? "Processing..." : comp.isFree ? "Submit Registration" : "Proceed to Pay"}
                </button>
                <button className="cp-btn-cancel" onClick={() => setShowRegisterModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
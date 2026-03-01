import { useEffect, useState } from "react"

type ToastType = "success" | "error" | "info"

interface ToastProps {
  message: string
  type?: ToastType
  duration?: number
  onClose: () => void
}

export function Toast({ message, type = "success", duration = 3500, onClose }: ToastProps) {
  const [visible, setVisible] = useState(false)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    // Trigger enter animation
    const enterTimer = setTimeout(() => setVisible(true), 10)

    // Trigger leave animation
    const leaveTimer = setTimeout(() => {
      setLeaving(true)
      setTimeout(onClose, 400)
    }, duration)

    return () => {
      clearTimeout(enterTimer)
      clearTimeout(leaveTimer)
    }
  }, [duration, onClose])

  const icons = {
    success: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="rgba(74,222,128,0.15)" stroke="#4ade80" strokeWidth="1.5"/>
        <path d="M7.5 12.5l3 3 6-6" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    error: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="rgba(248,113,113,0.15)" stroke="#f87171" strokeWidth="1.5"/>
        <path d="M15 9l-6 6M9 9l6 6" stroke="#f87171" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    info: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="rgba(96,165,250,0.15)" stroke="#60a5fa" strokeWidth="1.5"/>
        <path d="M12 8v4M12 16h.01" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  }

  const colors = {
    success: { bar: "#4ade80", glow: "rgba(74,222,128,0.15)" },
    error:   { bar: "#f87171", glow: "rgba(248,113,113,0.15)" },
    info:    { bar: "#60a5fa", glow: "rgba(96,165,250,0.15)" }
  }

  const { bar, glow } = colors[type]

  return (
    <div style={{
      position: "fixed",
      top: "24px",
      right: "24px",
      zIndex: 9999,
      transform: visible && !leaving ? "translateX(0) scale(1)" : "translateX(110%) scale(0.95)",
      opacity: visible && !leaving ? 1 : 0,
      transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.35s ease",
      maxWidth: "360px",
      width: "100%",
    }}>
      <div style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        border: `1px solid rgba(255,255,255,0.08)`,
        borderRadius: "16px",
        padding: "16px 18px",
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05), 0 4px 20px ${glow}`,
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Glow blob */}
        <div style={{
          position: "absolute",
          top: "-20px",
          left: "-20px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: glow,
          filter: "blur(30px)",
          pointerEvents: "none",
        }} />

        {/* Left accent bar */}
        <div style={{
          position: "absolute",
          left: 0,
          top: "10%",
          height: "80%",
          width: "3px",
          borderRadius: "0 2px 2px 0",
          background: bar,
          boxShadow: `0 0 12px ${bar}`,
        }} />

        {/* Icon */}
        <div style={{ flexShrink: 0, marginTop: "1px" }}>
          {icons[type]}
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{
            margin: 0,
            fontSize: "14px",
            fontWeight: 600,
            color: "#f1f5f9",
            letterSpacing: "0.01em",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            {type === "success" ? "Registration Successful!" : type === "error" ? "Something went wrong" : "Info"}
          </p>
          <p style={{
            margin: "3px 0 0",
            fontSize: "13px",
            color: "rgba(255,255,255,0.5)",
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: "1.4",
          }}>
            {message}
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={() => { setLeaving(true); setTimeout(onClose, 400) }}
          style={{
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.3)",
            cursor: "pointer",
            padding: "2px",
            lineHeight: 1,
            flexShrink: 0,
            fontSize: "18px",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
        >
          ×
        </button>

        {/* Progress bar */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "2px",
          background: bar,
          borderRadius: "0 0 16px 16px",
          animation: `shrink ${duration}ms linear forwards`,
          opacity: 0.6,
        }} />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600&display=swap');
        @keyframes shrink {
          from { width: 100%; }
          to   { width: 0%; }
        }
      `}</style>
    </div>
  )
}

// ── Hook ────────────────────────────────────────────────────────────
interface ToastState {
  message: string
  type: ToastType
  id: number
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastState[]>([])

  const showToast = (message: string, type: ToastType = "success") => {
    const id = Date.now()
    setToasts(prev => [...prev, { message, type, id }])
  }

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }

  const ToastContainer = () => (
    <>
      {toasts.map((t, i) => (
        <div key={t.id} style={{ position: "fixed", top: `${24 + i * 90}px`, right: "24px", zIndex: 9999 + i }}>
          <Toast
            message={t.message}
            type={t.type}
            onClose={() => removeToast(t.id)}
          />
        </div>
      ))}
    </>
  )

  return { showToast, ToastContainer }
}
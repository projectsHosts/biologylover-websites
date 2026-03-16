import { useEffect, useRef, useCallback, useState } from "react"

export interface AntiCheatOptions {
  onViolation?: (type: ViolationType, count: number) => void
  onAutoSubmit?: () => void
  maxWarnings?: number
  enabled?: boolean
}

export type ViolationType =
  | "tab_switch"
  | "window_blur"
  | "fullscreen_exit"
  | "copy_paste"
  | "right_click"
  | "devtools"
  | "visibility_change"
  | "keyboard_shortcut"

export interface AntiCheatState {
  violationCount: number
  lastViolation: ViolationType | null
  isFullscreen: boolean
  warningVisible: boolean
  warningMessage: string
  requestFullscreen: () => void
  dismissWarning: () => void
}

const VIOLATION_MESSAGES: Record<ViolationType, string> = {
  tab_switch:        "⚠️ Tab switching detected! Stay on the test page.",
  window_blur:       "⚠️ Window lost focus! Do not switch applications.",
  fullscreen_exit:   "⚠️ Fullscreen exited! Please return to fullscreen.",
  copy_paste:        "⚠️ Copy/Paste is disabled during the test.",
  right_click:       "⚠️ Right-click is disabled during the test.",
  devtools:          "⚠️ Developer tools detected! This is a violation.",
  visibility_change: "⚠️ You navigated away! This has been recorded.",
  keyboard_shortcut: "⚠️ Keyboard shortcut blocked!",
}

const isMobileDevice = () =>
  /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent) ||
  window.matchMedia("(pointer: coarse)").matches

// These violation types all mean "user left the page" — treat as ONE group
// Only ONE violation should fire no matter how many events trigger together
const FOCUS_LOSS_GROUP: ViolationType[] = ["tab_switch", "window_blur", "visibility_change"]

export function useAntiCheat({
  onViolation,
  onAutoSubmit,
  maxWarnings = 3,
  enabled = true,
}: AntiCheatOptions = {}): AntiCheatState {
  const [violationCount, setViolationCount] = useState(0)
  const [lastViolation, setLastViolation] = useState<ViolationType | null>(null)
  const [warningVisible, setWarningVisible] = useState(false)
  const [warningMessage, setWarningMessage] = useState("")

  const [isFullscreen, setIsFullscreen] = useState(() => !!(
    document.fullscreenElement ||
    (document as any).webkitFullscreenElement ||
    (document as any).mozFullScreenElement
  ))

  const violationRef = useRef(0)
  const devtoolsRef = useRef(false)
  const submittedRef = useRef(false)

  // Per-type cooldown (for non-grouped violations)
  const lastViolationTimeRef = useRef<Partial<Record<ViolationType, number>>>({})

  // Shared cooldown for the entire focus-loss group
  // Any one of tab_switch / window_blur / visibility_change firing blocks all others for 3s
  const lastFocusLossRef = useRef<number>(0)

  /* ---------- TRIGGER ---------- */
  const triggerViolation = useCallback((type: ViolationType) => {
    if (!enabled || submittedRef.current) return

    const now = Date.now()
    const isFocusLoss = FOCUS_LOSS_GROUP.includes(type)

    if (isFocusLoss) {
      // Group cooldown: any focus-loss event blocks all others for 3s
      if (now - lastFocusLossRef.current < 3000) return
      lastFocusLossRef.current = now
    } else {
      // Per-type cooldown for other violations
      const lastTime = lastViolationTimeRef.current[type] ?? 0
      if (now - lastTime < 1500) return
      lastViolationTimeRef.current[type] = now
    }

    violationRef.current += 1
    const count = violationRef.current

    setViolationCount(count)
    setLastViolation(type)
    setWarningMessage(VIOLATION_MESSAGES[type])
    setWarningVisible(true)
    onViolation?.(type, count)

    if (count >= maxWarnings) {
      submittedRef.current = true
      setTimeout(() => onAutoSubmit?.(), 2000)
    }
  }, [enabled, maxWarnings, onViolation, onAutoSubmit])

  /* ---------- FULLSCREEN ---------- */
  const requestFullscreen = useCallback(() => {
    const el = document.documentElement
    try {
      if (el.requestFullscreen) el.requestFullscreen()
      else if ((el as any).webkitRequestFullscreen) (el as any).webkitRequestFullscreen()
      else if ((el as any).mozRequestFullScreen) (el as any).mozRequestFullScreen()
    } catch (e) {
      console.warn("Fullscreen failed:", e)
    }
  }, [])

  const dismissWarning = useCallback(() => setWarningVisible(false), [])

  useEffect(() => {
    if (!enabled) return

    const mobile = isMobileDevice()

    const onFullscreenChange = () => {
      const fs = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement
      )
      setIsFullscreen(fs)
      if (!fs && !submittedRef.current) triggerViolation("fullscreen_exit")
    }

    // PRIMARY: visibility change — works on all devices
    const onVisibilityChange = () => {
      if (document.hidden && !submittedRef.current) {
        triggerViolation("visibility_change")
      }
    }

    // SECONDARY: window blur — DESKTOP ONLY
    // Skip if document.hidden is true (visibilitychange already handled it)
    const onWindowBlur = () => {
      if (mobile) return
      if (document.hidden) return  // visibilitychange already fired
      triggerViolation("window_blur")
    }

    const onContextMenu = (e: MouseEvent) => { e.preventDefault(); triggerViolation("right_click") }
    const onCopy  = (e: ClipboardEvent) => { e.preventDefault(); triggerViolation("copy_paste") }
    const onPaste = (e: ClipboardEvent) => { e.preventDefault(); triggerViolation("copy_paste") }
    const onCut   = (e: ClipboardEvent) => { e.preventDefault(); triggerViolation("copy_paste") }

    const onKeyDown = (e: KeyboardEvent) => {
      const ctrl = e.ctrlKey || e.metaKey
      const keys = ["c","v","x","u","s","a","p","f","h","j","k","l","n","t","w"]
      const shiftKeys = ["i","j","c","k"]
      const blocked =
        (ctrl && keys.includes(e.key.toLowerCase())) ||
        e.key === "F12" || e.key === "F5" || e.key === "Escape" ||
        (e.altKey && e.key === "Tab") ||
        (ctrl && e.shiftKey && shiftKeys.includes(e.key.toLowerCase()))
      if (blocked) { e.preventDefault(); triggerViolation("keyboard_shortcut") }
    }

    let devtoolsInterval: ReturnType<typeof setInterval> | null = null
    if (!mobile) {
      devtoolsInterval = setInterval(() => {
        const open =
          window.outerWidth  - window.innerWidth  > 160 ||
          window.outerHeight - window.innerHeight > 160
        if (open && !devtoolsRef.current) { devtoolsRef.current = true; triggerViolation("devtools") }
        else if (!open) devtoolsRef.current = false
      }, 1500)
    }

    window.history.pushState(null, "", window.location.href)
    const onPopState = () => {
      window.history.pushState(null, "", window.location.href)
      triggerViolation("tab_switch")
    }

    document.addEventListener("fullscreenchange",       onFullscreenChange)
    document.addEventListener("webkitfullscreenchange", onFullscreenChange)
    document.addEventListener("mozfullscreenchange",    onFullscreenChange)
    document.addEventListener("visibilitychange",       onVisibilityChange)
    window.addEventListener("blur",                     onWindowBlur)
    document.addEventListener("contextmenu",            onContextMenu)
    document.addEventListener("copy",  onCopy)
    document.addEventListener("paste", onPaste)
    document.addEventListener("cut",   onCut)
    document.addEventListener("keydown", onKeyDown)
    window.addEventListener("popstate",  onPopState)

    return () => {
      if (devtoolsInterval) clearInterval(devtoolsInterval)
      document.removeEventListener("fullscreenchange",       onFullscreenChange)
      document.removeEventListener("webkitfullscreenchange", onFullscreenChange)
      document.removeEventListener("mozfullscreenchange",    onFullscreenChange)
      document.removeEventListener("visibilitychange",       onVisibilityChange)
      window.removeEventListener("blur",                     onWindowBlur)
      document.removeEventListener("contextmenu",            onContextMenu)
      document.removeEventListener("copy",  onCopy)
      document.removeEventListener("paste", onPaste)
      document.removeEventListener("cut",   onCut)
      document.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("popstate",  onPopState)
    }
  }, [enabled, triggerViolation])

  return {
    violationCount,
    lastViolation,
    isFullscreen,
    warningVisible,
    warningMessage,
    requestFullscreen,
    dismissWarning,
  }
}
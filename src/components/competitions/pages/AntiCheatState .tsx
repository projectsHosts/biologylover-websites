import { useEffect, useRef, useCallback, useState } from "react"

export interface AntiCheatOptions {
  onViolation?: (type: ViolationType, count: number) => void
  onAutoSubmit?: () => void
  maxWarnings?: number // auto-submit after this many violations
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
  tab_switch:         "⚠️ Tab switching detected! Stay on the test page.",
  window_blur:        "⚠️ Window lost focus! Do not switch applications.",
  fullscreen_exit:    "⚠️ Fullscreen exited! Please return to fullscreen.",
  copy_paste:         "⚠️ Copy/Paste is disabled during the test.",
  right_click:        "⚠️ Right-click is disabled during the test.",
  devtools:           "⚠️ Developer tools detected! This is a violation.",
  visibility_change:  "⚠️ You navigated away! This has been recorded.",
  keyboard_shortcut:  "⚠️ Keyboard shortcut blocked!",
}

export function useAntiCheat({
  onViolation,
  onAutoSubmit,
  maxWarnings = 3,
  enabled = true,
}: AntiCheatOptions = {}): AntiCheatState {
  const [violationCount, setViolationCount] = useState(0)
  const [lastViolation, setLastViolation] = useState<ViolationType | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [warningVisible, setWarningVisible] = useState(false)
  const [warningMessage, setWarningMessage] = useState("")

  const violationRef = useRef(0)
  const devtoolsRef = useRef(false)

  /* ---------- TRIGGER VIOLATION ---------- */
  const triggerViolation = useCallback((type: ViolationType) => {
    if (!enabled) return

    violationRef.current += 1
    const count = violationRef.current

    setViolationCount(count)
    setLastViolation(type)
    setWarningMessage(VIOLATION_MESSAGES[type])
    setWarningVisible(true)

    onViolation?.(type, count)

    // Auto-submit if max warnings exceeded
    if (count >= maxWarnings) {
      setTimeout(() => {
        onAutoSubmit?.()
      }, 2000)
    }
  }, [enabled, maxWarnings, onViolation, onAutoSubmit])

  /* ---------- FULLSCREEN ---------- */
  const requestFullscreen = useCallback(() => {
    const el = document.documentElement
    if (el.requestFullscreen) el.requestFullscreen()
    else if ((el as any).webkitRequestFullscreen) (el as any).webkitRequestFullscreen()
    else if ((el as any).mozRequestFullScreen) (el as any).mozRequestFullScreen()
    else if ((el as any).msRequestFullscreen) (el as any).msRequestFullscreen()
  }, [])

  const dismissWarning = useCallback(() => {
    setWarningVisible(false)
  }, [])

  useEffect(() => {
    if (!enabled) return

    /* -- Fullscreen change -- */
    const onFullscreenChange = () => {
      const fs = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement
      )
      setIsFullscreen(fs)
      if (!fs) triggerViolation("fullscreen_exit")
    }

    /* -- Tab / visibility change -- */
    const onVisibilityChange = () => {
      if (document.hidden) triggerViolation("visibility_change")
    }

    /* -- Window blur (switch app) -- */
    const onWindowBlur = () => triggerViolation("window_blur")

    /* -- Right click -- */
    const onContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      triggerViolation("right_click")
    }

    /* -- Copy / Paste / Cut -- */
    const onCopy = (e: ClipboardEvent) => { e.preventDefault(); triggerViolation("copy_paste") }
    const onPaste = (e: ClipboardEvent) => { e.preventDefault(); triggerViolation("copy_paste") }
    const onCut = (e: ClipboardEvent) => { e.preventDefault(); triggerViolation("copy_paste") }

    /* -- Keyboard shortcuts -- */
    const onKeyDown = (e: KeyboardEvent) => {
      const blocked = [
        e.ctrlKey && ["c","v","x","u","s","a","p","f","h","j","k","l","n","t","w"].includes(e.key.toLowerCase()),
        e.metaKey && ["c","v","x","u","s","a","p","f","h","j","k","l","n","t","w"].includes(e.key.toLowerCase()),
        e.key === "F12",
        e.key === "F5",
        e.key === "Escape",
        e.altKey && e.key === "Tab",
        e.ctrlKey && e.shiftKey && ["i","j","c","k"].includes(e.key.toLowerCase()),
        e.metaKey && e.shiftKey && ["i","j","c","k"].includes(e.key.toLowerCase()),
      ]
      if (blocked.some(Boolean)) {
        e.preventDefault()
        triggerViolation("keyboard_shortcut")
      }
    }

    /* -- DevTools detection (size heuristic) -- */
    const detectDevtools = () => {
      const threshold = 160
      const widthDiff = window.outerWidth - window.innerWidth
      const heightDiff = window.outerHeight - window.innerHeight
      const open = widthDiff > threshold || heightDiff > threshold
      if (open && !devtoolsRef.current) {
        devtoolsRef.current = true
        triggerViolation("devtools")
      } else if (!open) {
        devtoolsRef.current = false
      }
    }
    const devtoolsInterval = setInterval(detectDevtools, 1000)

    /* -- Prevent back navigation -- */
    window.history.pushState(null, "", window.location.href)
    const onPopState = () => {
      window.history.pushState(null, "", window.location.href)
      triggerViolation("tab_switch")
    }

    // Register all listeners
    document.addEventListener("fullscreenchange", onFullscreenChange)
    document.addEventListener("webkitfullscreenchange", onFullscreenChange)
    document.addEventListener("mozfullscreenchange", onFullscreenChange)
    document.addEventListener("visibilitychange", onVisibilityChange)
    window.addEventListener("blur", onWindowBlur)
    document.addEventListener("contextmenu", onContextMenu)
    document.addEventListener("copy", onCopy)
    document.addEventListener("paste", onPaste)
    document.addEventListener("cut", onCut)
    document.addEventListener("keydown", onKeyDown)
    window.addEventListener("popstate", onPopState)

    // Request fullscreen on mount
    requestFullscreen()

    return () => {
      clearInterval(devtoolsInterval)
      document.removeEventListener("fullscreenchange", onFullscreenChange)
      document.removeEventListener("webkitfullscreenchange", onFullscreenChange)
      document.removeEventListener("mozfullscreenchange", onFullscreenChange)
      document.removeEventListener("visibilitychange", onVisibilityChange)
      window.removeEventListener("blur", onWindowBlur)
      document.removeEventListener("contextmenu", onContextMenu)
      document.removeEventListener("copy", onCopy)
      document.removeEventListener("paste", onPaste)
      document.removeEventListener("cut", onCut)
      document.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("popstate", onPopState)
    }
  }, [enabled, triggerViolation, requestFullscreen])

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
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import type { CSSProperties } from "react";

const API_BASE =
  import.meta.env.VITE_API_BASE || "https://api.biologylover.com";

export default function VerifyEmail() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);
  const [status, setStatus] = useState<"verifying" | "success" | "error">(
    "verifying"
  );

  const styles: Record<string, CSSProperties> = {
    overlay: {
      height: "100vh",
      width: "100vw",
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    popup: {
      background: "rgba(0,0,0,0.75)",
      backdropFilter: "blur(14px)",
      padding: "35px",
      borderRadius: "14px",
      width: "90%",
      maxWidth: "420px",
      textAlign: "center",
      color: "#fff",
      boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
      border: "1px solid rgba(255,255,255,0.12)",
    },
    button: {
      marginTop: "20px",
      padding: "10px 18px",
      background: "#16a34a",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: 600,
    },
  };

  useEffect(() => {
    const token = params.get("token");

    if (!token) {
      setStatus("error");
      return;
    }

    fetch(`${API_BASE}/api/auth/verify?token=${token}`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(() => {
        setStatus("success");

        const timer = setInterval(() => {
          setCountdown((prev) => {
            if (prev === 1) {
              clearInterval(timer);
              navigate("/login");
            }
            return prev - 1;
          });
        }, 1000);
      })
      .catch(() => {
        setStatus("error");
      });
  }, [params, navigate]);

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        {status === "verifying" && (
          <>
            <h2>Verifying your email…</h2>
            <p>Please wait a moment</p>
          </>
        )}

        {status === "success" && (
          <>
            <h2 style={{ color: "#22c55e" }}>✅ Email Verified!</h2>
            <p>Your BiologyLover account is now active.</p>
            <p style={{ marginTop: "15px", opacity: 0.8 }}>
              Redirecting to login in <strong>{countdown}</strong> seconds
            </p>
          </>
        )}

        {status === "error" && (
          <>
            <h2 style={{ color: "#f87171" }}>❌ Verification Failed</h2>
            <p>The verification link is invalid or expired.</p>
            <button style={styles.button} onClick={() => navigate("/login")}>
              Back to Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}

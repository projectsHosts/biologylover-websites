import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import type { CSSProperties } from "react";

export default function VerifyEmail() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);
  const [status, setStatus] = useState("verifying"); // verifying | success | error

  const styles: Record<string, CSSProperties> = {
  overlay: {
    height: "100vh",
    width: "100vw",
    background: "rgba(0,0,0,0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  popup: {
    background: "#ffffff",
    padding: "35px",
    borderRadius: "12px",
    width: "90%",
    maxWidth: "420px",
    textAlign: "center",   // ✅ no error
    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
  },
  button: {
    marginTop: "20px",
    padding: "10px 18px",
    background: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};


  useEffect(() => {
    const token = params.get("token");

    if (!token) {
      setStatus("error");
      return;
    }

    fetch(`https://biologylover.com/api/auth/verify?token=${token}`)
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(() => {
        setStatus("success");

        const timer = setInterval(() => {
          setCountdown(prev => {
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
  }, []);

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        {status === "verifying" && (
          <>
            <h2>Verifying your email...</h2>
            <p>Please wait a moment</p>
          </>
        )}

        {status === "success" && (
          <>
            <h2 style={{ color: "#16a34a" }}>✅ Email Verified!</h2>
            <p>Your BiologyLover account is now active.</p>
            <p style={{ marginTop: "15px", color: "#555" }}>
              Redirecting to login in <strong>{countdown}</strong> seconds
            </p>
          </>
        )}

        {status === "error" && (
          <>
            <h2 style={{ color: "#dc2626" }}>❌ Verification Failed</h2>
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

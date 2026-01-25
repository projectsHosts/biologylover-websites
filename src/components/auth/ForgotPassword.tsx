import { useState } from "react";
import "../../styles/auth.css";

const API_BASE =
  import.meta.env.VITE_API_BASE || "https://api.biologylover.com";

export default function ForgotPassword({ onBack }: any) {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleSend = async () => {
    if (!email) {
      setError("Please enter your email");
      return;
    }

    setError("");
    setMsg("");

    const res = await fetch(`${API_BASE}/api/auth/forgot-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (!res.ok) {
    if (data?.error === "INVALID_EMAIL") {
        setError("Account not found");
    } else {
        setError("Something went wrong. Try again.");
    }
    }else {
      setMsg("We’ve sent a reset link to your email.");
    }
  };

  return (
    <div className="auth-backdrop">
      <div className="auth-modal">
        <button className="close-btn" onClick={onBack}>
            ×
        </button>

        <h2>Forgot your password?</h2>
        <p style={{ textAlign: "center", color: "#94a3b8", marginBottom: 20 }}>
          Enter your registered email and we’ll send you a reset link.
        </p>

        <div className="input-wrapper">
          <input
            type="email"
            placeholder="Registered email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {error && <div className="auth-error">{error}</div>}
        {msg && <div className="auth-success">{msg}</div>}

        <button className="auth-btn" onClick={handleSend}>
          Send reset link
        </button>

       <p className="forgot-link center" onClick={onBack}>
        Back to login
        </p>

      </div>
    </div>
  );
}

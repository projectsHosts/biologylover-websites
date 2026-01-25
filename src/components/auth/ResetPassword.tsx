import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "../../styles/auth.css";

const API_BASE =
  import.meta.env.VITE_API_BASE || "https://api.biologylover.com";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleReset = async () => {
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    const res = await fetch(`${API_BASE}/api/auth/reset-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: params.get("token"),
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data?.error || "Reset failed");
    } else {
      setMsg("Password updated successfully. You can now login.");
      setTimeout(() => navigate("/"), 2000);
    }
  };

  return (
    <div className="auth-backdrop">
      <div className="auth-modal">
        <h2>Set New Password</h2>

        <div className="input-wrapper">
          <input
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Confirm password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>

        {error && <div className="auth-error">{error}</div>}
        {msg && <div className="auth-success">{msg}</div>}

        <button className="auth-btn" onClick={handleReset}>
          Update password
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";
import "../../styles/auth.css";

// ✅ API base (local + production safe)
const API_BASE =
  import.meta.env.VITE_API_BASE || "https://api.biologylover.com";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setMessage(null);

      const res = await fetch(`${API_BASE}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Registration failed");
      }

      setMessage("Verification mail sent. Please check your inbox.");
      setEmail("");
      setPassword("");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
      />

      {error && <div className="auth-error">{error}</div>}
      {message && <div className="auth-success">{message}</div>}

      <button
        className="auth-btn"
        onClick={handleRegister}
        disabled={loading}
      >
        {loading ? "Creating account..." : "Create Account"}
      </button>

      <div className="divider">or</div>

      <a
        className="google-btn google-dark"
        href={`${API_BASE}/oauth2/authorization/google`}
      >
        Continue with Google
      </a>
    </>
  );
}

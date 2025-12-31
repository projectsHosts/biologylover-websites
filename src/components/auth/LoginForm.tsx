import { useState } from "react";
import "../../styles/auth.css";

// ✅ API base (local + production safe)
const API_BASE =
  import.meta.env.VITE_API_BASE || "https://api.biologylover.com";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // safe for future cookies
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || data?.message || "Login failed");
      }

      localStorage.setItem("token", data.data.token);
      window.dispatchEvent(new Event("auth-change"));
     
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

      <button
        className="auth-btn"
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? "Signing in..." : "Sign In"}
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

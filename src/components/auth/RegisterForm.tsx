import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "../../styles/auth.css";

// ✅ API base (local + production safe)
const API_BASE =
  import.meta.env.VITE_API_BASE || "https://api.biologylover.com";

export default function RegisterForm({ onSwitchLogin }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
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
        throw new Error(data?.error || data?.message || "Registration failed");
      }

      setMessage("Verification email sent! Please check your inbox.");
      setEmail("");
      setPassword("");
    } catch (err:any) {
      setError(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e:any) => {
    if (e.key === "Enter" && !loading) {
      handleRegister();
    }
  };

  return (
    <div className="space-y-5">
      <div className="input-wrapper">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={loading}
          className="auth-input"
        />
      </div>

      <div className="input-wrapper password-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password (min. 8 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={loading}
          className="auth-input"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="password-toggle"
          tabIndex={-1}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {error && (
        <div className="auth-error">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 14A6 6 0 108 2a6 6 0 000 12zM8 5v3M8 10h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          {error}
        </div>
      )}
      
      {message && (
        <div className="auth-success">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13.5 4.5L6 12l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {message}
        </div>
      )}

      <button
        className="auth-btn primary-btn"
        onClick={handleRegister}
        disabled={loading}
      >
        {loading ? (
          <span className="btn-loading">
            <span className="spinner"></span>
            Creating account...
          </span>
        ) : (
          "Create Account"
        )}
      </button>

      <div className="divider">
        <span>or continue with</span>
      </div>

      <a
        className="google-btn"
        href={`${API_BASE}/oauth2/authorization/google`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Google
      </a>
    </div>
  );
}
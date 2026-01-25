import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "../../styles/auth.css";

const API_BASE =
  import.meta.env.VITE_API_BASE || "https://api.biologylover.com";

export default function LoginForm({ onForgot }: { onForgot: () => void; onSwitchRegister: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "INVALID_CREDENTIALS");
      }

      localStorage.setItem("token", data.data.token);
      window.dispatchEvent(new Event("auth-change"));
    } catch (err: any) {
    const msg = err?.message || "";

  if (msg === "USER_NOT_FOUND") {
    setError("Account does not exist. Please register first.");
  } else if (msg === "INVALID_CREDENTIALS") {
    setError("Invalid password.");
  } else if (msg === "EMAIL_NOT_VERIFIED") {
    setError("Please verify your email first.");
  } else if (msg === "GOOGLE_ACCOUNT_NO_PASSWORD") {
    setError("This account was created using Google. Please reset your password.");
  } else {
    setError("Something went wrong. Please try again.");
  }
} finally {
    setLoading(false); // loding stops here
  }
  };


   const handleResendVerification = async () => {
  try {
    setLoading(true);
    await fetch(`${API_BASE}/api/auth/resend-verification`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    setError("Verification email sent again. Please check your inbox.");
  } catch {
    setError("Unable to resend verification mail.");
  } finally {
    setLoading(false);
  }
};

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !loading) {
      handleLogin();
    }
  };

  return (
    <>
      {/* Email */}
      <div className="input-wrapper">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={loading}
        />
      </div>

      {/* Password */}
      <div className="input-wrapper password-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={loading}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="password-toggle"
          tabIndex={-1}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {/* Error */}
      {error && (
        <>
          <div className="auth-error">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 14A6 6 0 108 2a6 6 0 000 12zM8 5v3M8 10h.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>{error}</span>
          </div>

          {error.includes("Google") && (
            <p
              className="forgot-link center"
              onClick={() =>
                (window.location.href = "/forgot-password")
              }
            >
              Reset password
            </p>
          )}
          {error === "Please verify your email first." && (
            <p
              className="forgot-link center"
              onClick={handleResendVerification}
            >
              Resend verification email
            </p>
          )}

        </>
      )}

      {/* Login */}
      <button className="auth-btn" onClick={handleLogin} disabled={loading}>
        {loading ? (
          <span className="btn-loading">
            <span className="spinner"></span>
            Signing in...
          </span>
        ) : (
          "Sign In"
        )}
      </button>

      {/* Forgot */}
      <p className="forgot-link center" onClick={onForgot}>
        Forgot password?
      </p>


      <div className="divider">or continue with</div>

      {/* Google */}
      <a
        className="google-btn"
        href={`${API_BASE}/oauth2/authorization/google`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        Google
      </a>
    </>
  );
}

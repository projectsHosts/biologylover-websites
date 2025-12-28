import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "../../styles/auth.css"

interface Props {
  onClose: () => void;
}

export default function AuthModal({ onClose }: Props) {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <div className="auth-backdrop">
      <div className="auth-modal">
        <button className="close-btn" onClick={onClose}>×</button>

        <h2>{mode === "login" ? "Log in" : "Create Account"}</h2>

        {mode === "login" ? <LoginForm /> : <RegisterForm />}

        <p className="switch-text">
          {mode === "login" ? "New user?" : "Already have an account?"}
          <span onClick={() => setMode(mode === "login" ? "register" : "login")}>
            {mode === "login" ? " Register Now" : " Log in"}
          </span>
        </p>
      </div>
    </div>
  );
}

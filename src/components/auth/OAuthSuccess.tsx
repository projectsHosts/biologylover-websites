import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function OAuthSuccess() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = params.get("token");

    if (!token) {
      navigate("/");
      return;
    }

    // ✅ Save JWT
    localStorage.setItem("token", token);
    
    window.dispatchEvent(new Event("auth-change"));
    // ✅ Clean redirect (URL se token hatao)
    navigate("/", { replace: true });
  }, [params, navigate]);

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff"
    }}>
      Logging you in with Google…
    </div>
  );
}

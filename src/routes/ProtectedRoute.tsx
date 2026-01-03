import type { JSX } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: Props) => {
  const token = localStorage.getItem("token");

  // ❌ User not logged in
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // ✅ User logged in
  return children;
};

export default ProtectedRoute;

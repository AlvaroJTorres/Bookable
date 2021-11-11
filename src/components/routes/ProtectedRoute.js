import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { SessionContext } from "../../context/SessionContext";

export default function ProtectedRoute({ children }) {
  const ctx = useContext(SessionContext);

  return ctx.session.token ? children : <Navigate to="/login" />;
}

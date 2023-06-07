import { useRoutes, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <Navigate to="/signin" replace />;
}

export default ProtectedRoute;

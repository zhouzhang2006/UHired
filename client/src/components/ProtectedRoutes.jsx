import { Navigate } from "react-router-dom";

// function to protect routes that require user authentication. If the user isn't authenticated, they will be redirected to the login page. Otherwise, they will be allowed to access the protected route.
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
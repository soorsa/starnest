import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const isLoggedIn = true;

  // Redirect UNAUTHENTICATED users to login
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;

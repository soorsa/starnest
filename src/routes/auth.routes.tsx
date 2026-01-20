import { Navigate, Outlet } from "react-router-dom";

const AuthenticationRoute = () => {
  const isLoggedIn = false;
  return !isLoggedIn ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default AuthenticationRoute;

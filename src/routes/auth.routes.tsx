import { Navigate, Outlet } from "react-router-dom";
import { useUserState } from "../zustand/user.state";

const AuthenticationRoute = () => {
  const { isLoggedIn } = useUserState();
  return !isLoggedIn ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default AuthenticationRoute;

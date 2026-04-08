import { Navigate, Outlet } from "react-router-dom";
import { useUserState } from "../zustand/user.state";

const ProtectedRoutes = () => {
  const { isLoggedIn } = useUserState();
  // Redirect UNAUTHENTICATED users to login
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;

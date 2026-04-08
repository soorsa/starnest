import { Navigate, Outlet } from "react-router-dom";
import { useUserState } from "../zustand/user.state";

const AdminRoutes = () => {
  const { isLoggedIn, user } = useUserState();
  // Redirect UNAUTHENTICATED users to login
  if (isLoggedIn) {
    if (user?.is_staff) {
      return <Outlet />;
    }
    return <Navigate to="/dashboard" replace />;
  }
  return <Navigate to="/login" replace />;
};

export default AdminRoutes;

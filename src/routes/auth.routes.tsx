import { Navigate, Outlet } from "react-router-dom";
import { useUserState } from "../zustand/user.state";

const AuthenticationRoute = () => {
  const { isLoggedIn, user } = useUserState();
  if (isLoggedIn) {
    if (user?.is_staff) {
      return <Navigate to="/admin" replace />;
    } else {
      return <Navigate to="/dashboard" replace />;
    }
  } else {
    return <Outlet />;
  }
  // return !isLoggedIn ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default AuthenticationRoute;

import { Outlet } from "react-router-dom";

const GeneralRoutes = () => {
  // Redirect UNAUTHENTICATED users to login
  return <Outlet />;
};

export default GeneralRoutes;

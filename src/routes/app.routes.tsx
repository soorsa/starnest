import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayoutSkeleton from "../components/SkeletonsComponents/DashboardLayoutSkeleton";
import Modal from "../components/UtilityComponents/Modal";
import Toast from "../components/UtilityComponents/Toast";
import { useGetUser } from "../hooks/auth/useAuth";
import ActivePlanDetail from "../pages/Admin/ActivePlanDetail";
import ActivePlans from "../pages/Admin/ActivePlans";
import AdminIndex from "../pages/Admin/Index";
import PlanDetails from "../pages/Admin/PlanDetails";
import * as AdminPlan from "../pages/Admin/Plans";
import * as AdminTransactions from "../pages/Admin/Transactions";
import UserDetail from "../pages/Admin/UserDetail";
import Users from "../pages/Admin/Users";
import AuthLayout from "../pages/Auth/AuthLayout";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ResetPassword from "../pages/Auth/ResetPassword";
import DashboardIndex from "../pages/Dashboard/Index";
import More from "../pages/Dashboard/More";
import MyPlanDetail from "../pages/Dashboard/MyPlanDetail";
import MyPlans from "../pages/Dashboard/MyPlans";
import Notifications from "../pages/Dashboard/Notifications";
import PlanDetailPage from "../pages/Dashboard/PlanDetailPage";
import Plans from "../pages/Dashboard/Plans";
import Profile from "../pages/Dashboard/Profile";
import Referrals from "../pages/Dashboard/Referrals";
import Transactions from "../pages/Dashboard/Transactions";
import AboutUs from "../pages/Landing/About-Us";
import ContactUs from "../pages/Landing/Contact-Us";
import Index from "../pages/Landing/Index";
import LandingPage from "../pages/Landing/LandingPage";
import * as Layout from "../pages/Landing/Layout";
import PageNotFound from "../pages/PageNotFound";
import AdminRoutes from "./admin.routes";
import AuthenticationRoute from "./auth.routes";
import ProtectedRoutes from "./dashboard.routes";
import GeneralRoutes from "./global.routes";

const DashboardLayout = lazy(
  () => import("../pages/Dashboard/DashboardLayout")
);
const AdminLayout = lazy(() => import("../pages/Admin/Layout"));

const AppRoutes = () => {
  useGetUser();
  return (
    <>
      <BrowserRouter>
        {/* <Suspense fallback={<StartUp className="w-full md:w-[40%]" />}> */}
        <Suspense fallback={<DashboardLayoutSkeleton />}>
          <Routes>
            <Route path="/" element={<GeneralRoutes />}>
              <Route element={<Layout.default />}>
                <Route index element={<LandingPage />} />
                <Route path="/index" element={<Index />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
              </Route>
            </Route>
            {/* Protected Routes - Dashboard */}
            <Route path="/dashboard/*" element={<ProtectedRoutes />}>
              <Route element={<DashboardLayout />}>
                <Route index element={<DashboardIndex />} />
                <Route path="plans" element={<Plans />} />
                <Route path="plans/:id" element={<PlanDetailPage />} />
                <Route path="my-plans" element={<MyPlans />} />
                <Route path="my-plans/:id" element={<MyPlanDetail />} />
                <Route path="transactions" element={<Transactions />} />
                <Route path="referrals" element={<Referrals />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="profile" element={<Profile />} />
                <Route path="more" element={<More />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Route>
            <Route path="/admin/*" element={<AdminRoutes />}>
              <Route element={<AdminLayout />}>
                <Route index element={<AdminIndex />} />
                <Route path="plans" element={<AdminPlan.default />} />
                <Route path="plans/:id" element={<PlanDetails />} />
                <Route path="active-plans" element={<ActivePlans />} />
                <Route path="active-plans/:id" element={<ActivePlanDetail />} />
                <Route path="users" element={<Users />} />
                <Route path="users/:id" element={<UserDetail />} />
                <Route path="posts" element={<UserDetail />} />
                <Route
                  path="transactions"
                  element={<AdminTransactions.default />}
                />
              </Route>
            </Route>

            {/* Login Route */}
            <Route path="/" element={<AuthenticationRoute />}>
              <Route element={<AuthLayout />}>
                <Route path="/login" index element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route
                  path="/reset-password/:uid/:token"
                  element={<ResetPassword />}
                />
              </Route>
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
        <Toast />
        <Modal />
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;

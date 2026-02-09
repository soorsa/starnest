import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GeneralRoutes from "./global.routes";
import ProtectedRoutes from "./dashboard.routes";
import AuthenticationRoute from "./auth.routes";
import AuthLayout from "../pages/Auth/AuthLayout";
import Index from "../pages/Landing/Index";
import Toast from "../components/UtilityComponents/Toast";
import Modal from "../components/UtilityComponents/Modal";
import StartUp from "../components/GeneralComponent/StartUp";
import * as Layout from "../pages/Landing/Layout";
import AboutUs from "../pages/Landing/About-Us";
import ContactUs from "../pages/Landing/Contact-Us";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import DashboardIndex from "../pages/Dashboard/Index";
import Plans from "../pages/Dashboard/Plans";
import MyPlans from "../pages/Dashboard/MyPlans";
import MyPlanDetail from "../pages/Dashboard/MyPlanDetail";

const DashboardLayout = lazy(
  () => import("../pages/Dashboard/DashboardLayout")
);

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<StartUp className="w-full md:w-[40%]" />}>
          <Routes>
            <Route path="/" element={<GeneralRoutes />}>
              <Route element={<Layout.default />}>
                <Route index element={<Index />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
              </Route>
            </Route>

            {/* Protected Routes - Dashboard */}
            <Route path="/dashboard/*" element={<ProtectedRoutes />}>
              <Route element={<DashboardLayout />}>
                <Route index element={<DashboardIndex />} />
                <Route path="plans" element={<Plans />} />
                <Route path="my-plans" element={<MyPlans />} />
                <Route path="my-plans/:id" element={<MyPlanDetail />} />
              </Route>
            </Route>

            {/* Login Route */}
            <Route path="/" element={<AuthenticationRoute />}>
              <Route element={<AuthLayout />}>
                <Route path="/login" index element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Toast />
      <Modal />
    </>
  );
};

export default AppRoutes;

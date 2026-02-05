import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import AuthLayout from "../layout/AuthLayout";
import DashboardLayout from "../layout/DashboardLayout";

import Login from '../features/auth/pages/Login';
import ForgotPassword from '../features/auth/pages/forgot';
import Register from '../features/auth/pages/register'; 
import Dashboard from '../features/dashboard/pages/Dashboard';
import Splash from "../features/auth/pages/splash";
import Customer from "../features/customer/pages/Customer";
import Vendor from "../features/Vendor/pages/Vendor";
import Technician from "../features/Technician/pages/Technician";
import Auditor from "../features/Auditor/pages/Auditor";
import Subadmin from "../features/Subadmin/pages/Subadmin";
import Help from "../features/help/pages/help";

/**
 * 🔐 Auth Guard
 */
function RequireAuth() {
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

/**
 * ✅ ROUTES (MATCHES SIDEBAR)
 */
export default function AppRoutes() {
  return (
    <Routes>

      {/* ========== PUBLIC ROUTES ========== */}
      <Route element={<AuthLayout />}>

        {/* SPLASH (ENTRY SCREEN) */}
        <Route path="/" element={<Splash />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} /> {/* Fixed: Capital R */}
      </Route>

      {/* ========== PROTECTED ROUTES ========== */}
      <Route element={<RequireAuth />}>
        <Route element={<DashboardLayout />}>

          {/* MAIN */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* SIDEBAR PAGES */}
          <Route path="/customer" element={<Customer />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/technician" element={<Technician />} />
          <Route path="/auditor" element={<Auditor />} />
          <Route path="/subadmin" element={<Subadmin />} />
          <Route path="/help" element={<Help />} />

        </Route>
      </Route>

      {/* ================= FALLBACK ================= */}
      <Route path="*" element={<Navigate to="/login" replace />} />

    </Routes>
  );
}
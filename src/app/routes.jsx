import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AuthLayout from '../layout/AuthLayout';
import DashboardLayout from '../layout/DashboardLayout';

import Login from '../features/auth/pages/Login';
import Dashboard from '../features/dashboard/pages/Dashboard';

// Order & Master pages (we’ll create stubs below)
import Orders from '../features/oders/pages/Orders';
import EmployeeManagement from '../features/master/pages/EmployeeManagement';
import PriceManagement from '../features/master/pages/PriceManagement';
import TicketDesign from '../features/master/pages/TicketDesign';
// import Reports from '../features/reports/pages/Reports';

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
 * ✅ ALL ROUTES
 */
export default function AppRoutes() {
  return (
    <Routes>

      {/* ================= PUBLIC ROUTES ================= */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      {/* ================= PROTECTED ROUTES ================= */}
      <Route element={<RequireAuth />}>
        <Route element={<DashboardLayout />}>

          {/* MAIN */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* ORDER MANAGEMENT */}
          <Route path="/orders" element={<Orders />} />

          {/* MASTER MANAGEMENT */}
          <Route path="/master/employee" element={<EmployeeManagement />} />
          <Route path="/master/price" element={<PriceManagement />} />
          <Route path="/master/ticket-design" element={<TicketDesign />} />

          {/* REPORT */}
          {/* <Route path="/reports" element={<Reports />} /> */}

        </Route>
      </Route>

      {/* ================= FALLBACK ================= */}
      <Route path="*" element={<Navigate to="/login" replace />} />

    </Routes>
  );
}

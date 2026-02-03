import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AuthLayout from '../layout/AuthLayout';
import DashboardLayout from '../layout/DashboardLayout';

import Login from '../features/auth/pages/Login';
import ForgotPassword from '../features/auth/pages/forgot';
import Dashboard from '../features/dashboard/pages/Dashboard';

// Orders
import Orders from '../features/oders/pages/Orders';

// Users (separate, NOT in master)
import Users from '../features/users/pages/users';

// Master Management
import Tables from '../features/master/pages/Tables';
import Categories from '../features/master/pages/Categories';
import Items from '../features/master/pages/Items';
import Taxes from '../features/master/pages/Taxes';

// Reports
import ProfitLoss from '../features/reports/pages/ProfitLoss';

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
         <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>

      {/* ================= PROTECTED ROUTES ================= */}
      <Route element={<RequireAuth />}>
        <Route element={<DashboardLayout />}>

          {/* MAIN */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/users" element={<Users />} />

          {/* MASTER MANAGEMENT */}
          <Route path="/master/tables" element={<Tables />} />
          <Route path="/master/categories" element={<Categories />} />
          <Route path="/master/items" element={<Items />} />
          <Route path="/master/taxes" element={<Taxes />} />

          {/* REPORTS */}
          <Route path="/reports/profit-loss" element={<ProfitLoss />} />

        </Route>
      </Route>

      {/* ================= FALLBACK ================= */}
      <Route path="*" element={<Navigate to="/login" replace />} />

    </Routes>
  );
}

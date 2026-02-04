import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


import AuthLayout from '../layout/AuthLayout';
import DashboardLayout from '../layout/DashboardLayout';

import Login from '../features/auth/pages/Login';
import Dashboard from '../features/dashboard/pages/Dashboard';

import RequireAuth from '../shared/guards/RequireAuth';

export default function App() {
  return (
    <Routes>

      {/* Auth */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Protected Dashboard */}
      <Route element={<RequireAuth />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />

    </Routes>
  );
}

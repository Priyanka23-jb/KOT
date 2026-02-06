import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import AuthLayout from '../layout/AuthLayout';
import DashboardLayout from '../layout/DashboardLayout';


import Splash from '../features/auth/pages/splash';      
import Login from '../features/auth/pages/login';        
import Register from '../features/auth/pages/register';  
import ForgotPassword from '../features/auth/pages/forgot'; 

// Protected Pages
import Dashboard from '../features/dashboard/pages/Dashboard';

// Guards
import RequireAuth from '../shared/guards/RequireAuth';

export default function App() {
  return (
    <Routes>
      {/* ========= PUBLIC / AUTH ROUTES ========= */}
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>

      {/* ========= PROTECTED ROUTES ========= */}
      <Route element={<RequireAuth />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>

      {/* ========= FALLBACK / 404 ========= */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
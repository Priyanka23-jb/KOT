import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import AuthLayout from "../layout/AuthLayout";
import DashboardLayout from "../layout/DashboardLayout";

import Login from '../features/auth/pages/Login';
import ForgotPassword from '../features/auth/pages/forgot';

import Register from '../features/auth/pages/register'; 
import Dashboard from '../features/dashboard/pages/Dashboard';

// import Dashboard from '../features/Dashboard/pages/Dashboard';

import Splash from "../features/auth/pages/splash";
import Customer from "../features/customer/pages/Customer";

import Help from "../features/help/pages/help";



// Vendor Components (separate pages)
import CreateVendor from "../features/Vendor/pages/CreateVendor";
import VendorList from "../features/Vendor/pages/VendorList";

// Subadmin Components (separate pages)
import SubadminForm from "../features/Subadmin/pages/CreateSubmin";
import SubadminList from "../features/Subadmin/pages/SubadminTable";

// Technician Components (separate pages)
import TechnicianList from "../features/Technician/pages/TechnicianList";
import TechnicianForm from "../features/Technician/pages/TechnicianForm";

// Auditor Components (separate pages)
import AuditorTable from "../features/Auditor/pages/AuditorTable";
import CreateAuditor from "../features/Auditor/pages/CreateAuditor";

// Master Components
// import LocationManagement from "../features/master/pages/LocationManagement";
// import Categories from "../features/master/pages/Categories";
// import Items from "../features/master/pages/Items";

// import Vendor from "../features/Vendor/pages/Vendor";
// import Technician from "../features/Technician/pages/Technician";
// import Auditor from "../features/Auditor/pages/Auditor";
// import Subadmin from "../features/Subadmin/pages/Subadmin";
// import Help from "../features/help/pages/help";



// Settings Components
// import Profile from "../features/settings/pages/Profile";
// import Account from "../features/settings/pages/Account";


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
 * ✅ ROUTES (MATCHES UPDATED SIDEBAR)
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
          <Route path="/help" element={<Help />} />



          {/* VENDOR SECTION */}
          <Route path="/vendor/list" element={<VendorList />} />
          <Route path="/vendor/create" element={<CreateVendor />} />
          {/* <Route path="/vendor/edit/:id" element={<CreateVendor />} /> */}
          
          {/* Optional: Redirect /vendor to /vendor/list */}
          <Route path="/vendor" element={<Navigate to="/vendor/list" replace />} />

          {/* SUBADMIN SECTION */}
          <Route path="/subadmin/list" element={<SubadminList />} />
          <Route path="/subadmin/create" element={<SubadminForm />} />
          {/* <Route path="/subadmin/edit/:id" element={<SubadminForm />} /> */}
          
          {/* Optional: Redirect /subadmin to /subadmin/list */}
          <Route path="/subadmin" element={<Navigate to="/subadmin/list" replace />} />

          {/* TECHNICIAN SECTION */}
          <Route path="/technician/list" element={<TechnicianList />} />
          <Route path="/technician/create" element={<TechnicianForm />} />
          {/* <Route path="/technician/edit/:id" element={<CreateTechnician />} /> */}
          
          {/* Optional: Redirect /technician to /technician/list */}
          <Route path="/technician" element={<Navigate to="/technician/list" replace />} />

          {/* AUDITOR SECTION */}
          <Route path="/auditor/list" element={<AuditorTable />} />
          <Route path="/auditor/create" element={<CreateAuditor />} />
          {/* <Route path="/auditor/edit/:id" element={<CreateAuditor />} /> */}
          
          {/* Optional: Redirect /auditor to /auditor/list */}
          <Route path="/auditor" element={<Navigate to="/auditor/list" replace />} />

          {/* MASTER SECTION */}
          {/* <Route path="/master/location-management" element={<LocationManagement />} />
          <Route path="/master/category" element={<Categories />} />
          <Route path="/master/item" element={<Items />} /> */}

          {/* SETTINGS SECTION */}
          {/* <Route path="/settings/profile" element={<Profile />} />
          <Route path="/settings/account" element={<Account />} /> */}


        </Route>
      </Route>

      {/* ================= FALLBACK ================= */}
      <Route path="*" element={<Navigate to="/login" replace />} />

    </Routes>
  );
}
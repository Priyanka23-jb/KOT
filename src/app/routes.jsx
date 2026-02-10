// import React from "react";
// import { Routes, Route, Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";

// import AuthLayout from "../layout/AuthLayout";
// import DashboardLayout from "../layout/DashboardLayout";

// import Login from "../features/auth/pages/Login";
// import ForgotPassword from "../features/auth/pages/forgot";

// import Register from "../features/auth/pages/register";
// import Dashboard from "../features/dashboard/pages/Dashboard";

// // import Dashboard from '../features/Dashboard/pages/Dashboard';

// import Splash from "../features/auth/pages/splash";
// import InnerPage from "../features/auth/pages/innerpage";
// import Joinwithus from "../features/auth/pages/joinwithus"
// import Contact from "../features/auth/pages/contactus"


// import Help from "../features/help/pages/help";

// // Vendor Components (separate pages)
// import Page from "../features/contain/page"
// import Testimonial from "../features/contain/testimonial"
// import Banner from "../features/contain/banner"
// import CreateVendor from "../features/Vendor/pages/CreateVendor";
// import VendorList from "../features/Vendor/pages/VendorList";

// // Subadmin Components (separate pages)
// import SubadminForm from "../features/Subadmin/pages/CreateSubmin";
// import SubadminList from "../features/Subadmin/pages/SubadminTable";

// // Technician Components (separate pages)
// import TechnicianList from "../features/Technician/pages/TechnicianList";
// import TechnicianForm from "../features/Technician/pages/TechnicianForm";
// import LocationManagement from "../features/Master/pages/LocationManagement";
// import Category from "../features/Master/pages/Category";
// import Department from "../features/Master/pages/Department";
// import Designation from "../features/Master/pages/Designation";


// // Auditor Components (separate pages)
// import AuditorTable from "../features/Auditor/pages/AuditorTable";
// import CreateAuditor from "../features/Auditor/pages/CreateAuditor";
// import SolarRegistration from "../features/customer/pages/CustomerSolar/solarRegistration";
// import Table from "../features/customer/pages/CustomerSolar/Table";
// import WaterRegistration from "../features/customer/pages/Customerwater/waterRegistration";
// import FireRegistration from "../features/customer/pages/CustomerFire/FireRegistration";
// // Master Components
// // import LocationManagementForm from "../features/Master/pages/LocationManagementForm";
// // import LocationManagementList from "../features/Master/pages/LocationManagementList";
// // import Categories from "../features/master/pages/Categories";
// // import Items from "../features/master/pages/Items";

// // import Vendor from "../features/Vendor/pages/Vendor";
// // import Technician from "../features/Technician/pages/Technician";
// // import Auditor from "../features/Auditor/pages/Auditor";
// // import Subadmin from "../features/Subadmin/pages/Subadmin";
// // import Help from "../features/help/pages/help";

// // Settings Components
// // import Profile from "../features/settings/pages/Profile";
// // import Account from "../features/settings/pages/Account";

// /**
//  * 🔐 Auth Guard
//  */
// function RequireAuth() {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   return <Outlet />;
// }

// /**
//  * ✅ ROUTES (MATCHES UPDATED SIDEBAR)
//  */
// export default function AppRoutes() {
//   return (
//     <Routes>
//       {/* ========== PUBLIC ROUTES ========== */}
//       <Route element={<AuthLayout />}>
//         {/* SPLASH (ENTRY SCREEN) */}
//         <Route path="/" element={<Splash />} />
//          <Route path="/innerpage" element={<InnerPage />} />
//          <Route path="/joinwithus" element={<Joinwithus />} />
//          <Route path="/contact" element={<Contact />} />
//         {/* AUTH */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/register" element={<Register />} />{" "}
//         {/* Fixed: Capital R */}
//       </Route>

//       {/* ========== PROTECTED ROUTES ========== */}
//       <Route element={<RequireAuth />}>
//         <Route element={<DashboardLayout />}>
//           {/* MAIN */}
//           <Route path="/dashboard" element={<Dashboard />} />

//           {/* SIDEBAR PAGES */}
//           <Route path="/customer/solar-registration" element={<SolarRegistration />}/>
//           <Route path="/customer/solar-list" element={<Table />}/>
//           <Route
//             path="/customer/water-registration"
//             element={<WaterRegistration />}
//           />
//           <Route
//             path="/customer/fire-registration"
//             element={<FireRegistration />}
//           />
//           <Route path="/help" element={<Help />} />

//           <Route path="/page" element={<Page />} />
//           <Route path="/testimonial" element={<Testimonial />} />
//           <Route path="/banner" element={<Banner />} />

//           {/* VENDOR SECTION */}
//           <Route path="/vendor/list" element={<VendorList />} />
//           <Route path="/vendor/create" element={<CreateVendor />} />
//           {/* <Route path="/vendor/edit/:id" element={<CreateVendor />} /> */}

//           {/* Optional: Redirect /vendor to /vendor/list */}
//           <Route
//             path="/vendor"
//             element={<Navigate to="/vendor/list" replace />}
//           />

//           {/* SUBADMIN SECTION */}
//           <Route path="/subadmin/list" element={<SubadminList />} />
//           <Route path="/subadmin/create" element={<SubadminForm />} />
//           {/* <Route path="/subadmin/edit/:id" element={<SubadminForm />} /> */}

//           {/* Optional: Redirect /subadmin to /subadmin/list */}
//           <Route
//             path="/subadmin"
//             element={<Navigate to="/subadmin/list" replace />}
//           />

//           {/* TECHNICIAN SECTION */}
//           <Route path="/technician/list" element={<TechnicianList />} />
//           <Route path="/technician/create" element={<TechnicianForm />} />
//           {/* <Route path="/technician/edit/:id" element={<CreateTechnician />} /> */}

//           {/* Optional: Redirect /technician to /technician/list */}
//           <Route path="/technician" element={<Navigate to="/technician/list" replace />} />
        
//           <Route path="/location" element={<LocationManagement />} />
//           <Route path="/category" element={<Category />} />
//           <Route path="/department" element={<Department />} />
//           <Route path="/designation" element={<Designation />} />
 
          

//           {/* AUDITOR SECTION */}
//           <Route path="/auditor/list" element={<AuditorTable />} />
//           <Route path="/auditor/create" element={<CreateAuditor />} />
//           {/* <Route path="/auditor/edit/:id" element={<CreateAuditor />} /> */}

//           {/* Optional: Redirect /auditor to /auditor/list */}
//           <Route
//             path="/auditor"
//             element={<Navigate to="/auditor/list" replace />}
//           />

//           {/* MASTER SECTION */}
//           {/* <Route path="/master/location-management" element={<LocationManagement />} />
//           <Route path="/master/category" element={<Categories />} />
//           <Route path="/master/item" element={<Items />} /> */}

//           {/* SETTINGS SECTION */}
//           {/* <Route path="/settings/profile" element={<Profile />} />
//           <Route path="/settings/account" element={<Account />} /> */}
//         </Route>
//       </Route>

//       {/* ================= FALLBACK ================= */}
//       <Route path="*" element={<Navigate to="/login" replace />} />
//     </Routes>
//   );
// }

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import AuthLayout from "../layout/AuthLayout";
import DashboardLayout from "../layout/DashboardLayout";

/* AUTH */
import Login from "../features/auth/pages/Login";
import ForgotPassword from "../features/auth/pages/forgot";
import Register from "../features/auth/pages/register";
import Splash from "../features/auth/pages/splash";

/* COMMON */
import Dashboard from "../features/dashboard/pages/Dashboard";
import Help from "../features/help/pages/help";

/* CUSTOMER */
import SolarRegistration from "../features/customer/pages/CustomerSolar/solarRegistration";
import Table from "../features/customer/pages/CustomerSolar/Table";
import WaterRegistration from "../features/customer/pages/Customerwater/waterRegistration";
import FireRegistration from "../features/customer/pages/CustomerFire/FireRegistration";

/* VENDOR */
import CreateVendor from "../features/Vendor/pages/CreateVendor";
import VendorList from "../features/Vendor/pages/VendorList";

/* TECHNICIAN */
import TechnicianForm from "../features/Technician/pages/TechnicianForm";
import TechnicianList from "../features/Technician/pages/TechnicianList";

/* ADMIN ONLY */
import Page from "../features/contain/page";
import Testimonial from "../features/contain/testimonial";
import Banner from "../features/contain/banner";

import AuditorTable from "../features/Auditor/pages/AuditorTable";
import CreateAuditor from "../features/Auditor/pages/CreateAuditor";

import SubadminForm from "../features/Subadmin/pages/CreateSubmin";
import SubadminList from "../features/Subadmin/pages/SubadminTable";

import LocationManagement from "../features/Master/pages/LocationManagement";
import Category from "../features/Master/pages/Category";
import Department from "../features/Master/pages/Department";
import Designation from "../features/Master/pages/Designation";

export default function AppRoutes() {
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );
  const role = useSelector(
    (state) => state.auth.user?.role
  ); // "admin" | "vendor"

  /* ================= NOT LOGGED IN ================= */
  if (!isAuthenticated) {
    return (
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Route>
      </Routes>
    );
  }

  /* ================= LOGGED IN ================= */
  return (
    <Routes>
      <Route element={<DashboardLayout />}>

        {/* ===== COMMON (ADMIN + VENDOR) ===== */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/help" element={<Help />} />

        {/* CUSTOMER */}
        <Route path="/customer/solar-registration" element={<SolarRegistration />} />
        <Route path="/customer/solar-list" element={<Table />} />
        <Route path="/customer/water-registration" element={<WaterRegistration />} />
        <Route path="/customer/fire-registration" element={<FireRegistration />} />

        {/* VENDOR */}
        <Route path="/vendor/create" element={<CreateVendor />} />
        <Route path="/vendor/list" element={<VendorList />} />

        {/* TECHNICIAN */}
        <Route path="/technician/create" element={<TechnicianForm />} />
        <Route path="/technician/list" element={<TechnicianList />} />

        {/* ===== ADMIN ONLY ===== */}
        {role === "admin" && (
          <>
            {/* CONTAIN */}
            <Route path="/page" element={<Page />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/banner" element={<Banner />} />

            {/* AUDITOR */}
            <Route path="/auditor/create" element={<CreateAuditor />} />
            <Route path="/auditor/list" element={<AuditorTable />} />

            {/* SUBADMIN */}
            <Route path="/subadmin/create" element={<SubadminForm />} />
            <Route path="/subadmin/list" element={<SubadminList />} />

            {/* MASTER */}
            <Route path="/location" element={<LocationManagement />} />
            <Route path="/category" element={<Category />} />
            <Route path="/department" element={<Department />} />
            <Route path="/designation" element={<Designation />} />
          </>
        )}

        {/* ===== BLOCK EVERYTHING ELSE ===== */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}

import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import { ChevronDown } from "lucide-react";

export default function Sidebar() {
  const [openSections, setOpenSections] = useState({
    contain: false,
    vendor: false,
    technician: false,
    auditor: false,
    subadmin: false,
    master: false,
    settings: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sectionBtn =
    "w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all hover:bg-gray-50 dark:hover:bg-gray-700";

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 h-full border-r border-gray-200 dark:border-gray-700">
      {/* Logo */}
      <div className="p-6 text-lg font-semibold border-b border-gray-200 dark:border-gray-700">
        <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">
          Dashboard
        </span>
      </div>

      <nav className="p-4 space-y-1">
        {/* Dashboard */}
        <SidebarItem to="/dashboard" label="Dashboard" />

        {/* ================= CUSTOMER ================= */}
        <div>
          <button
            onClick={() => toggleSection("customer")}
            className={sectionBtn}
          >
            <span className="font-medium">Customer</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${openSections.customer ? "rotate-180" : ""
                }`}
            />
          </button>

          {openSections.customer && (
            <div className="ml-4 border-l border-gray-200 dark:border-gray-600 pl-3">
              <SidebarItem
                to="/customer/solar-registration"
                label="Customer Registration"
                indent
              />
               <SidebarItem
                to="/customer/solar-list"
                label="Customer List "
                indent
              />
              {/* <SidebarItem
                to="/customer/water-registration"
                label="Water Registration"
                indent
              />
              <SidebarItem
                to="/customer/fire-registration"
                label="Fire Registration"
                indent
              />  */}
            </div>
          )}
        </div>


        {/* ================= CONTAIN MANAGEMENT ================= */}
        <div>
          <button
            onClick={() => toggleSection("contain")}
            className={sectionBtn}
          >
            <span className="font-medium">Contain Management</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${
                openSections.contain ? "rotate-180" : ""
              }`}
            />
          </button>

          {openSections.contain && (
            <div className="ml-4 border-l border-gray-200 dark:border-gray-600 pl-3">
              <SidebarItem to="/page" label="Page" indent />
              <SidebarItem to="/testimonial" label="Testimonial" indent />
              <SidebarItem to="/banner" label="Banner" indent />
            </div>
          )}
        </div>

        {/* ================= VENDOR ================= */}
        <div>
          <button
            onClick={() => toggleSection("vendor")}
            className={sectionBtn}
          >
            <span className="font-medium">Vendor</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${openSections.vendor ? "rotate-180" : ""
                }`}
            />
          </button>

          {openSections.vendor && (
            <div className="ml-4 border-l border-gray-200 dark:border-gray-600 pl-3">
              <SidebarItem to="/vendor/create" label="Create Vendor" indent />
              <SidebarItem to="/vendor/list" label="Vendor List" indent />
            </div>
          )}
        </div>

        {/* ================= TECHNICIAN ================= */}
        <div>
          <button
            onClick={() => toggleSection("technician")}
            className={sectionBtn}
          >
            <span className="font-medium">Technician</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${openSections.technician ? "rotate-180" : ""
                }`}
            />
          </button>

          {openSections.technician && (
            <div className="ml-4 border-l border-gray-200 dark:border-gray-600 pl-3">
              <SidebarItem
                to="/technician/create"
                label="Create Technician"
                indent
              />
              <SidebarItem
                to="/technician/list"
                label="Technician List"
                indent
              />
            </div>
          )}
        </div>

        {/* ================= AUDITOR ================= */}
        <div>
          <button
            onClick={() => toggleSection("auditor")}
            className={sectionBtn}
          >
            <span className="font-medium">Auditor</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${openSections.auditor ? "rotate-180" : ""
                }`}
            />
          </button>

          {openSections.auditor && (
            <div className="ml-4 border-l border-gray-200 dark:border-gray-600 pl-3">
              <SidebarItem to="/auditor/create" label="Create Auditor" indent />
              <SidebarItem to="/auditor/list" label="Auditor List" indent />
            </div>
          )}
        </div>

        {/* ================= SUBADMIN ================= */}
        <div>
          <button
            onClick={() => toggleSection("subadmin")}
            className={sectionBtn}
          >
            <span className="font-medium">Subadmin</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${openSections.subadmin ? "rotate-180" : ""
                }`}
            />
          </button>

          {openSections.subadmin && (
            <div className="ml-4 border-l border-gray-200 dark:border-gray-600 pl-3">
              <SidebarItem
                to="/subadmin/create"
                label="Create Subadmin"
                indent
              />
              <SidebarItem to="/subadmin/list" label="Subadmin List" indent />
            </div>
          )}
        </div>

        {/* ================= MASTER ================= */}
        <div>
          <button
            onClick={() => toggleSection("master")}
            className={sectionBtn}
          >
            <span className="font-medium">Master</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${openSections.master ? "rotate-180" : ""
                }`}
            />
          </button>

          {openSections.master && (
            <div className="ml-4 border-l border-gray-200 dark:border-gray-600 pl-3">
              <SidebarItem
                to="/location"
                label="Location Management"
                indent
              />
              <SidebarItem 
               to="/category"
                label="Category"
                 indent />
              <SidebarItem
               to="/department"
                label="Department"
                 indent 
               />
              <SidebarItem
               to="/designation"
                label="Designation"
                 indent 
               />
            </div>
          )}
        </div>

        {/* ================= SETTINGS ================= */}
        <div>
          <button
            onClick={() => toggleSection("settings")}
            className={sectionBtn}
          >
            <span className="font-medium">Settings</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${openSections.settings ? "rotate-180" : ""
                }`}
            />
          </button>

          {openSections.settings && (
            <div className="ml-4 border-l border-gray-200 dark:border-gray-600 pl-3">
              <SidebarItem to="/settings/profile" label="Profile" indent />
              <SidebarItem to="/settings/account" label="Account" indent />
            </div>
          )}
        </div>

        {/* Help */}
        <SidebarItem to="/help" label="Help" />
      </nav>
    </aside>
  );
}

import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import { ChevronDown } from "lucide-react";

export default function Sidebar() {
  const [openSections, setOpenSections] = useState({
    master: false,
    reports: false,
    compliances: false,
    audits: false,
    settings: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <aside className="w-64 bg-white text-gray-800 h-full border-r border-gray-200">
      {/* Logo */}
      <div className="p-6 text-lg font-semibold border-b border-gray-200">
        <span className="text-purple-600 font-bold text-xl">Dashboard</span>
      </div>

      <nav className="p-4 space-y-0.5">
        {/* Dashboard */}
        <SidebarItem 
          to="/dashboard" 
          label="Dashboard"
          active={true}
        />

        {/* Assets */}
        <SidebarItem 
          to="/assets" 
          label="Assets"
        />

        {/* Customers */}
        <SidebarItem 
          to="/customers" 
          label="Customers"
        />

        {/* Sites */}
        <SidebarItem 
          to="/sites" 
          label="Sites"
        />

        {/* Work Orders */}
        <SidebarItem 
          to="/work-orders" 
          label="Work Orders"
        />

        {/* ================= COMPLIANCES ================= */}
        <div>
          <button
            onClick={() => toggleSection("compliances")}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
              openSections.compliances ? "bg-purple-50 text-purple-600" : "hover:bg-gray-50"
            }`}
          >
            <span className="font-medium">Compliances</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${
                openSections.compliances ? "rotate-180" : ""
              }`}
            />
          </button>

          {openSections.compliances && (
            <div className="ml-4 border-l border-gray-200 pl-3 space-y-0.5 mt-0.5">
              <SidebarItem 
                to="/compliances/regulatory" 
                label="Regulatory"
                indent={true}
              />
              <SidebarItem 
                to="/compliances/safety" 
                label="Safety"
                indent={true}
              />
              <SidebarItem 
                to="/compliances/environmental" 
                label="Environmental"
                indent={true}
              />
            </div>
          )}
        </div>

        {/* ================= AUDITS ================= */}
        <div>
          <button
            onClick={() => toggleSection("audits")}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
              openSections.audits ? "bg-purple-50 text-purple-600" : "hover:bg-gray-50"
            }`}
          >
            <span className="font-medium">Audits</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${
                openSections.audits ? "rotate-180" : ""
              }`}
            />
          </button>

          {openSections.audits && (
            <div className="ml-4 border-l border-gray-200 pl-3 space-y-0.5 mt-0.5">
              <SidebarItem 
                to="/audits/internal" 
                label="Internal"
                indent={true}
              />
              <SidebarItem 
                to="/audits/external" 
                label="External"
                indent={true}
              />
              <SidebarItem 
                to="/audits/compliance" 
                label="Compliance"
                indent={true}
              />
            </div>
          )}
        </div>

        {/* ================= REPORTS ================= */}
        <div>
          <button
            onClick={() => toggleSection("reports")}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
              openSections.reports ? "bg-purple-50 text-purple-600" : "hover:bg-gray-50"
            }`}
          >
            <span className="font-medium">Reports</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${
                openSections.reports ? "rotate-180" : ""
              }`}
            />
          </button>

          {openSections.reports && (
            <div className="ml-4 border-l border-gray-200 pl-3 space-y-0.5 mt-0.5">
              <SidebarItem 
                to="/reports/financial" 
                label="Financial"
                indent={true}
              />
              <SidebarItem 
                to="/reports/operational" 
                label="Operational"
                indent={true}
              />
              <SidebarItem 
                to="/reports/compliance" 
                label="Compliance"
                indent={true}
              />
              <SidebarItem 
                to="/reports/analytics" 
                label="Analytics"
                indent={true}
              />
            </div>
          )}
        </div>

        {/* ================= SETTINGS ================= */}
        <div>
          <button
            onClick={() => toggleSection("settings")}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
              openSections.settings ? "bg-purple-50 text-purple-600" : "hover:bg-gray-50"
            }`}
          >
            <span className="font-medium">Settings</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${
                openSections.settings ? "rotate-180" : ""
              }`}
            />
          </button>

          {openSections.settings && (
            <div className="ml-4 border-l border-gray-200 pl-3 space-y-0.5 mt-0.5">
              <SidebarItem 
                to="/settings/user-management" 
                label="User Management"
                indent={true}
              />
              <SidebarItem 
                to="/settings/permissions" 
                label="Permissions"
                indent={true}
              />
              <SidebarItem 
                to="/settings/configuration" 
                label="Configuration"
                indent={true}
              />
            </div>
          )}
        </div>

        {/* Help */}
        <SidebarItem 
          to="/help" 
          label="Help"
        />

      </nav>
    </aside>
  );
}
import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import { ChevronDown } from "lucide-react";

export default function Sidebar() {
  const [openSections, setOpenSections] = useState({
    master: false,
    settings: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 h-full border-r border-gray-200 dark:border-gray-700 transition-colors duration-200">
      {/* Logo */}
      <div className="p-6 text-lg font-semibold border-b border-gray-200 dark:border-gray-700">
        <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">Dashboard</span>
      </div>

      <nav className="p-4 space-y-0.5">
        {/* Dashboard */}
        <SidebarItem 
          to="/dashboard" 
          label="Dashboard"
          active={true}
        />

        {/* Customer */}
        <SidebarItem 
          to="/customer" 
          label="Customer"
        />

        {/* Vendor */}
        <SidebarItem 
          to="/vendor" 
          label="Vendor"
        />

        {/* Technician */}
        <SidebarItem 
          to="/technician" 
          label="Technician"
        />

        {/* Auditor */}
        <SidebarItem 
          to="/auditor" 
          label="Auditor"
        />

        {/* Subadmin */}
        <SidebarItem 
          to="/subadmin" 
          label="Subadmin"
        />

        {/* ================= MASTER ================= */}
        <div>
          <button
            onClick={() => toggleSection("master")}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
              openSections.master 
                ? "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300" 
                : "hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            <span className="font-medium">Master</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${
                openSections.master ? "rotate-180" : ""
              }`}
            />
          </button>

          {openSections.master && (
            <div className="ml-4 border-l border-gray-200 dark:border-gray-600 pl-3 space-y-0.5 mt-0.5">
              <SidebarItem 
                to="/master/location-management" 
                label="Location Management"
                indent={true}
              />
              <SidebarItem 
                to="/master/category" 
                label="Category"
                indent={true}
              />
              <SidebarItem 
                to="/master/item" 
                label="Item"
                indent={true}
              />
            </div>
          )}
        </div>

        {/* ================= SETTINGS ================= */}
        

        {/* Help */}
        <SidebarItem 
          to="/help" 
          label="Help"
        />

      </nav>
    </aside>
  );
}
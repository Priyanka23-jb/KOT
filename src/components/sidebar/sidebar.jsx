import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import { ChevronDown } from "lucide-react";

export default function Sidebar() {
  const [openMaster, setOpenMaster] = useState(false);
  const [openReports, setOpenReports] = useState(false);

  return (
    <aside className="w-64 bg-[#0F172A] text-gray-300 h-full">
      {/* Logo */}
      <div className="p-4 text-lg font-semibold border-b border-white/10 text-white">
        🍽 Restaurant
      </div>

      <nav className="p-3 space-y-1 text-sm">

        {/* Dashboard */}
        <SidebarItem to="/dashboard" label="Dashboard" />

        {/* Orders */}
        <SidebarItem to="/orders" label="Order Management" />

        {/* Users */}
        <SidebarItem to="/users" label="Users" />

        {/* ================= MASTER MANAGEMENT ================= */}
        <button
          onClick={() => setOpenMaster(!openMaster)}
          className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/10 transition"
        >
          <span>Master Management</span>
          <ChevronDown
            size={16}
            className={`transition-transform ${
              openMaster ? "rotate-180" : ""
            }`}
          />
        </button>

        {openMaster && (
          <div className="ml-4 border-l border-white/10 pl-3 space-y-1">
            <SidebarItem to="/master/tables" label="Tables" />
            <SidebarItem to="/master/categories" label="Categories" />
            <SidebarItem to="/master/items" label="Items" />
            <SidebarItem to="/master/taxes" label="Taxes" />
          </div>
        )}

        {/* ================= REPORTS ================= */}
        <button
          onClick={() => setOpenReports(!openReports)}
          className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/10 transition"
        >
          <span>Reports</span>
          <ChevronDown
            size={16}
            className={`transition-transform ${
              openReports ? "rotate-180" : ""
            }`}
          />
        </button>

        {openReports && (
          <div className="ml-4 border-l border-white/10 pl-3 space-y-1">
            <SidebarItem
              to="/reports/profit-loss"
              label="Profit & Loss"
            />
          </div>
        )}

      </nav>
    </aside>
  );
}

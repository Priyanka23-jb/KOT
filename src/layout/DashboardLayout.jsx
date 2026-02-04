import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/sidebar/Header";
import Sidebar from "../components/sidebar/sidebar";

export default function DashboardLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#FFF7F4] dark:bg-gray-900 transition-colors duration-200">
      {/* MOBILE SIDEBAR */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
          <div className="relative w-72 h-full bg-white dark:bg-gray-800 shadow-xl transition-colors duration-200">
            <Sidebar isCollapsed={false} isMobile />
          </div>
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      <div className="hidden md:flex">
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          onSidebarToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          onMobileSidebarToggle={() =>
            setIsMobileSidebarOpen(!isMobileSidebarOpen)
          }
        />

        <main className="flex-1 overflow-y-auto p-6 bg-[#FFF7F4] dark:bg-gray-900 transition-colors duration-200">
          <div className="w-full space-y-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
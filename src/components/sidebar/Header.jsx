// src/components/Header.jsx
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectCurrentUser } from "../../features/auth/authslice.js";
import { useAuth } from "../../hooks/useAuth.js";
import { useDarkMode } from "../../providers/DarkModeProvider"; // Import the context

const Header = ({ onSidebarToggle, onMobileSidebarToggle }) => {
  const [openUser, setOpenUser] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode(); // Use the context

  const settingsRef = useRef(null);

  const user = useSelector(selectCurrentUser);
  const location = useLocation();
  const { logout } = useAuth();

  /* =======================
     Page context for Compliance Dashboard
     ======================= */
  const pageMeta = {
    "/dashboard": {
      title: "Compliance Dashboard",
      subtitle: "Real-time visibility into compliance, audits & personnel",
    },
    // "/orders": {
    //   title: "Order Management",
    //   subtitle: "View and manage all restaurant orders",
    // },
    // "/menu": {
    //   title: "Menu Management",
    //   subtitle: "Edit menu items and categories",
    // },
    // "/staff": {
    //   title: "Staff Management",
    //   subtitle: "Manage staff schedules and roles",
    // },
    // "/reports": {
    //   title: "Sales Reports",
    //   subtitle: "Restaurant analytics and insights",
    // },
  };

  const current =
    pageMeta[location.pathname] || {
      title: "Compliance Dashboard",
      subtitle: "Manage your compliance operations",
    };

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700 shadow-sm transition-colors duration-200">
      <div className="flex items-center justify-between px-4 lg:px-6 py-4">

        {/* ================= LEFT ================= */}
        <div className="flex items-center gap-4">
          {/* Mobile toggle */}
          <button
            onClick={onMobileSidebarToggle}
            className="md:hidden p-2 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
            aria-label="Toggle mobile sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop toggle */}
          <button
            onClick={onSidebarToggle}
            className="hidden md:flex p-2 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
            aria-label="Toggle sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Page title */}
          <div className="relative pl-3 border-l border-gray-200 dark:border-gray-700">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              {current.title}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {current.subtitle}
            </p>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="flex items-center gap-6">

          {/* Date/Time Display */}
          <div className="hidden md:block">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {new Date().toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </p>
            </div>
          </div>

          {/* Dark/Light Mode Toggle */}
          <div className="relative">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors duration-200"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                // Sun icon for dark mode (click to switch to light)
                <svg 
                  className="w-5 h-5" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                // Moon icon for light mode (click to switch to dark)
                <svg 
                  className="w-5 h-5" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>

          {/* User Profile */}
          <div className="relative" ref={settingsRef}>
            <button
              onClick={() => setOpenUser(!openUser)}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800"
              aria-label="User menu"
            >
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <span className="text-purple-600 dark:text-purple-300 font-semibold text-sm">
                  {user?.fullName?.[0] || user?.email?.[0] || 'U'}
                </span>
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {user?.fullName || 'Compliance Manager'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
              </div>
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openUser && (
              <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-50">
                <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {user?.fullName || 'Compliance Manager'}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user?.email}</p>
                  <p className="text-xs text-purple-600 dark:text-purple-400 font-medium mt-1">Compliance Administrator</p>
                </div>

                <div className="p-2 space-y-1">
                  <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Profile Settings
                  </button>
                  <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                     Settings
                  </button>
                  <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Reports
                  </button>
                  <div className="border-t border-gray-100 dark:border-gray-700 pt-1">
                    <button
                      onClick={logout}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" />
                      </svg>
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectCurrentUser } from "../../features/auth/authslice.js";
import { useAuth } from "../../hooks/useAuth.js";

/**
 * Restaurant Management Dashboard – Header
 * Clean, modern restaurant theme with orange/neutral colors
 */
const Header = ({ onSidebarToggle, onMobileSidebarToggle }) => {
  const [openUser, setOpenUser] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);

  const settingsRef = useRef(null);
  const notifRef = useRef(null);

  const user = useSelector(selectCurrentUser);
  const location = useLocation();
  const { logout } = useAuth();

  /* =======================
     Page context for Restaurant Dashboard
     ======================= */
  const pageMeta = {
    "/dashboard": {
      title: "Restaurant Management Dashboard",
      subtitle: "Real-time overview of orders, revenue & staff",
    },
    "/orders": {
      title: "Order Management",
      subtitle: "View and manage all restaurant orders",
    },
    "/menu": {
      title: "Menu Management",
      subtitle: "Edit menu items and categories",
    },
    "/staff": {
      title: "Staff Management",
      subtitle: "Manage staff schedules and roles",
    },
    "/reports": {
      title: "Sales Reports",
      subtitle: "Restaurant analytics and insights",
    },
  };

  const current =
    pageMeta[location.pathname] || {
      title: "Restaurant Dashboard",
      subtitle: "Manage your restaurant operations",
    };

  /* =======================
     Restaurant Notifications
     ======================= */
  const notifications = [
    {
      id: 1,
      message: "New order received - Table #5",
      type: "order",
      time: "2 min ago",
    },
    {
      id: 2,
      message: "Low stock alert: Chicken Wings",
      type: "inventory",
      time: "1 hour ago",
    },
    {
      id: 3,
      message: "Staff shift starting in 30 min",
      type: "staff",
      time: "2 hours ago",
    },
  ];

  /* =======================
     Click outside handling
     ======================= */
  useEffect(() => {
    const handler = (e) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target)) {
        setOpenUser(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setOpenNotifications(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 lg:px-6 py-4">

        {/* ================= LEFT ================= */}
        <div className="flex items-center gap-4">
          {/* Mobile toggle */}
          <button
            onClick={onMobileSidebarToggle}
            className="md:hidden p-2 rounded-lg hover:bg-orange-50 text-gray-700"
            aria-label="Toggle mobile sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop toggle */}
          <button
            onClick={onSidebarToggle}
            className="hidden md:flex p-2 rounded-lg hover:bg-orange-50 text-gray-700"
            aria-label="Toggle sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Page title */}
          <div className="relative pl-3 border-l border-gray-200">
            <h1 className="text-xl font-semibold text-gray-900">
              {current.title}
            </h1>
            <p className="text-sm text-gray-500">
              {current.subtitle}
            </p>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="flex items-center gap-6">

          {/* Date/Time Display */}
          <div className="hidden md:block">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </p>
              <p className="text-xs text-gray-500">
                {new Date().toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </p>
            </div>
          </div>

          {/* Notifications */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => setOpenNotifications(!openNotifications)}
              className="p-2 rounded-lg hover:bg-orange-50 text-gray-700 relative"
              aria-label="Notifications"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11
                     a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341
                     C7.67 6.165 6 8.388 6 11v3.159
                     c0 .538-.214 1.055-.595 1.436L4 17h5m6 0
                     v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>

              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 text-xs font-medium bg-orange-500 text-white rounded-full flex items-center justify-center">
                  {notifications.length}
                </span>
              )}
            </button>

            {openNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
                  <p className="text-sm font-semibold text-gray-900">
                    Restaurant Notifications
                  </p>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((n) => (
                    <div key={n.id} className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50">
                      <div className="flex items-start">
                        <div className={`w-2 h-2 mt-1.5 rounded-full mr-3 ${
                          n.type === 'order' ? 'bg-green-500' :
                          n.type === 'inventory' ? 'bg-red-500' : 'bg-blue-500'
                        }`} />
                        <div>
                          <p className="text-sm text-gray-800">{n.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{n.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 border-t border-gray-100 bg-gray-50">
                  <button className="text-sm text-orange-600 hover:text-orange-700 font-medium">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User Profile */}
          <div className="relative" ref={settingsRef}>
            <button
              onClick={() => setOpenUser(!openUser)}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-50"
              aria-label="User menu"
            >
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-semibold text-sm">
                  {user?.fullName?.[0] || user?.email?.[0] || 'U'}
                </span>
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-gray-900">
                  {user?.fullName || 'Restaurant Manager'}
                </p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openUser && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-semibold text-gray-900">
                    {user?.fullName || 'Restaurant Manager'}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                  <p className="text-xs text-orange-600 font-medium mt-1">Restaurant Administrator</p>
                </div>

                <div className="p-2 space-y-1">
                  <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Profile Settings
                  </button>
                  <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Restaurant Settings
                  </button>
                  <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Reports
                  </button>
                  <div className="border-t border-gray-100 pt-1">
                    <button
                      onClick={logout}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50"
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
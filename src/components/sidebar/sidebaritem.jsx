import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SidebarItem({
  to,
  label,
  icon: Icon,
  roles = [],
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
        ${isActive
          ? "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 font-medium border-l-4 border-purple-600 dark:border-purple-400"
          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-purple-600 dark:hover:text-purple-300"
        }`
      }
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{label}</span>
    </NavLink>
  );
}
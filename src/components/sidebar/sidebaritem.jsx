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
        `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition
        ${isActive
          ? "bg-purple-600 text-white font-medium"
          : "text-gray-700 hover:bg-gray-50 hover:text-purple-600"
        }`
      }
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{label}</span>
    </NavLink>
  );
}

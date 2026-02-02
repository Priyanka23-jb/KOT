import React from 'react';
export default function DashboardCard({
  title,
  value,
  icon: Icon,
  color = 'blue',
}) {
  const colorMap = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    red: 'bg-red-100 text-red-600',
  };

  return (
    <div className="bg-white rounded-xl shadow p-5 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-2xl font-bold mt-1">{value}</h2>
      </div>

      {Icon && (
        <div
          className={`p-3 rounded-full ${colorMap[color] || colorMap.blue}`}
        >
          <Icon className="w-6 h-6" />
        </div>
      )}
    </div>
  );
}

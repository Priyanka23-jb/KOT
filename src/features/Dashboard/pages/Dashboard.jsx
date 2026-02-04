import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F4F2F7] dark:bg-gray-900 p-6 transition-colors duration-200">
      {/* HEADER */}
      

      {/* MAIN DASHBOARD CONTENT */}
      <div className="grid grid-cols-12 gap-6">
        {/* LEFT COLUMN */}
        <div className="col-span-8 space-y-6">
          {/* TOP ROW - 4 CARDS */}
          <div className="grid grid-cols-4 gap-6">
            {/* TOTAL ASSETS CARD */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Total Assets</p>
                  <p className="text-3xl font-semibold mt-2 text-gray-900 dark:text-white">12,450</p>
                  <p className="text-xs text-green-500 dark:text-green-400 mt-1">
                    +3.3% this previous month
                  </p>
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                  Monthly
                </div>
              </div>
              <div className="mt-4 h-1.5 w-full bg-gradient-to-r from-purple-500 to-purple-300 dark:from-purple-600 dark:to-purple-400 rounded-full" />
            </div>

            {/* ACTIVE AMCS CARD */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Active AMCs</p>
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      background: "conic-gradient(#8B5CF6 0% 78%, #F3F4F6 78% 100%)",
                    }}
                  >
                    <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">78%</span>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                  Monthly
                </div>
              </div>
            </div>

            {/* EXPIRING AMCS CARD */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              <p className="text-sm text-gray-500 dark:text-gray-400">Expiring AMCs</p>
              <div className="mt-3 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700 dark:text-gray-300">30 Days</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">(15)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700 dark:text-gray-300">60 Days</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">(32)</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">125 Scheduled Audits</p>
                <button className="mt-2 text-xs text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300">
                  View All →
                </button>
              </div>
            </div>

            {/* BEEF BURGER CARD */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              <p className="text-sm text-gray-500 dark:text-gray-400">Beef Burger</p>
              <p className="text-3xl font-semibold mt-2 text-gray-900 dark:text-white">1,850</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                1850 Active Contracts
              </p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  Asivee City Dvadr Eed (Dert All)
                </span>
                <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                  Meret
                </span>
              </div>
            </div>
          </div>

          {/* MIDDLE ROW - 2 CARDS */}
          <div className="grid grid-cols-2 gap-6">
            {/* PENDING WORK ORDERS - LARGE */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Pending Work Orders</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">120 Open Jobs</span>
                  <span className="text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    $334 + Nikith foame
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">WO-2024-0012:</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">(06 Rowini)</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">WO-2024-0015:</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Cen Mustur 110</p>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Customer</span>
                </div>
              </div>
              
              <button className="mt-4 text-xs text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300">
                View All →
              </button>
            </div>

            {/* NON-COMPLIANCES */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              <p className="text-sm text-gray-500 dark:text-gray-400">Non-Compliances</p>
              <p className="text-3xl font-semibold mt-2 text-gray-900 dark:text-white">45</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Open Issues</p>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-sm text-gray-900 dark:text-white">Fire Safety (Stik)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-sm text-gray-900 dark:text-white">Env. Regs. Nigh Migh</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span className="text-sm text-gray-900 dark:text-white">Mon Risk</span>
                </div>
              </div>
              
              <button className="mt-4 text-xs text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300">
                Nemoss →
              </button>
            </div>
          </div>

          {/* CHART SECTION */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-200">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Chart</p>
                <h3 className="font-semibold mt-1 text-gray-900 dark:text-white">Total Assets</h3>
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                Monthly
              </div>
            </div>
            
            {/* Chart placeholder */}
            <div className="h-48 w-full bg-gradient-to-t from-purple-100 to-white dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-end justify-between px-8 py-4">
              {[40, 60, 80, 60, 70, 90, 100].map((height, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-6 bg-gradient-to-t from-purple-500 to-purple-300 dark:from-purple-600 dark:to-purple-400 rounded-t-lg"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-span-4 space-y-6">
          {/* PIE CHART */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-200">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Pie Chart</p>
            <div className="flex items-center justify-center">
              <div className="relative w-48 h-48">
                {/* Pie chart segments */}
                <div className="absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(#8B5CF6 0% 20%, #F59E0B 20% 30%, #10B981 30% 50%, #EF4444 50% 100%)",
                  }}
                >
                  <div className="absolute inset-8 bg-white dark:bg-gray-800 rounded-full"></div>
                </div>
                
                {/* Legend */}
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                    <span className="text-xs text-gray-900 dark:text-white">20%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    <span className="text-xs text-gray-900 dark:text-white">10%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs text-gray-900 dark:text-white">20%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-xs text-gray-900 dark:text-white">50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* EXPIRING AMCS - PURPLE */}
          <div className="rounded-2xl p-5 text-white bg-gradient-to-br from-purple-700 to-purple-500">
            <h3 className="font-medium mb-6">Expiring AMCs</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-white/20">
                <span className="text-sm">30 Days</span>
                <span className="font-semibold">(15)</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/20">
                <span className="text-sm">60 Days</span>
                <span className="font-semibold">(32)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">125 Scheduled Audits</span>
              </div>
            </div>
          </div>

          {/* WORK ORDERS LIST */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-200">
            <h3 className="font-medium mb-4 text-gray-900 dark:text-white">Pending Work Orders</h3>
            
            <div className="space-y-4">
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="font-medium text-sm text-gray-900 dark:text-white">WO-2024-0012:</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">(Site A Customer B)</p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="font-medium text-sm text-gray-900 dark:text-white">Audit FY4-003 1.02d</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Site C Customer B</p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="font-medium text-sm text-gray-900 dark:text-white">Audit FY4-011 Ita A</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Customer D (See A)</p>
              </div>
            </div>
          </div>

          {/* NON-COMPLIANCES MINI */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-200">
            <h3 className="font-medium mb-4 text-gray-900 dark:text-white">Non-Compliances</h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span className="text-sm text-gray-900 dark:text-white">Fire Safety (Sitk)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                <span className="text-sm text-gray-900 dark:text-white">Env. Regs. Nigh</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-sm text-gray-900 dark:text-white">Migh Mon Risk</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
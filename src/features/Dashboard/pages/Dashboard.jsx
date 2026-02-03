import React from "react";

export default function Dashboard() {
  return (
    <>
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Restaurant Management Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Real-time overview of orders, revenue & staff
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Today's Revenue", value: "$987", note: "+22% from yesterday" },
          { title: "Total Orders", value: "22.1K", note: "+17% from last month" },
          { title: "Active Orders", value: "17.1K", note: "-19% from last week" },
          { title: "POS Overview", value: "$76 Avg", note: "165 Total Bill" },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl border border-[#F2E8E5] p-5 shadow-sm"
          >
            <p className="text-sm text-gray-500">{item.title}</p>
            <p className="text-3xl font-semibold mt-2">{item.value}</p>
            <p className="text-xs text-gray-400 mt-1">{item.note}</p>
          </div>
        ))}
      </div>

      {/* SECOND ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Average Monthly Income */}
        <div className="bg-white rounded-2xl border border-[#F2E8E5] p-6">
          <h3 className="font-medium text-gray-800 mb-4">
            Average Monthly Income
          </h3>
          <p className="text-2xl font-bold">$935,577</p>
          <p className="text-sm text-gray-500">Monthly</p>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-2xl border border-[#F2E8E5] p-6">
          <h3 className="font-medium text-gray-800 mb-4">
            Payment Methods
          </h3>
          <div className="space-y-3">
            <div className="w-full bg-gray-100 h-3 rounded-full">
              <div className="bg-orange-500 h-3 w-[20%] rounded-full"></div>
            </div>
            <div className="w-full bg-gray-100 h-3 rounded-full">
              <div className="bg-orange-400 h-3 w-[10%] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Staff On Duty */}
        <div className="bg-white rounded-2xl border border-[#F2E8E5] p-6">
          <h3 className="font-medium text-gray-800 mb-4">Staff On Duty</h3>
          {[
            "Albert Flores",
            "Guy Hawkins",
            "Ronald Richards",
            "David Miller",
          ].map((name) => (
            <p key={name} className="text-sm text-gray-700">
              {name}
            </p>
          ))}
        </div>
      </div>

      {/* RECENT ORDERS */}
      <div className="bg-white rounded-2xl border border-[#F2E8E5] overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="font-medium text-gray-800">Recent Orders</h3>
        </div>

        <table className="w-full">
          <thead className="bg-gray-50 text-xs text-gray-500">
            <tr>
              <th className="px-6 py-3 text-left">ORDER ID</th>
              <th className="text-left">NAME</th>
              <th>TIME</th>
              <th>AMOUNT</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {[
              { id: "01", name: "Beef Burger", status: "Active" },
              { id: "02", name: "Caesar Salad", status: "Completed" },
            ].map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{order.id}</td>
                <td>{order.name}</td>
                <td>12:30 PM</td>
                <td>$97.00</td>
                <td>
                  <span className="px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-800">
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}





import { useState } from "react";
import CreateOrderModal from "../components/CreateOrderModal";

export default function Orders() {
  const [open, setOpen] = useState(false);

  const orders = [
    {
      id: 1001,
      table: "T-01",
      waiter: "Rahul",
      cashier: "Amit",
      status: "PAID",
      total: 560,
      createdAt: "2026-02-03 11:20",
      updatedAt: "2026-02-03 11:45",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Order Management</h1>
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Create Order
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-3 text-left">Order ID</th>
              <th className="p-3 text-left">Table</th>
              <th className="p-3 text-left">Waiter</th>
              <th className="p-3 text-left">Cashier</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Total (₹)</th>
              <th className="p-3 text-left">Created</th>
              <th className="p-3 text-left">Updated</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{o.id}</td>
                <td className="p-3">{o.table}</td>
                <td className="p-3">{o.waiter}</td>
                <td className="p-3">{o.cashier}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      o.status === "PAID"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {o.status}
                  </span>
                </td>
                <td className="p-3">{o.total}</td>
                <td className="p-3">{o.createdAt}</td>
                <td className="p-3">{o.updatedAt}</td>
                <td className="p-3 space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 transition">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-800 transition">
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {open && <CreateOrderModal onClose={() => setOpen(false)} />}
    </div>
  );
}
import { useState } from "react";

export default function AddTableForm() {
  const [form, setForm] = useState({
    tableNo: "",
    status: "Available",
    items: "",
    total: "",
  });

  return (
    <div className="bg-white rounded-xl shadow border p-6">

      <h2 className="text-lg font-semibold text-orange-600 mb-4">
        Add / Update Table
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* Table No */}
        <input
          type="text"
          placeholder="Table No"
          className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
        />

        {/* Status */}
        <select className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400 outline-none">
          <option>Available</option>
          <option>Occupied</option>
          <option>Reserved</option>
        </select>

        {/* Items */}
        <input
          type="text"
          placeholder="Items (e.g. 3)"
          className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
        />

        {/* Total Price */}
        <input
          type="number"
          placeholder="Total Price (₹)"
          className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
        />

      </div>

      <div className="mt-4 flex justify-end">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg">
          Save Table
        </button>
      </div>

    </div>
  );
}

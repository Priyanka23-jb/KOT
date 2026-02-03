import { useState } from "react";

export default function AddCategoryForm() {
  const [form, setForm] = useState({
    name: "",
    foodType: "",
    status: "Active",
  });

  return (
    <div className="bg-white rounded-xl shadow border p-6">

      <h2 className="text-lg font-semibold text-orange-600 mb-4">
        Add Category
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* Category Type */}
        <select className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400 outline-none">
          <option value="">Select Category</option>
          <option>Starter</option>
          <option>Main Course</option>
          <option>Beverage</option>
        </select>

        {/* Veg / Non-Veg */}
        <select className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400 outline-none">
          <option value="">Food Type</option>
          <option>Veg</option>
          <option>Non-Veg</option>
        </select>

        {/* Status */}
        <select className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400 outline-none">
          <option>Active</option>
          <option>Inactive</option>
        </select>

        {/* Save */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow">
          Save Category
        </button>

      </div>
    </div>
  );
}

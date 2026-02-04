import { useState } from "react";

export default function AddVendorForm() {
  const [form, setForm] = useState({
    vendorName: "",
    email: "",
    contact: "",
    vendorType: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Add form submission logic here
  };

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold text-purple-600 mb-6">
        Add Vendor
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Vendor Name */}
          <div>
            <label className="text-sm text-gray-600">Vendor Name</label>
            <input
              name="vendorName"
              value={form.vendorName}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="Enter vendor name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Email address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="Enter email"
              required
            />
          </div>

          {/* Contact */}
          <div>
            <label className="text-sm text-gray-600">Contact No</label>
            <input
              name="contact"
              value={form.contact}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="Contact number"
              required
            />
          </div>

          {/* Vendor Type */}
          <div>
            <label className="text-sm text-gray-600">Vendor Type</label>
            <select
              name="vendorType"
              value={form.vendorType}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              required
            >
              <option value="">Select Vendor Type</option>
              <option value="Food Supplier">Food Supplier</option>
              <option value="Beverage Supplier">Beverage Supplier</option>
              <option value="Equipment Supplier">Equipment Supplier</option>
            </select>
          </div>

          {/* Username */}
          <div>
            <label className="text-sm text-gray-600">Username</label>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="Choose a username"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="Create a password"
              required
            />
          </div>
        </div>

        {/* Submit */}
        <div className="mt-6 text-right">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg shadow transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
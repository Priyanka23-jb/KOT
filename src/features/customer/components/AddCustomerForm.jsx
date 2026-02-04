import { useState } from "react";

export default function AddCustomerForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
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
        Add Customer
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="Enter full name"
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

          {/* Phone */}
          <div>
            <label className="text-sm text-gray-600">Contact No</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="Contact number"
              required
            />
          </div>

          {/* Customer Type */}
          <div>
            <label className="text-sm text-gray-600">Customer Type</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              required
            >
              <option value="">Select Type</option>
              <option value="Regular">Regular</option>
              <option value="VIP">VIP</option>
              <option value="Corporate">Corporate</option>
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
import { useState } from "react";

export default function AddTechnicianForm() {
  const [form, setForm] = useState({
    technicianName: "",
    email: "",
    contact: "",
    specialization: "",
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
        Add Technician
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Technician Name</label>
            <input
              name="technicianName"
              value={form.technicianName}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="Full name"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="Email address"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Contact No</label>
            <input
              name="contact"
              value={form.contact}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="Phone number"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Specialization</label>
            <select
              name="specialization"
              value={form.specialization}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              required
            >
              <option value="">Select Specialization</option>
              <option value="Electrical">Electrical</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Kitchen Equipment">Kitchen Equipment</option>
              <option value="POS / Software">POS / Software</option>
            </select>
          </div>

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
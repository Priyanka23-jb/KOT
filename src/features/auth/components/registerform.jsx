import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Register data:", formData);
    navigate("/login");
  };

  return (
    <div>
      {/* TITLE (NOT PURPLE) */}
      <h2 className="text-2xl font-bold text-center mb-1">
        Create Account
      </h2>
      <p className="text-sm text-gray-500 text-center mb-6">
        Register to get started
      </p>

      {/* 🔮 PURPLE SECTION STARTS HERE */}
      <div className="space-y-4 text-purple-700">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-purple-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-purple-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-purple-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-purple-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg
                       hover:bg-purple-700 transition font-semibold"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-purple-600">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold underline">
            Login
          </Link>
        </p>
      </div>
      {/* 🔮 PURPLE SECTION ENDS HERE */}
    </div>
  );
}

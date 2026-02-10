
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../../features/auth/authslice";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("vendor"); // admin | vendor

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔐 MANUAL LOGIN (NO BACKEND)
    dispatch(
      loginSuccess({
        user: {
          email,
          role, // ✅ REQUIRED by sidebar & routes
          name: role === "admin" ? "Admin User" : "Vendor User",
        },
        token: "manual-token-" + role, // fake token
      })
    );

    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* EMAIL */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          required
          placeholder="admin@gmail.com / vendor@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* PASSWORD */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          type="password"
          required
          placeholder="Any password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* ROLE SELECT */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Login As
        </label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="admin">Admin</option>
          <option value="vendor">Vendor</option>
        </select>
      </div>

      {/* LOGIN */}
      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 rounded font-medium hover:bg-purple-700 transition"
      >
        Login
      </button>

      <p className="text-xs text-center text-gray-500">
        Manual login (backend not connected)
      </p>
    </form>
  );
}


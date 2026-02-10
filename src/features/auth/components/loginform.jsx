
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../authslice";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    // 🔐 Demo login (replace with API later)
    dispatch(
      loginSuccess({
        user: {
          email,
          role: "admin",
        },
        token: "demo-token",
      })
    );

    navigate("/dashboard");
  };

  return (
    <div>
      {/* LOGO */}
      <div className="flex justify-center mb-6">
        <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-lg">
          R
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center mb-1">Login</h2>
      <p className="text-sm text-gray-500 text-center mb-6">
        Welcome back
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* EMAIL */}
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border-b border-gray-400 focus:border-purple-500 outline-none py-2"
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label className="text-sm text-gray-600">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent border-b border-gray-400 focus:border-purple-500 outline-none py-2"
          />
        </div>

        {/* ERROR */}
        {error && (
          <p className="text-xs text-red-600 text-center">{error}</p>
        )}

        {/* FORGOT PASSWORD */}
        <div
          onClick={() => navigate("/forgot-password")}
          className="text-right text-xs text-purple-500 hover:text-purple-600 cursor-pointer"
        >
          Forgot Password?
        </div>

        {/* LOGIN BUTTON */}
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md font-semibold transition"
        >
          Log in
        </button>

        {/* ✅ REGISTER BUTTON — FIXED */}
        <button
          type="button"
          onClick={() => navigate("/register")}
          className="w-full border border-purple-600 text-purple-600 py-2 rounded-md font-semibold hover:bg-purple-50 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}

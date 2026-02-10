// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { loginSuccess } from '../authSlice';

// export default function LoginForm() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // 🔴 DEMO VALIDATION
//     if (!email || !password) {
//       setError('Please enter email and password');
//       return;
//     }

//     // ✅ DEMO LOGIN SUCCESS
//     dispatch(
//       loginSuccess({
//         user: {
//           email,
//           role: 'admin', // demo role
//         },
//         token: 'demo-token',
//       })
//     );

//     navigate('/dashboard');
//   };

//   return (
//     <div>
//       {/* Logo */}
//       <div className="flex justify-center mb-6">
//         <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-lg">
//           R
//         </div>
//       </div>

//       <h2 className="text-2xl font-bold text-center mb-1">Login</h2>
//       <p className="text-sm text-gray-500 text-center mb-6">
//         Welcome back
//       </p>

//       <form className="space-y-4" onSubmit={handleSubmit}>
//         {/* Email */}
//         <div>
//           <label className="text-sm text-gray-600">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full bg-transparent border-b border-gray-400 focus:border-red-500 outline-none py-2"
//           />
//         </div>

//         {/* Password */}
//         <div>
//           <label className="text-sm text-gray-600">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full bg-transparent border-b border-gray-400 focus:border-red-500 outline-none py-2"
//           />
//         </div>

//         {/* Error */}
//         {error && (
//           <p className="text-xs text-red-600 text-center">{error}</p>
//         )}

//         {/* Forgot */}
//         <div
//           onClick={() => navigate('../components/forgotform.jsx')}
//           className="text-right text-xs text-gray-500 hover:text-red-600 cursor-pointer"
//         >
//           Forgot Password?
//         </div>

//         {/* Login Button */}
//         <button
//           type="submit"
//           className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md font-semibold transition"
//         >
//           Log in
//         </button>

//         {/* Register */}
//         <button
//           type="button"
//           className="w-full border border-purple-600 text-purple-600 py-2 rounded-md font-semibold hover:bg-purple -50 transition"
//         >
//           Register
//         </button>

//         {/* Divider */}
//         {/* <div className="flex items-center gap-2 text-xs text-gray-400">
//           <div className="flex-1 h-px bg-gray-300" />
//           OR
//           <div className="flex-1 h-px bg-gray-300" />
//         </div> */}

//         {/* Google (demo) */}
//         {/* <button
//           type="button"
//           onClick={() => {
//             dispatch(
//               loginSuccess({
//                 user: { email: 'google@demo.com', role: 'admin' },
//                 token: 'google-demo-token',
//               })
//             );
//             navigate('/dashboard');
//           }}
//           className="w-full border py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50"
//         >
//           <img
//             src="https://www.svgrepo.com/show/475656/google-color.svg"
//             className="w-4 h-4"
//             alt="google"
//           />
//           <span className="text-sm">Log in with Google</span>
//         </button> */}   
//       </form>
//     </div>
//   );
// }
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


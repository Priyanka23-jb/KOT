
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

//     if (!email || !password) {
//       setError('Please enter email and password');
//       return;
//     }

//     dispatch(
//       loginSuccess({
//         user: { email, role: 'admin' },
//         token: 'demo-token',
//       })
//     );

//     navigate('/dashboard');
//   };

//   return (
//     <div>
//       {/* LOGO */}
//       <div className="flex justify-center mb-4">
//         <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-white font-bold text-lg">
//           A
//         </div>
//       </div>

//       {/* HEADING */}
//       <h2 className="text-xl font-semibold text-center text-gray-800 mb-0">
//         Welcome back
//       </h2>
//       <p className="text-xs text-gray-500 text-center mb-4">
//         Please login to your account
//       </p>

//       <form className="space-y-4" onSubmit={handleSubmit}>
//         {/* EMAIL */}
//         <div>
//           <label className="text-xs text-gray-600">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="you@example.com"
//             className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
//           />
//         </div>

//         {/* PASSWORD */}
//         <div>
//           <label className="text-xs text-gray-600">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="••••••••"
//             className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
//           />
//         </div>

//         {/* ERROR */}
//         {error && (
//           <p className="text-xs text-purple-500 text-center">{error}</p>
//         )}

//         {/* FORGOT */}
//         <div
//           onClick={() => navigate('/forgot-password')}
//           className="text-right text-xs text-purple-600 hover:underline cursor-pointer"
//         >
//           Forgot password?
//         </div>

//         {/* LOGIN BUTTON */}
//         <button
//           type="submit"
//           className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg text-sm font-medium transition"
//         >
//           Sign in
//         </button>

//         {/* REGISTER */}
//         <button
//           type="button"
//           className="w-full border border-purple-600 text-purple-600 py-2 rounded-lg text-sm font-medium hover:bg-purple-50 transition"
//         >
//           Create account
//         </button>

//         {/* DIVIDER */}
//         <div className="flex items-center gap-2 text-[11px] text-gray-400">
//           <div className="flex-1 h-px bg-gray-300" />
//           OR
//           <div className="flex-1 h-px bg-gray-300" />
//         </div>

//         {/* GOOGLE */}
//         <button
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
//           className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50"
//         >
//           <img
//             src="https://www.svgrepo.com/show/475656/google-color.svg"
//             className="w-4 h-4"
//             alt="google"
//           />
//           <span className="text-sm">Continue with Google</span>
//         </button>
//       </form>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForgotPasswordForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      alert('Please enter your email ID');
      return;
    }

    // very basic email validation
    if (!/\S+@\S+\.\S+/.test(trimmedEmail)) {
      alert('Please enter a valid email ID');
      return;
    }

    // TODO: integrate API
    console.log('Reset link sent to:', trimmedEmail);
  };

  return (
    <div>
      {/* HEADING */}
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-1">
        Forgot Password?
      </h2>

      <p className="text-xs text-gray-500 text-center mb-4">
        Enter your email ID and we’ll send you a reset link
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* EMAIL */}
        <div>
          <label className="text-xs text-gray-600">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email ID"
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                       focus:ring-2 focus:ring-purple-500 focus:outline-none"
            autoFocus
          />
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full bg-purple-500 hover:bg-purple-600
                     text-white py-2 rounded-lg
                     text-sm font-medium transition"
        >
          Send Reset Link
        </button>

        {/* BACK TO LOGIN */}
        <div
          onClick={() => navigate('/login')}
          className="text-center text-xs text-gray-500
                     hover:underline cursor-pointer"
        >
          Back to login
        </div>
      </form>
    </div>
  );
}
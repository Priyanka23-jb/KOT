
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
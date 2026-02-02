import React from 'react';
import LoginForm from '../components/LoginForm';

export default function Login() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1540189549336-e6e99c3679fe')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Main Card */}
      <div className="relative z-10 w-[900px] max-w-[95%] bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-center p-10 text-white">
          <h1 className="text-4xl font-bold mb-4">
            Every Asian Food <br /> in one Hub
          </h1>
          <p className="text-sm text-white/90">
            Best Asian food under one roof <br />
            Takeaway | Dining | Delivery
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-white/80 backdrop-blur-md p-10">
          <LoginForm />
        </div>

      </div>
    </div>
  );
}

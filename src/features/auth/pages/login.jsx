
import React from "react";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-slowZoom"
        style={{
          backgroundImage:
            "url('https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/9169/SM240008.jpg')",
        }}
      />

      {/* GRID OVERLAY */}
      <div className="absolute inset-0 bg-grid opacity-30 animate-gridMove" />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-blue-900/60" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-[700px] max-w-[95%] bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden p-6 text-white">

          {/* HEADING */}
          <h1 className="text-5xl font-bold tracking-wide text-center mb-1">
            BOOK AMC
          </h1>

          {/* DESCRIPTION
          <p className="text-sm text-white/90 text-center mb-4">
            Controls, certifications, policies, regulations and standards
            managed securely in one digital platform.
          </p> */}

          {/* LOGIN FORM CARD */}
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-5 text-gray-900">
            <LoginForm />
          </div>

        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        .animate-slowZoom {
          animation: slowZoom 30s linear infinite alternate;
        }

        .bg-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 80px 80px;
        }

        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 200px 200px; }
        }
        .animate-gridMove {
          animation: gridMove 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
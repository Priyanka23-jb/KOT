import React from "react";
import RegisterForm from "../components/registerform";

export default function Register() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND IMAGE — SAME AS LOGIN */}
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

      {/* CENTERED CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-2xl">
          <RegisterForm />
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

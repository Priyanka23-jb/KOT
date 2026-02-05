// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Splash() {
//   const navigate = useNavigate();

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden font-sans bg-black">

//       {/* BASE IMAGE */}
//       <div
//         className="absolute inset-0 bg-cover bg-center scale-110 animate-slowZoom brightness-75"
//         style={{
//           backgroundImage: "url('/compliance-bg.jpg')",
//         }}
//       />

//       {/* TECH GRID OVERLAY */}
//       <div className="absolute inset-0 bg-grid opacity-20 animate-gridMove" />

//       {/* CENTER DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black/80" />

//       {/* LEFT PURPLE GRADIENT */}
//       <div className="absolute inset-0 bg-gradient-to-r from-purple-950/60 via-transparent to-transparent" />

//       {/* RIGHT PURPLE GRADIENT */}
//       <div className="absolute inset-0 bg-gradient-to-l from-purple-950/60 via-transparent to-transparent" />

//       {/* SUBTLE NOISE */}
//       <div className="absolute inset-0 bg-noise opacity-[0.04]" />

//       {/* MAIN CONTENT */}
//       <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
//         <div
//           className="
//             relative
//             w-full max-w-4xl
//             bg-gradient-to-br from-white/10 to-white/5
//             backdrop-blur-3xl
//             rounded-[2.5rem]
//             border border-white/10
//             shadow-[0_40px_140px_rgba(0,0,0,0.85)]
//             p-10 md:p-16
//             text-white
//           "
//         >

//           {/* BRAND */}
//           <div className="mb-8 text-center">
//             <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
//                             bg-purple-500/10 border border-purple-400/30
//                             text-purple-300 text-xs tracking-[0.3em] uppercase">
//               bookmac.com
//             </div>
//           </div>

//           {/* HEADING */}
//           <h1 className="text-center text-4xl md:text-6xl font-semibold tracking-widest mb-4">
//             COMMING SOON ...
//           </h1>

//           {/* DESCRIPTION */}
//           <p className="text-center text-white/70 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-14">
//             Manage controls, certifications, policies, regulations and standards
//             securely in one unified digital platform.
//           </p>

//           {/* DEMO DETAILS */}
//           <div className="max-w-lg mx-auto space-y-6">
//             <div className="flex justify-between items-center border-b border-white/10 pb-3">
//               <span className="text-white/50 text-sm">Contact Number</span>
//               <span className="text-white/90 font-medium">
//                 +91 98765 43210
//               </span>
//             </div>

//             <div className="flex justify-between items-center border-b border-white/10 pb-3">
//               <span className="text-white/50 text-sm">Email ID</span>
//               <span className="text-white/90 font-medium">
//                 demo@bookmac.com
//               </span>
//             </div>

//             <div className="flex justify-between items-center border-b border-white/10 pb-3">
//               <span className="text-white/50 text-sm">Access Level</span>
//               <span className="text-white/90 font-medium">
//                 Compliance Admin
//               </span>
//             </div>
//           </div>

//           {/* LOADING INDICATOR */}
//           {/* <div className="mt-14 flex items-center justify-center gap-3 text-white/60">
//             <span className="h-2.5 w-2.5 bg-purple-400 rounded-full animate-pulse" />
//             <span className="h-2.5 w-2.5 bg-purple-400 rounded-full animate-pulse delay-150" />
//             <span className="h-2.5 w-2.5 bg-purple-400 rounded-full animate-pulse delay-300" />
//             <span className="ml-3 text-xs tracking-widest uppercase">
//               Initializing platform…
//             </span>
//           </div> */}

//           {/* NEXT BUTTON */}
//           {/* <button
//             onClick={() => navigate('./login')}
//             aria-label="Go to Login"
//             className="
//               absolute bottom-6 right-6
//               h-14 w-14
//               rounded-full
//               bg-purple-500/20
//               hover:bg-purple-500/40
//               border border-purple-400/40
//               flex items-center justify-center
//               transition-all duration-300
//               hover:scale-110
//               hover:shadow-[0_0_40px_rgba(168,85,247,0.7)]
//             "
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-7 w-7 text-purple-300"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button> */}
//         </div>
//       </div>

//       {/* CUSTOM ANIMATIONS */}
//       <style>{`
//         @keyframes slowZoom {
//           0% { transform: scale(1); }
//           100% { transform: scale(1.15); }
//         }
//         .animate-slowZoom {
//           animation: slowZoom 45s ease-in-out infinite alternate;
//         }

//         .bg-grid {
//           background-image:
//             linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
//           background-size: 100px 100px;
//         }

//         @keyframes gridMove {
//           0% { background-position: 0 0; }
//           100% { background-position: 300px 300px; }
//         }
//         .animate-gridMove {
//           animation: gridMove 60s linear infinite;
//         }

//         .bg-noise {
//           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
//         }
//       `}</style>
//     </div>
//   );
// }





import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Splash() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans">

      {/* PURE BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/9169/SM240008.jpg')",
        }}
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div
          className="
            relative
            w-full max-w-4xl
            bg-gradient-to-br from-white/10 to-white/5
            backdrop-blur-3xl
            rounded-[2.5rem]
            border border-white/10
            shadow-[0_40px_140px_rgba(0,0,0,0.85)]
            p-10 md:p-16
            text-white
          "
        >

          {/* BRAND */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
                            bg-purple-500/10 border border-purple-400/30
                            text-purple-300 text-xs tracking-[0.3em] uppercase">
              bookamc.com
            </div>
          </div>

          {/* HEADING */}
          <h1 className="text-center text-4xl md:text-6xl font-semibold tracking-widest mb-4">
            COMING SOON ...
          </h1>

          {/* DESCRIPTION */}
          <p className="text-center text-white/70 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-14">
            Manage controls, certifications, policies, regulations and standards
            securely in one unified digital platform.
          </p>

          {/* DEMO DETAILS */}
          <div className="max-w-lg mx-auto space-y-6">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="text-white/50 text-sm">Contact Number</span>
              <span className="text-white/90 font-medium">
                +91 xxxx xxxx xx
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="text-white/50 text-sm">Email ID</span>
              <span className="text-white/90 font-medium">
                demo@bookamc.com
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="text-white/50 text-sm">Access Level</span>
              <span className="text-white/90 font-medium">
                Compliance Admin
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaShieldAlt,
  FaTools,
  FaSolarPanel,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

const InnerPage = () => {
  return (
    <div className="flex flex-col w-screen min-h-screen bg-white">
      {/* ================= HEADER (UNCHANGED) ================= */}
      <header className="w-full bg-white shadow-sm relative z-50">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center px-10 py-5 text-[12px] bg-gray-100 text-gray-600">
          {/* Left side */}
          <div className="flex items-center gap-2 ml-72">
            <span className="text-blue-800">📍</span>
            <span className="text-sm">
              b1889 NW 79st St, Asheville, NC 98726
            </span>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-blue-500">📞</span>
              <span className="text-sm">(800) 543 5432</span>
            </div>

            <div className="w-px h-4 bg-gray-300"></div>

            <div className="flex items-center gap-2 mr-80">
              <span className="text-blue-500 text-sm">✉</span>
              <span className="text-sm">inquiry@bookamc.com</span>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 lg:px-10 py-4 text-black">
          <div className="text-xl font-bold ml-72">BOOK AMC</div>
          <div className="hidden md:flex gap-8 text-sm">
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
            <Link to="/innerpage" className="hover:text-blue-500">
              About Company
            </Link>
            <div className="relative group">
              <span className="cursor-pointer hover:text-blue-400 flex items-center gap-1">
                Our Services
                <svg
                  className="w-4 h-4 mt-[1px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>

              <div className="absolute top-full left-0 mt-3 w-56 bg-white text-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <ul className="py-2 text-sm">
                  <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                    Fire Management
                  </li>
                  <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                    CCTV Cameras
                  </li>
                  <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                    STP Service
                  </li>
                  <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                    Solar Service
                  </li>
                </ul>
              </div>
            </div>
            <Link to="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm mr-80">
            Inquiry
          </button>
        </nav>
      </header>

      {/* ================= ABOUT HERO ================= */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            About BOOK AMC
          </h1>
          <p className="max-w-2xl text-blue-100">
            A trusted platform for managing Annual Maintenance Contracts for
            Fire, CCTV, STP and Solar systems.
          </p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-600 mb-4">
              BOOK AMC is built to simplify infrastructure maintenance for
              businesses. We help organizations manage compliance, servicing,
              and performance of critical systems under a single platform.
            </p>
            <p className="text-gray-600">
              Our network of verified vendors and technicians ensures timely,
              transparent, and reliable maintenance services.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-8">
            <h3 className="font-semibold mb-4">Why Choose Us</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                Verified Vendors & Technicians
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                Transparent AMC Pricing
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                Compliance & Documentation Support
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                Dedicated Support Team
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-2xl font-bold text-center mb-12">
            Our Core Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<FaShieldAlt />}
              title="Fire Safety AMC"
              desc="Inspection, servicing, and compliance of fire safety systems."
            />
            <ServiceCard
              icon={<FaTools />}
              title="CCTV Maintenance"
              desc="Reliable surveillance system servicing and monitoring."
            />
            <ServiceCard
              icon={<FaUsers />}
              title="STP Services"
              desc="Efficient operation and compliance of STP plants."
            />
            <ServiceCard
              icon={<FaSolarPanel />}
              title="Solar AMC"
              desc="Preventive and corrective solar maintenance services."
            />
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <Stat value="500+" label="Clients Served" />
          <Stat value="1000+" label="AMCs Managed" />
          <Stat value="300+" label="Verified Technicians" />
          <Stat value="99%" label="Customer Satisfaction" />
        </div>
      </section>

      {/* ================= FOOTER (UNCHANGED) ================= */}
      <footer className="bg-[#f3f4f6] text-gray-700 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* TOP GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
            {/* COLUMN 1 — LOGO + CONTACT */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-sm" />
                <span className="text-xl font-bold text-gray-800">
                  BOOK AMC
                </span>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 text-gray-500" />
                  <span>1889 NW 79st St, Asheville, NC 98726</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-gray-500" />
                  <span>(800) 543 5432</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-gray-500" />
                  <span>inquiry@bookamc.com</span>
                </div>
              </div>
            </div>

            {/* COLUMN 2 — QUICK LINKS */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/"
                    className="hover:text-emerald-500 cursor-pointer"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Innerpage"
                    className="hover:text-emerald-500 cursor-pointer"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/innerpage"
                    className="hover:text-emerald-500 cursor-pointer"
                  >
                    Company
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-emerald-500 cursor-pointer"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 3 — OTHER PAGES */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-6">Services</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/innerpage"
                    className="hover:text-emerald-500 cursor-pointer"
                  >
                    Fire
                  </Link>
                </li>
                <li>
                  <Link
                    to="/innerpage"
                    className="hover:text-emerald-500 cursor-pointer"
                  >
                    CCTV
                  </Link>
                </li>
                <li>
                  <Link
                    to="/innerpage"
                    className="hover:text-emerald-500 cursor-pointer"
                  >
                    STP
                  </Link>
                </li>
                <li>
                  <Link
                    to="/innerpage"
                    className="hover:text-emerald-500 cursor-pointer"
                  >
                    Solar
                  </Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 4 — EXPERT + SOCIAL */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Join with us</h4>

              <ul className="space-y-3 text-sm">
                <li className="hover:text-emerald-500 cursor-pointer">
                  Vendor
                </li>
                <li className="hover:text-emerald-500 cursor-pointer">
                  Technician
                </li>
              </ul>

              <div className="mt-8">
                <p className="font-semibold text-gray-900 mb-4">
                  Connect With Us
                </p>

                <div className="flex gap-4 text-gray-700">
                  <FaFacebookF className="cursor-pointer hover:text-emerald-500" />
                  <FaTwitter className="cursor-pointer hover:text-emerald-500" />
                  <FaYoutube className="cursor-pointer hover:text-emerald-500" />
                  <FaLinkedinIn className="cursor-pointer hover:text-emerald-500" />
                </div>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="w-full h-px bg-gray-300 mb-6" />

          {/* BOTTOM BAR */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© BookAMC. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* ================= SMALL COMPONENTS ================= */

const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
    <div className="text-blue-600 text-3xl mb-4">{icon}</div>
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);

const Stat = ({ value, label }) => (
  <div>
    <h3 className="text-3xl font-bold text-blue-600">{value}</h3>
    <p className="text-gray-600 text-sm mt-1">{label}</p>
  </div>
);

export default InnerPage;

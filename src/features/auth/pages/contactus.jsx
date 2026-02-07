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
    <div className="w-full min-h-screen bg-[#f5f9fc] flex flex-col">
      {/* ================= HEADER ================= */}
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

      {/* ================= FULL WIDTH MAP ================= */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <iframe
          title="map"
          className="w-screen h-[75vh] block"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps?q=Coconut%20Grove%20FL&output=embed"
        />
      </section>

      {/* ================= FLOATING INFO CARD ================= */}
      <section className="relative z-20 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-8 text-center -mt-24">
          <div className="flex flex-col items-center gap-2">
            <FaPhoneAlt className="text-blue-500 text-xl" />
            <p className="text-sm text-gray-600">+133-456-787</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <FaMapMarkerAlt className="text-blue-500 text-xl" />
            <p className="text-sm text-gray-600">
              3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <FaEnvelope className="text-blue-500 text-xl" />
            <p className="text-sm text-gray-600">sales@yourwebsite.com</p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto bg-[#e9f6fc] rounded-xl p-8 shadow">
          <form className="space-y-6 text-black">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="mt-2 w-full bg-white border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Phone</label>
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="mt-2 w-full bg-white border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="mt-2 w-full bg-white border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="mt-2 w-full bg-white border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
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

/* ================= COMPONENTS ================= */

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

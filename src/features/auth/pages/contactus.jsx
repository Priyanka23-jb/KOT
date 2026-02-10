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
} from "react-icons/fa";

const InnerPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#f5f9fc] flex flex-col">
      {/* ================= HEADER ================= */}
      <header className="w-full bg-white shadow-sm relative z-50">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center px-6 xl:px-10 py-5 text-[12px] bg-gray-100 text-gray-600">
          {/* Left */}
          <div className="flex items-center gap-2 xl:ml-72">
            <span className="text-blue-800">📍</span>
            <span className="text-sm">
              b1889 NW 79st St, Asheville, NC 98726
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-blue-500">📞</span>
              <span className="text-sm">(800) 543 5432</span>
            </div>

            <div className="w-px h-4 bg-gray-300" />

            <div className="flex items-center gap-2 xl:mr-80">
              <span className="text-blue-500 text-sm">✉</span>
              <span className="text-sm">inquiry@bookamc.com</span>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 xl:px-10 py-4 text-black">
          <div className="text-xl font-bold xl:ml-72">BOOK AMC</div>

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
                  className="w-4 h-4"
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

              <div className="absolute top-full left-0 mt-3 w-56 bg-white text-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <ul className="py-2 text-sm">
                  {["Fire", "CCTV", "STP", "Solar"].map((item) => (
                    <li
                      key={item}
                      className="px-5 py-3 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link to="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm xl:mr-80">
            Book a demo
          </button>
        </nav>
      </header>

      {/* ================= FULL WIDTH MAP ================= */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <iframe
          title="map"
          className="w-screen h-[60vh] md:h-[75vh] block"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps?q=Coconut%20Grove%20FL&output=embed"
        />
      </section>

      {/* ================= FLOATING INFO CARD ================= */}
      <section className="relative z-20 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-8 text-center -mt-20 md:-mt-24">
          <Info icon={<FaPhoneAlt />} text="+133-456-787" />
          <Info
            icon={<FaMapMarkerAlt />}
            text="3015 Grand Ave, Coconut Grove, FL 12345"
          />
          <Info icon={<FaEnvelope />} text="sales@yourwebsite.com" />
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto bg-[#e9f6fc] rounded-xl p-8 shadow">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Name" placeholder="Your Name" />
              <Input label="Phone" placeholder="Your Phone" />
            </div>

            <Input label="Email" placeholder="Your Email" />
            <Textarea label="Message" placeholder="Your Message" />

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#f3f4f6] text-gray-700 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 xl:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
            <FooterCol />
            <FooterLinks title="Quick Links" links={["Home", "About", "Company", "Contact"]} />
            <FooterLinks title="Services" links={["Fire", "CCTV", "STP", "Solar"]} />
            <FooterSocial />
          </div>

          <div className="border-t pt-6 text-center text-sm text-gray-500">
            © BookAMC. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

/* ================= SMALL COMPONENTS ================= */

const Info = ({ icon, text }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="text-blue-500 text-xl">{icon}</div>
    <p className="text-sm text-gray-600">{text}</p>
  </div>
);

const Input = ({ label, placeholder }) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-2 w-full bg-white border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-400"
    />
  </div>
);

const Textarea = ({ label, placeholder }) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <textarea
      rows="5"
      placeholder={placeholder}
      className="mt-2 w-full bg-white border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-400"
    />
  </div>
);

const FooterCol = () => (
  <div>
    <h3 className="text-xl font-bold mb-6">BOOK AMC</h3>
    <p className="text-sm flex items-center gap-2">
      <FaMapMarkerAlt /> Asheville, NC
    </p>
    <p className="text-sm flex items-center gap-2 mt-2">
      <FaPhoneAlt /> (800) 543 5432
    </p>
    <p className="text-sm flex items-center gap-2 mt-2">
      <FaEnvelope /> inquiry@bookamc.com
    </p>
  </div>
);

const FooterLinks = ({ title, links }) => (
  <div>
    <h4 className="font-semibold mb-6">{title}</h4>
    <ul className="space-y-3 text-sm">
      {links.map((l) => (
        <li key={l} className="hover:text-emerald-500 cursor-pointer">
          {l}
        </li>
      ))}
    </ul>
  </div>
);

const FooterSocial = () => (
  <div>
    <h4 className="font-semibold mb-4">Connect With Us</h4>
    <div className="flex gap-4 text-lg">
      <FaFacebookF />
      <FaTwitter />
      <FaYoutube />
      <FaLinkedinIn />
    </div>
  </div>
);

export default InnerPage;

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

const Container = ({ children }) => (
  <div className="max-w-[1440px] mx-auto px-4 xl:pl-72 xl:pr-80">
    {children}
  </div>
);

const InnerPage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* ================= HEADER ================= */}
      <header className="w-full bg-white shadow-sm relative z-50">
        {/* Top Bar */}
        <div className="hidden md:block bg-gray-100 text-gray-600 text-[12px]">
          <Container>
            <div className="flex justify-between items-center py-5">
              <div className="flex items-center gap-2">
                <span className="text-blue-800">📍</span>
                <span>b1889 NW 79st St, Asheville, NC 98726</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2">
                  📞 (800) 543 5432
                </span>
                <div className="w-px h-4 bg-gray-300" />
                <span className="flex items-center gap-2">
                  ✉ inquiry@bookamc.com
                </span>
              </div>
            </div>
          </Container>
        </div>

        {/* Navbar */}
        <Container>
          <nav className="flex items-center justify-between py-4">
            <div className="text-xl font-bold">BOOK AMC</div>

            <div className="hidden md:flex gap-8 text-sm">
              <Link to="/" className="hover:text-blue-500">Home</Link>
              <Link to="/innerpage" className="hover:text-blue-500">About Company</Link>

              <div className="relative group">
                <span className="flex items-center gap-1 cursor-pointer hover:text-blue-400">
                  Our Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>

                <div className="absolute left-0 mt-3 w-56 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                  {["Fire", "CCTV", "STP", "Solar"].map(item => (
                    <div key={item} className="px-5 py-3 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="hover:text-blue-500">Contact</Link>
            </div>

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm">
              Book a demo
            </button>
          </nav>
        </Container>
      </header>

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-700 text-white py-20">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About BOOK AMC</h1>
          <p className="max-w-2xl text-blue-100">
            A trusted platform for managing Annual Maintenance Contracts for Fire, CCTV, STP and Solar systems.
          </p>
        </Container>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
              <p className="text-gray-600 mb-4">
                BOOK AMC is built to simplify infrastructure maintenance for businesses.
              </p>
              <p className="text-gray-600">
                Our network of verified vendors ensures reliable maintenance services.
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="font-semibold mb-4">Why Choose Us</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  "Verified Vendors & Technicians",
                  "Transparent AMC Pricing",
                  "Compliance & Documentation Support",
                  "Dedicated Support Team",
                ].map(text => (
                  <li key={text} className="flex items-center gap-2">
                    <FaCheckCircle className="text-blue-600" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-gray-50 py-20">
        <Container>
          <h2 className="text-2xl font-bold text-center mb-12">Our Core Services</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard icon={<FaShieldAlt />} title="Fire Safety AMC" />
            <ServiceCard icon={<FaTools />} title="CCTV Maintenance" />
            <ServiceCard icon={<FaUsers />} title="STP Services" />
            <ServiceCard icon={<FaSolarPanel />} title="Solar AMC" />
          </div>
        </Container>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Stat value="500+" label="Clients Served" />
            <Stat value="1000+" label="AMCs Managed" />
            <Stat value="300+" label="Technicians" />
            <Stat value="99%" label="Satisfaction" />
          </div>
        </Container>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#f3f4f6] pt-16 pb-8 text-gray-700">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <FooterColumn />
            <FooterLinks title="Quick Links" links={["Home", "About", "Company", "Contact"]} />
            <FooterLinks title="Services" links={["Fire", "CCTV", "STP", "Solar"]} />
            <FooterSocial />
          </div>

          <div className="border-t pt-6 text-center text-sm text-gray-500">
            © BookAMC. All Rights Reserved.
          </div>
        </Container>
      </footer>
    </div>
  );
};

/* ================= COMPONENTS ================= */

const ServiceCard = ({ icon, title }) => (
  <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
    <div className="text-blue-600 text-3xl mb-4">{icon}</div>
    <h3 className="font-semibold">{title}</h3>
  </div>
);

const Stat = ({ value, label }) => (
  <div>
    <h3 className="text-3xl font-bold text-blue-600">{value}</h3>
    <p className="text-sm text-gray-600">{label}</p>
  </div>
);

const FooterColumn = () => (
  <div>
    <h3 className="text-xl font-bold mb-4">BOOK AMC</h3>
    <p className="flex items-center gap-2 text-sm"><FaMapMarkerAlt /> Asheville, NC</p>
    <p className="flex items-center gap-2 text-sm mt-2"><FaPhoneAlt /> (800) 543 5432</p>
    <p className="flex items-center gap-2 text-sm mt-2"><FaEnvelope /> inquiry@bookamc.com</p>
  </div>
);

const FooterLinks = ({ title, links }) => (
  <div>
    <h4 className="font-semibold mb-4">{title}</h4>
    <ul className="space-y-2 text-sm">
      {links.map(l => <li key={l} className="hover:text-emerald-500 cursor-pointer">{l}</li>)}
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

import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";

import { useEffect, useRef, useState } from "react";

function useInView(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, ...options },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

export default function Splash() {
  const navigate = useNavigate();
  const [heroRef, heroVisible] = useInView();
  const [aboutRef, aboutVisible] = useInView();
  const [companyRef, companyVisible] = useInView();
  const [servicesRef, servicesVisible] = useInView();

  const items = [
    {
      name: "Jane Doe",
      location: "Austin",
      title: "Simplified property management",
      text: "Thanks to the RealHomes theme, my website has become a powerful marketing tool.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "John Smith",
      location: "Pembroke Pines",
      title: "Knowledge of local market",
      text: "Working with John Smith was an absolute pleasure throughout the process.",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "Emily Wilson",
      location: "Orange",
      title: "Confident and comfortable",
      text: "Emily Wilson made us feel confident and comfortable from day one.",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Elissa White",
      location: "Alpha",
      title: "Negotiation skills were top-notch",
      text: "Their negotiation skills resulted in a sale price beyond expectations.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  // 🔁 Repeat items MANY times
  const repeated = [...items, ...items, ...items];

  const CARD_WIDTH = 33.333; // 3 cards visible
  const START_INDEX = items.length; // start from middle

  const [index, setIndex] = useState(START_INDEX);
  const trackRef = useRef(null);

  const next = () => setIndex((i) => i + 1);
  const prev = () => setIndex((i) => i - 1);

  // 🧠 Keep index centered (no end ever)
  useEffect(() => {
    if (!trackRef.current) return;

    if (index >= items.length * 2) {
      setIndex(items.length);
    }

    if (index <= items.length - 1) {
      setIndex(items.length * 2 - 1);
    }
  }, [index, items.length]);

  return (
    <div className="w-full min-h-screen text-white overflow-x-hidden">
      {/* TOP INFO BAR */}
      <div className="hidden md:flex justify-between items-center px-10 py-5 text-[12px] bg-gray-100 text-gray-600">
        {/* Left side */}
        <div className="flex items-center gap-2 ml-72">
          <span className="text-blue-500">📍</span>
          <span>1889 NW 79st St, Asheville, NC 98726</span>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-blue-500">📞</span>
            <span>(800) 543 5432</span>
          </div>

          <div className="w-px h-4 bg-gray-300"></div>

          <div className="flex items-center gap-2 mr-80">
            <span className="text-blue-500">✉</span>
            <span>inquiry@bookamc.com</span>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative min-h-screen transition-all duration-700 ease-out bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://ultra.realhomes.io/agency/wp-content/uploads/sites/11/2023/09/alex-knight-Ys-DBJeX0nE-unsplash-e1695129806223.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-6 flex flex-col min-h-screen">
          {/* NAVBAR */}
          <nav className="flex items-center justify-between">
            <div className="text-xl sm:text-2xl font-bold">BOOK AMC</div>

            <div className="hidden md:flex gap-6 text-sm">
              <span className="cursor-pointer hover:text-blue-400">Home</span>
              <span className="cursor-pointer hover:text-blue-400">
                Fire System
              </span>
              <span className="cursor-pointer hover:text-blue-400">
                CCTV Cameras
              </span>
              <span className="cursor-pointer hover:text-blue-400">
                STP Management
              </span>
              <span className="cursor-pointer hover:text-blue-400">
                Solar Systems
              </span>
            </div>

            <button className="bg-blue-500 hover:bg-blue-600 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm">
              Make an Inquiry
            </button>
          </nav>

          {/* HERO GRID */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mt-12 md:mt-0">
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight mb-6">
                Book AMC <br className="hidden sm:block" />
                in Minutes
              </h1>
              <p className="text-gray-300 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
                Secure reliable annual maintenance for your equipment with
                trusted service partners. Fast booking, transparent pricing, and
                on-time support.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 text-gray-800 shadow-2xl w-full max-w-md mx-auto md:ml-40">
              <div className="flex gap-3 mb-6">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-full text-sm">
                  For technician
                </button>
                <button className="flex-1 bg-gray-100 py-2 rounded-full text-sm">
                  For vendor
                </button>
              </div>

              <div className="space-y-4">
                {[
                  "Enter Name",
                  "Enter Email",
                  "Enter Contact",
                  "Enter AMC Plan",
                ].map((placeholder, i) => (
                  <input
                    key={i}
                    type="text"
                    placeholder={placeholder}
                    className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <button className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-700 rounded-lg flex items-center justify-center text-white">
                  <FaSearch />
                </button>
                <button
                  onClick={() => navigate("/search")}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              Your Trusted Partner <br /> for Annual Maintenance.
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-lg mb-8">
              We provide reliable AMC services for your essential equipment,
              ensuring smooth performance, timely support, and long-term
              protection.
            </p>
            <button className="border border-emerald-400 text-emerald-500 px-6 py-3 rounded-md hover:bg-emerald-400 hover:text-white transition">
              Read More →
            </button>
          </div>

          {/* RESPONSIVE IMAGE GRID */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {images().map((img, i) => (
              <img key={i} src={img} className="rounded-xl h-48 object-cover" />
            ))}
          </div>

          <div className="hidden md:flex gap-6 h-[520px]">
            {images().map((img, i) => (
              <div
                key={i}
                className="group flex-1 rounded-xl overflow-hidden transition-all duration-500 hover:flex-[3]"
              >
                <img src={img} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section
        ref={companyRef}
        className={`bg-gray-50 py-24 transition-all duration-700 ease-out
    ${companyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
  `}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* DIVIDER */}
          <div className="w-full h-px bg-gray-300/60 mb-12" />

          {/* TITLE */}
          <p className="text-center text-sm md:text-base text-gray-600 mb-14">
            <span className="text-orange-500 font-semibold"></span> Our Clients
          </p>

          {/* COMPANIES */}
          <div className="flex flex-wrap justify-center gap-x-14 gap-y-10 text-lg font-semibold">
            {[
              { name: "kyan", color: "bg-purple-500" },
              { name: "nirastate", color: "bg-green-600" },
              { name: "kanba", color: "bg-pink-500" },
              { name: "ztos", color: "bg-blue-600" },
              { name: "treva.", color: "bg-teal-500" },
              { name: "goldline", color: "bg-yellow-500" },
              { name: "amara", color: "bg-indigo-600" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 text-gray-800
                     transition-transform duration-300
                     hover:scale-105"
              >
                {/* LOGO ICON */}
                <span
                  className={`w-9 h-9 rounded-full ${item.color}
              text-white flex items-center justify-center
              text-sm font-bold shadow-sm`}
                >
                  {item.name.charAt(0).toUpperCase()}
                </span>

                {/* COMPANY NAME */}
                <span className="tracking-wide">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-16">
            What we are providing
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {services().map((s, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-8 hover:shadow-md transition"
              >
                <div className="text-2xl mb-6">{s.icon}</div>
                <h3 className="font-semibold mb-3 text-gray-900">{s.title}</h3>
                <p className="text-sm text-gray-600 mb-6">{s.desc}</p>
                <span className="text-emerald-500 text-sm font-medium">
                  Read More →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#45a9e6] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              What our customer’s saying
            </h2>

            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/40
                         text-white hover:bg-white hover:text-[#45a9e6] transition"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/40
                         text-white hover:bg-white hover:text-[#45a9e6] transition"
              >
                ›
              </button>
            </div>
          </div>

          {/* INFINITE CAROUSEL */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${index * CARD_WIDTH}%)`,
              }}
            >
              {repeated.map((item, i) => (
                <div key={i} className="min-w-[33.333%]">
                  <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500">{item.location}</p>
                      </div>
                    </div>

                    <h4 className="font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>

                    <p className="text-sm text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#2c6a8f] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:justify-start">
              <div className="rounded-2xl overflow-hidden bg-pink-200 p-4">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=900&auto=format&fit=crop"
                  alt="Building"
                  className="rounded-xl w-full max-w-[420px] object-cover"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
                Protect Your Equipment with
                <br /> Smart AMC Plans
              </h2>

              <p className="text-white/80 mb-8">
                Affordable annual maintenance contracts designed for homes and
                businesses.
              </p>

              {/* FORM */}
              <form className="space-y-4 max-w-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-lg px-4 py-3 bg-white/15
                             placeholder-white/70 text-white
                             focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full rounded-lg px-4 py-3 bg-white/15
                             placeholder-white/70 text-white
                             focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full rounded-lg px-4 py-3 bg-white/15
                           placeholder-white/70 text-white
                           focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />

                <textarea
                  rows="4"
                  placeholder="What are you looking for"
                  className="w-full rounded-lg px-4 py-3 bg-white/15
                           placeholder-white/70 text-white resize-none
                           focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />

                <button
                  type="submit"
                  className="mt-4 bg-emerald-400 hover:bg-emerald-500
                           text-white font-medium
                           px-8 py-3 rounded-lg transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

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
                <li className="hover:text-emerald-500 cursor-pointer">
                  Properties Listing
                </li>
                <li className="hover:text-emerald-500 cursor-pointer">Blog</li>
                <li className="hover:text-emerald-500 cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>

            {/* COLUMN 3 — OTHER PAGES */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-6">Other Pages</h4>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-emerald-500 cursor-pointer">
                  Agents
                </li>
                <li className="hover:text-emerald-500 cursor-pointer">
                  Agencies
                </li>
                <li className="hover:text-emerald-500 cursor-pointer">FAQs</li>
              </ul>
            </div>

            {/* COLUMN 4 — EXPERT + SOCIAL */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">
                Talk To An Expert
              </h4>

              <p className="text-sm text-gray-600 mb-6">
                Get expert consultation regarding you Real Estate needs.
              </p>

              <button className="border border-emerald-400 text-emerald-500 px-5 py-2 rounded-md text-sm hover:bg-emerald-400 hover:text-white transition">
                Make an Inquiry
              </button>

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

      {/* SOCIAL ICONS */}
      <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">
        <Icon link="https://linkedin.com" bg="#0A66C2">
          <FaLinkedinIn />
        </Icon>
        <Icon link="https://facebook.com" bg="#1877F2">
          <FaFacebookF />
        </Icon>
        <Icon link="https://instagram.com" gradient>
          <FaInstagram />
        </Icon>
        <Icon link="https://youtube.com" bg="#FF0000">
          <FaYoutube />
        </Icon>
      </div>
    </div>
  );
}

/* HELPERS */
const images = () => [
  "https://images.unsplash.com/photo-1694569566190-d16722a1299c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1728848993113-69c351ec7264?q=80&w=754&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200",
  "https://plus.unsplash.com/premium_photo-1682148205811-e8a8ce759f4b?q=80&w=953&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const services = () => [
  {
    icon: "🔥",
    title: "FIRE",
    desc: "Ensure complete fire safety compliance with centralized monitoring of fire alarms, extinguishers, hydrants, and emergency systems. Track inspections, maintenance schedules, certifications, and readiness status to keep your premises safe and audit-ready at all times.",
  },
  {
    icon: "📹",
    title: "CCTV",
    desc: "Gain complete visibility and control over CCTV systems with real-time monitoring, system health tracking, maintenance logs, and uptime status. Improve security, reduce downtime, and ensure uninterrupted surveillance across your facility.",
  },
  {
    icon: "💧",
    title: "STP",
    desc: "Monitor and manage STP operations efficiently by tracking plant performance, maintenance activities, water treatment processes, and environmental compliance. Ensure smooth operations while meeting regulatory and sustainability standards.",
  },
  {
    icon: "☀️",
    title: "SOLAR",
    desc: "Optimize solar power systems by tracking energy generation, performance efficiency, maintenance schedules, and system health. Monitor output trends and ensure maximum utilization of renewable energy assets.",
  },
];

const Icon = ({ children, link, bg, gradient }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-10 h-10 flex items-center justify-center rounded-full transition
      ${
        gradient
          ? "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white"
          : `bg-[${bg}]/20 text-[${bg}] hover:bg-[${bg}] hover:text-white`
      }`}
  >
    {children}
  </a>
);

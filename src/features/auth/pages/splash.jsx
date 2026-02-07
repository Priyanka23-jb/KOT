import React from "react";
import { Link } from "react-router-dom";
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
  const heroSectionRef = useRef(null);

  const backgroundImages = [
    "https://ultra.realhomes.io/agency/wp-content/uploads/sites/11/2023/09/alex-knight-Ys-DBJeX0nE-unsplash-e1695129806223.jpg",
    "https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg",
    "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
  ];

  const heroContent = [
    {
      title: "Book AMC",
      highlight: "in Minutes",
      description:
        "Secure reliable annual maintenance for your equipment with trusted service partners. Fast booking, transparent pricing, and on-time support.",
    },
    {
      title: "Verified AMC",
      highlight: "Service Providers",
      description:
        "Connect with trusted technicians and vendors for reliable and professional maintenance services.",
    },
    {
      title: "Smart Maintenance",
      highlight: "Made Simple",
      description:
        "Quick booking, transparent pricing, and seamless AMC management for your equipment.",
    },
  ];

  const [activeBgIndex, setActiveBgIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setActiveBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(sliderInterval);
  }, [backgroundImages.length]);

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
          <span className="text-blue-800">📍</span>
          <span className="text-sm">b1889 NW 79st St, Asheville, NC 98726</span>
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

      {/* HERO SECTION */}
      <section
        ref={heroSectionRef}
        className="relative min-h-screen overflow-hidden"
      >
        {/* BACKGROUND SLIDER */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === activeBgIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-6 flex flex-col min-h-screen ml-0 md:ml-72 text-white">
          {/* NAVBAR */}
          <nav className="flex items-center justify-between">
            <div className="text-xl sm:text-2xl font-bold">BOOK AMC</div>

            <div className="hidden md:flex gap-6 text-sm items-center">
              <span className="cursor-pointer hover:text-blue-400">Home</span>
              <span className="cursor-pointer hover:text-blue-400">
                <Link
                  to="/innerpage"
                  className="cursor-pointer hover:text-blue-400"
                >
                  About Company
                </Link>
              </span>

              {/* SERVICES DROPDOWN */}
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

              <span className="cursor-pointer hover:text-blue-400">
                <Link
                  to="/contact"
                  className="hover:text-emerald-500 cursor-pointer"
                >
                  Contact
                </Link>
              </span>
            </div>

            <button className="bg-blue-500 hover:bg-blue-600 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm">
              Inquiry
            </button>
          </nav>

          {/* HERO GRID */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mt-12 md:mt-0">
            {/* LEFT CONTENT — SYNCED WITH IMAGE */}
            <div className="text-center md:text-left transition-all duration-700 ease-out">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight mb-6">
                {heroContent[activeBgIndex].title}
                <br className="hidden sm:block" />
                {heroContent[activeBgIndex].highlight}
              </h1>

              <p className="text-gray-300 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
                {heroContent[activeBgIndex].description}
              </p>
            </div>

            {/* RIGHT FORM (UNCHANGED) */}
            <div className="max-w-md p-7 rounded-3xl bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.3)] border border-white/30 ml-0 md:ml-48">
              <h2 className="text-lg font-semibold mb-4 text-gray-900 whitespace-nowrap">
                Protect your equipment with smart AMC
              </h2>

              <div className="h-[2px] w-16 bg-purple-500 rounded-full mb-5" />

              <form className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-lg px-3 py-2.5 bg-white/70 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full rounded-lg px-3 py-2.5 bg-white/70 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full rounded-lg px-3 py-2.5 bg-white/70 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                  rows="3"
                  placeholder="What are you looking for"
                  className="w-full rounded-lg px-3 py-2.5 bg-white/70 border border-gray-200 text-gray-900 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  type="submit"
                  className="mt-3 bg-blue-700 hover:bg-blue-800 text-white font-medium text-sm px-8 py-2.5 rounded-lg transition shadow-md"
                >
                  Submit
                </button>
              </form>
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
          {/* TITLE */}
          <p className="text-3xl font-semibold text-center text-gray-900 mb-16">
            <span className="text-orange-500 font-semibold"></span> Our clients
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
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white text-center sm:text-left">
              What our customer’s saying
            </h2>

            <div className="flex gap-3 justify-center sm:justify-end">
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
                <div
                  key={i}
                  className="
              min-w-full
              sm:min-w-[50%]
              lg:min-w-[33.333%]
            "
                >
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

      <section className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Get your Annual Maintenance Contract in just three simple steps.
              Reliable service, verified technicians, and complete peace of
              mind.
            </p>
          </div>

          {/* STEPS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* STEP 1 */}
            <div
              className="
          group bg-white rounded-3xl p-8 text-center
          border border-gray-200
          shadow-md
          transition-all duration-500
          hover:-translate-y-4 hover:shadow-2xl
        "
            >
              <div
                className="
            w-24 h-24 mx-auto mb-6
            rounded-2xl bg-blue-50
            flex items-center justify-center
            transition-transform duration-500
            group-hover:scale-110
          "
              >
                <img
                  src="https://img.freepik.com/free-vector/online-booking-concept-illustration_114360-4751.jpg"
                  alt="Choose AMC Service"
                  className="w-20 h-20 object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Choose AMC Service
              </h3>
              <p className="text-gray-600 text-sm">
                Select the AMC service you need such as Fire Safety, CCTV, STP,
                or Solar maintenance.
              </p>
            </div>

            {/* STEP 2 */}
            <div
              className="
          group bg-white rounded-3xl p-8 text-center
          border border-gray-200
          shadow-md
          transition-all duration-500
          hover:-translate-y-4 hover:shadow-2xl
        "
            >
              <div
                className="
            w-24 h-24 mx-auto mb-6
            rounded-2xl bg-emerald-50
            flex items-center justify-center
            transition-transform duration-500
            group-hover:scale-110
          "
              >
                <img
                  src="https://img.freepik.com/free-vector/filling-online-form-concept-illustration_114360-5557.jpg"
                  alt="Share Details"
                  className="w-20 h-20 object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Share Your Details
              </h3>
              <p className="text-gray-600 text-sm">
                Fill in your contact details and requirements. We connect you
                with trusted service partners.
              </p>
            </div>

            {/* STEP 3 */}
            <div
              className="
          group bg-white rounded-3xl p-8 text-center
          border border-gray-200
          shadow-md
          transition-all duration-500
          hover:-translate-y-4 hover:shadow-2xl
        "
            >
              <div
                className="
            w-24 h-24 mx-auto mb-6
            rounded-2xl bg-purple-50
            flex items-center justify-center
            transition-transform duration-500
            group-hover:scale-110
          "
              >
                <img
                  src="https://img.freepik.com/free-vector/maintenance-technician-concept-illustration_114360-2786.jpg"
                  alt="AMC Activated"
                  className="w-20 h-20 object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                AMC Activated
              </h3>
              <p className="text-gray-600 text-sm">
                Technician contacts you, schedules the visit, and your AMC is
                activated with ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          {/* SECTION HEADER */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Book a Demo
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Schedule a free demo and see how our AMC solutions simplify
              maintenance for your organization.
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* LEFT IMAGE CARD */}
            <div
              className="
          group bg-white rounded-3xl border border-gray-200
          p-6 shadow-md
          transition-all duration-500
          hover:-translate-y-2 hover:shadow-2xl
        "
            >
              <div
                className="
            w-full h-80 rounded-2xl overflow-hidden
            bg-gray-100
            transition-transform duration-500
            group-hover:scale-[1.02]
          "
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
                  alt="Book a Demo - AMC Service Consultation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                Discuss your maintenance needs with our AMC experts
              </p>
            </div>

            {/* RIGHT FORM CARD */}
            <div
              className="
          bg-white rounded-3xl border border-gray-200
          p-8 sm:p-10 shadow-md
          transition-all duration-500
          hover:-translate-y-2 hover:shadow-2xl
        "
            >
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-xl px-4 py-3 border border-gray-200
                         text-sm text-gray-900 placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-xl px-4 py-3 border border-gray-200
                         text-sm text-gray-900 placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl px-4 py-3 border border-gray-200
                       text-sm text-gray-900 placeholder-gray-500
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="text"
                  placeholder="Organization Name"
                  className="w-full rounded-xl px-4 py-3 border border-gray-200
                       text-sm text-gray-900 placeholder-gray-500
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  type="submit"
                  className="
              w-full bg-blue-700 hover:bg-blue-800
              text-white font-medium
              py-3 rounded-xl
              transition-all duration-300
              shadow-lg hover:shadow-2xl
              active:scale-95
            "
                >
                  Book Demo
                </button>
              </form>
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
            <div className="ml-0 lg:ml-28 max-w-lg p-8 rounded-3xl bg-transparent backdrop-blur-xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
              <div className="text-center md:text-left">
                <div className="flex gap-3 mb-6 justify-center md:justify-start">
                  <button className="bg-emerald-600 text-white px-6 py-2 rounded-full text-sm shadow">
                    For technician
                  </button>
                  <button className="bg-white/80 px-6 py-2 rounded-full text-sm text-gray-900">
                    For vendor
                  </button>
                </div>

                <div className="space-y-4 max-w-md mx-auto md:mx-0">
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
                      className="
                  w-full
                  rounded-xl
                  px-4
                  py-3
                  bg-transparent
                  border border-white/50
                  text-sm
                  text-white
                  placeholder-white/70
                  focus:outline-none
                  focus:ring-2
                  focus:ring-emerald-400
                "
                    />
                  ))}
                </div>

                <div className="mt-6 flex gap-4 max-w-md mx-auto md:mx-0">
                  <button className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-md">
                    <FaSearch />
                  </button>

                  <button
                    onClick={() => navigate("/search")}
                    className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-medium text-sm shadow-md"
                  >
                    Search
                  </button>
                </div>
              </div>
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

      {/* SOCIAL ICONS */}
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

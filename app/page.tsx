"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  TrendingUp,
  Video,
  BarChart3,
  Play,
  Star,
  // Twitter,
  // Facebook,
  // Dribbble,
  Menu,
  X,
  Mail,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Shared data                                                         */
/* ------------------------------------------------------------------ */

const NAV_LINKS = ["Home", "About Us", "Our App", "Contacts"];

const SERVICES = [
  {
    icon: TrendingUp,
    title: "Graphic Design",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.",
  },
  {
    icon: Video,
    title: "Video Editing",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support.",
    name: "Rayhan Curran",
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    quote:
      "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website.",
    name: "Kayley Frame",
    img: "https://i.pravatar.cc/150?img=32",
  },
  {
    quote: "The most important part of the Startup Framework is the samples.",
    name: "Gene Whitfield",
    img: "https://i.pravatar.cc/150?img=45",
  },
  {
    quote:
      "I've built my website with Startup just in one day, and it was ready-to-go.",
    name: "Allan Kim",
    img: "https://i.pravatar.cc/150?img=53",
  },
];

const TEAM = [
  {
    name: "Vanessa Laird",
    role: "UI Designer",
    img: "https://i.pravatar.cc/300?img=47",
  },
  {
    name: "Mason Campbell",
    role: "UI Designer",
    img: "https://i.pravatar.cc/300?img=14",
  },
  {
    name: "Irea Evans",
    role: "Client Manager",
    img: "https://i.pravatar.cc/300?img=25",
  },
];

const FOOTER_LINKS = ["Portfolio", "How it Works", "Pricing", "About", "Login"];

/* ------------------------------------------------------------------ */
/* Section: Eyebrow + Heading                                          */
/* ------------------------------------------------------------------ */

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="text-center mb-16">
      <p className="text-xs font-bold tracking-[0.45em] text-gray-400 uppercase mb-3">
        {eyebrow}
      </p>
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0B1B35]">
        {title}
      </h2>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Navbar                                                              */
/* ------------------------------------------------------------------ */

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-24">
        {/* Logo */}
        {/* <a href="#" className="flex items-center gap-1 text-2xl font-extrabold">
          <span className="text-orange-500">Epixe</span>
          <span className="text-[#0B1B35]">lab</span>
        </a> */}
        <a href="#" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Epixelab Logo"
            width={150}
            height={50}
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`text-[17px] ${
                i === 0
                  ? "font-bold text-[#0B1B35]"
                  : "font-medium text-gray-700 hover:text-[#0B1B35]"
              } transition-colors`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-[17px] font-medium text-gray-700 hover:text-[#0B1B35]"
          >
            Log in
          </a>
          <a
            href="#"
            className="bg-orange-500 hover:bg-orange-600 transition-colors text-white text-[17px] font-medium px-7 py-3 rounded-[10px]"
          >
            Sign up
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#0B1B35]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-white border-t border-gray-100">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[17px] font-medium text-gray-700"
            >
              {link}
            </a>
          ))}
          <a href="#" className="text-[17px] font-medium text-gray-700">
            Log in
          </a>
          <a
            href="#"
            className="bg-orange-500 text-white text-[17px] font-medium px-7 py-3 rounded-[10px] text-center"
          >
            Sign up
          </a>
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-28 grid lg:grid-cols-2 gap-16 items-center">
      {/* Left: copy */}
      <div>
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.1] text-[#0B1B35] mb-8">
          We boost growth for your startup business
        </h1>
        <p className="text-lg sm:text-xl text-gray-800 mb-10 max-w-md">
          Our goal is top at the heart of creativity services industry as a
          digital creator. In has a after comment
        </p>
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-medium text-lg px-9 py-4 rounded-[10px]"
          >
            Get Started
          </a>
          <a href="#" className="flex items-center gap-3 group">
            <span className="w-14 h-14 rounded-full border-2 border-orange-500 flex items-center justify-center bg-white group-hover:bg-orange-50 transition-colors">
              <Play
                size={18}
                className="text-orange-500 ml-0.5"
                fill="currentColor"
              />
            </span>
            <span className="text-lg font-bold text-[#0B1B35]">Learn More</span>
          </a>
        </div>
      </div>

      {/* Right: image + floating cards */}
      <div className="relative flex justify-center lg:justify-end">
        <div className="absolute w-[420px] h-[420px] rounded-full bg-gray-100 shadow-2xl" />

        <img
          src="/hero-image.png"
          className="relative w-[420px] h-[520px] object-cover rounded-[40px]"
        />

        {/* Card: Business growth */}
        <div className="absolute -top-6 left-0 sm:-left-10 bg-white rounded-xl shadow-xl px-5 py-4 flex items-center gap-3 w-64">
          <span className="w-9 h-9 rounded-lg bg-black flex items-center justify-center shrink-0">
            <TrendingUp size={18} className="text-white" />
          </span>
          <div>
            <p className="text-sm font-bold text-[#0B1B35]">
              100% Business Growth
            </p>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Star size={12} className="text-amber-400" fill="currentColor" />
              <span className="font-bold text-[#0B1B35]">4.9</span>
              <span>(1520 Reviews)</span>
            </div>
          </div>
        </div>

        {/* Card: Happy clients */}
        <div className="absolute bottom-10 -left-6 sm:-left-16 bg-white rounded-xl shadow-xl px-5 py-4 w-56">
          <p className="text-sm font-bold text-[#0B1B35]">
            1000,000 Happy Clients
          </p>
          <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
            <Star size={12} className="text-amber-400" fill="currentColor" />
            <span className="font-bold text-[#0B1B35]">4.9</span>
            <span>(15k Reviews)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Services                                                             */
/* ------------------------------------------------------------------ */

function ServiceCard({ icon: Icon, title, copy }) {
  return (
    <div className="bg-white rounded-[28px] shadow-lg p-10 flex flex-col items-center text-center">
      <span className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center mb-8">
        <Icon size={24} className="text-white" />
      </span>
      <h3 className="text-2xl font-bold text-[#0B1B35] mb-5">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-10">{copy}</p>
      <a
        href="#"
        className="mt-auto bg-orange-500 hover:bg-orange-600 transition-colors text-white font-medium px-8 py-3 rounded-[10px]"
      >
        Learn More
      </a>
    </div>
  );
}

function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <SectionHeading eyebrow="Service" title="Our Vision & Our Goal" />
      <div className="grid md:grid-cols-3 gap-8">
        {SERVICES.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Blocks / Video showcase                                             */
/* ------------------------------------------------------------------ */

function BlocksShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-3xl font-bold text-[#0B1B35] mb-4">
          Many Blocks and Components
        </h3>
        <p className="text-gray-500 max-w-sm mb-8">
          Startup Framework contains components and complex blocks which can
          easily be integrated into almost any design.
        </p>
        <a
          href="#"
          className="inline-block border-2 border-gray-200 rounded-full px-7 py-3 font-medium text-[#0B1B35] hover:bg-gray-50 transition-colors"
        >
          Explore
        </a>
      </div>

      <div className="relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-pink-300 to-pink-400">
        <img
          src="/video.png"
          alt="Creative workspace"
          className="w-full h-full object-cover"
        />
        <button
          aria-label="Play video"
          className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center justify-center"
        >
          <Play size={22} className="text-white ml-1" fill="currentColor" />
        </button>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

function TestimonialCard({ quote, name, img }) {
  return (
    <div className="border border-gray-100 rounded-2xl p-8 flex gap-6 items-start">
      <img
        src={img}
        alt={name}
        className="w-14 h-14 rounded-xl object-cover shrink-0"
      />
      <div>
        <p className="text-[#0B1B35] leading-relaxed mb-5">{quote}</p>
        <p className="text-xs font-bold tracking-[0.15em] text-[#0B1B35]/40 uppercase">
          {name}
        </p>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
      <SectionHeading
        eyebrow="Testimonials"
        title="What Clients say about us"
      />
      <div className="grid md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Team                                                                 */
/* ------------------------------------------------------------------ */

function TeamCard({ name, role, img }) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden text-center">
      <div className="pt-10 pb-6 flex flex-col items-center">
        <img
          src={img}
          alt={name}
          className="w-20 h-20 rounded-full object-cover mb-4"
        />
        <h4 className="text-xl font-bold text-[#0B1B35]">{name}</h4>
        <p className="text-xs tracking-[0.15em] text-gray-400 uppercase mt-1">
          {role}
        </p>
      </div>
      {/* <div className="grid grid-cols-3 border-t border-gray-100">
        {[Twitter, Facebook, Dribbble].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className={`flex items-center justify-center py-4 text-gray-400 hover:text-[#0B1B35] transition-colors ${
              i !== 2 ? "border-r border-gray-100" : ""
            }`}
          >
            <Icon size={18} />
          </a>
        ))}
      </div> */}
    </div>
  );
}

function Team() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
      <SectionHeading eyebrow="Our Team" title="Meet The Team" />
      <div className="grid sm:grid-cols-3 gap-8">
        {TEAM.map((m) => (
          <TeamCard key={m.name} {...m} />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Newsletter                                                          */
/* ------------------------------------------------------------------ */

function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
      <p className="text-xs font-bold tracking-[0.45em] text-gray-400 uppercase text-center mb-3">
        Our Team
      </p>
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0B1B35] text-center mb-14">
        Subscribe Our Newsletter
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <div className="relative w-56 h-44">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl" />
            <Mail
              size={72}
              strokeWidth={1.5}
              className="absolute inset-0 m-auto text-white/90"
            />
          </div>
        </div>

        <div>
          <p className="text-gray-600 mb-8 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div className="flex flex-col gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your E-mail here..."
              className="w-full rounded-full border border-gray-200 px-7 py-4 text-lg text-center focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white font-medium text-lg py-4 rounded-[10px]">
              Subscribe Our Newsletter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                               */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="#" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Epixelab Logo"
            width={130}
            height={40}
            className="h-10 w-auto"
          />
        </a>
        <p className="text-sm text-gray-400 order-3 sm:order-2">
          © 2020 Epixelab. All rights reserved.
        </p>

        <nav className="flex items-center gap-6 order-2 sm:order-3">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-gray-500 hover:text-[#0B1B35] transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
      <p className="text-center text-xs text-gray-300 pb-8 px-6">
        Startup Framework contains components and complex blocks which can
        easily be integrated into almost any design.
      </p>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <Hero />
      <Services />
      <BlocksShowcase />
      <Testimonials />
      <Team />
      <Newsletter />
      <Footer />
    </div>
  );
}

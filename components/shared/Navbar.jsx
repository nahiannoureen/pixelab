"use client";
import { useState } from "react";

import { Menu, X } from "lucide-react";

import Image from "next/image";

const NAV_LINKS = ["Home", "About Us", "Our App", "Contacts"];

export default function Navbar() {
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

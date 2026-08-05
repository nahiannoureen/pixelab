'use client";';

import { useState } from "react";
import { Mail } from "lucide-react";

export default function Newsletter() {
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

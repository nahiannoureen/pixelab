import { Play, Star, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function Hero() {
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

        {/* <img
          src="/hero-image.png"
          className="relative w-[420px] h-[520px] object-cover rounded-[40px]"
        /> */}
        <Image
          src="/hero-image.png"
          alt="Hero"
          width={420}
          height={520}
          className="relative w-[420px] h-[520px] object-cover rounded-[40px]"
        />
        <Image
          src="/idea.png"
          alt="Idea"
          width={120}
          height={120}
          className="absolute left-28 top-32 w-24 md:w-28 lg:w-42 z-20"
        />
        <Image
          src="/arrow.png"
          alt="Arrow"
          width={170}
          height={170}
          className="absolute right-0 top-10 w-32 md:w-40 lg:w-44 z-10"
        />

        {/* Card: Business growth */}
        <div className="absolute top-10 left-4 md:left-0 bg-white rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-3 w-64 z-20">
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
        <div className="absolute bottom-16 left-6 md:left-5 bg-white rounded-2xl shadow-2xl px-5 py-4 w-56 z-20">
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

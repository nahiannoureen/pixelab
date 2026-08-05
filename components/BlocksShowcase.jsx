import { Play } from "lucide-react";

export default function BlocksShowcase() {
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

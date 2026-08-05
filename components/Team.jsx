import { FaTwitter, FaFacebookF, FaDribbble } from "react-icons/fa";

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

function TeamCard({ name, role, img }) {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-xl transition duration-300">
      {/* Top */}
      <div className="flex flex-col items-center py-12">
        <img
          src={img}
          alt={name}
          className="w-24 h-24 rounded-full object-cover mb-6"
        />

        <h4 className="text-2xl font-bold text-[#0B1B35]">{name}</h4>

        <p className="mt-2 text-sm tracking-[0.25em] uppercase text-gray-400">
          {role}
        </p>
      </div>

      {/* Social Icons */}
      <div className="grid grid-cols-3 border-t border-gray-200">
        <a
          href="#"
          className="flex justify-center items-center h-14 border-r border-gray-200 hover:bg-gray-50"
        >
          <FaTwitter className="text-gray-400 hover:text-sky-500 text-lg" />
        </a>

        <a
          href="#"
          className="flex justify-center items-center h-14 border-r border-gray-200 hover:bg-gray-50"
        >
          <FaFacebookF className="text-gray-400 hover:text-blue-600 text-lg" />
        </a>

        <a
          href="#"
          className="flex justify-center items-center h-14 hover:bg-gray-50"
        >
          <FaDribbble className="text-gray-400 hover:text-pink-500 text-lg" />
        </a>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <SectionHeading eyebrow="Our Team" title="Meet The Team" />
      <div className="grid md:grid-cols-3 gap-8">
        {TEAM.map((m) => (
          <TeamCard key={m.name} {...m} />
        ))}
      </div>
    </section>
  );
}

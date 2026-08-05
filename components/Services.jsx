import { BarChart3, TrendingUp, Video } from "lucide-react";

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

export default function Services() {
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

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

export default function Testimonials() {
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

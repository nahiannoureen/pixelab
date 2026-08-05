import Image from "next/image";

const FOOTER_LINKS = ["Portfolio", "How it Works", "Pricing", "About", "Login"];

export default function Footer() {
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

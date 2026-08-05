"use client";

import Hero from "@/components/Hero";
import Services from "@/components/Services";

import Testimonials from "@/components/Testimonials";

import Team from "@/components/Team";
import BlocksShowcase from "@/components/BlocksShowcase";
import Newsletter from "@/components/Newsletter";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Hero />
      <Services />
      <BlocksShowcase />
      <Testimonials />
      <Team />
      <Newsletter />
    </div>
  );
}

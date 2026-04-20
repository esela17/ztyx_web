import React from 'react';
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import Solutions from "@/components/sections/Solutions";
import WhyUs from "@/components/sections/WhyUs";
import TrustBar from "@/components/sections/TrustBar";
import CaseStudy from "@/components/sections/CaseStudy";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#08090E] selection:bg-[#5B5EFF]/30" dir="rtl">
      {/* Grid Overlay */}
      <div className="grid-overlay" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TrustBar />
        <Solutions />
        <WhyUs />
        <StatsBar />
        <CaseStudy />
        <FinalCTA />
        <Footer />
      </div>

    </main>
  );
}


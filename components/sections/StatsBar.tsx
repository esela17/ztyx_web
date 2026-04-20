"use client";

import React from 'react';

const stats = [
  { value: "+150%", label: "زيادة الحجوزات" },
  { value: "+200%", label: "نمو الزيارات" },
  { value: "+5,000", label: "مريض جديد شهرياً" },
  { value: "+300%", label: "عائد الاستثمار (ROI)" },
];

import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function StatsBar() {
  const containerRef = useGsapReveal();

  return (
    <div className="w-full bg-[#0D0F1A] border-y border-[#9496C0]/10 py-12 relative z-10" ref={containerRef as any}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group gsap-reveal">

              <div className="text-4xl md:text-5xl font-black text-[#F0F1FF] font-mono mb-2 group-hover:text-[#5B5EFF] transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-[#9496C0] tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

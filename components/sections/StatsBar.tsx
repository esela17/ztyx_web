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
    <div className="w-full bg-[#0D0F1A] border-y border-[#9496C0]/10 py-16 relative z-10" ref={containerRef as any}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-x-reverse divide-[#9496C0]/10">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group gsap-reveal px-8">
              <div className="relative mb-4 inline-block">
                <div className="text-4xl md:text-6xl font-black text-[#F0F1FF] font-mono tracking-tighter group-hover:text-[#5B5EFF] transition-colors duration-500">
                  {stat.value}
                </div>
                <div className="absolute -bottom-1 left-0 w-0 h-1 bg-[#5B5EFF] group-hover:w-full transition-all duration-700" />
              </div>
              <div className="text-xs font-bold text-[#9496C0] tracking-[0.2em] uppercase leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

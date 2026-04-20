"use client";

import React from 'react';
import { useGsapReveal } from "@/hooks/useGsapReveal";

const logos = [
  { name: "مركز الأمل للطاقة", id: 1 },
  { name: "مستشفى الحياة", id: 2 },
  { name: "عيادات النخبة", id: 3 },
  { name: "المجمع الطبي الدولي", id: 4 },
  { name: "رعاية دوت كوم", id: 5 },
];

export default function TrustBar() {
  const containerRef = useGsapReveal();

  return (
    <div className="w-full py-12 border-b border-[#9496C0]/5" ref={containerRef as any}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {logos.map((logo) => (
            <div key={logo.id} className="gsap-reveal">
              <span className="text-xl font-black tracking-tighter text-[#F0F1FF] font-en whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import React from 'react';
import { AlertCircle, TrendingDown, Clock } from 'lucide-react';
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

const points = [
  {
    title: "ضعف التواجد الرقمي",
    desc: "صعوبة الوصول لمرضى جدد وبناء سمعة طبية قوية في الفضاء الرقمي المزدحم.",
    icon: <AlertCircle className="w-8 h-8 text-[#FF4466]" />,
  },
  {
    title: "تدني نسبة الاحتفاظ",
    desc: "فقدان المرضى بعد الزيارة الأولى بسبب غياب منظومة المتابعة الذكية.",
    icon: <TrendingDown className="w-8 h-8 text-[#FF4466]" />,
  },
  {
    title: "هدر الوقت الإداري",
    desc: "الاستهلاك المفرط للوقت في المهام التقليدية بدلاً من التركيز على جودة الرعاية.",
    icon: <Clock className="w-8 h-8 text-[#FF4466]" />,
  },
];


export default function PainPoints() {
  const containerRef = useGsapReveal();

  return (
    <section 
      id="التحديات"
      ref={containerRef as any}
      className="py-24 px-6 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="gsap-reveal">
          <SectionHeader 
            title="التحديات التي تواجهها عيادتك اليوم"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <div key={i} className="gsap-reveal">
              <GlassCard 
                className="p-10 rounded-3xl relative overflow-hidden group hover:border-[#FF4466]/40 transition-all duration-500"
              >

              {/* Red hover indicator */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#FF4466] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-16 h-16 rounded-2xl bg-[#FF4466]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              
              <h3 className="text-2xl font-black text-[#F0F1FF] mb-4">
                {point.title}
              </h3>
              
              <p className="text-[#9496C0] leading-relaxed">
                {point.desc}
              </p>
            </GlassCard>
          </div>
          ))}

        </div>
      </div>
    </section>
  );
}


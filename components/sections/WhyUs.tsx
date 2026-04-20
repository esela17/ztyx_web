"use client";

import React from 'react';
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

const reasons = [
  {
    num: "01",
    title: "خبرة متخصصة",
    desc: "نحن نمتلك خبرة تزيد عن 10 سنوات في تقديم الاستشارات والحلول التسويقية والتقنية للقطاع الطبي حصراً."
  },
  {
    num: "02",
    title: "فهم السوق المصري",
    desc: "ندرك تماماً سلوك المريض المصري الرقمي ونعرف كيف نحول الباحث إلى مريض فعلي في عيادتك."
  },
  {
    num: "03",
    title: "نتائج ملموسة",
    desc: "استراتيجياتنا مبنية على الأرقام والنتائج، نركز على العائد الاستثماري (ROI) ونمو أرباح مؤسستك."
  }
];


export default function WhyUs() {
  const containerRef = useGsapReveal();

  return (
    <section 
      id="why-us"
      ref={containerRef as any}
      className="py-24 px-6 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="gsap-reveal">
          <SectionHeader 
            title="لماذا يختارنا الرواد؟" 
            subtitle="التميز ليس خياراً، بل هو منهج عمل"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="gsap-reveal relative">
            <div className="absolute -inset-4 bg-[#5B5EFF]/10 blur-2xl rounded-[40px]" />
            <img 
              src="/team_working.png" 
              alt="ZTYX Team" 
              className="relative rounded-[40px] border border-white/10 shadow-2xl"
            />
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            {reasons.map((reason, i) => (
              <div key={i} className="gsap-reveal">
                <GlassCard className="p-8 rounded-[32px] group hover:border-[#5B5EFF]/30 transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl font-black text-[#5B5EFF] opacity-20 font-mono">
                      {reason.num}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-[#F0F1FF] mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-[#9496C0] leading-relaxed text-sm">
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


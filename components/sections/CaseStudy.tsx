"use client";

import React from 'react';
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import Image from 'next/image';

export default function CaseStudy() {
  const containerRef = useGsapReveal();

  return (
    <section
      id="work"
      ref={containerRef as any}
      className="py-24 px-6 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="gsap-reveal">
          <SectionHeader
            title="قصص نجاح واقعية"
            subtitle="شاهد كيف ساعدنا العيادات في التحول من التقليدية إلى الريادة الرقمية"
          />
        </div>

        <GlassCard className="p-4 md:p-8 rounded-[40px] overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="gsap-reveal relative rounded-[32px] overflow-hidden group h-[300px] md:h-[400px]">
              <Image 
                src="/case_study.png"
                alt="Clinic Transformation Before and After"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 right-4 glass px-4 py-2 rounded-full text-xs font-bold text-white z-20">
                Before
              </div>
              <div className="absolute top-4 left-4 bg-[#5B5EFF] px-4 py-2 rounded-full text-xs font-bold text-white z-20">
                After
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6 text-right">
              <div className="inline-block bg-[#5B5EFF]/10 text-[#5B5EFF] px-4 py-1 rounded-full text-xs font-bold">
                مركز النخبة للعيون
              </div>
              <h3 className="text-3xl font-black text-[#F0F1FF]">
                زيادة بنسبة 300% في الحجوزات خلال 6 أشهر
              </h3>
              <p className="text-[#9496C0] leading-relaxed">
                واجه مركز النخبة صعوبة في الوصول لمرضى جدد والاعتماد الكلي على التواجد المباشر. من خلال استراتيجيتنا المتكاملة، قمنا بإعادة بناء الهوية الرقمية وإطلاق حملات مستهدفة أدت لنتائج مذهلة.
              </p>

              <div className="grid grid-cols-2 gap-4 py-6 border-y border-[#9496C0]/10">
                <div>
                  <div className="text-2xl font-black text-[#5B5EFF]">+300%</div>
                  <div className="text-xs text-[#9496C0]">نمو الحجوزات</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#5B5EFF]">-40%</div>
                  <div className="text-xs text-[#9496C0]">تكلفة المريض</div>
                </div>
              </div>

              <Button variant="outline" className="w-full md:w-auto">
                شاهد تفاصيل الحالة
              </Button>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

"use client";

import React from 'react';
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { Button } from "@/components/ui/Button";

export default function FinalCTA() {
  const containerRef = useGsapReveal();

  return (
    <section 
      ref={containerRef as any}
      className="py-24 px-6 relative z-10"
    >
      <div className="max-w-4xl mx-auto text-center gsap-reveal">
        <div className="glass p-12 md:p-20 rounded-[50px] relative overflow-hidden group">
          {/* Background Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#5B5EFF]/20 blur-[100px] rounded-full group-hover:bg-[#5B5EFF]/30 transition-all duration-700" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#3A3DC8]/20 blur-[100px] rounded-full group-hover:bg-[#3A3DC8]/30 transition-all duration-700" />

          <h2 className="text-4xl md:text-6xl font-black text-[#F0F1FF] mb-8 leading-[1.2]">
            جاهز لتكون <br />
            الخيار الأول <span className="text-[#5B5EFF]">لمرضاك؟</span>
          </h2>
          
          <p className="text-[#9496C0] text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            انضم إلى نخبة العيادات والمؤسسات الطبية التي وثقت في زتكس لتطوير حضورها الرقمي ومضاعفة نتائجها.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button size="xl" className="w-full md:w-auto shadow-[0_20px_40px_rgba(91,94,255,0.3)]">
              احجز استشارة مجانية
            </Button>
            <Button variant="glass" size="xl" className="w-full md:w-auto">
              تحدث مع خبير
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

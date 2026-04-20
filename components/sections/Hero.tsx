"use client";

import React from 'react';
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useGsapReveal();

  useGSAP(() => {
    // Floating animation for glass cards with slight parallax
    gsap.to(".floating-card", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5
    });

    // Parallax for background orbs
    gsap.to(".parallax-orb", {
      y: -100,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef as any}
      className="min-height-[100vh] pt-32 pb-20 px-6 flex items-center justify-center relative overflow-hidden"
    >
      {/* Parallax Orbs */}
      <div className="parallax-orb fixed top-[20%] -left-64 w-[500px] h-[500px] bg-[#5B5EFF]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="parallax-orb fixed bottom-[10%] -right-64 w-[600px] h-[600px] bg-[#3A3DC8]/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
        
        {/* Left Side: Text Content */}
        <div className="text-right">
          <div className="gsap-reveal">
            <Badge>WHERE HEALTH MEETS 4D</Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-[#F0F1FF] leading-[1.1] mb-6 gsap-reveal">
            مستقبل الرعاية <br />
            الصحية <span className="text-[#5B5EFF]">يبدأ هنا</span>
          </h1>
          
          <p className="text-[#9496C0] text-xl max-w-xl ml-auto mb-10 leading-relaxed gsap-reveal">
            حلول رقمية متكاملة لنمو عيادتك وتطوير مؤسستك الطبية من خلال استراتيجيات تسويقية وتقنية مبنية على العلم والنتائج.
          </p>

          <div className="flex flex-row-reverse items-center gap-4 gsap-reveal">
            <Button size="xl">
              ابدأ الآن
            </Button>
            <Button variant="glass" size="xl">
              استشارة مجانية
            </Button>
          </div>
        </div>

        {/* Right Side: Visuals */}
        <div className="relative flex items-center justify-center h-[600px] gsap-reveal">
          {/* Main Hero Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-[#5B5EFF]/20 blur-[100px] rounded-full animate-pulse" />
            <img 
              src="/hero_doctor_patient.png" 
              alt="Professional Doctor and Patient"
              className="relative z-10 w-[90%] h-[90%] object-cover rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
            />
          </div>


          {/* Orbits */}
          <div className="absolute w-[400px] h-[400px] border border-dashed border-[#5B5EFF]/20 rounded-full animate-spin-slow" />
          <div className="absolute w-[500px] h-[500px] border border-dashed border-[#5B5EFF]/10 rounded-full animate-spin-slow [animation-direction:reverse] [animation-duration:30s]" />
          <div className="absolute w-[320px] h-[320px] border border-dashed border-[#5B5EFF]/30 rounded-full animate-spin-slow [animation-duration:15s]" />

          {/* Floating Glass Cards */}
          <div className="floating-card absolute top-10 -right-4">
            <GlassCard variant="blue" className="p-4">
              <div className="text-[10px] text-[#9496C0] mb-1 font-bold">AI Scheduling</div>
              <div className="text-xl font-black text-white flex items-center gap-2">
                <span className="text-[#5B5EFF]">✓</span> Done
              </div>
            </GlassCard>
          </div>

          <div className="floating-card absolute bottom-12 -left-10">
            <GlassCard variant="blue" className="p-4">
              <div className="text-[10px] text-[#9496C0] mb-1 font-bold">Retention Rate</div>
              <div className="text-2xl font-black text-[#5B5EFF] font-mono">
                ↑ 340%
              </div>
            </GlassCard>
          </div>

          <div className="floating-card absolute top-1/2 -right-20 -translate-y-1/2">
            <GlassCard variant="blue" className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#5B5EFF]/10 flex items-center justify-center border border-[#5B5EFF]/20">
                   <div className="w-2 h-2 bg-[#5B5EFF] rounded-full animate-ping" />
                </div>
                <div>
                   <div className="text-[10px] text-[#9496C0] font-bold">Live Data</div>
                   <div className="text-sm font-black text-white">4D Analysis</div>
                </div>
             </div>
            </GlassCard>
          </div>
        </div>

      </div>
    </section>
  );
}

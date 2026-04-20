"use client";

import React from 'react';
import { MessageSquare, Smartphone, BarChart3, Mic } from 'lucide-react';


const aiFeatures = [
  { title: "AI Chatbots", desc: "ردود فورية وحجز مواعيد تلقائي على مدار الساعة.", icon: <MessageSquare className="w-6 h-6" /> },
  { title: "Patient Apps", desc: "تطبيقات مخصصة تضع عيادتك في جيب كل مريض.", icon: <Smartphone className="w-6 h-6" /> },
  { title: "Predictive Analytics", desc: "توقع سلوك المرضى وتحسين معدلات العودة.", icon: <BarChart3 className="w-6 h-6" /> },
  { title: "Voice Assistant", desc: "مساعد صوتي لإدارة المهام الطبية بسهولة.", icon: <Mic className="w-6 h-6" /> },
];

import { useGsapReveal } from "@/hooks/useGsapReveal";
import { Badge } from "@/components/ui/Badge";
import { FeatureItem } from "@/components/ui/FeatureItem";

export default function AIInnovation() {
  const containerRef = useGsapReveal();

  return (
    <section 
      id="الذكاء الاصطناعي"
      ref={containerRef as any}
      className="py-24 px-6 relative z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Features */}
        <div className="text-right">
          <div className="gsap-reveal">
            <Badge showDot={false}>Future Tech</Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#F0F1FF] mb-12 gsap-reveal">
            أدوات المستقبل بين يديك اليوم
          </h2>

          <div className="space-y-8">
            {aiFeatures.map((f, i) => (
              <div key={i} className="gsap-reveal">
                <FeatureItem 
                  title={f.title}
                  desc={f.desc}
                  icon={f.icon}
                />
              </div>
            ))}
          </div>
        </div>



        {/* Right Side: AI Brain Visual */}
        <div className="relative flex items-center justify-center h-[500px]">
          {/* Abstract AI Brain Shape */}
          <div className="relative w-72 h-72">
             <div className="absolute inset-0 bg-gradient-to-br from-[#5B5EFF] to-[#3A3DC8] rounded-full blur-[60px] opacity-20 animate-pulse" />
             <div className="relative z-10 w-full h-full glass rounded-[60px] flex items-center justify-center border-[#5B5EFF]/30 rotate-12 shadow-[0_0_80px_rgba(91,94,255,0.2)]">
                <div className="w-32 h-32 bg-radial from-white/20 to-transparent rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#5B5EFF] rounded-full animate-ping opacity-20" />
                </div>
             </div>
             
             {/* Floating Chips */}
             <div className="absolute -top-10 -left-10 glass p-3 rounded-xl animate-float [animation-delay:0.5s]">
                <div className="w-8 h-1 bg-[#5B5EFF] rounded-full mb-1" />
                <div className="w-4 h-1 bg-[#9496C0] rounded-full" />
             </div>

             <div className="absolute -bottom-10 -right-10 glass p-3 rounded-xl animate-float [animation-delay:1.5s]">
                <div className="flex gap-1">
                   <div className="w-1.5 h-1.5 bg-[#5B5EFF] rounded-full" />
                   <div className="w-1.5 h-1.5 bg-[#5B5EFF] rounded-full opacity-50" />
                   <div className="w-1.5 h-1.5 bg-[#5B5EFF] rounded-full opacity-20" />
                </div>
             </div>

             {/* Connection Lines (CSS) */}
             <div className="absolute top-1/2 left-full w-24 h-[1px] bg-gradient-to-r from-[#5B5EFF] to-transparent origin-left rotate-45" />
             <div className="absolute top-1/2 left-full w-24 h-[1px] bg-gradient-to-r from-[#5B5EFF] to-transparent origin-left -rotate-45" />
          </div>
        </div>

      </div>
    </section>
  );
}

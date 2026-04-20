"use client";

import React from 'react';
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Play, Camera, Film, UserCheck, Heart, Info, TrendingUp } from 'lucide-react';

export default function MediaProductionPage() {
  const containerRef = useGsapReveal();

  return (
    <main className="relative min-h-screen bg-[#08090E]" dir="rtl" ref={containerRef as any}>
      <div className="grid-overlay" />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative z-10 overflow-hidden">
         {/* Abstract Video Background Placeholder */}
         <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-radial from-[#5B5EFF]/20 to-transparent animate-pulse" />
         </div>

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <div className="gsap-reveal">
            <Badge>الإنتاج المرئي والمسموع</Badge>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-[#F0F1FF] leading-[1.1] gsap-reveal">
            إنتاج مرئي <span className="text-[#5B5EFF]">سينمائي</span> <br />
            يجسد ريادتك الطبية
          </h1>
          <p className="text-[#9496C0] text-xl max-w-2xl mx-auto gsap-reveal leading-relaxed">
            نحول خبرتك العلمية إلى قصص بصرية ملهمة تبني جسور الثقة مع مرضاك وتبرز احترافيتك بأعلى جودة.
          </p>
          <div className="gsap-reveal pt-4">
            <Button size="xl" className="group">
              <Play className="w-5 h-5 ml-2 fill-white group-hover:scale-125 transition-transform" />
              شاهد أعمالنا
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "فيديوهات تعريفية للأطباء", icon: <UserCheck />, desc: "عرف مرضاك بشخصيتك وخبرتك بأسلوب إنساني ومهني يكسر حواجز القلق." },
              { title: "تصوير المنشآت الطبية", icon: <Camera />, desc: "جولة بصرية تبرز حداثة عيادتك وتجهيزاتها المتطورة ونظام العمل بها." },
              { title: "إعلانات الفيديو الرقمية", icon: <Film />, desc: "فيديوهات قصيرة ومؤثرة مصممة خصيصاً لجذب الانتباه على منصات التواصل." },
              { title: "توثيق قصص النجاح", icon: <Heart />, desc: "تسليط الضوء على تجارب المرضى الحقيقية ونتائج العلاج بلمسة إنسانية صادقة." },
            ].map((service, i) => (
              <div key={i} className="gsap-reveal">
                <GlassCard className="p-10 flex gap-8 items-start group hover:border-[#5B5EFF]/40 transition-all">
                  <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-[#5B5EFF]/10 flex items-center justify-center text-[#5B5EFF] group-hover:bg-[#5B5EFF] group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[#F0F1FF] mb-3">{service.title}</h3>
                    <p className="text-[#9496C0] leading-relaxed">{service.desc}</p>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-24 px-6 relative z-10 bg-[#0D0F1A]/50">
        <div className="max-w-7xl mx-auto space-y-16">
           <SectionHeader 
             title="أعمال تتحدث عن نفسها" 
             subtitle="جودة بصرية تضاهي الإنتاج العالمي المخصص للقطاع الصحي."
           />
           <div className="grid md:grid-cols-2 gap-12">
              {[1, 2].map(i => (
                <div key={i} className="gsap-reveal relative aspect-video rounded-[32px] overflow-hidden group cursor-pointer">
                   <div className="absolute inset-0 bg-gradient-to-t from-[#08090E] to-transparent opacity-60 z-10" />
                   <div className="absolute inset-0 bg-[#5B5EFF]/10 group-hover:bg-transparent transition-all" />
                   <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-20 h-20 rounded-full bg-[#5B5EFF] flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                         <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                   </div>
                   <div className="absolute bottom-8 right-8 z-20">
                      <div className="text-white font-black text-xl">مشروع إنتاج طبي - {i}</div>
                      <div className="text-[#9496C0] text-sm">إخراج زتكس ميديا</div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
             {[
               { title: "بناء الثقة الفورية", icon: <UserCheck />, desc: "يرى المريض وجهك ويسمع صوتك قبل الزيارة، مما يزيل الرهبة تماماً." },
               { title: "وضوح الخدمات", icon: <Info />, desc: "تبسيط الإجراءات الطبية المعقدة للمريض من خلال شرح بصري واضح." },
               { title: "زيادة معدلات الحجز", icon: <TrendingUp className="w-8 h-8 text-[#5B5EFF]" />, desc: "الفيديو هو أقوى أداة تسويقية لتحويل المشاهد إلى مريض فعلي." },
             ].map((pillar, i) => (
               <div key={i} className="gsap-reveal text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full border border-[#5B5EFF]/20 flex items-center justify-center text-[#5B5EFF]">
                     {pillar.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#F0F1FF]">{pillar.title}</h4>
                  <p className="text-[#9496C0] text-sm leading-relaxed">{pillar.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes (Strip) */}
      <section className="py-12 px-6 relative z-10 overflow-hidden opacity-50">
         <div className="flex gap-4 animate-scroll-x">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="flex-shrink-0 w-64 h-40 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center">
                 <Camera className="w-8 h-8 text-white/10" />
              </div>
            ))}
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-12 text-center space-y-8 bg-gradient-to-t from-[#5B5EFF]/10 to-transparent">
            <h2 className="text-4xl font-black text-[#F0F1FF]">قصتك تستحق أن تُروى باحترافية</h2>
            <p className="text-[#9496C0] text-lg">احجز موعد التصوير اليوم واجعل عيادتك تتحدث بلغة الفيديو السينمائي.</p>
            <div className="flex flex-wrap justify-center gap-4">
               <Button size="xl">احجز موعد تصوير</Button>
               <Button variant="glass" size="xl">اطلب استشارة فنية</Button>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Add these to globals.css for the scroll animation
// @keyframes scroll-x {
//   from { transform: translateX(0); }
//   to { transform: translateX(-50%); }
// }
// .animate-scroll-x {
//   animation: scroll-x 30s linear infinite;
//   width: max-content;
// }

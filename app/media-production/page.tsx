"use client";

import React from 'react';
import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Play, Camera, Film, UserCheck, Heart, Info, TrendingUp } from 'lucide-react';
import { VideoGallery } from "@/components/ui/VideoGallery";
import { Lightbox } from "@/components/ui/Lightbox";
import Image from 'next/image';
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

export default function MediaProductionPage() {
  const containerRef = useGsapReveal();
  const [selectedImage, setSelectedImage] = React.useState<{src: string, alt: string} | null>(null);

  const btsImages = [
    "/category/Screenshot 2026-04-21 133756.png",
    "/category/Screenshot 2026-04-21 133824.png",
    "/category/Screenshot 2026-04-21 133909.png",
    "/category/Screenshot 2026-04-21 133937.png",
    "/category/Screenshot 2026-04-21 134113.png",
    "/category/Screenshot 2026-04-21 134152.png",
  ];

  return (
    <main className="relative min-h-screen bg-[#08090E]" dir="rtl" ref={containerRef as any}>
      <div className="grid-overlay" />
      <Navbar />

      {/* Hero Section - Scroll Expand */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYuZ5R8ahEEZ4aQK56LizRdfBSqeDMsmUIrJN1"
        bgImageSrc="/category/Gemini_Generated_Image_j67acfj67acfj67a copy.png"
        title="الإنتاج المرئي"
        date="Visual Storytelling"
        scrollToExpand="اسحب للأسفل لمشاهدة سحر العدسة"
        textBlend
      >
        <div className="text-center space-y-6">
          <Badge>صناعة المحتوى المرئي والمسموع</Badge>
          <h2 className="text-4xl md:text-7xl font-black text-[#F0F1FF]">
            نصنع الواقع <br />
            بلمسة <span className="text-[#5B5EFF]">سينمائية</span>
          </h2>
          <p className="text-[#9496C0] text-xl max-w-2xl mx-auto leading-relaxed">
            نحول رؤيتك إلى تجربة بصرية مذهلة تبني الثقة وتجذب الانتباه من خلال إنتاج فيديو احترافي وتصوير فوتوغرافي متميز.
          </p>
        </div>
      </ScrollExpandMedia>

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
      <section id="video-gallery" className="py-24 px-6 relative z-10 bg-[#0D0F1A]/50">
        <div className="max-w-7xl mx-auto space-y-16">
           <SectionHeader 
             title="أعمال تتحدث عن نفسها" 
             subtitle="جودة بصرية تضاهي الإنتاج العالمي المخصص للقطاع الصحي."
           />
           <VideoGallery />
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
      <section className="py-24 px-6 relative z-10 overflow-hidden bg-[#0D0F1A]/30">
         <div className="max-w-7xl mx-auto mb-12 text-right">
            <h2 className="text-3xl font-black text-[#F0F1FF]">خلف الكواليس</h2>
            <p className="text-[#9496C0]">لقطات من مواقع التصوير ومراحل العمل الإبداعي.</p>
         </div>
         <div className="flex gap-4 animate-scroll-x hover:[animation-play-state:paused] cursor-zoom-in">
            {[...btsImages, ...btsImages].map((src, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-80 h-52 relative rounded-2xl overflow-hidden border border-white/10 group"
                onClick={() => setSelectedImage({src, alt: "ZTYX Production BTS"})}
              >
                 <Image 
                   src={src} 
                   alt="BTS" 
                   fill 
                   className="object-cover transition-transform duration-500 group-hover:scale-110" 
                 />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Camera className="text-white w-8 h-8" />
                 </div>
              </div>
            ))}
         </div>
      </section>

      <Lightbox 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        src={selectedImage?.src || ""} 
        alt={selectedImage?.alt || ""}
      />

      {/* CTA */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-12 text-center space-y-8 bg-gradient-to-t from-[#5B5EFF]/10 to-transparent">
            <h2 className="text-4xl font-black text-[#F0F1FF]">قصتك تستحق أن تُروى باحترافية</h2>
            <p className="text-[#9496C0] text-lg">احجز موعد التصوير اليوم واجعل عيادتك تتحدث بلغة الفيديو السينمائي.</p>
            <div className="flex flex-wrap justify-center gap-4">
               <Button size="xl" href="/contact">احجز موعد تصوير</Button>
               <Button variant="glass" size="xl" href="/contact">اطلب استشارة فنية</Button>
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

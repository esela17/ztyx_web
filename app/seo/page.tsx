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
import { Search, BarChart3, MapPin, Link as LinkIcon, ChevronRight, Activity, SearchCheck } from 'lucide-react';

export default function SEOPage() {
  const containerRef = useGsapReveal();

  return (
    <main className="relative min-h-screen bg-[#08090E]" dir="rtl" ref={containerRef as any}>
      <div className="grid-overlay" />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-right space-y-6">
            <div className="gsap-reveal">
              <Badge>تحسين محركات البحث SEO</Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#F0F1FF] leading-[1.1] gsap-reveal">
              تصدر نتائج <br />
              جوجل واجعل <span className="text-[#5B5EFF]">مريضك يجدك</span>
            </h1>
            <p className="text-[#9496C0] text-xl max-w-xl ml-auto gsap-reveal leading-relaxed">
              استراتيجيات SEO متخصصة للقطاع الطبي تضمن ظهور موقعك في الصفحة الأولى أمام الباحثين عن خدماتك في تخصصك ومنطقتك.
            </p>
            <div className="gsap-reveal pt-4 flex gap-4">
              <Button size="xl">افحص موقعك مجاناً</Button>
            </div>
          </div>
          <div className="gsap-reveal relative">
             {/* Google Search Mockup */}
             <div className="glass p-6 rounded-[32px] border-[#5B5EFF]/20 shadow-3xl bg-[#0D0F1A]/80">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                      <Search className="text-[#5B5EFF] w-6 h-6" />
                   </div>
                   <div className="h-10 flex-1 bg-white/5 rounded-xl border border-white/10 flex items-center px-4 text-[#9496C0] text-sm overflow-hidden">
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
                        className="whitespace-nowrap inline-block border-l-2 border-[#5B5EFF] overflow-hidden"
                      >
                        أفضل جراح تجميل في مصر
                      </motion.span>
                   </div>
                </div>
                <div className="space-y-6">
                   <div className="p-6 rounded-2xl bg-[#5B5EFF]/5 border border-[#5B5EFF]/20 relative">
                      <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-12 bg-[#5B5EFF] rounded-full" />
                      <div className="text-[#5B5EFF] text-sm font-en mb-1">https://your-clinic.com</div>
                      <div className="text-xl font-black text-[#F0F1FF] mb-2">أفضل مركز جراحة تجميل - دكتورك المفضل</div>
                      <div className="text-[#9496C0] text-xs leading-relaxed">
                         نقدم أحدث التقنيات في جراحات التجميل تحت إشراف نخبة من الاستشاريين. احجز موعدك الآن...
                      </div>
                   </div>
                   {[1, 2].map(i => (
                     <div key={i} className="p-6 rounded-2xl opacity-30 grayscale space-y-2">
                        <div className="h-3 w-1/4 bg-white/10 rounded" />
                        <div className="h-5 w-3/4 bg-white/10 rounded" />
                        <div className="h-3 w-full bg-white/10 rounded" />
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 px-6 relative z-10 bg-[#0D0F1A]/50">
        <div className="max-w-7xl mx-auto">
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "SEO Audit", icon: <SearchCheck size={40} />, desc: "تحليل فني شامل للموقع لاكتشاف كافة الأخطاء وفرص النمو." },
                { title: "On-Page SEO", icon: <BarChart3 size={40} />, desc: "تحسين المحتوى والكلمات المفتاحية بما يتوافق مع خوارزميات جوجل." },
                { title: "Off-Page SEO", icon: <LinkIcon size={40} />, desc: "بناء روابط خارجية قوية (Backlinks) لتعزيز سلطة موقعك." },
                { title: "Local SEO", icon: <MapPin size={40} />, desc: "تصدر نتائج خرائط جوجل للمرضى القريبين من موقع عيادتك." },
              ].map((service, i) => (
                <div key={i} className="gsap-reveal">
                  <GlassCard className="p-8 group hover:bg-[#5B5EFF]/5 transition-all">
                    <div className="text-[#5B5EFF] mb-6 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-black text-[#F0F1FF] mb-3">{service.title}</h3>
                    <p className="text-[#9496C0] text-sm leading-relaxed">{service.desc}</p>
                  </GlassCard>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
           <SectionHeader 
             title="رحلة الصعود للقمة" 
             subtitle="عملية منظمة تبدأ بالتحليل وتنتهي بالسيطرة على نتائج البحث."
           />
           <div className="grid md:grid-cols-4 gap-4 pt-16">
              {[
                { step: "01", title: "تحليل المنافسين", desc: "دراسة نقاط قوة المنافسين والكلمات التي يستهدفونها." },
                { step: "02", title: "تحسين البنية", desc: "إصلاح المشاكل التقنية وسرعة الموقع وتجربة المستخدم." },
                { step: "03", title: "بناء المحتوى", desc: "كتابة مقالات طبية موثوقة تجذب المرضى وتجيب على تساؤلاتهم." },
                { step: "04", title: "السيطرة", desc: "متابعة النتائج، زيادة السلطة، والحفاظ على المركز الأول." },
              ].map((item, i) => (
                <div key={i} className="gsap-reveal relative p-8 glass rounded-3xl group">
                   <div className="text-5xl font-black text-[#5B5EFF] opacity-10 mb-4 font-mono group-hover:opacity-40 transition-opacity">
                      {item.step}
                   </div>
                   <h4 className="text-xl font-bold text-[#F0F1FF] mb-2">{item.title}</h4>
                   <p className="text-[#9496C0] text-xs leading-relaxed">{item.desc}</p>
                   {i < 3 && <ChevronRight className="absolute top-1/2 -left-4 text-[#5B5EFF]/20 hidden lg:block" />}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Results Graph Visual */}
      <section className="py-24 px-6 relative z-10 bg-[#5B5EFF]/5">
         <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="gsap-reveal bg-[#0D0F1A] p-8 rounded-[40px] border border-[#5B5EFF]/20 relative overflow-hidden">
               <div className="flex justify-between items-end h-64 gap-2">
                  {[40, 25, 55, 30, 80, 45, 95].map((h, i) => (
                    <div key={i} className="flex-1 bg-[#5B5EFF]/20 rounded-t-lg relative group">
                       <div 
                         className="absolute bottom-0 left-0 right-0 bg-[#5B5EFF] rounded-t-lg transition-all duration-1000 delay-500" 
                         style={{ height: `${h}%` }}
                       />
                       {i === 6 && <Activity className="absolute -top-10 left-1/2 -translate-x-1/2 text-[#5B5EFF] animate-pulse" />}
                    </div>
                  ))}
               </div>
               <div className="mt-6 flex justify-between text-[#9496C0] text-xs font-mono">
                  <span>الشهر 1</span>
                  <span>الشهر 3</span>
                  <span>الشهر 6</span>
               </div>
            </div>
            <div className="text-right space-y-6">
               <h2 className="text-4xl font-black text-[#F0F1FF] gsap-reveal">نمو عضوي مستدام</h2>
               <p className="text-[#9496C0] text-lg leading-relaxed gsap-reveal">
                  على عكس الإعلانات الممولة التي تتوقف بتوقف الميزانية، الـ SEO يبني لك أصلاً رقمياً ينمو مع الوقت ويستمر في جذب المرضى مجاناً.
               </p>
               <div className="grid grid-cols-2 gap-8 pt-4 gsap-reveal">
                  <div>
                    <div className="text-3xl font-black text-[#5B5EFF]">+300%</div>
                    <div className="text-sm text-[#9496C0]">زيادة في الزيارات المجانية</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-[#5B5EFF]">+50</div>
                    <div className="text-sm text-[#9496C0]">كلمة مفتاحية في الصفحة الأولى</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-12 text-center space-y-8 border-[#5B5EFF]/30">
            <h2 className="text-4xl font-black text-[#F0F1FF]">ابدأ في السيطرة على نتائج البحث</h2>
            <p className="text-[#9496C0] text-lg">احصل على فحص مجاني لموقعك الآن واكتشف كيف يمكننا مساعدتك في تصدر جوجل.</p>
            <div className="flex flex-wrap justify-center gap-4">
               <Button size="xl">فحص مجاني لموقعي</Button>
               <Button variant="glass" size="xl">تحدث مع خبير SEO</Button>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </main>
  );
}

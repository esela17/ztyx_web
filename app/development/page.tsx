"use client";

import React from 'react';
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Code2, ShieldCheck, Zap, MonitorSmartphone, Database, ShoppingCart, Globe } from 'lucide-react';
import { Boxes } from "@/components/ui/background-boxes";

export default function DevelopmentPage() {
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
              <Badge>حلول برمجية ذكية</Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#F0F1FF] leading-[1.1] gsap-reveal">
              بنية تحتية <br />
              رقمية <span className="text-[#5B5EFF]">بمعايير عالمية</span>
            </h1>
            <p className="text-[#9496C0] text-xl max-w-xl ml-auto gsap-reveal leading-relaxed">
              نبني لك أنظمة وتطبيقات طبية متكاملة تعزز من كفاءة عيادتك وتوفر لمرضاك تجربة حجز وعلاج لا مثيل لها.
            </p>
            <div className="gsap-reveal pt-4">
              <Button size="xl">ابدأ رقمنة عيادتك الآن</Button>
            </div>
          </div>
          <div className="gsap-reveal relative">
            {/* Background Boxes Visual */}
            <div className="relative w-full aspect-video bg-[#0D0F1A] rounded-[40px] border border-white/10 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-[#0D0F1A] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
              <Boxes />
              
              <div className="relative z-30 flex flex-col items-center">
                <div className="w-24 h-24 rounded-3xl bg-[#5B5EFF]/20 backdrop-blur-xl flex items-center justify-center border border-[#5B5EFF]/30 mb-4 animate-bounce duration-[3000ms]">
                  <MonitorSmartphone className="w-12 h-12 text-[#5B5EFF]" />
                </div>
                <div className="text-[#5B5EFF] font-en font-black text-2xl tracking-[0.2em]">HIS / CRM SYSTEMS</div>
                <div className="text-[#9496C0] text-[10px] font-bold uppercase tracking-widest mt-2">Enterprise Software Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="gsap-reveal mb-16">
            <SectionHeader
              title="هندسة رقمية للقطاع الصحي"
              subtitle="حلول مخصصة تلبي احتياجاتك التقنية مهما كان حجم مؤسستك."
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "مواقع طبية احترافية", icon: <Globe />, desc: "واجهات عصرية، سريعة، ومتوافقة مع محركات البحث." },
              { title: "أنظمة إدارة العيادات (HIS)", icon: <Database />, desc: "أتمتة الحجوزات، ملفات المرضى، والتقارير المالية." },
              { title: "تطبيقات الجوال", icon: <MonitorSmartphone />, desc: "تطبيقات iOS و Android تضع خدماتك في جيب مريضك." },
              { title: "متاجر مستلزمات طبية", icon: <ShoppingCart />, desc: "منصات بيع المنتجات الطبية بأمان وسهولة." },
            ].map((service, i) => (
              <div key={i} className="gsap-reveal">
                <GlassCard className="p-8 h-full group hover:border-[#5B5EFF]/50 transition-all">
                  <div className="w-14 h-14 rounded-xl bg-[#5B5EFF]/10 flex items-center justify-center text-[#5B5EFF] mb-6 group-hover:bg-[#5B5EFF] group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black text-[#F0F1FF] mb-4">{service.title}</h3>
                  <p className="text-[#9496C0] text-sm leading-relaxed">{service.desc}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-24 px-6 relative z-10 bg-[#0D0F1A]/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-[#F0F1FF] gsap-reveal">مميزات الأنظمة الذكية</h2>
            <div className="space-y-6">
              {[
                { title: "نظام حجز متقدم", icon: <Zap />, desc: "تنسيق تلقائي للمواعيد مع تنبيهات SMS و WhatsApp للمرضى." },
                { title: "حماية كاملة للبيانات", icon: <ShieldCheck />, desc: "تشفير بيانات المرضى وفق المعايير العالمية للخصوصية الطبية." },
                { title: "سرعة استجابة فائقة", icon: <Zap />, desc: "أداء سريع جداً لضمان عدم ضياع أي ثانية من وقتك الثمين." },
              ].map((feature, i) => (
                <div key={i} className="flex gap-6 gsap-reveal">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#5B5EFF]/30 flex items-center justify-center text-[#5B5EFF]">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#F0F1FF] mb-1">{feature.title}</h4>
                    <p className="text-[#9496C0] text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="gsap-reveal">
            {/* UI Mockup Placeholder */}
            <div className="relative glass p-4 rounded-[32px] border-[#5B5EFF]/20 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5B5EFF]/5 to-transparent" />
              <div className="relative space-y-4">
                <div className="h-8 w-1/3 bg-[#5B5EFF]/20 rounded-lg animate-pulse" />
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map(i => <div key={i} className="h-24 bg-white/5 rounded-xl border border-white/5" />)}
                </div>
                <div className="h-48 bg-white/5 rounded-2xl border border-white/5 relative flex items-center justify-center">
                  <div className="text-[#5B5EFF]/20 font-black text-xl">DASHBOARD UI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why it Matters */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-black text-[#F0F1FF] gsap-reveal">لماذا الرقمنة هي ضرورة وليست خياراً؟</h2>
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="gsap-reveal">
              <GlassCard className="p-10 border-green-500/10">
                <h4 className="text-xl font-bold text-[#F0F1FF] mb-4">تحسين تجربة المريض</h4>
                <p className="text-[#9496C0] text-sm">سهولة الحجز، سرعة الوصول للملفات، والتواصل السلس يبني ولاء المريض لعيادتك.</p>
              </GlassCard>
            </div>
            <div className="gsap-reveal">
              <GlassCard className="p-10 border-blue-500/10">
                <h4 className="text-xl font-bold text-[#F0F1FF] mb-4">كفاءة تشغيلية أعلى</h4>
                <p className="text-[#9496C0] text-sm">تقليل الخطأ البشري، توفير الوقت في الأعمال الورقية، وزيادة التركيز على الرعاية الطبية.</p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-12 text-center space-y-8 border-[#5B5EFF]/30 bg-[#5B5EFF]/5">
            <h2 className="text-4xl font-black text-[#F0F1FF]">جاهز لبناء مستقبلك الرقمي؟</h2>
            <p className="text-[#9496C0] text-lg">دعنا نحول رؤيتك التقنية إلى واقع ملموس يخدم مرضاك وعيادتك.</p>
            <Button size="xl">تحدث مع فريق التطوير</Button>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </main>
  );
}

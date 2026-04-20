"use client";

import React from 'react';
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Share2, TrendingUp, Layout, Globe } from 'lucide-react';

export default function MedicalMarketingPage() {
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
              <Badge>التسويق الطبي المتخصص</Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#F0F1FF] leading-[1.1] gsap-reveal">
              أفضل شركة <br />
              تسويق طبي <span className="text-[#5B5EFF]">في مصر</span>
            </h1>
            <p className="text-[#9496C0] text-xl max-w-xl ml-auto gsap-reveal leading-relaxed">
              نحول عيادتك إلى علامة تجارية رائدة تجذب المرضى وتكسب ثقتهم من خلال استراتيجيات رقمية مبنية على البيانات.
            </p>
            <div className="gsap-reveal pt-4">
              <Button size="xl">ابدأ رحلة النجاح الآن</Button>
            </div>
          </div>
          <div className="gsap-reveal relative">
            <div className="absolute inset-0 bg-[#5B5EFF]/20 blur-[100px] rounded-full animate-pulse" />
            <img 
              src="/marketing_hero.png" 
              alt="Medical Marketing Visual" 
              className="relative z-10 w-full h-auto rounded-[40px] shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 relative z-10 bg-[#0D0F1A]/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="gsap-reveal order-2 lg:order-1">
            <img 
              src="/empty_clinic.png" 
              alt="Empty Clinic Pain Point" 
              className="w-full h-auto rounded-[32px] opacity-80"
            />
          </div>
          <div className="text-right space-y-6 order-1 lg:order-2">
            <h2 className="text-4xl font-black text-[#F0F1FF] gsap-reveal">
              عيادتك مجهزة بأحدث التقنيات.. <br />
              <span className="text-[#5B5EFF]">ولكن أين المرضى؟</span>
            </h2>
            <p className="text-[#9496C0] text-lg gsap-reveal leading-relaxed">
              الكثير من الأطباء يمتلكون المهارة والأدوات، لكنهم يفتقدون "التواجد" الذي يحول الباحث إلى مريض. التسويق العشوائي يهدر الميزانية ولا يبني ثقة حقيقية.
            </p>
            <div className="space-y-4 pt-4">
              {['غياب الهوية البصرية الاحترافية', 'صعوبة استهداف الجمهور الصحيح', 'ضعف التفاعل على المنصات الرقمية'].map((item, i) => (
                <div key={i} className="flex items-center justify-start gap-3 text-[#F0F1FF] font-bold gsap-reveal">
                  <div className="w-2 h-2 bg-[#5B5EFF] rounded-full" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="gsap-reveal">
            <SectionHeader 
              title="استراتيجية ذكية، نتائج واقعية" 
              subtitle="نعتمد على تحليل سلوك المريض المصري الرقمي لنصنع محتوى يلمس احتياجاته ويؤكد احترافيتك."
            />
          </div>
          <div className="gsap-reveal">
            <img 
              src="/content_examples.png" 
              alt="Patient Journey Funnel" 
              className="w-full h-auto rounded-[40px] shadow-3xl"
            />
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "إدارة السوشيال ميديا", icon: <Share2 />, desc: "محتوى طبي متخصص، ردود ذكية، وتفاعل يومي." },
            { title: "الإعلانات الممولة", icon: <TrendingUp />, desc: "استهداف جغرافي وديموغرافي دقيق للمرضى المحتملين." },
            { title: "صناعة المحتوى", icon: <Layout />, desc: "تصوير فيديو احترافي، جرافيكس طبية، ومقالات تثقيفية." },
            { title: "حملات متعددة اللغات", icon: <Globe />, desc: "التوسع للسياحة العلاجية وجذب المرضى دولياً." },
          ].map((service, i) => (
            <div key={i} className="gsap-reveal">
              <GlassCard className="p-8 h-full flex flex-col items-center text-center group hover:border-[#5B5EFF]/50 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-[#5B5EFF]/10 flex items-center justify-center text-[#5B5EFF] mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-[#F0F1FF] mb-4">{service.title}</h3>
                <p className="text-[#9496C0] text-sm leading-relaxed">{service.desc}</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 px-6 relative z-10 bg-[#5B5EFF]/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { val: "+40%", label: "نمو الحجوزات في أول 3 أشهر" },
              { val: "100%", label: "هوية رقمية موثوقة" },
              { val: "-30%", label: "تكلفة الاستحواذ على المريض" },
            ].map((stat, i) => (
              <div key={i} className="gsap-reveal">
                <div className="text-5xl font-black text-[#5B5EFF] mb-2">{stat.val}</div>
                <div className="text-[#9496C0] font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-12 text-center space-y-8 bg-gradient-to-br from-[#5B5EFF]/20 to-transparent">
            <h2 className="text-4xl font-black text-[#F0F1FF]">لا تترك نجاحك للصدفة</h2>
            <p className="text-[#9496C0] text-lg">احصل على خطة تسويقية مخصصة لعيادتك اليوم وابدأ في مضاعفة نتائجك.</p>
            <Button size="xl">اطلب عرض سعر مخصص</Button>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </main>
  );
}

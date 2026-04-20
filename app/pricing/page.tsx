"use client";

import React from 'react';
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Check, Info, HelpCircle } from 'lucide-react';

const plans = [
  {
    name: "الباقة الأساسية",
    price: "Custom",
    desc: "مثالية للعيادات الجديدة التي تبدأ في بناء حضورها الرقمي.",
    features: [
      "إدارة حسابين سوشيال ميديا",
      "8 تصميمات احترافية شهرياً",
      "إدارة الحملات الإعلانية",
      "تقرير أداء شهري",
      "دعم فني عبر الواتساب"
    ],
    highlight: false
  },
  {
    name: "الباقة الاحترافية",
    price: "Custom",
    desc: "الخيار الأكثر شيوعاً للعيادات والمراكز الطبية المتوسطة.",
    features: [
      "إدارة 4 حسابات سوشيال ميديا",
      "16 تصميم + 4 فيديوهات Reels",
      "إدارة متقدمة للحملات الإعلانية",
      "تحسين نتائج البحث SEO (أساسي)",
      "نظام حجز مواعيد إلكتروني",
      "دعم فني مميز 24/7"
    ],
    highlight: true
  },
  {
    name: "باقة النخبة (Enterprise)",
    price: "Custom",
    desc: "حلول متكاملة للمستشفيات والمراكز الطبية الكبرى.",
    features: [
      "إدارة كاملة لجميع المنصات",
      "إنتاج مرئي سينمائي (يوم تصوير كامل)",
      "استراتيجية SEO متكاملة",
      "تطوير تطبيق جوال خاص",
      "إدارة سمعة (Reputation Management)",
      "مدير حساب مخصص"
    ],
    highlight: false
  }
];

export default function PricingPage() {
  const containerRef = useGsapReveal();

  return (
    <main className="relative min-h-screen bg-[#08090E]" dir="rtl" ref={containerRef as any}>
      <div className="grid-overlay" />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="gsap-reveal">
            <Badge>باقات وخطط الأسعار</Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#F0F1FF] gsap-reveal">
            استثمار ذكي <span className="text-[#5B5EFF]">لنمو عيادتك</span>
          </h1>
          <p className="text-[#9496C0] text-xl gsap-reveal leading-relaxed">
            نقدم حلولاً مرنة تناسب تخصصك وأهدافك، مع شفافية كاملة في التسعير والنتائج المتوقعة.
          </p>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className="gsap-reveal">
              <GlassCard className={`p-10 h-full flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-4 ${plan.highlight ? 'border-[#5B5EFF] shadow-[0_0_50px_rgba(91,94,255,0.2)]' : ''}`}>
                {plan.highlight && (
                  <div className="absolute top-6 -left-12 -rotate-45 bg-[#5B5EFF] text-white text-[10px] font-black px-12 py-1 uppercase tracking-widest">
                    Recommended
                  </div>
                )}
                
                <h3 className="text-2xl font-black text-[#F0F1FF] mb-2">{plan.name}</h3>
                <div className="text-[#5B5EFF] text-sm font-bold mb-6 font-en uppercase tracking-wide">Starting from</div>
                <div className="text-5xl font-black text-[#F0F1FF] mb-6">{plan.price}</div>
                <p className="text-[#9496C0] text-sm mb-8 leading-relaxed">{plan.desc}</p>
                
                <div className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-[#F0F1FF]">
                      <div className="w-5 h-5 rounded-full bg-[#5B5EFF]/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#5B5EFF]" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button variant={plan.highlight ? 'primary' : 'outline'} className="w-full" href="/contact">
                  طلب عرض سعر
                </Button>
              </GlassCard>
            </div>
          ))}
        </div>
      </section>

      {/* Cost Factors & Ads Explanation */}
      <section className="py-24 px-6 relative z-10 bg-[#0D0F1A]/50">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
           <div className="space-y-8 text-right">
              <h2 className="text-3xl font-black text-[#F0F1FF] gsap-reveal">كيف نحدد التكلفة؟</h2>
              <div className="space-y-6">
                 {[
                   { title: "حجم المنافسة", desc: "تختلف التكاليف باختلاف المنافسة في تخصصك الطبي ومنطقتك الجغرافية." },
                   { title: "الأهداف التسويقية", desc: "هل تبحث عن بناء وعي بالعلامة التجارية أم زيادة الحجوزات المباشرة؟" },
                   { title: "عدد المنصات", desc: "نطاق العمل عبر فيسبوك، انستجرام، جوجل، وتيك توك يؤثر على حجم الفريق المطلوب." },
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 gsap-reveal">
                      <div className="w-1.5 h-1.5 bg-[#5B5EFF] rounded-full mt-2 flex-shrink-0" />
                      <div>
                         <h4 className="font-bold text-[#F0F1FF] mb-1">{item.title}</h4>
                         <p className="text-[#9496C0] text-sm">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="gsap-reveal">
              <GlassCard className="p-10 border-[#5B5EFF]/20 space-y-6">
                 <div className="flex items-center gap-4 text-[#5B5EFF]">
                    <Info size={32} />
                    <h3 className="text-xl font-black">ملاحظة هامة حول ميزانية الإعلانات</h3>
                 </div>
                 <p className="text-[#9496C0] text-sm leading-relaxed">
                    التكاليف المذكورة في الباقات هي مقابل **خدمات الإدارة والتنفيذ فقط**. أما ميزانية الإعلانات (Ads Spend) التي تُدفع لمنصات فيسبوك وجوجل، فيتم تحديدها بشكل منفصل بناءً على أهدافك وتُدفع مباشرة للمنصات.
                 </p>
                 <div className="p-6 bg-[#5B5EFF]/5 rounded-2xl border border-[#5B5EFF]/10 text-xs text-center text-[#9496C0]">
                    يساعدك خبراؤنا في تحديد الميزانية الإعلانية الأمثل لضمان أفضل عائد استثماري.
                 </div>
              </GlassCard>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
           <GlassCard className="p-12 space-y-8 bg-gradient-to-b from-[#5B5EFF]/10 to-transparent border-t-[#5B5EFF]/30">
              <h2 className="text-4xl font-black text-[#F0F1FF]">لم تجد الباقة المناسبة؟</h2>
              <p className="text-[#9496C0] text-lg">يمكننا تصميم باقة مخصصة تلبي احتياجاتك الفريدة وميزانيتك المحددة.</p>
              <Button size="xl" className="group" href="https://wa.me/201068327720">
                 صمم باقتك الآن
                 <HelpCircle className="w-5 h-5 mr-2 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Button>
           </GlassCard>
        </div>
      </section>

      <Footer />
    </main>
  );
}

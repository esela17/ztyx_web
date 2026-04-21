"use client";

import React from 'react';
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";

const faqItems = [
  {
    q: "ما هي التكلفة المتوقعة لخدمات التسويق الطبي؟",
    a: "تختلف التكلفة بناءً على حجم المؤسسة والأهداف التسويقية والمنصات المستهدفة. نقدم باقات مرنة تبدأ من الخدمات الأساسية للعيادات الجديدة وصولاً إلى الحلول المتكاملة للمراكز الكبرى. يفضل التواصل معنا للحصول على عرض سعر مخصص."
  },
  {
    q: "متى يمكنني توقع رؤية نتائج ملموسة؟",
    a: "بالنسبة للإعلانات الممولة والسوشيال ميديا، تبدأ النتائج في الظهور من الشهر الأول. أما بالنسبة لتحسين محركات البحث (SEO)، فغالباً ما يستغرق الأمر من 3 إلى 6 أشهر لرؤية نمو عضوي مستدام."
  },
  {
    q: "هل تقومون بإدارة الحسابات والرد على التعليقات؟",
    a: "نعم، تتضمن باقاتنا إدارة كاملة للمنصات بما في ذلك صناعة المحتوى، التصميم، الجدولة، والرد الاحترافي على التعليقات والرسائل لضمان عدم ضياع أي مريض محتمل."
  },
  {
    q: "كيف تساعد خدمات الـ SEO عيادتي على المدى الطويل؟",
    a: "الـ SEO يبني لك أصلاً رقمياً ينمو مع الوقت. عندما يتصدر موقعك نتائج البحث، ستحصل على تدفق مستمر من المرضى دون الحاجة للدفع مقابل كل نقرة، مما يقلل تكلفة التسويق الإجمالية مع الوقت."
  },
  {
    q: "هل تدعم خدماتكم اللغات الأجنبية للسياحة العلاجية؟",
    a: "بالتأكيد. لدينا فريق متخصص في المحتوى الطبي باللغة الإنجليزية ولغات أخرى، مما يساعدك على استهداف المرضى الدوليين وتنشيط السياحة العلاجية لمركزك."
  },
  {
    q: "هل أحتاج لميزانية إعلانية منفصلة؟",
    a: "نعم، ميزانية الإعلانات (Ads Spend) تُدفع مباشرة للمنصات (جوجل، فيسبوك). خدماتنا تشمل إدارة وتخطيط وتحسين هذه الميزانية لضمان أعلى عائد استثماري ممكن."
  }
];

export default function FAQPage() {
  const containerRef = useGsapReveal();

  return (
    <main className="relative min-h-screen bg-[#08090E]" dir="rtl" ref={containerRef as any}>
      <div className="grid-overlay" />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="gsap-reveal">
            <Badge>الأسئلة الشائعة</Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#F0F1FF] gsap-reveal">
            كل ما تريد <span className="text-[#5B5EFF]">معرفته</span>
          </h1>
          <p className="text-[#9496C0] text-xl gsap-reveal leading-relaxed">
            إجابات شافية لأكثر التساؤلات شيوعاً حول خدماتنا وكيفية البدء في تطوير عيادتك.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
           <div className="gsap-reveal">
              <Accordion items={faqItems} />
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
           <GlassCard className="p-12 space-y-8 bg-[#5B5EFF]/5 border-[#5B5EFF]/20">
              <h2 className="text-4xl font-black text-[#F0F1FF]">لديك سؤال آخر؟</h2>
              <p className="text-[#9496C0] text-lg">فريقنا جاهز للرد على كافة استفساراتك ومساعدتك في اختيار الحل الأنسب لعيادتك.</p>
              <div className="flex flex-wrap justify-center gap-4">
                 <Button size="xl" href="/contact">تواصل معنا الآن</Button>
                 <Button variant="glass" size="xl" href="https://wa.me/201068327720">احجز استشارة مجانية</Button>
              </div>
           </GlassCard>
        </div>
      </section>

      <Footer />
    </main>
  );
}

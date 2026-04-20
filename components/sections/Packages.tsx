"use client";

import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { useTabs } from "@/hooks/useTabs";
import { cn } from "@/lib/utils";



const packageData = {
  "Websites": [
    { feature: "تصميم واجهة مستخدم (UI/UX)", p1: true, p2: true, elite: true },
    { feature: "متوافق مع محركات البحث SEO", p1: true, p2: true, elite: true },
    { feature: "نظام حجز مواعيد أونلاين", p1: false, p2: true, elite: true },
    { feature: "مدونة طبية متخصصة", p1: false, p2: true, elite: true },
    { feature: "استضافة فائقة السرعة", p1: false, p2: false, elite: true },
    { feature: "دعم فني 24/7", p1: false, p2: false, elite: true },
  ],
  "ERP Systems": [
    { feature: "إدارة ملفات المرضى EMR", p1: true, p2: true, elite: true },
    { feature: "جدولة المواعيد الذكية", p1: true, p2: true, elite: true },
    { feature: "نظام الفواتير والمخازن", p1: false, p2: true, elite: true },
    { feature: "تحليلات الأداء المتقدمة", p1: false, p2: true, elite: true },
    { feature: "تطبيق موبايل للأطباء", p1: false, p2: false, elite: true },
    { feature: "ربط مع المعامل والأشعة", p1: false, p2: false, elite: true },
  ],
  "Marketing": [
    { feature: "إدارة منصات التواصل", p1: true, p2: true, elite: true },
    { feature: "حملات إعلانية ممولة", p1: true, p2: true, elite: true },
    { feature: "صناعة محتوى فيديو احترافي", p1: false, p2: true, elite: true },
    { feature: "تحسين السمعة الرقمية", p1: false, p2: true, elite: true },
    { feature: "تصوير احترافي للعيادة", p1: false, p2: false, elite: true },
    { feature: "إدارة المشاهير والإنفلونسرز", p1: false, p2: false, elite: true },
  ]
};

import { useGsapReveal } from "@/hooks/useGsapReveal";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function Packages() {
  const { activeTab, switchTab } = useTabs("Websites");
  const containerRef = useGsapReveal();

  return (
    <section 
      id="الباقات"
      ref={containerRef as any}
      className="py-24 px-6 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="gsap-reveal">
          <SectionHeader 
            title="باقات شاملة ومرنة" 
            subtitle="اختر المستوى الذي يناسب طموحات عيادتك"
          />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 gsap-reveal">

          {Object.keys(packageData).map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "primary" : "glass"}
              onClick={() => switchTab(tab)}
              className={cn(
                "px-8 py-3 rounded-xl font-bold transition-all",
                activeTab !== tab && "text-[#9496C0] hover:text-[#F0F1FF]"
              )}
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-[32px] glass border-[#9496C0]/10 p-2">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr className="text-[#F0F1FF]">
                <th className="text-right p-8 font-black text-xl">الميزة</th>
                <th className="p-8 font-en font-bold text-[#9496C0]">PHASE 1</th>
                <th className="p-8 font-en font-bold text-[#9496C0]">PHASE 2</th>
                <th className="p-8 font-en font-black text-[#5B5EFF] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#5B5EFF]/5 z-0" />
                  <span className="relative z-10">ELITE 4D</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {packageData[activeTab as keyof typeof packageData].map((row, i) => (
                <tr key={i} className="border-t border-[#9496C0]/5 group">
                  <td className="p-6 text-[#F0F1FF] font-bold group-hover:text-[#5B5EFF] transition-colors">{row.feature}</td>
                  <td className="p-6 text-center">{row.p1 ? <CheckCircle2 className="mx-auto text-[#22D991] w-6 h-6" /> : <XCircle className="mx-auto text-[#FF4466] w-6 h-6 opacity-30" />}</td>
                  <td className="p-6 text-center">{row.p2 ? <CheckCircle2 className="mx-auto text-[#22D991] w-6 h-6" /> : <XCircle className="mx-auto text-[#FF4466] w-6 h-6 opacity-30" />}</td>
                  <td className="p-6 text-center relative">
                    <div className="absolute inset-0 bg-[#5B5EFF]/5 z-0" />
                    <div className="relative z-10">
                      {row.elite ? <CheckCircle2 className="mx-auto text-[#5B5EFF] w-7 h-7 filter drop-shadow-[0_0_100px_rgba(91,94,255,0.4)]" /> : <XCircle className="mx-auto text-[#FF4466] w-6 h-6" />}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}


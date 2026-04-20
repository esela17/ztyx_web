"use client";

import React from 'react';
import { LayoutDashboard, Globe, Users } from 'lucide-react';
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import Link from 'next/link';

const pillars = [
  {
    title: "التسويق الطبي",
    subtitle: "Medical Marketing",
    desc: "استراتيجيات مبنية على البيانات تضمن وصول خدماتك للجمهور المستهدف بدقة متناهية.",
    icon: <Globe className="w-8 h-8 text-[#5B5EFF]" />,
    href: "/medical-marketing"
  },
  {
    title: "تطوير البرمجيات",
    subtitle: "Web & App Dev",
    desc: "بناء منصات وتطبيقات طبية ذكية تعزز من كفاءة عيادتك وتجربة مرضاك.",
    icon: <LayoutDashboard className="w-8 h-8 text-[#5B5EFF]" />,
    href: "/development"
  },
  {
    title: "الإنتاج المرئي",
    subtitle: "Media Production",
    desc: "صناعة محتوى مرئي احترافي يجسد ريادتك الطبية ويبني جسور الثقة.",
    icon: <Users className="w-8 h-8 text-[#5B5EFF]" />,
    href: "/media-production"
  },
  {
    title: "تحسين نتائج البحث",
    subtitle: "SEO Strategy",
    desc: "تصدر نتائج البحث واجعل مريضك يجدك أولاً من خلال استراتيجيات SEO متخصصة.",
    icon: <Globe className="w-8 h-8 text-[#5B5EFF]" />,
    href: "/seo"
  },
];


export default function Solutions() {
  const containerRef = useGsapReveal();

  return (
    <section 
      id="services"
      ref={containerRef as any}
      className="py-24 px-6 relative z-10 bg-radial from-[#5B5EFF]/5 via-transparent to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="gsap-reveal">
            <Badge showDot={false}>The 4th Dimension</Badge>
          </div>
          <div className="gsap-reveal">
            <SectionHeader 
              title="البعد الرابع للرعاية الصحية" 
              subtitle="نحن لا نقدم مجرد خدمات، نحن نصنع منظومة متكاملة ترفع كفاءة عيادتك إلى آفاق جديدة."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <div key={i} className="gsap-reveal">
              <Link href={pillar.href}>
                <GlassCard 
                  className="p-12 rounded-[40px] h-full text-center group hover:-translate-y-4 hover:border-[#5B5EFF]/50 hover:shadow-[0_20px_60px_rgba(91,94,255,0.2)] transition-all duration-500 cursor-pointer"
                >

                <div className="w-20 h-20 rounded-3xl bg-[#5B5EFF]/10 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform shadow-lg shadow-[#5B5EFF]/5">
                  {pillar.icon}
                </div>
                
                <h3 className="text-2xl font-black text-[#F0F1FF] mb-2">
                  {pillar.title}
                </h3>
                
                <div className="text-[#5B5EFF] font-en font-bold text-sm mb-6 tracking-wide">
                  {pillar.subtitle}
                </div>
                
                <p className="text-[#9496C0] leading-relaxed">
                  {pillar.desc}
                </p>
              </GlassCard>
            </Link>
          </div>
          ))}

        </div>
      </div>
    </section>
  );
}


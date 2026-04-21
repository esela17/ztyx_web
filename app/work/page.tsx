"use client";

import React from 'react';
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Image from 'next/image';
import { ExternalLink, Camera, Layout, Palette, Globe } from 'lucide-react';

const portfolioItems = [
  {
    title: "موقع Cure ZTYX المتكامل",
    category: "Software Development",
    image: "/category/Screenshot 2026-04-21 134241.png",
    link: "https://cureztyx.com",
    icon: <Globe size={20} />,
    featured: true
  },
  {
    title: "تصميم هوية بصرية لمركز رعايي",
    category: "Graphic Design",
    image: "/category/Logo-Raeei.jpg",
    icon: <Palette size={20} />,
  },
  {
    title: "تطبيق HIS لإدارة العيادات",
    category: "Software Development",
    image: "/category/iPhone 12 Pro 6.1_ Mockup Front View-1.png",
    icon: <Layout size={20} />,
  },
  {
    title: "حملة تسويقية لمركز النخبة",
    category: "Medical Marketing",
    image: "/category/Screenshot 2026-04-21 133648.png",
    icon: <Globe size={20} />,
  },
  {
    title: "إنتاج فيديو سينمائي طبي",
    category: "Media Production",
    image: "/category/Screenshot 2026-04-21 133756.png",
    icon: <Camera size={20} />,
  },
  {
    title: "تصميم واجهة مستخدم Dashboard",
    category: "UI/UX Design",
    image: "/category/Screenshot 2026-04-21 133810.png",
    icon: <Palette size={20} />,
  },
  {
    title: "مشروع تطوير المنظومة الصحية",
    category: "Software Development",
    image: "/category/جامعه.png",
    icon: <Layout size={20} />,
  },
  {
    title: "تصميمات السوشيال ميديا",
    category: "Graphic Design",
    image: "/category/Screenshot 2026-04-21 134012.png",
    icon: <Palette size={20} />,
  }
];

export default function WorkPage() {
  const containerRef = useGsapReveal();

  return (
    <main className="relative min-h-screen bg-[#08090E]" dir="rtl" ref={containerRef as any}>
      <div className="grid-overlay" />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="gsap-reveal">
            <Badge>معرض الأعمال Portfolio</Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#F0F1FF] gsap-reveal">
            أعمالنا تتحدث <br />
            عن <span className="text-[#5B5EFF]">إبداعنا</span>
          </h1>
          <p className="text-[#9496C0] text-xl gsap-reveal leading-relaxed">
            استعرض نخبة من مشاريعنا في تطوير البرمجيات، التسويق الطبي، والإنتاج المرئي التي ساعدت عملاءنا في الوصول للقمة.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, i) => (
              <div key={i} className={`gsap-reveal ${item.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                <GlassCard className="group overflow-hidden p-0 h-full flex flex-col border-white/5 hover:border-[#5B5EFF]/50 transition-all duration-500">
                  <div className={`relative w-full overflow-hidden ${item.featured ? 'h-[400px]' : 'h-[300px]'}`}>
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090E] via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-6 right-6">
                       <div className="flex items-center gap-2 bg-[#5B5EFF] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                          {item.icon}
                          {item.category}
                       </div>
                    </div>
                  </div>
                  <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-black text-[#F0F1FF] mb-2">{item.title}</h3>
                      {item.link && (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[#5B5EFF] text-sm font-bold hover:underline"
                        >
                          زيارة المشروع <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                    <Button variant="outline" className="w-full mt-4 group-hover:bg-[#5B5EFF] group-hover:text-white transition-all">
                       شاهد التفاصيل
                    </Button>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-12 text-center space-y-8 bg-[#5B5EFF]/5 border-[#5B5EFF]/20">
            <h2 className="text-4xl font-black text-[#F0F1FF]">جاهز لتكون قصة نجاحنا التالية؟</h2>
            <p className="text-[#9496C0] text-lg">دعنا نحول رؤيتك إلى واقع ملموس ونضع عيادتك على خارطة الريادة الرقمية.</p>
            <Button size="xl" href="/contact">ابدأ مشروعك الآن</Button>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </main>
  );
}

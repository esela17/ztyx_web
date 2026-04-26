"use client";

import React, { useState, useEffect, use } from 'react';
import { cn } from "@/lib/utils";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Image from 'next/image';
import { ExternalLink, Layout } from 'lucide-react';
import { Lightbox } from "@/components/ui/Lightbox";
import { motion, AnimatePresence } from "framer-motion";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { lazy, Suspense } from "react";

// Types
interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  link?: string;
  featured?: boolean;
  description?: string;
}

interface Categories {
  id: string;
  name: string;
  label: string;
}

// Fallback static data (used when DB is unavailable)
const staticPortfolioData: PortfolioItem[] = [
  { id: "1", title: "موقع Cure ZTYX المتكامل", category: "Software Development", image: "/category/Screenshot 2026-04-21 134241.png", link: "https://cureztyx.com", featured: true, description: "نظام إدارة محتوى طبي متكامل" },
  { id: "2", title: "تصميم هوية بصرية لمركز رعايي", category: "Graphic Design", image: "/category/Logo-Raeei.jpg", featured: false, description: "بناء علامة تجارية" },
  { id: "3", title: "تطبيق HIS لإدارة العيادات", category: "Software Development", image: "/category/iPhone 12 Pro 6.1_ Mockup Front View-1.png", featured: false, description: "تطبيق موبايل شامل" },
  { id: "4", title: "حملة تسويقية لمركز النخبة", category: "Medical Marketing", image: "/category/Screenshot 2026-04-21 133648.png", featured: true, description: "استراتيجية تسويق رقمي" },
  { id: "5", title: "إنتاج فيديو سينمائي طبي", category: "Media Production", image: "/category/Screenshot 2026-04-21 133756.png", featured: false, description: "قصة نجاح مصورة" },
];

const staticCategories: Categories[] = [
  { id: "all", name: "الكل", label: "جميع الأعمال" },
  { id: "Software Development", name: "Software Development", label: "تطوير البرمجيات" },
  { id: "Medical Marketing", name: "Medical Marketing", label: "التسويق الطبي" },
  { id: "Graphic Design", name: "Graphic Design", label: "التصميم الجرافيكي" },
  { id: "Media Production", name: "Media Production", label: "الإنتاج المرئي" },
  { id: "UI/UX Design", name: "UI/UX Design", label: "تصميم الواجهات" },
];

const StellarCardGallerySingle = lazy(() => import("@/components/ui/3d-image-gallery"));

async function fetchPortfolioData(): Promise<PortfolioItem[]> {
  try {
    const res = await fetch('/api/portfolio', { 
      next: { revalidate: 1800 } 
    });
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    return data;
  } catch {
    return staticPortfolioData;
  }
}

export default function WorkPage() {
  const containerRef = useGsapReveal();
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);
  const [portfolioData, setPortfolioData] = useState<PortfolioItem[]>(staticPortfolioData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPortfolioData()
      .then(setPortfolioData)
      .catch(() => setPortfolioData(staticPortfolioData))
      .finally(() => setLoading(false));
  }, []);

  const filteredItems = activeCategory === "الكل" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeCategory);

  const categories = staticCategories;

  return (
    <main className="relative min-h-screen bg-[#08090E]" dir="rtl" ref={containerRef as any}>
      <div className="grid-overlay" />
      <div className="fixed top-[10%] -left-64 w-[600px] h-[600px] bg-[#5B5EFF]/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[10%] -right-64 w-[600px] h-[600px] bg-[#3A3DC8]/5 rounded-full blur-[140px] pointer-events-none z-0" />
      
      <Navbar />

      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="/category/Screenshot 2026-04-21 134241.png"
        bgImageSrc="/category/Screenshot 2026-04-21 134338.png"
        title="أعمالنا الإبداعية"
        date="Digital Excellence"
        scrollToExpand="اسحب للأسفل لاستكشاف عالمنا"
        textBlend
      >
        <div className="text-center space-y-6">
          <Badge>معرض الأعمال Portfolio</Badge>
          <h2 className="text-4xl md:text-6xl font-black text-[#F0F1FF]">
            أعمالنا تتحدث <br />
            عن <span className="text-[#5B5EFF]">إبداعنا</span>
          </h2>
          <p className="text-[#9496C0] text-xl max-w-2xl mx-auto leading-relaxed">
            استعرض نخبة من مشاريعنا في تطوير البرمجيات، التسويق الطبي، والإنتاج المرئي.
          </p>
        </div>
      </ScrollExpandMedia>

      <section className="pb-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex overflow-x-auto pb-4 mb-12 gap-4 no-scrollbar justify-start md:justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-bold transition-all flex-shrink-0 border",
                activeCategory === category.id
                  ? "bg-[#5B5EFF] text-white border-[#5B5EFF] shadow-lg shadow-[#5B5EFF]/20"
                  : "bg-white/5 text-[#9496C0] border-white/10 hover:border-[#5B5EFF]/50"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {loading ? (
                Array(6).fill(0).map((_, i) => (
                  <div key={i} className={`h-[400px] skeleton-glass rounded-3xl ${i % 3 === 0 ? 'md:col-span-2' : ''}`} />
                ))
              ) : (
                filteredItems.map((item) => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className={`${item.featured && activeCategory === "الكل" ? 'md:col-span-2 lg:col-span-2' : ''}`}
                  >
                    <GlassCard className="group overflow-hidden p-0 h-full flex flex-col border-white/5 hover:border-[#5B5EFF]/50 transition-all duration-500 cursor-zoom-in"
                      onClick={() => setSelectedImage({src: item.image, alt: item.title})}
                    >
                      <div className={`relative w-full overflow-hidden ${item.featured && activeCategory === "الكل" ? 'h-[400px]' : 'h-[300px]'}`}>
                        <Image 
                          src={item.image} 
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#08090E] via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-6 right-6">
                           <div className="flex items-center gap-2 bg-[#5B5EFF] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
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
                              onClick={(e) => e.stopPropagation()}
                            >
                              زيارة المشروع <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-[#9496C0] text-xs font-bold uppercase tracking-tighter">ZTYX Studio</span>
                          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#9496C0] group-hover:text-[#5B5EFF] transition-colors">
                             <Layout size={14} />
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Lightbox 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        src={selectedImage?.src || ""} 
        alt={selectedImage?.alt || ""}
      />

      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center">
             <Badge>Future of Portfolio</Badge>
             <h2 className="text-4xl md:text-6xl font-black text-[#F0F1FF] mt-4">استكشف كوننا <span className="text-[#5B5EFF]">الرقمي</span></h2>
          </div>
          <Suspense fallback={
            <div className="h-[500px] md:h-[600px] rounded-[40px] bg-white/5 animate-pulse flex items-center justify-center">
              <span className="text-[#9496C0]">جاري التحميل...</span>
            </div>
          }>
            <StellarCardGallerySingle />
          </Suspense>
        </div>
      </section>

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
"use client";

import { cn } from "@/lib/utils";

import React from 'react';
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Image from 'next/image';
import { ExternalLink, Camera, Layout, Palette, Globe, Filter } from 'lucide-react';
import { Lightbox } from "@/components/ui/Lightbox";
import { motion, AnimatePresence } from "framer-motion";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import StellarCardGallerySingle from "@/components/ui/3d-image-gallery";

import { portfolioData, categories } from "@/constants/portfolio";

export default function WorkPage() {
  const containerRef = useGsapReveal();
  const [activeCategory, setActiveCategory] = React.useState("الكل");
  const [selectedImage, setSelectedImage] = React.useState<{src: string, alt: string} | null>(null);

  const filteredItems = activeCategory === "الكل" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeCategory);

  return (
    <main className="relative min-h-screen bg-[#08090E]" dir="rtl" ref={containerRef as any}>
      <div className="grid-overlay" />
      
      {/* Background Orbs */}
      <div className="fixed top-[10%] -left-64 w-[600px] h-[600px] bg-[#5B5EFF]/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[10%] -right-64 w-[600px] h-[600px] bg-[#3A3DC8]/5 rounded-full blur-[140px] pointer-events-none z-0" />
      
      <Navbar />

      {/* Hero Section - Scroll Expand */}
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="/category/Screenshot 2026-04-21 134241.png"
        bgImageSrc="/category/Gemini_Generated_Image_j67acfj67acfj67a copy.png"
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
            استعرض نخبة من مشاريعنا في تطوير البرمجيات، التسويق الطبي، والإنتاج المرئي التي ساعدت عملاءنا في الوصول للقمة.
          </p>
        </div>
      </ScrollExpandMedia>

      {/* Filter Tabs */}
      <section className="pb-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex overflow-x-auto pb-4 mb-12 gap-4 no-scrollbar justify-start md:justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-bold transition-all flex-shrink-0 border",
                activeCategory === category
                  ? "bg-[#5B5EFF] text-white border-[#5B5EFF] shadow-lg shadow-[#5B5EFF]/20"
                  : "bg-white/5 text-[#9496C0] border-white/10 hover:border-[#5B5EFF]/50"
              )}
            >
              {category === "الكل" ? "جميع الأعمال" : category}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, i) => (
                <motion.div 
                  key={item.title}
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
              ))}
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

      {/* 3D Gallery Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center">
             <Badge>Future of Portfolio</Badge>
             <h2 className="text-4xl md:text-6xl font-black text-[#F0F1FF] mt-4">استكشف كوننا <span className="text-[#5B5EFF]">الرقمي</span></h2>
          </div>
          <StellarCardGallerySingle />
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

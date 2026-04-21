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
import { ExternalLink, Camera, Layout, Palette, Globe, Filter } from 'lucide-react';
import { Lightbox } from "@/components/ui/Lightbox";
import { motion, AnimatePresence } from "framer-motion";

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

const categories = ["الكل", "Software Development", "Medical Marketing", "Graphic Design", "Media Production", "UI/UX Design"];

export default function WorkPage() {
  const containerRef = useGsapReveal();
  const [activeCategory, setActiveCategory] = React.useState("الكل");
  const [selectedImage, setSelectedImage] = React.useState<{src: string, alt: string} | null>(null);

  const filteredItems = activeCategory === "الكل" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <main className="relative min-h-screen bg-[#08090E]" dir="rtl" ref={containerRef as any}>
      <div className="grid-overlay" />
      
      {/* Background Orbs */}
      <div className="fixed top-[10%] -left-64 w-[600px] h-[600px] bg-[#5B5EFF]/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[10%] -right-64 w-[600px] h-[600px] bg-[#3A3DC8]/5 rounded-full blur-[140px] pointer-events-none z-0" />
      
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

      {/* Filter Tabs */}
      <section className="pb-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                activeCategory === cat 
                ? "bg-[#5B5EFF] text-white border-[#5B5EFF] shadow-[0_10px_20px_rgba(91,94,255,0.3)]" 
                : "bg-white/5 text-[#9496C0] border-white/10 hover:border-[#5B5EFF]/50"
              }`}
            >
              {cat === "الكل" ? "جميع الأعمال" : cat}
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

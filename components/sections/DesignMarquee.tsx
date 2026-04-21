"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Lightbox } from "@/components/ui/Lightbox";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

const designs = [
  "/category/Screenshot 2026-04-21 134241.png",
  "/category/Logo-Raeei.jpg",
  "/category/iPhone 12 Pro 6.1_ Mockup Front View-1.png",
  "/category/Screenshot 2026-04-21 133648.png",
  "/category/Screenshot 2026-04-21 133756.png",
  "/category/Screenshot 2026-04-21 133810.png",
  "/category/جامعه.png",
  "/category/Screenshot 2026-04-21 134012.png",
];

export default function DesignMarquee() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 relative overflow-hidden bg-[#08090E]">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-right">
        <Badge>Creative Showcase</Badge>
        <SectionHeader 
          title="لمساتنا الإبداعية" 
          subtitle="تصفح بعض تصاميمنا التي تجمع بين الفن والهوية الطبية القوية."
        />
      </div>

      <div className="flex flex-col gap-8">
        {/* Row 1: Left to Right */}
        <div className="flex overflow-hidden group">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-6 whitespace-nowrap px-3"
          >
            {[...designs, ...designs].map((src, i) => (
              <div
                key={i}
                className="relative w-[300px] md:w-[450px] aspect-[4/3] rounded-[32px] overflow-hidden border border-white/10 cursor-zoom-in group/item"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt="ZTYX Design"
                  fill
                  className="object-cover transition-transform duration-700 group-hover/item:scale-110"
                />
                <div className="absolute inset-0 bg-[#5B5EFF]/20 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white font-bold text-sm">
                      انقر للتكبير
                   </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex overflow-hidden group">
          <motion.div
            animate={{ x: [-1920, 0] }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-6 whitespace-nowrap px-3"
          >
            {[...designs.reverse(), ...designs].map((src, i) => (
              <div
                key={i}
                className="relative w-[300px] md:w-[450px] aspect-[4/3] rounded-[32px] overflow-hidden border border-white/10 cursor-zoom-in group/item"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt="ZTYX Design"
                  fill
                  className="object-cover transition-transform duration-700 group-hover/item:scale-110"
                />
                <div className="absolute inset-0 bg-[#5B5EFF]/20 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white font-bold text-sm">
                      انقر للتكبير
                   </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <Lightbox 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        src={selectedImage || ""} 
        alt="ZTYX Design Detail"
      />
    </section>
  );
}

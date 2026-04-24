"use client";

import React from 'react';
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CategoryCoursePage({ params }: { params: { categoryId: string } }) {
  return (
    <main className="relative min-h-screen bg-[#08090E]" dir="rtl">
      <div className="grid-overlay" />
      
      {/* Background Orbs */}
      <div className="fixed top-[10%] -left-64 w-[600px] h-[600px] bg-[#5B5EFF]/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[10%] -right-64 w-[600px] h-[600px] bg-[#3A3DC8]/5 rounded-full blur-[140px] pointer-events-none z-0" />
      
      <Navbar />

      <section className="relative pt-40 pb-20 px-6 z-10 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="max-w-3xl mx-auto w-full text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-12 border-[#5B5EFF]/20 bg-[#5B5EFF]/5 flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-[#5B5EFF]/10 flex items-center justify-center">
                <Clock className="w-10 h-10 text-[#5B5EFF] animate-pulse" />
              </div>
              
              <Badge>قريباً</Badge>
              
              <h1 className="text-4xl md:text-5xl font-black text-[#F0F1FF]">
                محتوى الكورس قيد <span className="text-[#5B5EFF]">التجهيز</span>
              </h1>
              
              <p className="text-[#9496C0] text-lg max-w-xl mx-auto">
                نعمل حالياً على إعداد محتوى تدريبي متميز لهذا القسم ({params.categoryId}). سيتم إضافته قريباً!
              </p>
              
              <Link href="/learn" className="mt-8 flex items-center gap-2 text-[#5B5EFF] hover:text-white transition-colors font-bold">
                <ArrowRight className="w-5 h-5" />
                العودة إلى صفحة التعلم
              </Link>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
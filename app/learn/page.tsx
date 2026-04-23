"use client";

import React from 'react';
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import Link from 'next/link';
import { motion } from "framer-motion";
import { BookOpen, Code, Megaphone, Video, Search, Laptop, Sparkles } from 'lucide-react';

const categories = [
  {
    id: "marketing",
    title: "التسويق الرقمي",
    description: "تعلم أحدث استراتيجيات التسويق الرقمي، إدارة الحملات، وتحليل البيانات.",
    icon: <Megaphone className="w-8 h-8 text-[#5B5EFF]" />,
    coursesCount: 12
  },
  {
    id: "development",
    title: "تطوير البرمجيات",
    description: "مسارات متكاملة في تطوير الويب، التطبيقات، والبرمجيات المتقدمة.",
    icon: <Code className="w-8 h-8 text-[#5B5EFF]" />,
    coursesCount: 8
  },
  {
    id: "design",
    title: "التصميم وتجربة المستخدم",
    description: "احترف تصميم واجهات المستخدم، تجربة المستخدم، والتصميم الجرافيكي.",
    icon: <Laptop className="w-8 h-8 text-[#5B5EFF]" />,
    coursesCount: 15
  },
  {
    id: "video",
    title: "المونتاج وصناعة المحتوى",
    description: "تعلم صناعة الفيديو، المونتاج الاحترافي، وإنتاج المحتوى المرئي.",
    icon: <Video className="w-8 h-8 text-[#5B5EFF]" />,
    coursesCount: 10
  },
  {
    id: "seo",
    title: "تحسين محركات البحث",
    description: "تصدر نتائج البحث وتعلم تقنيات السيو (SEO) الحديثة.",
    icon: <Search className="w-8 h-8 text-[#5B5EFF]" />,
    coursesCount: 6
  },
  {
    id: "ai",
    title: "الذكاء الاصطناعي",
    description: "اكتشف كيف توظف أدوات الذكاء الاصطناعي لزيادة الإنتاجية والابتكار.",
    icon: <Sparkles className="w-8 h-8 text-[#5B5EFF]" />,
    coursesCount: 4
  }
];

export default function LearnPage() {
  return (
    <main className="relative min-h-screen bg-[#08090E]" dir="rtl">
      <div className="grid-overlay" />
      
      {/* Background Orbs */}
      <div className="fixed top-[10%] -left-64 w-[600px] h-[600px] bg-[#5B5EFF]/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[10%] -right-64 w-[600px] h-[600px] bg-[#3A3DC8]/5 rounded-full blur-[140px] pointer-events-none z-0" />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-16 px-6 z-10">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-6"
          >
            <Badge className="bg-[#5B5EFF]/10 text-[#5B5EFF] border-[#5B5EFF]/20 px-4 py-2 text-sm">
              أكاديمية ZTYX
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-[#F0F1FF] tracking-tighter">
              استثمر في <span className="text-[#5B5EFF]">مهاراتك</span>
            </h1>
            <p className="text-[#9496C0] text-xl max-w-2xl mx-auto leading-relaxed">
              انطلق في رحلة التعلم مع أقوى الدورات التدريبية المصممة بعناية لمساعدتك على احتراف مجالك وتطوير مسارك المهني.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured AI Course */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex items-center gap-4">
             <div className="w-2 h-8 bg-[#5B5EFF] rounded-full" />
             <h2 className="text-3xl font-bold text-white">أحدث الإصدارات</h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassCard className="p-8 md:p-12 border-[#5B5EFF]/30 bg-gradient-to-r from-[#5B5EFF]/10 to-transparent flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#5B5EFF]/10 rounded-full blur-[80px] -z-10" />
              
              <div className="space-y-6 flex-1 relative z-10">
                <Badge className="bg-[#5B5EFF] text-white border-transparent w-max px-4 py-1.5 text-sm">
                  كورس مميز 🌟
                </Badge>
                <h2 className="text-3xl md:text-5xl font-black text-[#F0F1FF] leading-tight">
                  التحدث مع الغباء الاصطناعي بذكاء
                </h2>
                <p className="text-[#9496C0] text-lg max-w-xl">
                  كورس شامل يعلمك فن هندسة الأوامر (Prompt Engineering) وكيفية التعامل مع أدوات الذكاء الاصطناعي باحترافية للوصول لأفضل النتائج في عملك.
                </p>
                <a 
                  href="/ai-course.html" 
                  className="inline-flex items-center justify-center h-14 px-8 rounded-xl font-bold text-lg bg-[#5B5EFF] text-white hover:bg-[#5B5EFF]/90 transition-all shadow-lg shadow-[#5B5EFF]/25 hover:shadow-[#5B5EFF]/40 hover:-translate-y-1"
                >
                  ابدأ الكورس الآن
                </a>
              </div>
              
              <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 relative flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-full border border-white/10 group">
                 <div className="absolute inset-0 rounded-full border-2 border-[#5B5EFF]/50 border-dashed animate-[spin_10s_linear_infinite]" />
                 <Sparkles className="w-20 h-20 md:w-28 md:h-28 text-[#5B5EFF] group-hover:scale-110 transition-transform duration-500" />
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-6 relative z-10 bg-white/[0.02] border-t border-white/5 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col items-center text-center space-y-4">
             <h2 className="text-3xl md:text-4xl font-black text-white">تصفح مسارات التعلم</h2>
             <p className="text-[#9496C0] max-w-2xl">اختر المجال الذي ترغب في احترافه وابدأ رحلتك معنا من خلال مجموعة من أفضل الكورسات المصممة للسوق العربي.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/learn/${category.id}`}>
                  <GlassCard className="h-full flex flex-col p-8 group hover:border-[#5B5EFF]/50 transition-all duration-300 cursor-pointer relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#5B5EFF]/5 rounded-bl-[100px] -z-10 group-hover:bg-[#5B5EFF]/10 transition-colors" />
                    
                    <div className="mb-6 w-16 h-16 rounded-2xl bg-[#5B5EFF]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#F0F1FF] mb-3 group-hover:text-[#5B5EFF] transition-colors">
                      {category.title}
                    </h3>
                    
                    <p className="text-[#9496C0] flex-grow leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#5B5EFF]">
                      <BookOpen className="w-4 h-4" />
                      <span>{category.coursesCount} دورات تدريبية</span>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

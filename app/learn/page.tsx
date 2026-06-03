"use client";

import React, { useState, useEffect } from 'react';
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, Code, Megaphone, Video, Search, Laptop, Sparkles,
  X, CheckCircle2, Clock, Users, Tag, ChevronRight, Loader2,
  AlertCircle, Copy, MessageCircle
} from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────
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

const pythonTopics = [
  "Python Basics",
  "Conditions & Logic",
  "Loops",
  "Functions",
  "Debugging",
  "Final Project",
];

// ─── Python Course Widget ──────────────────────────────────────────────────────
function PythonCourseWidget() {
  const [seatsRemaining, setSeatsRemaining] = useState<number>(20);

  React.useEffect(() => {
    fetch("/api/seats")
      .then((r) => r.json())
      .then((d) => { if (typeof d.remaining === "number") setSeatsRemaining(d.remaining); })
      .catch(() => {});
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <GlassCard
          className="p-8 md:p-10 relative overflow-hidden"
          style={{
            border: "1px solid rgba(255,212,59,0.2)",
            background: "linear-gradient(135deg, rgba(255,212,59,0.04) 0%, rgba(91,94,255,0.06) 100%)",
          } as React.CSSProperties}
        >
          <div className="absolute -bottom-6 -left-4 text-[120px] opacity-[0.06] select-none pointer-events-none leading-none">🐍</div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD43B]/40 to-transparent" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
            {/* Left */}
            <div className="flex-1 space-y-5 text-right" dir="rtl">
              <div className="flex flex-wrap gap-2 justify-start">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: "rgba(255,212,59,0.15)", color: "#FFD43B", border: "1px solid rgba(255,212,59,0.3)" }}>
                  🐍 كورس جديد
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold animate-pulse"
                  style={{ background: "rgba(239,68,68,0.15)", color: "#F87171", border: "1px solid rgba(239,68,68,0.3)" }}>
                  🔥 متبقي {seatsRemaining} مقعد فقط
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: "rgba(74,222,128,0.15)", color: "#4ADE80", border: "1px solid rgba(74,222,128,0.3)" }}>
                  ✂️ خصم 50%
                </span>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-black text-[#F0F1FF] leading-tight mb-2">
                  دبلومة{" "}
                  <span className="text-transparent bg-clip-text"
                    style={{ backgroundImage: "linear-gradient(90deg, #FFD43B, #5B5EFF)" }}>
                    Python
                  </span>
                </h2>
                <p className="text-[#9496C0] text-base max-w-lg leading-relaxed mb-3">
                  ادخل عالم البرمجة من الصفر مع دبلومة Python المصممة خصيصًا لتخرّجك محترفاً جاهزاً للسوق.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 justify-start">
                {pythonTopics.map((topic) => (
                  <span key={topic}
                    className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg font-medium"
                    style={{ background: "rgba(91,94,255,0.1)", color: "#9496C0", border: "1px solid rgba(91,94,255,0.15)" }}>
                    <CheckCircle2 className="w-3 h-3 text-[#5B5EFF]" />
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: CTA */}
            <div className="flex flex-col items-center md:items-end gap-4 shrink-0">
              <Link
                href="/learn/python-diploma"
                id="python-course-book-btn"
                className="group relative h-14 px-8 rounded-2xl font-bold text-lg flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #FFD43B 0%, #F59E0B 100%)",
                  boxShadow: "0 4px 24px rgba(255,212,59,0.35)",
                  color: "#0D0E1A",
                }}
              >
                <span className="relative z-10 font-black text-[#0D0E1A]">🐍 احجز الكورس الآن</span>
                <ChevronRight className="w-5 h-5 relative z-10 text-[#0D0E1A] group-hover:-translate-x-1 transition-transform rotate-180" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(135deg, #FFE566 0%, #FFD43B 100%)" }} />
              </Link>
              <p className="text-xs text-[#9496C0] text-center">
                ⚡ متبقي <strong className="text-[#FFD43B]">{seatsRemaining} مقعد</strong> بخصم{" "}
                <strong className="text-[#4ADE80]">50%</strong>
              </p>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function LearnPage() {
  return (
    <main className="relative min-h-screen bg-[#08090E]" dir="rtl">
      <div className="grid-overlay" />
      <div className="fixed top-[10%] -left-64 w-[600px] h-[600px] bg-[#5B5EFF]/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[10%] -right-64 w-[600px] h-[600px] bg-[#3A3DC8]/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <Navbar />

      {/* Hero */}
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

      {/* Python Course Widget */}
      <section className="py-6 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex items-center gap-4">
            <div className="w-2 h-8 rounded-full" style={{ background: "linear-gradient(180deg, #FFD43B, #5B5EFF)" }} />
            <h2 className="text-3xl font-bold text-white">🐍 دبلومة Python</h2>
          </div>
          <PythonCourseWidget />
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

"use client";

import React, { useState } from 'react';
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Code, Megaphone, Video, Search, Laptop, Sparkles, X, CheckCircle2, Clock, Users, Tag, ChevronRight, Loader2, AlertCircle } from 'lucide-react';

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

// ─── Python Course Modal ──────────────────────────────────────────────────────
function PythonCourseModal({ onClose, onBooked }: { onClose: () => void; onBooked: () => void }) {
  const [step, setStep] = useState<"details" | "form" | "success">("details");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [seatsRemaining, setSeatsRemaining] = useState<number | null>(null);

  // Fetch live seat count when modal opens
  React.useEffect(() => {
    fetch("/api/seats")
      .then((r) => r.json())
      .then((d) => setSeatsRemaining(d.remaining))
      .catch(() => setSeatsRemaining(null));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      setError("يرجى ملء جميع الحقول المطلوبة");
      return;
    }
    setLoading(true);
    try {
      // 1. Submit contact form
      const contactRes = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: "حجز دبلومة Python - ZTYX Company",
          message: `طلب حجز في دبلومة Python\nالاسم: ${form.name}\nالإيميل: ${form.email}\nالهاتف: ${form.phone}`,
        }),
      });
      if (!contactRes.ok) throw new Error("submission failed");

      // 2. Decrement seat count atomically in DB
      const seatRes = await fetch("/api/seats", { method: "POST" });
      if (seatRes.ok) {
        const { remaining } = await seatRes.json();
        setSeatsRemaining(remaining);
        onBooked(); // notify parent to update the widget counter
      }

      setStep("success");
    } catch {
      setError("حدث خطأ أثناء الإرسال، يرجى المحاولة مجدداً.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
      />

      {/* Modal panel */}
      <motion.div
        key="modal"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: "spring", damping: 22, stiffness: 260 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
      >
        <div
          className="relative w-full max-w-lg pointer-events-auto rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0D0E1A 0%, #111228 100%)",
            border: "1px solid rgba(91,94,255,0.3)",
            boxShadow: "0 0 80px rgba(91,94,255,0.2), 0 30px 60px rgba(0,0,0,0.5)",
          }}
        >
          {/* Glow top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-1 bg-gradient-to-r from-transparent via-[#5B5EFF] to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 text-[#9496C0] hover:text-white transition-colors z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-8">
            {step === "details" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFD43B]/20 to-[#5B5EFF]/20 flex items-center justify-center text-2xl">
                    🐍
                  </div>
                  <div>
                    <p className="text-xs text-[#5B5EFF] font-semibold uppercase tracking-widest">ZTYX Company</p>
                    <h2 className="text-xl font-black text-white">دبلومة Python</h2>
                  </div>
                </div>

                <p className="text-[#9496C0] text-sm leading-relaxed mb-6">
                  دبلومة Python من ZTYX Company مصممة خصيصًا للطلاب الذين يريدون دخول عالم التكنولوجيا والبرمجة. من خلال الدبلومة ستتعلم:
                </p>

                {/* Topics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {pythonTopics.map((topic) => (
                    <div key={topic} className="flex items-center gap-2 text-sm text-[#F0F1FF]">
                      <CheckCircle2 className="w-4 h-4 text-[#5B5EFF] flex-shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>

                {/* Stats row */}
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-2 text-xs text-[#9496C0]">
                    <Users className="w-4 h-4 text-[#FFD43B]" />
                    <span>
                      متبقي{" "}
                      <strong className="text-[#FFD43B]">
                        {seatsRemaining !== null ? seatsRemaining : "..."}
                      </strong>{" "}
                      مقعد فقط
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#9496C0]">
                    <Tag className="w-4 h-4 text-[#4ADE80]" />
                    <span>خصم <strong className="text-[#4ADE80]">50%</strong> لفترة محدودة</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#9496C0]">
                    <Clock className="w-4 h-4 text-[#9496C0]" />
                    <span>عرض ينتهي قريباً</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-8 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                  <span className="text-3xl font-black text-white">اشترك الآن</span>
                  <div className="flex flex-col">
                    <span className="text-xs text-[#9496C0] line-through">السعر الأصلي</span>
                    <span className="text-sm font-bold text-[#4ADE80]">خصم 50% — عرض محدود!</span>
                  </div>
                </div>

                <button
                  onClick={() => setStep("form")}
                  className="w-full h-14 rounded-2xl font-bold text-lg text-white flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(91,94,255,0.4)]"
                  style={{
                    background: "linear-gradient(135deg, #5B5EFF 0%, #7B7EFF 100%)",
                    boxShadow: "0 4px 20px rgba(91,94,255,0.3)",
                  }}
                >
                  التسجيل الآن
                  <ChevronRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}

            {step === "form" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="mb-6">
                  <button
                    onClick={() => setStep("details")}
                    className="text-[#9496C0] hover:text-white text-sm flex items-center gap-1 mb-4 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 rotate-180" />
                    رجوع
                  </button>
                  <h2 className="text-2xl font-black text-white mb-1">بياناتك الشخصية</h2>
                  <p className="text-[#9496C0] text-sm">سنتواصل معك لتأكيد الحجز خلال 24 ساعة</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="text-xs text-[#9496C0] mb-1.5 block font-medium">الاسم بالكامل *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="أدخل اسمك الكامل"
                      className="w-full h-12 px-4 rounded-xl text-white placeholder-[#5a5c7a] text-sm outline-none transition-all focus:border-[#5B5EFF]"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#5B5EFF")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs text-[#9496C0] mb-1.5 block font-medium">البريد الإلكتروني *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className="w-full h-12 px-4 rounded-xl text-white placeholder-[#5a5c7a] text-sm outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#5B5EFF")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-xs text-[#9496C0] mb-1.5 block font-medium">رقم الهاتف *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="01xxxxxxxxx"
                      className="w-full h-12 px-4 rounded-xl text-white placeholder-[#5a5c7a] text-sm outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#5B5EFF")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-14 rounded-2xl font-bold text-lg text-white flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    style={{
                      background: "linear-gradient(135deg, #5B5EFF 0%, #7B7EFF 100%)",
                      boxShadow: "0 4px 20px rgba(91,94,255,0.3)",
                    }}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        جارٍ الإرسال...
                      </>
                    ) : (
                      <>
                        تأكيد الحجز
                        <CheckCircle2 className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            )}

            {step === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 rounded-full bg-[#4ADE80]/10 border border-[#4ADE80]/30 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-[#4ADE80]" />
                </div>
                <h2 className="text-2xl font-black text-white mb-3">تم الحجز بنجاح! 🎉</h2>
                <p className="text-[#9496C0] text-sm leading-relaxed mb-6">
                  شكراً لك! سيتواصل معك فريق ZTYX خلال 24 ساعة لتأكيد تفاصيل الحجز في دبلومة Python.
                </p>
                <button
                  onClick={onClose}
                  className="h-12 px-8 rounded-xl font-bold text-sm text-white transition-all hover:bg-white/10"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  إغلاق
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Python Course Widget ─────────────────────────────────────────────────────
function PythonCourseWidget() {
  const [modalOpen, setModalOpen] = useState(false);
  const [seatsRemaining, setSeatsRemaining] = useState<number>(20);

  // Fetch live seat count when component mounts
  React.useEffect(() => {
    fetch("/api/seats")
      .then((r) => r.json())
      .then((d) => { if (typeof d.remaining === "number") setSeatsRemaining(d.remaining); })
      .catch(() => {});
  }, []);

  // Called by modal after a successful booking
  const handleBooked = () => {
    setSeatsRemaining((prev) => Math.max(0, prev - 1));
  };

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
          {/* Background snake emoji blurred */}
          <div className="absolute -bottom-6 -left-4 text-[120px] opacity-[0.06] select-none pointer-events-none leading-none">🐍</div>

          {/* Top glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD43B]/40 to-transparent" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
            {/* Left: Info */}
            <div className="flex-1 space-y-5">
              {/* Badges row */}
              <div className="flex flex-wrap gap-2">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: "rgba(255,212,59,0.15)", color: "#FFD43B", border: "1px solid rgba(255,212,59,0.3)" }}
                >
                  🐍 كورس جديد
                </span>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold animate-pulse"
                  style={{ background: "rgba(239,68,68,0.15)", color: "#F87171", border: "1px solid rgba(239,68,68,0.3)" }}
                >
                  🔥 متبقي {seatsRemaining} مقعد فقط
                </span>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: "rgba(74,222,128,0.15)", color: "#4ADE80", border: "1px solid rgba(74,222,128,0.3)" }}
                >
                  ✂️ خصم 50%
                </span>
              </div>

              {/* Title */}
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-[#F0F1FF] leading-tight mb-2">
                  دبلومة{" "}
                  <span
                    className="text-transparent bg-clip-text"
                    style={{ backgroundImage: "linear-gradient(90deg, #FFD43B, #5B5EFF)" }}
                  >
                    Python
                  </span>
                </h2>
                <p className="text-[#9496C0] text-base max-w-lg leading-relaxed">
                  ادخل عالم البرمجة من الصفر مع دبلومة Python المصممة خصيصًا لتخرّجك محترفاً جاهزاً للسوق.
                </p>
              </div>

              {/* Topics mini-grid */}
              <div className="flex flex-wrap gap-2">
                {pythonTopics.map((topic) => (
                  <span
                    key={topic}
                    className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg font-medium"
                    style={{ background: "rgba(91,94,255,0.1)", color: "#9496C0", border: "1px solid rgba(91,94,255,0.15)" }}
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#5B5EFF]" />
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: CTA */}
            <div className="flex flex-col items-center md:items-end gap-4 shrink-0">
              <button
                id="python-course-book-btn"
                onClick={() => setModalOpen(true)}
                className="group relative h-14 px-8 rounded-2xl font-bold text-lg text-white flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #FFD43B 0%, #F59E0B 100%)",
                  boxShadow: "0 4px 24px rgba(255,212,59,0.35)",
                  color: "#0D0E1A",
                }}
              >
                <span className="relative z-10 font-black text-[#0D0E1A]">🐍 احجز الكورس الآن</span>
                <ChevronRight className="w-5 h-5 relative z-10 text-[#0D0E1A] group-hover:translate-x-1 transition-transform" />
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(135deg, #FFE566 0%, #FFD43B 100%)" }} />
              </button>
              <p className="text-xs text-[#9496C0] text-center">
                ⚡ متبقي <strong className="text-[#FFD43B]">{seatsRemaining} مقعد</strong> بخصم{" "}
                <strong className="text-[#4ADE80]">50%</strong>
              </p>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Modal */}
      {modalOpen && (
        <PythonCourseModal
          onClose={() => setModalOpen(false)}
          onBooked={handleBooked}
        />
      )}
    </>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
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

      {/* ── Python Course Widget ── */}
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

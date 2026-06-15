"use client";

import React, { useState, useEffect } from 'react';
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { useForm } from '@formspree/react';
import {
  CheckCircle2, Clock, Users, Tag, ChevronRight, Loader2,
  AlertCircle, Copy, MessageCircle
} from 'lucide-react';
import Link from 'next/link';

const mrcodeTopics = [
  "أساسيات البرمجة",
  "الشروط والمنطق",
  "الحلقات التكرارية (Loops)",
  "المتغيرات وأنواع البيانات",
  "بناء المشاريع العملية",
  "التفكير الخوارزمي",
];

const inputStyle = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
};
const inputClass =
  "w-full h-12 px-4 rounded-xl text-white placeholder-[#5a5c7a] text-sm outline-none transition-all focus:border-[#2D5BFF]";

export default function MrCodeFoundationPage() {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState<"details" | "form" | "success">("details");
  const [validationError, setValidationError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [localForm, setLocalForm] = useState({
    name: "",
    phone: "",
    school: "",
    grade: "",
    age: "",
    referral: "",
    policyAccepted: false,
  });
  const [copied, setCopied] = useState<string | null>(null);

  const [fsState, fsSubmit] = useForm("xeewqebn"); // Reusing the same form endpoint for ZTYX

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (fsState.succeeded) {
      setIsSubmitting(false);
      setStep("success");
    }
  }, [fsState.succeeded]);

  useEffect(() => {
    if (fsState.errors) {
      setIsSubmitting(false);
    }
  }, [fsState.errors]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    setLocalForm({
      ...localForm,
      [target.name]:
        target.type === "checkbox" ? target.checked : target.value,
    });
    setValidationError("");
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!localForm.name || !localForm.phone || !localForm.school) {
      setValidationError("يرجى ملء الحقول المطلوبة: الاسم، الهاتف، اسم المدرسة");
      return;
    }
    if (!localForm.policyAccepted) {
      setValidationError("يرجى الموافقة على السياسات قبل المتابعة");
      return;
    }

    setIsSubmitting(true);
    setValidationError("");

    try {
      await fsSubmit({
        name: localForm.name,
        phone: localForm.phone,
        school: localForm.school,
        grade: localForm.grade || "—",
        age: localForm.age || "—",
        referral: localForm.referral || "—",
        subject: "حجز كورس التأسيس - Mr. Code",
        message: [
          "📌 طلب حجز كورس التأسيس (Mr. Code)",
          `الاسم: ${localForm.name}`,
          `الهاتف: ${localForm.phone}`,
          `المدرسة: ${localForm.school}`,
          localForm.grade ? `الصف: ${localForm.grade}` : null,
          localForm.age ? `العمر: ${localForm.age}` : null,
          localForm.referral ? `كيف عرفت عنا: ${localForm.referral}` : null,
        ]
          .filter(Boolean)
          .join("\n"),
      });
    } catch (err) {
      setIsSubmitting(false);
    }
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#08090E] flex flex-col relative" dir="rtl">
      {/* Background styling */}
      <div className="grid-overlay" />
      <div className="fixed top-[10%] -left-64 w-[600px] h-[600px] bg-[#2D5BFF]/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[10%] -right-64 w-[600px] h-[600px] bg-[#2D5BFF]/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <Navbar />

      <section className="flex-1 relative pt-32 pb-16 px-4 md:px-6 z-10 flex items-center justify-center">
        <div className="w-full max-w-2xl mx-auto">
          {/* Main Card */}
          <div
            className="w-full rounded-3xl overflow-hidden relative"
            style={{
              background: "linear-gradient(135deg, #0D0E1A 0%, #111228 100%)",
              border: "1px solid rgba(45,91,255,0.3)",
              boxShadow: "0 0 80px rgba(45,91,255,0.1), 0 30px 60px rgba(0,0,0,0.3)",
            }}
          >
            {/* Glow top line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-1 bg-gradient-to-r from-transparent via-[#2D5BFF] to-transparent" />

            <div className="p-6 md:p-10">
              
              {/* ── STEP: DETAILS ────────────────────────────────── */}
              {step === "details" && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  {/* Header with Mr. Code Logo */}
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src="/images/mr_code/LOGO.png" 
                      alt="Mr. Code Logo" 
                      className="w-20 object-contain rounded-xl"
                    />
                    <div>
                      <p className="text-xs text-[#2D5BFF] font-semibold uppercase tracking-widest mb-1">المهندس إسلام حمادة</p>
                      <h1 className="text-2xl md:text-3xl font-black text-white">كورس التأسيس الشامل</h1>
                    </div>
                  </div>

                  <p className="text-[#9496C0] text-sm md:text-base leading-relaxed mb-6">
                    كورس التأسيس مصمم خصيصاً لكل مبتدئ في البرمجة. تحت إشراف{" "}
                    <strong className="text-white font-bold text-base md:text-lg">المهندس إسلام حمادة (Mr. Code)</strong>، 
                    ستتعلم كيف يفكر المبرمجون، وتضع <strong className="text-white font-bold">أساساً متيناً</strong> 
                    يؤهلك لاحقاً لدراسة أي لغة برمجة باحترافية. 💻
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                     <img 
                      src="/images/mr_code/Gemini_Generated_Image_ (2).png" 
                      alt="Mr Code Class" 
                      className="rounded-2xl border border-white/10 w-full object-cover aspect-video"
                     />
                     <div className="flex flex-col justify-center gap-3">
                      {mrcodeTopics.map((topic) => (
                        <div key={topic} className="flex items-center gap-2 text-sm text-[#F0F1FF] bg-white/5 p-2 rounded-xl border border-white/5">
                          <CheckCircle2 className="w-4 h-4 text-[#2D5BFF] flex-shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                     </div>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10">
                    <div className="flex items-center gap-2 text-sm text-[#9496C0] bg-white/5 px-4 py-2 rounded-xl">
                      <Clock className="w-5 h-5 text-[#9496C0]" />
                      <span>تأسيس متكامل وبناء مشاريع عملية</span>
                    </div>
                  </div>

                  <div className="flex gap-4 flex-col-reverse sm:flex-row">
                    <Link
                      href="/learn"
                      className="h-16 px-8 rounded-2xl font-bold text-sm text-[#9496C0] flex items-center justify-center transition-all hover:text-white hover:bg-white/5 border border-white/10 hover:border-white/20"
                    >
                      تصفح الكورسات الأخرى
                    </Link>
                    <button
                      onClick={() => setStep("form")}
                      className="flex-1 h-16 rounded-2xl font-black text-xl text-white flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                      style={{
                        background: "linear-gradient(135deg, #2D5BFF 0%, #4D7BFF 100%)",
                        boxShadow: "0 8px 30px rgba(45,91,255,0.4)",
                      }}
                    >
                      احجز كورس التأسيس الآن
                      <ChevronRight className="w-6 h-6 font-black" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ── STEP: FORM ───────────────────────────────────── */}
              {step === "form" && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="mb-8">
                    <button
                      onClick={() => setStep("details")}
                      className="text-[#9496C0] hover:text-white text-sm flex items-center gap-1 mb-4 transition-colors w-fit"
                    >
                      <ChevronRight className="w-4 h-4 rotate-180" />
                      العودة للتفاصيل
                    </button>
                    <h2 className="text-2xl md:text-3xl font-black text-white mb-2">بياناتك الشخصية</h2>
                    <p className="text-[#9496C0] text-sm">سنتواصل معك لتأكيد الحجز خلال 24 ساعة. تأكد من صحة رقم الهاتف.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="text-sm text-[#9496C0] mb-2 block font-medium">الاسم بالكامل *</label>
                      <input
                        type="text" name="name" value={localForm.name} onChange={handleChange}
                        placeholder="أدخل اسمك الكامل"
                        className={inputClass} style={inputStyle}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-sm text-[#9496C0] mb-2 block font-medium">رقم الهاتف (الواتساب) *</label>
                      <input
                        type="tel" name="phone" value={localForm.phone} onChange={handleChange}
                        placeholder="01xxxxxxxxx"
                        className={inputClass} style={inputStyle}
                        dir="ltr"
                      />
                    </div>

                    {/* School */}
                    <div>
                      <label className="text-sm text-[#9496C0] mb-2 block font-medium">اسم المدرسة أو الجامعة *</label>
                      <input
                        type="text" name="school" value={localForm.school} onChange={handleChange}
                        placeholder="أين تدرس؟"
                        className={inputClass} style={inputStyle}
                      />
                    </div>

                    {/* Grade + Age */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-[#9496C0] mb-2 block font-medium">الصف الدراسي</label>
                        <input
                          type="text" name="grade" value={localForm.grade} onChange={handleChange}
                          placeholder="مثال: الأول الثانوي"
                          className={inputClass} style={inputStyle}
                        />
                      </div>
                      <div>
                        <label className="text-sm text-[#9496C0] mb-2 block font-medium">العمر</label>
                        <input
                          type="number" name="age" value={localForm.age} onChange={handleChange}
                          placeholder="مثال: 16" min={10} max={60}
                          className={inputClass} style={inputStyle}
                          dir="ltr"
                        />
                      </div>
                    </div>

                    {/* Referral */}
                    <div>
                      <label className="text-sm text-[#9496C0] mb-2 block font-medium">كيف عرفت عنا؟</label>
                      <select
                        name="referral" value={localForm.referral} onChange={handleChange}
                        className={`${inputClass} cursor-pointer`}
                        style={{ ...inputStyle, appearance: "none" }}
                      >
                        <option value="" style={{ background: "#111228" }}>اختر...</option>
                        <option value="Instagram" style={{ background: "#111228" }}>Instagram</option>
                        <option value="Facebook" style={{ background: "#111228" }}>Facebook</option>
                        <option value="TikTok" style={{ background: "#111228" }}>TikTok</option>
                        <option value="صديق أو معارف" style={{ background: "#111228" }}>صديق أو معارف</option>
                        <option value="بحث Google" style={{ background: "#111228" }}>بحث Google</option>
                        <option value="أخرى" style={{ background: "#111228" }}>أخرى</option>
                      </select>
                    </div>

                    {/* Policy checkbox */}
                    <label className="flex items-start gap-3 cursor-pointer group mt-4">
                      <div className="relative mt-1 flex-shrink-0">
                        <input
                          type="checkbox" name="policyAccepted"
                          checked={localForm.policyAccepted}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div
                          className="w-5 h-5 rounded-md flex items-center justify-center transition-all"
                          style={{
                            background: localForm.policyAccepted ? "#2D5BFF" : "rgba(255,255,255,0.05)",
                            border: `1px solid ${localForm.policyAccepted ? "#2D5BFF" : "rgba(255,255,255,0.15)"}`,
                          }}
                        >
                          {localForm.policyAccepted && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                        </div>
                      </div>
                      <span className="text-sm text-[#9496C0] leading-relaxed group-hover:text-white transition-colors">
                        أؤكد أنني سألتزم بجميع سياسات الكورس وأهدافه وسأبذل جهدي للتعلم والاستفادة القصوى.
                      </span>
                    </label>

                    {/* Validation error */}
                    {validationError && (
                      <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-4 mt-2">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        {validationError}
                      </div>
                    )}

                    {/* Formspree server errors */}
                    {fsState.errors && (
                      <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-4 mt-2">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        حدث خطأ أثناء الإرسال، يرجى المحاولة مجدداً.
                      </div>
                    )}

                    <div className="pt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting || fsState.submitting}
                        className="w-full h-16 rounded-2xl font-black text-xl text-white flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        style={{
                          background: "linear-gradient(135deg, #2D5BFF 0%, #4D7BFF 100%)",
                          boxShadow: "0 8px 30px rgba(45,91,255,0.4)",
                        }}
                      >
                        {isSubmitting || fsState.submitting ? (
                          <>
                            <Loader2 className="w-6 h-6 animate-spin" />
                            جارٍ تأكيد الحجز...
                          </>
                        ) : (
                          <>
                            تأكيد الحجز الآن
                            <CheckCircle2 className="w-6 h-6" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* ── STEP: SUCCESS ─────────────────────────────────── */}
              {step === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", damping: 20, stiffness: 240 }}
                  className="py-4 text-right"
                >
                  {/* Header */}
                  <div className="text-center mb-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: "spring", damping: 15 }}
                      className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{
                        background: "linear-gradient(135deg, rgba(45,91,255,0.15), rgba(45,91,255,0.05))",
                        border: "2px solid rgba(45,91,255,0.4)",
                        boxShadow: "0 0 40px rgba(45,91,255,0.2)",
                      }}
                    >
                      <CheckCircle2 className="w-12 h-12 text-[#2D5BFF]" />
                    </motion.div>
                    <h2 className="text-3xl font-black text-white mb-2">تم التسجيل بنجاح! 🎉</h2>
                    <p className="text-[#9496C0] text-base">
                      لقد استلمنا طلبك لكورس التأسيس (Mr. Code). خطوة واحدة متبقية ✅
                    </p>
                  </div>

                  {/* Payment methods list */}
                  <div className="space-y-3 mb-8">
                    <p className="text-white font-bold text-base mb-2">💳 الدفع من خلال:</p>
                    
                    {/* InstaPay */}
                    <div
                      className="flex items-center justify-between p-4 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <button
                        onClick={() => copyToClipboard("01068327720", "instapay")}
                        className="flex items-center gap-2 text-sm transition-colors hover:text-[#2D5BFF]"
                        style={{ color: copied === "instapay" ? "#4ADE80" : "#9496C0" }}
                        type="button"
                      >
                        {copied === "instapay" ? (
                          <><CheckCircle2 className="w-4 h-4 text-[#4ADE80]" /> تم النسخ</>
                        ) : (
                          <><Copy className="w-4 h-4" /> نسخ الرقم</>
                        )}
                      </button>
                      <div>
                        <p className="text-[#9496C0] text-sm mb-1">انستا بي (InstaPay)</p>
                        <p className="text-lg font-bold text-white font-mono mt-0.5 font-sans" dir="ltr">01068327720</p>
                      </div>
                    </div>

                    {/* Vodafone Cash */}
                    <div
                      className="flex items-center justify-between p-4 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <button
                        onClick={() => copyToClipboard("01016303706", "vodafone")}
                        className="flex items-center gap-2 text-sm transition-colors hover:text-[#2D5BFF]"
                        style={{ color: copied === "vodafone" ? "#4ADE80" : "#9496C0" }}
                        type="button"
                      >
                        {copied === "vodafone" ? (
                          <><CheckCircle2 className="w-4 h-4 text-[#4ADE80]" /> تم النسخ</>
                        ) : (
                          <><Copy className="w-4 h-4" /> نسخ الرقم</>
                        )}
                      </button>
                      <div>
                        <p className="text-[#9496C0] text-sm mb-1">فودافون كاش (Vodafone Cash)</p>
                        <p className="text-lg font-bold text-white font-mono mt-0.5 font-sans" dir="ltr">01016303706</p>
                      </div>
                    </div>

                    {/* Bank Account */}
                    <div
                      className="flex items-center justify-between p-4 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <button
                        onClick={() => copyToClipboard("3290001000026946", "bank")}
                        className="flex items-center gap-2 text-sm transition-colors hover:text-[#2D5BFF]"
                        style={{ color: copied === "bank" ? "#4ADE80" : "#9496C0" }}
                        type="button"
                      >
                        {copied === "bank" ? (
                          <><CheckCircle2 className="w-4 h-4 text-[#4ADE80]" /> تم النسخ</>
                        ) : (
                          <><Copy className="w-4 h-4" /> نسخ الرقم</>
                        )}
                      </button>
                      <div>
                        <p className="text-[#9496C0] text-sm mb-1">حساب بنكي</p>
                        <p className="text-lg font-bold text-white font-mono mt-0.5 font-sans" dir="ltr">3290001000026946</p>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp CTA banner */}
                  <div
                    className="rounded-2xl p-6 mb-6 text-right"
                    style={{
                      background: "linear-gradient(135deg, rgba(37,211,102,0.1) 0%, rgba(37,211,102,0.04) 100%)",
                      border: "1px solid rgba(37,211,102,0.3)",
                    }}
                  >
                    <p className="text-white font-bold text-base mb-2">
                      📸 أرسل صورة الدفع واضحة على
                    </p>
                    <p className="text-[#9496C0] text-sm mb-5">
                      بعد الدفع، أرسل صورة الإيصال لتأكيد مقعدك وحجز الكورس بشكل نهائي
                    </p>

                    {/* Phone number + copy */}
                    <div
                      className="flex items-center justify-between gap-3 px-5 py-4 rounded-xl mb-5"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      <button
                        onClick={() => copyToClipboard("01207416336", "whatsapp")}
                        className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#4ADE80]"
                        style={{ color: copied === "whatsapp" ? "#4ADE80" : "#9496C0" }}
                        type="button"
                      >
                        {copied === "whatsapp" ? (
                          <><CheckCircle2 className="w-5 h-5 text-[#4ADE80]" /> تم النسخ!</>
                        ) : (
                          <><Copy className="w-5 h-5 text-[#9496C0]" /> نسخ الرقم</>
                        )}
                      </button>
                      <p className="text-2xl font-black text-white font-mono tracking-widest font-sans" dir="ltr">01207416336</p>
                    </div>

                    {/* WhatsApp button */}
                    <a
                      href="https://wa.me/201207416336?text=السلام عليكم، أرسل صورة الدفع لتأكيد حجز كورس التأسيس مع المهندس إسلام حمادة"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 rounded-xl font-bold text-lg transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        background: "linear-gradient(135deg, #25D366 0%, #1da851 100%)",
                        boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
                        color: "#fff",
                        padding: "16px",
                      }}
                    >
                      <MessageCircle className="w-6 h-6" />
                      ابدأ المحادثة على واتساب
                    </a>
                  </div>

                  <Link
                    href="/"
                    className="w-full h-14 rounded-xl font-semibold text-base text-white bg-white/5 transition-all hover:bg-white/10 flex items-center justify-center"
                    style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    العودة للرئيسية
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

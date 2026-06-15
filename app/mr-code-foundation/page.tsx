"use client";

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useForm } from '@formspree/react';
import {
  CheckCircle2, ChevronRight, Loader2,
  AlertCircle, Copy, Globe, LogIn, Monitor, Smartphone, BookOpen
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const mrcodeTopics = [
  "أساسيات البرمجة",
  "الشروط والمنطق",
  "الحلقات التكرارية",
  "المتغيرات وأنواع البيانات",
  "بناء المشاريع العملية",
  "التفكير الخوارزمي",
];

const inputStyle = {
  background: "#F9FAFB",
  border: "1px solid #E5E7EB",
};
const inputClass =
  "w-full h-12 px-4 rounded-xl text-gray-900 placeholder-gray-400 text-sm outline-none transition-all focus:border-[#2D5BFF] focus:ring-2 focus:ring-[#2D5BFF]/20";

// --- Custom Header ---
function CustomHeader() {
  return (
    <header className="w-full h-20 bg-[#0D0E1A]/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50 px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {/* MR CODE Logo / Brand */}
        <div className="flex items-center gap-2">
          <div className="font-mono text-2xl font-black text-white tracking-tighter">
            MR <span className="text-[#2D5BFF]">{`{CODE}`}</span>
          </div>
          <div className="h-6 w-px bg-white/20 mx-2 hidden sm:block"></div>
          <span className="text-[#9496C0] text-sm hidden sm:block">م/ إسلام حمادة</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="text-[#9496C0] hover:text-white transition-colors">
          <Globe className="w-5 h-5" />
        </button>
        <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2 rounded-lg text-sm transition-all">
          <LogIn className="w-4 h-4" />
          <span>تسجيل الدخول</span>
        </button>
      </div>
    </header>
  );
}

// --- Custom Footer ---
function CustomFooter() {
  return (
    <footer className="w-full bg-[#0D0E1A] border-t border-white/5 py-8 mt-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-[#9496C0] text-sm">
          © {new Date().getFullYear()} Mr. Code - جميع الحقوق محفوظة
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-[#9496C0] hover:text-[#2D5BFF] transition-colors text-sm font-medium">واتساب الدعم: 01207416336</a>
          <Link href="/" className="text-[#9496C0] hover:text-white transition-colors text-sm">الموقع الرسمي للشركة</Link>
        </div>
      </div>
    </footer>
  );
}

// --- Background Pattern ---
function CircuitBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10 10 h 20 v 20 h 30 v -10 h 20" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            <circle cx="10" cy="10" r="2" fill="#FFFFFF" />
            <circle cx="80" cy="20" r="2" fill="#FFFFFF" />
            <path d="M40 50 v 20 h -20 v 20 h -10" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            <circle cx="40" cy="50" r="2" fill="#FFFFFF" />
            <circle cx="10" cy="90" r="2" fill="#FFFFFF" />
            <text x="50" y="80" fill="#FFFFFF" fontSize="8" fontFamily="monospace" opacity="0.5">console.log()</text>
            <text x="20" y="40" fill="#FFFFFF" fontSize="8" fontFamily="monospace" opacity="0.5">if(code) {`{`}</text>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
}

export default function MrCodeLandingPage() {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState<"form" | "success">("form");
  const [validationError, setValidationError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [localForm, setLocalForm] = useState({
    name: "",
    phone: "",
    school: "",
    grade: "",
    referral: "",
  });
  const [copied, setCopied] = useState<string | null>(null);

  const [fsState, fsSubmit] = useForm("xeewqebn");

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
      [target.name]: target.value,
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

    setIsSubmitting(true);
    setValidationError("");

    try {
      await fsSubmit({
        name: localForm.name,
        phone: localForm.phone,
        school: localForm.school,
        grade: localForm.grade || "—",
        referral: localForm.referral || "—",
        subject: "حجز كورس التأسيس البرمجي - Mr. Code",
        message: [
          "📌 طلب حجز كورس التأسيس (Mr. Code)",
          `الاسم: ${localForm.name}`,
          `الهاتف: ${localForm.phone}`,
          `المدرسة: ${localForm.school}`,
          localForm.grade ? `الصف: ${localForm.grade}` : null,
          localForm.referral ? `المرجع: ${localForm.referral}` : null,
        ].filter(Boolean).join("\n"),
      });
    } catch (err) {
      setIsSubmitting(false);
    }
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#04050A] flex flex-col relative font-sans" dir="rtl">
      <CircuitBackground />
      
      {/* Soft Glows */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-[#2D5BFF]/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-[#2D5BFF]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <CustomHeader />

      <div className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-6 z-10 py-12 md:py-20 flex flex-col gap-16">
        
        {/* ── HERO SECTION ── */}
        <section className="flex flex-col lg:flex-row items-center gap-12 justify-between">
          <div className="flex-1 space-y-6 text-center lg:text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2D5BFF]/30 bg-[#2D5BFF]/10 text-[#2D5BFF] text-sm font-bold mx-auto lg:mx-0"
            >
              <Monitor className="w-4 h-4" />
              الدفعة الجديدة متاحة الآن
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white leading-tight"
            >
              صفحة حجز <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#2D5BFF] to-[#8FA9FF]">
                كورس التأسيس البرمجي
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#9496C0] text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              انطلق في رحلتك نحو الاحتراف من الصفر. تعلم كيف يفكر المبرمجون، وابنِ أساساً قوياً يجعلك قادراً على دراسة أي لغة برمجة بثقة تامة.
            </motion.p>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
            >
              {mrcodeTopics.slice(0,4).map(topic => (
                <div key={topic} className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-[#2D5BFF]" />
                  {topic}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="flex-1 relative flex justify-center items-center h-[400px] w-full"
          >
             {/* Glowing Circle Profile */}
             <div className="relative z-20 w-64 h-64 md:w-80 md:h-80 rounded-full p-2"
                  style={{ background: "linear-gradient(135deg, #2D5BFF 0%, transparent 100%)", boxShadow: "0 0 80px rgba(45,91,255,0.4)" }}>
               <div className="w-full h-full rounded-full overflow-hidden bg-[#111228] border-4 border-[#04050A] relative">
                  <img 
                    src="/images/mr_code/PROFILE.png" 
                    alt="Mr Code - Islam Hamada" 
                    className="w-full h-full object-cover object-top"
                  />
               </div>
             </div>

             {/* Smartphone Mockup placeholder */}
             <div className="absolute top-10 -left-4 md:-left-10 w-32 h-64 bg-[#1A1C2E] border-4 border-[#2A2D4A] rounded-3xl shadow-2xl z-30 transform -rotate-6 hidden sm:block overflow-hidden">
               <div className="w-full h-full bg-gradient-to-b from-[#2D5BFF]/20 to-[#0D0E1A] p-2 flex flex-col items-center">
                 <div className="w-10 h-1 bg-[#2A2D4A] rounded-full mb-4"></div>
                 <div className="font-mono text-xs text-[#2D5BFF] font-bold mt-10">`{`<Code/>`}`</div>
                 <div className="w-3/4 h-2 bg-white/10 rounded-full mt-4"></div>
                 <div className="w-1/2 h-2 bg-white/10 rounded-full mt-2"></div>
               </div>
             </div>

             {/* Tablet Mockup placeholder */}
             <div className="absolute bottom-4 -right-4 md:-right-10 w-48 h-32 bg-[#1A1C2E] border-4 border-[#2A2D4A] rounded-xl shadow-2xl z-10 transform rotate-6 hidden sm:block overflow-hidden">
               <div className="w-full h-full bg-gradient-to-br from-[#2D5BFF]/10 to-[#0D0E1A] p-3">
                 <div className="w-full h-2 bg-white/10 rounded-full mb-2"></div>
                 <div className="w-full h-16 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-[#9496C0]" />
                 </div>
               </div>
             </div>
          </motion.div>
        </section>

        {/* ── PROFILE & BOOKING GRID ── */}
        <section id="booking-section" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Profile Card (About) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-[#0D0E1A] border border-[#2D5BFF]/20 rounded-3xl p-6 relative overflow-hidden"
            style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
          >
            <div className="absolute top-0 right-0 w-full h-32">
              <img src="/images/mr_code/COVER.png" alt="Cover" className="w-full h-full object-cover opacity-30 mix-blend-lighten" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E1A] to-transparent" />
            </div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full border-2 border-[#2D5BFF] overflow-hidden mb-4 bg-[#111228]">
                <img src="/images/mr_code/PROFILE.png" alt="Mr Code" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl font-black text-white mb-1 font-mono">Mr. Code</h3>
              <p className="text-[#9496C0] text-sm font-medium mb-4">م/ إسلام حمادة</p>
              
              <div className="w-full h-px bg-white/10 mb-4"></div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                مهندس برمجيات، خبير في الذكاء الاصطناعي، ورائد أعمال. مؤسس منصة CURE للرعاية الصحية، ومستشار تقني. حاصل على المركز الأول عالمياً في مسابقة (TSIAS) للعلوم والتكنولوجيا.
              </p>

              <div className="w-full flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm text-[#9496C0] bg-white/5 p-3 rounded-xl border border-white/5 justify-center">
                  <Monitor className="w-4 h-4 text-[#2D5BFF]" /> خبرة عملية 
                </div>
                <div className="flex items-center gap-3 text-sm text-[#9496C0] bg-white/5 p-3 rounded-xl border border-white/5 justify-center">
                  <BookOpen className="w-4 h-4 text-[#2D5BFF]" /> منهج تطبيقي
                </div>
              </div>
            </div>
          </motion.div>

          {/* Booking Form (White Card) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-white rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-2xl"
          >
            {step === "form" && (
              <div className="relative z-10">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">استمارة التسجيل</h2>
                  <p className="text-gray-500 text-sm">املأ بياناتك بدقة وسنتواصل معك لتأكيد الحجز فوراً.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="text-sm text-gray-700 mb-2 block font-bold">اسم الطالب *</label>
                      <input
                        type="text" name="name" value={localForm.name} onChange={handleChange}
                        placeholder="الاسم الرباعي"
                        className={inputClass} style={inputStyle}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-sm text-gray-700 mb-2 block font-bold">رقم الهاتف (الواتساب) *</label>
                      <input
                        type="tel" name="phone" value={localForm.phone} onChange={handleChange}
                        placeholder="01xxxxxxxxx"
                        className={inputClass} style={inputStyle}
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* School */}
                    <div>
                      <label className="text-sm text-gray-700 mb-2 block font-bold">المدرسة *</label>
                      <input
                        type="text" name="school" value={localForm.school} onChange={handleChange}
                        placeholder="اسم مدرستك الحالية"
                        className={inputClass} style={inputStyle}
                      />
                    </div>

                    {/* Grade */}
                    <div>
                      <label className="text-sm text-gray-700 mb-2 block font-bold">الصف الدراسي *</label>
                      <div className="relative">
                        <select
                          name="grade" value={localForm.grade} onChange={handleChange}
                          className={`${inputClass} cursor-pointer pr-10 appearance-none`}
                          style={inputStyle}
                        >
                          <option value="">اختر الصف الدراسي...</option>
                          <option value="الابتدائي">المرحلة الابتدائية</option>
                          <option value="الإعدادي">المرحلة الإعدادية</option>
                          <option value="الثانوي">المرحلة الثانوية</option>
                          <option value="الجامعة">المرحلة الجامعية</option>
                          <option value="خريج">خريج</option>
                        </select>
                        <ChevronRight className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Validation error */}
                  {validationError && (
                    <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3 mt-4">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      {validationError}
                    </div>
                  )}

                  {/* Formspree server errors */}
                  {fsState.errors && (
                    <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3 mt-4">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      حدث خطأ أثناء الإرسال، يرجى المحاولة مجدداً.
                    </div>
                  )}

                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting || fsState.submitting}
                      className="w-full h-16 rounded-2xl font-black text-xl text-white flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      style={{
                        background: "linear-gradient(135deg, #2D5BFF 0%, #1A3CBD 100%)",
                      }}
                    >
                      {isSubmitting || fsState.submitting ? (
                        <>
                          <Loader2 className="w-6 h-6 animate-spin" />
                          جارٍ المعالجة...
                        </>
                      ) : (
                        <>
                          تأكيد الحجز
                          <CheckCircle2 className="w-6 h-6" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {step === "success" && (
              <div className="py-8 text-center relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                  className="w-24 h-24 rounded-full bg-green-50 border-4 border-green-100 flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </motion.div>
                <h2 className="text-3xl font-black text-gray-900 mb-3">تم تسجيل طلبك بنجاح! 🎉</h2>
                <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                  لقد استلمنا بياناتك. يرجى إتمام الدفع عبر إحدى الطرق التالية وتأكيد الحجز معنا عبر الواتساب.
                </p>

                <div className="space-y-4 max-w-md mx-auto text-right">
                   <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50">
                      <button onClick={() => copyToClipboard("01068327720", "instapay")} className="text-[#2D5BFF] flex items-center gap-2 text-sm font-bold">
                        {copied === "instapay" ? "تم النسخ" : <><Copy className="w-4 h-4"/> نسخ</>}
                      </button>
                      <div>
                        <p className="text-gray-500 text-xs mb-1">انستا بي (InstaPay)</p>
                        <p className="font-mono text-gray-900 font-bold" dir="ltr">01068327720</p>
                      </div>
                   </div>

                   <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50">
                      <button onClick={() => copyToClipboard("01016303706", "vodafone")} className="text-[#2D5BFF] flex items-center gap-2 text-sm font-bold">
                        {copied === "vodafone" ? "تم النسخ" : <><Copy className="w-4 h-4"/> نسخ</>}
                      </button>
                      <div>
                        <p className="text-gray-500 text-xs mb-1">فودافون كاش</p>
                        <p className="font-mono text-gray-900 font-bold" dir="ltr">01016303706</p>
                      </div>
                   </div>

                   <a
                      href="https://wa.me/201207416336?text=السلام عليكم، أرسل صورة الدفع لتأكيد حجز كورس التأسيس مع Mr. Code"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 rounded-xl font-bold text-lg bg-[#25D366] text-white hover:bg-[#1da851] transition-all h-14 mt-6 shadow-lg shadow-[#25D366]/30"
                    >
                      أرسل إيصال الدفع عبر واتساب
                   </a>
                </div>
              </div>
            )}
            
            {/* White card decorative glowing corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#2D5BFF]/10 to-transparent pointer-events-none rounded-bl-full" />
          </motion.div>

        </section>

        {/* ── DETAILED ABOUT INSTRUCTOR ── */}
        <section className="bg-[#0D0E1A] border border-[#2D5BFF]/20 rounded-3xl p-8 md:p-12 relative overflow-hidden" style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2D5BFF]/5 rounded-full blur-[80px] -z-10" />
          
          <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
            <div className="w-3 h-12 bg-[#2D5BFF] rounded-full" />
            <div>
              <h2 className="text-3xl font-black text-white">عن المهندس إسلام حمادة</h2>
              <p className="text-[#9496C0] mt-1">خبير الذكاء الاصطناعي ورائد الأعمال</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Experience */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#2D5BFF]/10 border border-[#2D5BFF]/20 flex items-center justify-center mb-6">
                <Monitor className="w-6 h-6 text-[#2D5BFF]" />
              </div>
              <h3 className="text-xl font-bold text-white">خبرة الصناعة والقيادة</h3>
              <ul className="space-y-3 text-[#9496C0] text-sm leading-relaxed">
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#2D5BFF] shrink-0 mt-1" /> مؤسس ورئيس تنفيذي لـ CURE Healthcare المنصة الطبية الرائدة.</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#2D5BFF] shrink-0 mt-1" /> رئيس العمليات والموارد البشرية في Daem Network.</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#2D5BFF] shrink-0 mt-1" /> تطوير تطبيقات متقدمة مثل منصة Emdad لتوزيع الأدوية.</li>
              </ul>
            </div>

            {/* Training */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#2D5BFF]/10 border border-[#2D5BFF]/20 flex items-center justify-center mb-6">
                <BookOpen className="w-4 h-4 text-[#2D5BFF]" />
              </div>
              <h3 className="text-xl font-bold text-white">التدريب والتوجيه التقني</h3>
              <ul className="space-y-3 text-[#9496C0] text-sm leading-relaxed">
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#2D5BFF] shrink-0 mt-1" /> مدرب ذكاء اصطناعي وهندسة أوامر (Prompt Engineering) للمؤسسات والمدارس الدولية.</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#2D5BFF] shrink-0 mt-1" /> معيد وباحث متخصص في علوم الحاسب والخوارزميات (أكاديمية طيبة).</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#2D5BFF] shrink-0 mt-1" /> تدريب آلاف الطلاب على البرمجة، البحث العلمي، وريادة الأعمال.</li>
              </ul>
            </div>

            {/* Awards */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#2D5BFF]/10 border border-[#2D5BFF]/20 flex items-center justify-center mb-6">
                <Globe className="w-4 h-4 text-[#2D5BFF]" />
              </div>
              <h3 className="text-xl font-bold text-white">إنجازات وجوائز عالمية</h3>
              <ul className="space-y-3 text-[#9496C0] text-sm leading-relaxed">
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#2D5BFF] shrink-0 mt-1" /> المركز الأول عالمياً في معرض (TSIAS) للعلوم والتكنولوجيا (مشروع ESELA).</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#2D5BFF] shrink-0 mt-1" /> الميدالية الذهبية لجائزة المخترع الصغير من وزارة الثقافة المصرية.</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#2D5BFF] shrink-0 mt-1" /> المركز الأول على مستوى الجمهورية في مسابقات البحث العلمي بوزارة التربية والتعليم.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <CustomFooter />
    </main>
  );
}

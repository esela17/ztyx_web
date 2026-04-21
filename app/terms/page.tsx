"use client";

import React from 'react';
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function TermsPage() {
  const containerRef = useGsapReveal();

  return (
    <main className="relative min-h-screen bg-[#08090E]" dir="rtl" ref={containerRef as any}>
      <div className="grid-overlay" />
      <Navbar />
      <section className="pt-40 pb-20 px-6 relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-[#F0F1FF] mb-8 gsap-reveal">شروط الخدمة</h1>
        <div className="text-[#9496C0] space-y-6 gsap-reveal leading-relaxed">
          <p>باستخدامك لموقع زتكس (ZTYX)، فإنك توافق على الالتزام بالشروط والأحكام التالية.</p>
          <h2 className="text-xl font-bold text-[#F0F1FF]">1. شروط الاستخدام</h2>
          <p>يُسمح باستخدام الموقع للأغراض المشروعة فقط ووفقاً للقوانين المعمول بها.</p>
          <h2 className="text-xl font-bold text-[#F0F1FF]">2. الملكية الفكرية</h2>
          <p>جميع المحتويات الموجودة على هذا الموقع هي ملك لشركة زتكس ولا يجوز استخدامها دون إذن مسبق.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

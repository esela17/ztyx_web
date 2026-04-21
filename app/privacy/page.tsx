"use client";

import React from 'react';
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function PrivacyPage() {
  const containerRef = useGsapReveal();

  return (
    <main className="relative min-h-screen bg-[#08090E]" dir="rtl" ref={containerRef as any}>
      <div className="grid-overlay" />
      <Navbar />
      <section className="pt-40 pb-20 px-6 relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-[#F0F1FF] mb-8 gsap-reveal">سياسة الخصوصية</h1>
        <div className="text-[#9496C0] space-y-6 gsap-reveal leading-relaxed">
          <p>نحن في زتكس (ZTYX) نلتزم بحماية خصوصيتك وبياناتك. توضح هذه السياسة كيف نقوم بجمع واستخدام المعلومات الخاصة بك.</p>
          <h2 className="text-xl font-bold text-[#F0F1FF]">1. جمع المعلومات</h2>
          <p>نقوم بجمع المعلومات التي تقدمها لنا مباشرة عند استخدامك لنماذج الاتصال أو طلب الخدمات.</p>
          <h2 className="text-xl font-bold text-[#F0F1FF]">2. استخدام البيانات</h2>
          <p>نستخدم بياناتك للتواصل معك وتقديم الخدمات المطلوبة وتحسين تجربتك على موقعنا.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

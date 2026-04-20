"use client";

import React from 'react';
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const containerRef = useGsapReveal();

  return (
    <main className="relative min-h-screen bg-[#08090E]" dir="rtl" ref={containerRef as any}>
      <div className="grid-overlay" />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="gsap-reveal">
            <Badge>تواصل معنا</Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#F0F1FF] gsap-reveal">
            نحن هنا <span className="text-[#5B5EFF]">لدعم نجاحك</span>
          </h1>
          <p className="text-[#9496C0] text-xl gsap-reveal leading-relaxed">
            هل لديك مشروع؟ استفسار؟ أو ترغب في استشارة مجانية؟ فريقنا بانتظار تواصلك.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          
          {/* Form Side */}
          <div className="gsap-reveal">
             <GlassCard className="p-8 md:p-12 border-[#5B5EFF]/20 bg-[#0D0F1A]/80">
                <form action="https://formspree.io/f/xwvanovg" method="POST" className="space-y-6">
                   <div className="space-y-2 text-right">
                      <label className="text-sm font-bold text-[#F0F1FF]">الاسم الكامل</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        placeholder="أدخل اسمك هنا" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[#F0F1FF] focus:border-[#5B5EFF] focus:outline-none transition-all"
                      />
                   </div>
                   <div className="space-y-2 text-right">
                      <label className="text-sm font-bold text-[#F0F1FF]">رقم الهاتف</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        placeholder="01xxxxxxxxx" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[#F0F1FF] focus:border-[#5B5EFF] focus:outline-none transition-all font-mono"
                        dir="ltr"
                      />
                   </div>
                   <div className="space-y-2 text-right">
                      <label className="text-sm font-bold text-[#F0F1FF]">رسالتك</label>
                      <textarea 
                        name="message"
                        required
                        rows={5}
                        placeholder="كيف يمكننا مساعدتك؟" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[#F0F1FF] focus:border-[#5B5EFF] focus:outline-none transition-all resize-none"
                      />
                   </div>
                   <Button type="submit" size="xl" className="w-full shadow-[0_20px_40px_rgba(91,94,255,0.2)]">
                      <Send className="w-5 h-5 ml-2" />
                      إرسال الرسالة الآن
                   </Button>
                </form>
             </GlassCard>
          </div>

          {/* Info Side */}
          <div className="space-y-12">
             <div className="space-y-8">
                <h2 className="text-3xl font-black text-[#F0F1FF] gsap-reveal">معلومات التواصل</h2>
                <div className="space-y-6">
                   {[
                     { icon: <Phone />, label: "اتصل بنا مباشرة", val: "01207416336", sub: "متاحون من 9 صباحاً إلى 6 مساءً" },
                     { icon: <Mail />, label: "راسلنا عبر الإيميل", val: "eslam.hamada@cureztyx.com", sub: "نرد خلال أقل من 24 ساعة" },
                     { icon: <MapPin />, label: "مقرنا في مصر", val: "مبني وزارة الاتصالات كرياتيفا، الفيوم", sub: "أهلاً بك في أي وقت" },
                   ].map((item, i) => (
                     <div key={i} className="flex gap-6 gsap-reveal group">
                        <div className="w-14 h-14 rounded-2xl bg-[#5B5EFF]/10 flex items-center justify-center text-[#5B5EFF] group-hover:bg-[#5B5EFF] group-hover:text-white transition-all">
                           {item.icon}
                        </div>
                        <div className="text-right">
                           <div className="text-sm font-bold text-[#9496C0] mb-1">{item.label}</div>
                           <div className="text-lg font-black text-[#F0F1FF] mb-1">{item.val}</div>
                           <div className="text-xs text-[#5B5EFF]">{item.sub}</div>
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             {/* Friendly Support visual placeholder */}
             <div className="gsap-reveal pt-8">
                <GlassCard className="p-8 border-[#5B5EFF]/10 bg-gradient-to-br from-[#5B5EFF]/5 to-transparent flex items-center gap-6">
                   <div className="w-20 h-20 rounded-full bg-[#5B5EFF]/20 flex items-center justify-center">
                      <MessageSquare size={40} className="text-[#5B5EFF]" />
                   </div>
                   <div className="text-right">
                      <h4 className="text-lg font-bold text-[#F0F1FF] mb-1">دعم فني بشري 100%</h4>
                      <p className="text-[#9496C0] text-sm">لا نعتمد على الردود الآلية، ستتحدث مع خبير حقيقي يفهم احتياجاتك الطبية.</p>
                   </div>
                </GlassCard>
             </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-6 relative z-10">
         <div className="max-w-7xl mx-auto">
            <div className="gsap-reveal h-[450px] w-full bg-white/5 rounded-[40px] border border-white/10 overflow-hidden relative flex items-center justify-center">
               <div className="absolute inset-0 bg-radial from-[#5B5EFF]/5 to-transparent" />
               <MapPin size={64} className="text-[#5B5EFF]/20 animate-bounce" />
               <div className="absolute bottom-8 text-[#9496C0] font-bold text-center">
                  خريطة المقر - قريباً <br />
                  <span className="text-xs opacity-50">نعمل على إضافة الخريطة التفاعلية</span>
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="pb-24 px-6 relative z-10 text-center">
         <div className="max-w-4xl mx-auto space-y-8 gsap-reveal">
            <h2 className="text-4xl font-black text-[#F0F1FF]">لنبدأ العمل على نجاحك</h2>
            <Button size="xl" variant="glass">طلب عرض سعر مخصص</Button>
         </div>
      </section>

      <Footer />
    </main>
  );
}

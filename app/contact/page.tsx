"use client";

import React, { useState } from 'react';
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(3, "الاسم يجب أن يكون 3 أحرف على الأقل"),
  phone: z.string().regex(/^01[0125][0-9]{8}$/, "يرجى إدخال رقم هاتف مصري صحيح"),
  message: z.string().min(10, "الرسالة يجب أن تكون 10 أحرف على الأقل"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const containerRef = useGsapReveal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xwvanovg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                {isSuccess ? (
                  <div className="text-center space-y-6 py-12 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-2xl font-black text-[#F0F1FF]">تم إرسال رسالتك بنجاح!</h3>
                    <p className="text-[#9496C0]">سيتواصل معك أحد خبرائنا في أقرب وقت ممكن.</p>
                    <Button variant="glass" onClick={() => setIsSuccess(false)}>إرسال رسالة أخرى</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2 text-right">
                        <label className="text-sm font-bold text-[#F0F1FF]">الاسم الكامل</label>
                        <input 
                          {...register("name")}
                          type="text" 
                          placeholder="أدخل اسمك هنا" 
                          className={cn(
                            "w-full bg-white/5 border rounded-2xl px-6 py-4 text-[#F0F1FF] focus:border-[#5B5EFF] focus:outline-none transition-all",
                            errors.name ? "border-red-500/50" : "border-white/10"
                          )}
                        />
                        {errors.name && <p className="text-xs text-red-400 font-bold">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2 text-right">
                        <label className="text-sm font-bold text-[#F0F1FF]">رقم الهاتف</label>
                        <input 
                          {...register("phone")}
                          type="tel" 
                          placeholder="01xxxxxxxxx" 
                          className={cn(
                            "w-full bg-white/5 border rounded-2xl px-6 py-4 text-[#F0F1FF] focus:border-[#5B5EFF] focus:outline-none transition-all font-mono",
                            errors.phone ? "border-red-500/50" : "border-white/10"
                          )}
                          dir="ltr"
                        />
                        {errors.phone && <p className="text-xs text-red-400 font-bold">{errors.phone.message}</p>}
                    </div>
                    <div className="space-y-2 text-right">
                        <label className="text-sm font-bold text-[#F0F1FF]">رسالتك</label>
                        <textarea 
                          {...register("message")}
                          rows={5}
                          placeholder="كيف يمكننا مساعدتك؟" 
                          className={cn(
                            "w-full bg-white/5 border rounded-2xl px-6 py-4 text-[#F0F1FF] focus:border-[#5B5EFF] focus:outline-none transition-all resize-none",
                            errors.message ? "border-red-500/50" : "border-white/10"
                          )}
                        />
                        {errors.message && <p className="text-xs text-red-400 font-bold">{errors.message.message}</p>}
                    </div>
                    <Button 
                      type="submit" 
                      size="xl" 
                      disabled={isSubmitting}
                      className="w-full shadow-[0_20px_40px_rgba(91,94,255,0.2)] disabled:opacity-50"
                    >
                        {isSubmitting ? "جاري الإرسال..." : (
                          <>
                            <Send className="w-5 h-5 ml-2" />
                            إرسال الرسالة الآن
                          </>
                        )}
                    </Button>
                  </form>
                )}
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

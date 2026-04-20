"use client";

import React from 'react';
import { Phone, Mail, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

import Link from 'next/link';

import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 px-6 relative z-10 overflow-hidden bg-gradient-to-t from-[#5B5EFF]/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        



        {/* Contact Info */}
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-[#9496C0]/10">
          <div className="md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl font-black tracking-tighter text-[#F0F1FF] font-en">ZTYX</span>
                <div className="w-2.5 h-2.5 bg-[#5B5EFF] rounded-[2px] -skew-x-12" />
             </div>
             <p className="text-[#9496C0] text-sm leading-relaxed mb-6">
                البعد الرابع للرعاية الصحية. نجمع بين التكنولوجيا والتسويق لنصنع مستقبل الطب.
             </p>
             <div className="flex gap-4">
                <Instagram className="text-[#9496C0] hover:text-[#5B5EFF] cursor-pointer w-5 h-5 transition-colors" />
                <Twitter className="text-[#9496C0] hover:text-[#5B5EFF] cursor-pointer w-5 h-5 transition-colors" />
                <Linkedin className="text-[#9496C0] hover:text-[#5B5EFF] cursor-pointer w-5 h-5 transition-colors" />
             </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[#F0F1FF] font-bold mb-2">روابط سريعة</h4>
            <Link href="/#why-us" className="text-[#9496C0] text-sm hover:text-[#5B5EFF] transition-colors">عن الشركة</Link>
            <Link href="/#services" className="text-[#9496C0] text-sm hover:text-[#5B5EFF] transition-colors">خدماتنا</Link>
            <Link href="/#work" className="text-[#9496C0] text-sm hover:text-[#5B5EFF] transition-colors">قصص النجاح</Link>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-[#F0F1FF] font-bold mb-2">اتصل بنا</h4>
            <div className="flex items-center gap-3 text-[#9496C0] text-sm hover:text-[#5B5EFF] transition-colors">
               <Phone className="w-4 h-4 text-[#5B5EFF]" />
               <a href="tel:+201207416336" dir="ltr">01207416336</a>
            </div>
            <div className="flex items-center gap-3 text-[#9496C0] text-sm hover:text-[#5B5EFF] transition-colors">
               <Mail className="w-4 h-4 text-[#5B5EFF]" />
               <a href="mailto:eslam.hamada@cureztyx.com">eslam.hamada@cureztyx.com</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[#F0F1FF] font-bold mb-2">الموقع</h4>
            <div className="flex items-start gap-3 text-[#9496C0] text-sm">
               <MapPin className="w-4 h-4 text-[#5B5EFF] mt-1" />
               <span>مبني وزارة الاتصالات كرياتيفا<br />الفيوم، مصر</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-[#9496C0] text-[10px] uppercase tracking-widest font-bold">
              © 2026 ZTYX. ALL RIGHTS RESERVED.
           </p>
           <div className="flex gap-8 text-[10px] text-[#9496C0] font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-[#5B5EFF]">Privacy Policy</a>
              <a href="#" className="hover:text-[#5B5EFF]">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
}

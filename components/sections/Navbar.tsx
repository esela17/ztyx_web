"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from 'next/link';
import { ChevronDown, Menu, X as CloseIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const serviceLinks = [
  { name: "التسويق الطبي", href: "/medical-marketing" },
  { name: "تطوير البرمجيات", href: "/development" },
  { name: "الإنتاج المرئي", href: "/media-production" },
  { name: "تحسين نتائج البحث SEO", href: "/seo" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-500",
      scrolled ? "py-4" : "py-8"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-500",
        scrolled ? "glass shadow-2xl shadow-[#5B5EFF]/5" : "bg-transparent border-transparent"
      )}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 relative z-[60]">
          <span className="text-2xl font-black tracking-tighter text-[#F0F1FF] font-en">ZTYX</span>
          <div className="w-2.5 h-2.5 bg-[#5B5EFF] rounded-[2px] -skew-x-12 animate-pulse" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <div
            className="relative group"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <Link
              href="/#services"
              className="text-sm font-semibold text-[#9496C0] hover:text-[#5B5EFF] transition-all flex items-center gap-1"
            >
              الخدمات
              <ChevronDown className={cn("w-4 h-4 transition-transform", showServices && "rotate-180")} />
            </Link>

            {/* Dropdown */}
            <div className={cn(
              "absolute top-full right-0 mt-2 w-64 glass rounded-2xl p-4 transition-all duration-300 origin-top shadow-3xl border-[#5B5EFF]/10",
              showServices ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            )}>
              <div className="flex flex-col gap-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="text-sm text-[#9496C0] hover:text-[#5B5EFF] hover:bg-white/5 p-3 rounded-xl transition-all"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {[
            { name: 'أعمالنا', href: '/work' },
            { name: 'تعلم', href: '/learn' },
            { name: 'الأسعار', href: '/pricing' },
            { name: 'الأسئلة الشائعة', href: '/faq' },
            { name: 'اتصل بنا', href: '/contact' },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-[#9496C0] hover:text-[#5B5EFF] transition-all hover:tracking-wider"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle & CTA */}
        <div className="flex items-center gap-4 relative z-[60]">
          <div className="hidden sm:block">
            <Button size="md" href="/contact">
              تواصل معنا
            </Button>
          </div>

          <button
            className="md:hidden w-12 h-12 flex items-center justify-center glass rounded-2xl text-[#F0F1FF] touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-[#08090E]/95 backdrop-blur-xl md:hidden flex flex-col p-8 pt-32"
          >
            <div className="flex flex-col gap-6 overflow-y-auto">
              <div className="space-y-4">
                <p className="text-[#5B5EFF] text-[10px] font-bold uppercase tracking-widest px-4">خدماتنا</p>
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-black text-[#F0F1FF] hover:text-[#5B5EFF] transition-all px-4 block"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <div className="w-full h-px bg-white/5 my-4" />

              <div className="space-y-4">
                {[
                  { name: 'أعمالنا', href: '/work' },
                  { name: 'تعلم', href: '/learn' },
                  { name: 'الأسعار', href: '/pricing' },
                  { name: 'الأسئلة الشائعة', href: '/faq' },
                  { name: 'اتصل بنا', href: '/contact' },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-black text-[#F0F1FF] hover:text-[#5B5EFF] transition-all px-4 block"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-12">
                <Button size="xl" className="w-full" href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  احجز استشارتك الآن
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}



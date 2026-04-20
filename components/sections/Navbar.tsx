"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tighter text-[#F0F1FF] font-en">ZTYX</span>
          <div className="w-2.5 h-2.5 bg-[#5B5EFF] rounded-[2px] -skew-x-12 animate-pulse" />
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'الخدمات', href: '/#services' },
            { name: 'أعمالنا', href: '/#work' },
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

        {/* CTA */}
        <Button size="md">
          تواصل معنا
        </Button>
      </div>
    </nav>
  );
}



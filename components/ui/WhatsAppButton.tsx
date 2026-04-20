"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from "@/lib/utils";

export const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/201068327720" 
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-8 left-8 z-[100] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-300 group"
      )}
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
      <MessageCircle size={32} className="text-white relative z-10" />
      
      {/* Tooltip */}
      <div className="absolute left-20 bg-white text-[#08090E] px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
        تحدث معنا عبر واتساب
      </div>
    </a>
  );
};

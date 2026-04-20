"use client";

import React from 'react';
import { cn } from "@/lib/utils";
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'glass' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children: React.ReactNode;
  href?: string;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  href,
  ...props 
}: ButtonProps) => {
  const baseStyles = "rounded-2xl font-bold transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-[#5B5EFF] text-white hover:bg-[#3A3DC8] shadow-xl shadow-[#5B5EFF]/25",
    glass: "glass border-[#9496C0]/20 text-[#F0F1FF] hover:bg-white/5",
    outline: "border border-[#5B5EFF]/40 text-[#F0F1FF] hover:bg-[#5B5EFF]/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg",
  };

  const content = (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)} 
      {...props}
    >
      {children}
    </button>
  );

  if (href) {
    return <Link href={href} className="contents">{content}</Link>;
  }

  return content;
};

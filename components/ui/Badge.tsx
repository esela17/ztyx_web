"use client";

import React from 'react';
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  showDot?: boolean;
}

export const Badge = ({ children, className, showDot = true }: BadgeProps) => {
  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-[#5B5EFF]/30 mb-6",
      className
    )}>
      {showDot && <div className="w-2 h-2 bg-[#5B5EFF] rounded-full animate-pulse" />}
      <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#5B5EFF] font-en uppercase">
        {children}
      </span>
    </div>
  );
};

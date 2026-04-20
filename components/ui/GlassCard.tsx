"use client";

import React from 'react';
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'blue';
}

export const GlassCard = ({ children, className, variant = 'default' }: GlassCardProps) => {
  return (
    <div className={cn(
      "glass p-6 rounded-2xl",
      variant === 'blue' && "glass-blue",
      className
    )}>
      {children}
    </div>
  );
};

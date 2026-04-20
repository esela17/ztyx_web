"use client";

import React from 'react';
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'right' | 'left';
  className?: string;
}

export const SectionHeader = ({ title, subtitle, align = 'center', className }: SectionHeaderProps) => {
  const alignment = {
    center: "text-center",
    right: "text-right",
    left: "text-left",
  };

  return (
    <div className={cn("mb-16", alignment[align], className)}>
      <h2 className="text-3xl md:text-5xl font-black text-[#F0F1FF] mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-[#9496C0] text-lg">{subtitle}</p>}
    </div>
  );
};

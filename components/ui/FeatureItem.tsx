"use client";

import React from 'react';
import { cn } from "@/lib/utils";

interface FeatureItemProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  className?: string;
  align?: 'right' | 'left';
}

export const FeatureItem = ({ title, desc, icon, className, align = 'right' }: FeatureItemProps) => {
  return (
    <div className={cn(
      "flex items-start gap-6 group",
      align === 'right' ? "flex-row-reverse text-right" : "flex-row text-left",
      className
    )}>
      <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#5B5EFF]/10 flex items-center justify-center border border-[#5B5EFF]/20 group-hover:bg-[#5B5EFF] group-hover:text-white transition-all">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-[#F0F1FF] mb-2 group-hover:text-[#5B5EFF] transition-colors">
          {title}
        </h3>
        <p className="text-[#9496C0] text-sm leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

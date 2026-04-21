"use client";

import React, { useRef, useState } from 'react';
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'blue';
}

export const GlassCard = ({ children, className, variant = 'default', ...props }: GlassCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "glass p-6 rounded-2xl relative overflow-hidden group transition-all duration-500",
        variant === 'blue' && "glass-blue",
        className
      )}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(91, 94, 255, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onClick?: () => void;
}

const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionItemProps) => {
  return (
    <div className={cn(
      "border-b border-[#9496C0]/10 transition-all duration-500",
      isOpen ? "bg-[#5B5EFF]/5 rounded-2xl border-transparent px-4 mb-4" : "px-0"
    )}>
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-right group"
      >
        <span className={cn(
          "text-lg font-bold transition-colors",
          isOpen ? "text-[#5B5EFF]" : "text-[#F0F1FF] group-hover:text-[#5B5EFF]"
        )}>
          {question}
        </span>
        <ChevronDown className={cn(
          "w-5 h-5 text-[#9496C0] transition-transform duration-500",
          isOpen ? "rotate-180 text-[#5B5EFF]" : ""
        )} />
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-500",
        isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
      )}>
        <p className="text-[#9496C0] leading-relaxed text-sm">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const Accordion = ({ items }: { items: { q: string, a: string }[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-2">
      {items.map((item, i) => (
        <AccordionItem 
          key={i} 
          question={item.q} 
          answer={item.a} 
          isOpen={openIndex === i}
          onClick={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
};

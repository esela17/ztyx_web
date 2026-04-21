"use client";

import React, { useState } from 'react';
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { TrendingUp, Users, DollarSign, Calculator } from 'lucide-react';

export const ROICalculator = () => {
  const [budget, setBudget] = useState(5000);
  const [patientValue, setPatientValue] = useState(500);
  
  // Estimates based on industry averages for ZTYX
  const estimatedPatients = Math.floor(budget / 150); // $150 average CPA
  const estimatedRevenue = estimatedPatients * patientValue;
  const roi = ((estimatedRevenue - budget) / budget) * 100;

  return (
    <GlassCard className="p-8 md:p-12 border-[#5B5EFF]/30 bg-[#0D0F1A]/80">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-xl bg-[#5B5EFF]/20 flex items-center justify-center text-[#5B5EFF]">
          <Calculator size={24} />
        </div>
        <h3 className="text-2xl font-black text-[#F0F1FF]">حاسبة العائد على الاستثمار (ROI)</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm font-bold text-[#9496C0]">
              <span>الميزانية الإعلانية الشهرية</span>
              <span className="text-[#F0F1FF] text-lg font-mono">${budget.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="1000" 
              max="50000" 
              step="500"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full accent-[#5B5EFF] h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm font-bold text-[#9496C0]">
              <span>قيمة المريض الواحد (LTV)</span>
              <span className="text-[#F0F1FF] text-lg font-mono">${patientValue.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="100" 
              max="5000" 
              step="100"
              value={patientValue}
              onChange={(e) => setPatientValue(Number(e.target.value))}
              className="w-full accent-[#5B5EFF] h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div className="p-4 bg-[#5B5EFF]/5 rounded-2xl border border-[#5B5EFF]/10 text-xs text-[#9496C0] leading-relaxed">
            * هذه التقديرات مبنية على متوسط نتائج عيادات زتكس. النتائج الفعلية قد تختلف بناءً على التخصص والموقع الجغرافي.
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center space-y-2">
            <Users className="w-6 h-6 text-[#5B5EFF] mx-auto mb-2" />
            <div className="text-3xl font-black text-[#F0F1FF]">{estimatedPatients}</div>
            <div className="text-[10px] text-[#9496C0] font-bold uppercase tracking-widest">مرضى جدد متوقعين</div>
          </div>
          
          <div className="p-6 rounded-3xl bg-[#5B5EFF]/10 border border-[#5B5EFF]/20 text-center space-y-2">
            <TrendingUp className="w-6 h-6 text-[#5B5EFF] mx-auto mb-2" />
            <div className="text-3xl font-black text-[#F0F1FF]">{roi.toFixed(0)}%</div>
            <div className="text-[10px] text-[#9496C0] font-bold uppercase tracking-widest">العائد على الاستثمار</div>
          </div>

          <div className="col-span-2 p-8 rounded-3xl bg-gradient-to-br from-[#5B5EFF]/20 to-transparent border border-[#5B5EFF]/30 text-center space-y-2">
            <DollarSign className="w-8 h-8 text-[#5B5EFF] mx-auto mb-2" />
            <div className="text-[10px] text-[#9496C0] font-bold uppercase tracking-widest mb-1">إجمالي العوائد المتوقعة</div>
            <div className="text-4xl font-black text-[#F0F1FF] font-mono">${estimatedRevenue.toLocaleString()}</div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <Button size="xl" href="/contact" className="shadow-[0_20px_40px_rgba(91,94,255,0.3)]">
          احصل على خطة تسويقية مجانية لعيادتك
        </Button>
      </div>
    </GlassCard>
  );
};

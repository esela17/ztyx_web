"use client"; // نحتاج هذا لأننا سنتعامل مع المتصفح والـ DOM

import { useEffect, useRef, useState } from "react";

/**
 * خطاف مخصص لمراقبة العنصر وإضافة كلاس عند ظهوره في الشاشة
 * مفيد لعمل تأثيرات الظهور (Reveal Animations)
 */
export function useReveal(threshold = 0.15) {
  // مرجع لربطه بالعنصر الذي نريد مراقبته
  const ref = useRef<HTMLElement | null>(null);
  // حالة تخزن ما إذا كان العنصر ظاهراً على الشاشة أم لا
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // التأكد من أن الكود يعمل في المتصفح فقط
    if (typeof window === "undefined" || !ref.current) return;

    const observerOptions = {
      root: null,
      threshold: threshold, // نسبة ظهور العنصر المطلوبة لتفعيل التأثير
      rootMargin: "0px 0px -30px 0px",
    };

    // إنشاء المراقب
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // إيقاف المراقبة بعد أول ظهور لتحسين الأداء
        if (ref.current) observer.unobserve(ref.current);
      }
    }, observerOptions);

    // بدء مراقبة العنصر
    observer.observe(ref.current);

    // تنظيف الموارد عند تدمير المكون
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return { ref, isVisible };
}

"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export function useGsapReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(() => {
    if (!containerRef.current) return;

    // Refresh ScrollTrigger to ensure positions are correct after navigation
    ScrollTrigger.refresh();

    const elements = containerRef.current.querySelectorAll(".gsap-reveal");
    
    elements.forEach((el, index) => {
      gsap.fromTo(el, 
        { 
          opacity: 0, 
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
            // Ensure trigger is recalculated if layout changes
            invalidateOnRefresh: true,
          }
        }
      );
    });

    // Cleanup triggers for this scope on unmount
    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.vars.trigger === containerRef.current || containerRef.current?.contains(t.vars.trigger as Node)) {
          t.kill();
        }
      });
    };
  }, { scope: containerRef, dependencies: [pathname] });

  return containerRef;
}

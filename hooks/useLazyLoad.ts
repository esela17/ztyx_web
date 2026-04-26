"use client";

import { useState, useEffect, useRef } from 'react';

export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasIntersected, options]);

  return { ref: elementRef, isIntersecting, hasIntersected };
}

// Hook for lazy loading any component
export function useLazyLoad(threshold = 0.1) {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold });
  return { ref, shouldLoad: hasIntersected };
}

export default useIntersectionObserver;
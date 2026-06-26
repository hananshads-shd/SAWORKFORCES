import React, { useState, useEffect, useRef } from "react";

interface LazyLoadSectionProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
  minHeight?: string;
}

export function LazyLoadSection({ children, fallback, minHeight = "350px" }: LazyLoadSectionProps) {
  const [isIntersected, setIsIntersected] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersected(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "250px", // Starts downloading assets 250px before entering viewport
        threshold: 0.01,
      }
    );

    const el = containerRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} style={{ minHeight: isIntersected ? "auto" : minHeight }}>
      {isIntersected ? children : fallback}
    </div>
  );
}

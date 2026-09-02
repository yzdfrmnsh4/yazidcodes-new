"use client";
import React, { useEffect, useRef, useState } from "react";

interface LazyMountProps {
  children: React.ReactNode;
  minHeight?: string | number;
  rootMargin?: string;
  className?: string;
}

export default function LazyMount({ 
  children, 
  minHeight = "auto", 
  rootMargin = "300px", 
  className = "" 
}: LazyMountProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isIntersecting) return;
    const currentRef = ref.current;
    if (!currentRef) return;

    // Use IntersectionObserver to detect when component is near viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [isIntersecting, rootMargin]);

  return (
    <div 
      ref={ref} 
      style={{ minHeight: isIntersecting ? 'auto' : minHeight }} 
      className={className}
    >
      {isIntersecting ? children : null}
    </div>
  );
}

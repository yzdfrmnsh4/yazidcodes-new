"use client";

import React, { useEffect, useState } from 'react';
import { useMotionValue, useTransform, motion } from 'motion/react';

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

export default function StatCounter({ value, label, suffix = '', duration = 2 }: StatCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [isInView, setIsInView] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isInView]);

  useEffect(() => {
    if (isInView) {
      count.set(value, { duration });
    }
  }, [isInView, value, duration, count]);

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-baseline justify-center gap-1">
        <motion.span className="text-6xl md:text-7xl font-extrabold text-primary">
          {rounded}
        </motion.span>
        {suffix && (
          <span className="text-3xl md:text-4xl font-bold text-white">
            {suffix}
          </span>
        )}
      </div>
      <p className="text-sm md:text-base text-text-muted mt-3 font-medium">
        {label}
      </p>
    </div>
  );
}

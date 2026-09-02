"use client";
import React, { useEffect, useState } from "react";

interface DelayMountProps {
  children: React.ReactNode;
  delay?: number;
}

export default function DelayMount({ children, delay = 1500 }: DelayMountProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return <>{isMounted ? children : null}</>;
}

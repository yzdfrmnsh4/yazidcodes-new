"use client";

import React, { useLayoutEffect, useRef, useCallback } from 'react';
import type { ReactNode } from 'react';
import type Lenis from 'lenis';

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
  style?: React.CSSProperties;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '', style }) => (
  <div
    className={`scroll-stack-card relative w-full min-h-[320px] md:min-h-[380px] my-6 p-5 sm:p-8 md:p-12 rounded-[1.75rem] sm:rounded-[2.5rem] border border-white/5 bg-[#0e0e11]/90 shadow-[0_20px_50px_rgba(0,0,0,0.4)] box-border origin-top will-change-transform ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d',
      ...style
    }}
  >
    {children}
  </div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 80,
  itemScale = 0.04,
  itemStackDistance = 40,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.88,
  scaleDuration = 0.5,
  rotationAmount = -1,
  blurAmount = 2,
  useWindowScroll = false,
  onStackComplete
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(new Map<number, any>());
  const isUpdatingRef = useRef(false);

  const cardOffsetsRef = useRef<number[]>([]);
  const endElementOffsetRef = useRef<number>(0);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value as string);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement
      };
    } else {
      const scroller = scrollerRef.current;
      return {
        scrollTop: scroller ? scroller.scrollTop : 0,
        containerHeight: scroller ? scroller.clientHeight : 0,
        scrollContainer: scroller
      };
    }
  }, [useWindowScroll]);

  const recalculateStaticOffsets = useCallback(() => {
    if (!cardsRef.current.length) return;

    // Temporarily save and clear visual transforms to ensure clean layout calculation
    const savedTransforms = cardsRef.current.map((card) => {
      const transform = card.style.transform;
      const filter = card.style.filter;
      card.style.transform = 'none';
      card.style.filter = 'none';
      return { transform, filter };
    });

    const scrollYValue = useWindowScroll ? window.scrollY : (scrollerRef.current ? scrollerRef.current.scrollTop : 0);
    const containerRect = useWindowScroll ? null : scrollerRef.current?.getBoundingClientRect();

    cardOffsetsRef.current = cardsRef.current.map((card) => {
      if (!card) return 0;
      const rect = card.getBoundingClientRect();
      if (useWindowScroll) {
        return rect.top + scrollYValue;
      } else {
        if (!containerRect) return 0;
        return rect.top - containerRect.top + scrollYValue;
      }
    });

    const endElement = scrollerRef.current?.querySelector('.scroll-stack-end') as HTMLElement | null;
    if (endElement) {
      const rect = endElement.getBoundingClientRect();
      if (useWindowScroll) {
        endElementOffsetRef.current = rect.top + scrollYValue;
      } else {
        if (containerRect) {
          endElementOffsetRef.current = rect.top - containerRect.top + scrollYValue;
        }
      }
    }

    // Restore transforms immediately
    cardsRef.current.forEach((card, i) => {
      if (savedTransforms[i]) {
        card.style.transform = savedTransforms[i].transform;
        card.style.filter = savedTransforms[i].filter;
      }
    });
  }, [useWindowScroll]);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    // Initialize offsets if they haven't been calculated yet
    if (cardOffsetsRef.current.length === 0 || endElementOffsetRef.current === 0) {
      recalculateStaticOffsets();
    }

    const endElementTop = endElementOffsetRef.current;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = cardOffsetsRef.current[i] || 0;
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight * 0.5; // stop pinning cleanly mid-screen before reaching the end of the section

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardTop = cardOffsetsRef.current[j] || 0;
          const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }

        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.min(6, depthInStack * blurAmount); // cap the blur max
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: translateY,
        scale: scale,
        rotation: rotation,
        blur: blur
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.01 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.0001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.01 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.01;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';

        card.style.transform = transform;
        card.style.filter = filter;

        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData,
    recalculateStaticOffsets
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    if (useWindowScroll) {
      return null;
    } else {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      import('lenis').then(({ default: LenisClass }) => {
        const lenis = new LenisClass({
          wrapper: scroller,
          content: scroller.querySelector('.scroll-stack-inner') as HTMLElement,
          duration: 1.2,
          easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 1.5,
          infinite: false,
          gestureOrientation: 'vertical',
          wheelMultiplier: 1,
          lerp: 0.1,
          syncTouch: true,
          syncTouchLerp: 0.075
        });

        lenis.on('scroll', handleScroll);

        const raf = (time: number) => {
          lenis.raf(time);
          animationFrameRef.current = requestAnimationFrame(raf);
        };
        animationFrameRef.current = requestAnimationFrame(raf);

        lenisRef.current = lenis;
      });
    }
  }, [handleScroll, useWindowScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!useWindowScroll && !scroller) return;

    const cards = Array.from(
      scroller?.querySelectorAll('.scroll-stack-card') ?? []
    ) as HTMLElement[];
    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
      card.style.webkitTransform = 'translateZ(0)';
      card.style.perspective = '1000px';
      card.style.webkitPerspective = '1000px';
    });

    setupLenis();
    
    // Clear and reinitialize static layout offsets
    cardOffsetsRef.current = [];
    endElementOffsetRef.current = 0;
    recalculateStaticOffsets();
    updateCardTransforms();

    const handleResize = () => {
      recalculateStaticOffsets();
      updateCardTransforms();
    };

    // A small timeout to capture any post-mount layout reflows (e.g. fonts loading, dynamic asset shifts)
    const initTimer = setTimeout(() => {
      recalculateStaticOffsets();
      updateCardTransforms();
    }, 150);

    // Hook scroll listener if we are using useWindowScroll
    if (useWindowScroll) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      clearTimeout(initTimer);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      if (useWindowScroll) {
        window.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', handleResize);
      stackCompletedRef.current = false;
      cardsRef.current = [];
      cardOffsetsRef.current = [];
      endElementOffsetRef.current = 0;
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    setupLenis,
    updateCardTransforms,
    recalculateStaticOffsets,
    handleScroll
  ]);

  return (
    <div
      className={useWindowScroll ? `relative w-full ${className}`.trim() : `relative w-full h-full overflow-y-auto overflow-x-visible ${className}`.trim()}
      ref={scrollerRef}
      style={useWindowScroll ? {} : {
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
        scrollBehavior: 'smooth',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
        willChange: 'scroll-position'
      }}
    >
      <div className={useWindowScroll ? "scroll-stack-inner w-full relative pb-[420px] sm:pb-[500px] md:pb-[45vh]" : "scroll-stack-inner pt-[10vh] px-4 pb-[30rem] min-h-screen"}>
        {children}
        {/* Spacer so the last pin can release cleanly */}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default ScrollStack;

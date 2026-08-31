"use client";

import { useRef, useCallback, useState, useEffect, type ReactNode } from 'react';
import React from 'react';
import { useTheme } from '../lib/ThemeContext';

interface BorderGlowProps {
  children?: ReactNode;
  className?: string;
  edgeSensitivity?: number;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  animated?: boolean;
  colors?: string[];
  fillOpacity?: number;
}

function parseHSL(hslStr: string): { h: number; s: number; l: number } {
  const match = hslStr.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
  if (!match) return { h: 40, s: 80, l: 80 };
  return { h: parseFloat(match[1]), s: parseFloat(match[2]), l: parseFloat(match[3]) };
}

function buildBoxShadow(glowColor: string, intensity: number): string {
  const { h, s, l } = parseHSL(glowColor);
  const base = `${h}deg ${s}% ${l}%`;
  const layers: [number, number, number, number, number, boolean][] = [
    [0, 0, 0, 1, 100, true], [0, 0, 1, 0, 60, true], [0, 0, 3, 0, 50, true],
    [0, 0, 6, 0, 40, true], [0, 0, 15, 0, 30, true], [0, 0, 25, 2, 20, true],
    [0, 0, 50, 2, 10, true],
    [0, 0, 1, 0, 60, false], [0, 0, 3, 0, 50, false], [0, 0, 6, 0, 40, false],
    [0, 0, 15, 0, 30, false], [0, 0, 25, 2, 20, false], [0, 0, 50, 2, 10, false],
  ];
  return layers.map(([x, y, blur, spread, alpha, inset]) => {
    const a = Math.min(alpha * intensity, 100);
    return `${inset ? 'inset ' : ''}${x}px ${y}px ${blur}px ${spread}px hsl(${base} / ${a}%)`;
  }).join(', ');
}

function easeOutCubic(x: number) { return 1 - Math.pow(1 - x, 3); }
function easeInCubic(x: number) { return x * x * x; }

interface AnimateOpts {
  start?: number; end?: number; duration?: number; delay?: number;
  ease?: (t: number) => number; onUpdate: (v: number) => void; onEnd?: () => void;
}

function animateValue({ start = 0, end = 100, duration = 1000, delay = 0, ease = easeOutCubic, onUpdate, onEnd }: AnimateOpts) {
  const t0 = performance.now() + delay;
  function tick() {
    const elapsed = performance.now() - t0;
    const t = Math.min(elapsed / duration, 1);
    onUpdate(start + (end - start) * ease(t));
    if (t < 1) requestAnimationFrame(tick);
    else if (onEnd) onEnd();
  }
  setTimeout(() => requestAnimationFrame(tick), delay);
}

const GRADIENT_POSITIONS = ['80% 55%', '69% 34%', '8% 6%', '41% 38%', '86% 85%', '82% 18%', '51% 4%'];
const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1];

function buildMeshGradients(colors: string[]): string[] {
  const gradients: string[] = [];
  for (let i = 0; i < 7; i++) {
    const c = colors[Math.min(COLOR_MAP[i], colors.length - 1)];
    gradients.push(`radial-gradient(at ${GRADIENT_POSITIONS[i]}, ${c} 0px, transparent 50%)`);
  }
  gradients.push(`linear-gradient(${colors[0]} 0 100%)`);
  return gradients;
}

const BorderGlow: React.FC<BorderGlowProps> = ({
  children,
  className = '',
  edgeSensitivity = 30,
  glowColor = '244 80 80',
  backgroundColor = '#0c0c0e',
  borderRadius = 40,
  glowRadius = 40,
  glowIntensity = 1.0,
  coneSpread = 25,
  animated = true,
  colors = ['#c084fc', '#f472b6', '#38bdf8'],
  fillOpacity = 0.5,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [sweepActive, setSweepActive] = useState(false);

  const currentAngleRef = useRef(45);
  const currentProximityRef = useRef(0);
  const isHoveredRef = useRef(false);
  const sweepActiveRef = useRef(false);

  const targetAngleRef = useRef(45);
  const targetProximityRef = useRef(0);

  const getCenterOfElement = useCallback((el: HTMLElement) => {
    const { width, height } = el.getBoundingClientRect();
    return [width / 2, height / 2];
  }, []);

  const getEdgeProximity = useCallback((el: HTMLElement, x: number, y: number) => {
    const [cx, cy] = getCenterOfElement(el);
    const dx = x - cx;
    const dy = y - cy;
    let kx = Infinity;
    let ky = Infinity;
    if (dx !== 0) kx = cx / Math.abs(dx);
    if (dy !== 0) ky = cy / Math.abs(dy);
    return Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
  }, [getCenterOfElement]);

  const getCursorAngle = useCallback((el: HTMLElement, x: number, y: number) => {
    const [cx, cy] = getCenterOfElement(el);
    const dx = x - cx;
    const dy = y - cy;
    if (dx === 0 && dy === 0) return 0;
    const radians = Math.atan2(dy, dx);
    let degrees = radians * (180 / Math.PI) + 90;
    if (degrees < 0) degrees += 360;
    return degrees;
  }, [getCenterOfElement]);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    targetProximityRef.current = getEdgeProximity(card, x, y);
    targetAngleRef.current = getCursorAngle(card, x, y);
  }, [getEdgeProximity, getCursorAngle]);

  // RequestAnimationFrame lerp loop for ultra-smooth updates — pauses offscreen
  useEffect(() => {
    let animationFrameId: number;
    let isVisible = true;

    const update = () => {
      if (!isVisible) return;

      const targetA = targetAngleRef.current;
      let diffA = targetA - currentAngleRef.current;
      while (diffA < -180) diffA += 360;
      while (diffA > 180) diffA -= 360;
      if (Math.abs(diffA) >= 0.01) {
        currentAngleRef.current += diffA * 0.12;
      }

      const targetP = targetProximityRef.current;
      const diffP = targetP - currentProximityRef.current;
      if (Math.abs(diffP) >= 0.001) {
        currentProximityRef.current += diffP * 0.12;
      }

      const isVis = isHoveredRef.current || sweepActiveRef.current || currentProximityRef.current > 0.01;
      const calcColorSensitivity = edgeSensitivity + 20;
      
      const bOp = isVis
        ? Math.max(0, (currentProximityRef.current * 100 - calcColorSensitivity) / (100 - calcColorSensitivity))
        : 0;
      const gOp = isVis
        ? Math.max(0, (currentProximityRef.current * 100 - edgeSensitivity) / (100 - edgeSensitivity))
        : 0;

      const card = cardRef.current;
      if (card) {
        card.style.setProperty('--cursor-angle', `${currentAngleRef.current.toFixed(3)}deg`);
        card.style.setProperty('--border-opacity', bOp.toString());
        card.style.setProperty('--glow-opacity', gOp.toString());
        card.style.setProperty('--fill-opacity', (bOp * fillOpacity).toString());
      }

      animationFrameId = requestAnimationFrame(update);
    };

    // IntersectionObserver to pause/resume rAF when offscreen
    const el = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          animationFrameId = requestAnimationFrame(update);
        }
      },
      { threshold: 0 }
    );
    if (el) observer.observe(el);

    animationFrameId = requestAnimationFrame(update);
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!animated) return;
    const angleStart = 110;
    const angleEnd = 465;
    setSweepActive(true);
    sweepActiveRef.current = true;
    currentAngleRef.current = angleStart;
    targetAngleRef.current = angleStart;

    animateValue({ duration: 500, onUpdate: v => {
      targetProximityRef.current = v / 100;
    } });
    animateValue({ ease: easeInCubic, duration: 1500, end: 50, onUpdate: v => {
      targetAngleRef.current = (angleEnd - angleStart) * (v / 100) + angleStart;
    }});
    animateValue({ ease: easeOutCubic, delay: 1500, duration: 2250, start: 50, end: 100, onUpdate: v => {
      targetAngleRef.current = (angleEnd - angleStart) * (v / 100) + angleStart;
    }});
    animateValue({ ease: easeInCubic, delay: 2500, duration: 1500, start: 100, end: 0,
      onUpdate: v => {
        targetProximityRef.current = v / 100;
      },
      onEnd: () => {
        setSweepActive(false);
        sweepActiveRef.current = false;
      },
    });
  }, [animated]);


  const { theme } = useTheme();
  const isLight = theme === 'light';

  const maskColor = backgroundColor === 'transparent'
    ? (isLight ? '#FFFFFF' : '#0c0c0e')
    : backgroundColor;
  const meshGradients = buildMeshGradients(colors);
  const borderBg = meshGradients.map(g => `${g} border-box`);
  const fillBg = meshGradients.map(g => `${g} padding-box`);


  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => { setIsHovered(true); isHoveredRef.current = true; }}
      onPointerLeave={() => {
        setIsHovered(false);
        isHoveredRef.current = false;
        targetProximityRef.current = 0; // Smoothly fade out proximity
      }}
      className={`relative grid isolate backdrop-blur-xl ${
        isLight ? 'border border-[var(--color-border-specular)]' : 'border border-white/5 border-t-white/15'
      } ${className}`}
      style={{
        background: backgroundColor !== 'transparent' ? backgroundColor : undefined,
        borderRadius: `${borderRadius}px`,
        transform: 'translate3d(0, 0, 0.01px)',
        boxShadow: isLight
          ? '0 12px 30px rgba(45,37,32,0.06), inset 0 1px 0 rgba(255,255,255,1)'
          : '0 20px 40px -15px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.15)',
        '--cursor-angle': '45deg',
        '--border-opacity': '0',
        '--glow-opacity': '0',
        '--fill-opacity': '0',
      } as React.CSSProperties}
    >
      {/* mesh gradient border */}
      <div
        className="absolute inset-0 -z-[1]"
        style={{
          borderRadius: 'inherit',
          border: '1px solid transparent',
          background: [
            `linear-gradient(${maskColor} 0 100%) padding-box`,
            'linear-gradient(rgb(255 255 255 / 0%) 0% 100%) border-box',
            ...borderBg,
          ].join(', '),
          opacity: 'var(--border-opacity)',
          maskImage: `conic-gradient(from var(--cursor-angle) at center, black ${coneSpread}%, transparent ${coneSpread + 15}%, transparent ${100 - coneSpread - 15}%, black ${100 - coneSpread}%)`,
          WebkitMaskImage: `conic-gradient(from var(--cursor-angle) at center, black ${coneSpread}%, transparent ${coneSpread + 15}%, transparent ${100 - coneSpread - 15}%, black ${100 - coneSpread}%)`,
        }}
      />

      {/* mesh gradient fill near edges */}
      <div
        className="absolute inset-0 -z-[1]"
        style={{
          borderRadius: 'inherit',
          border: '1px solid transparent',
          background: fillBg.join(', '),
          maskImage: [
            'linear-gradient(to bottom, black, black)',
            'radial-gradient(ellipse at 50% 50%, black 40%, transparent 65%)',
            'radial-gradient(ellipse at 66% 66%, black 5%, transparent 40%)',
            'radial-gradient(ellipse at 33% 33%, black 5%, transparent 40%)',
            'radial-gradient(ellipse at 66% 33%, black 5%, transparent 40%)',
            'radial-gradient(ellipse at 33% 66%, black 5%, transparent 40%)',
            `conic-gradient(from var(--cursor-angle) at center, transparent 5%, black 15%, black 85%, transparent 95%)`,
          ].join(', '),
          WebkitMaskImage: [
            'linear-gradient(to bottom, black, black)',
            'radial-gradient(ellipse at 50% 50%, black 40%, transparent 65%)',
            'radial-gradient(ellipse at 66% 66%, black 5%, transparent 40%)',
            'radial-gradient(ellipse at 33% 33%, black 5%, transparent 40%)',
            'radial-gradient(ellipse at 66% 33%, black 5%, transparent 40%)',
            'radial-gradient(ellipse at 33% 66%, black 5%, transparent 40%)',
            `conic-gradient(from var(--cursor-angle) at center, transparent 5%, black 15%, black 85%, transparent 95%)`,
          ].join(', '),
          maskComposite: 'subtract, add, add, add, add, add',
          WebkitMaskComposite: 'source-out, source-over, source-over, source-over, source-over, source-over',
          opacity: 'var(--fill-opacity)',
          mixBlendMode: 'soft-light',
        } as React.CSSProperties}
      />

      {/* outer glow */}
      <span
        className="absolute pointer-events-none z-[1]"
        style={{
          borderRadius: 'inherit',
          inset: `${-glowRadius}px`,
          maskImage: `conic-gradient(from var(--cursor-angle) at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%)`,
          WebkitMaskImage: `conic-gradient(from var(--cursor-angle) at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%)`,
          opacity: 'var(--glow-opacity)',
          mixBlendMode: 'plus-lighter',
        } as React.CSSProperties}
      >
        <span
          className="absolute"
          style={{
            borderRadius: 'inherit',
            inset: `${glowRadius}px`,
            boxShadow: buildBoxShadow(glowColor, glowIntensity),
          }}
        />
      </span>

      <div className="flex flex-col relative overflow-visible z-[1] h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default BorderGlow;

"use client";

import React from 'react';
import Image from 'next/image';
import { Activity, Cpu, Layers, Zap, Play, ArrowUpRight, Star, TrendingUp } from 'lucide-react';
import { PORTFOLIO } from '../lib/data';

export interface MarqueeItem {
  id: string;
  title: string;
  category?: string;
  image?: string;
  description?: string;
  link?: string;
  customMockup?: React.ReactNode;
}

/* Built-in Code-Rendered Mockups */
const FitnessMockup = () => (
  <div id="mock-fitplay" className="w-[300px] h-[180px] md:w-[480px] md:h-[270px] shrink-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#07070a] via-[#111218] to-[#0a0a0f] border border-[var(--color-border-specular)] border-t-[var(--color-border-specular)]/1.2 overflow-hidden relative flex flex-col justify-between p-4 md:p-6 shadow-md dark:shadow-2xl transition-all duration-300 hover:border-[var(--color-primary)]/20 py-8">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-48 rounded-full bg-orange-600/10 blur-[60px] pointer-events-none" />

    <div className="flex items-center justify-between relative z-10">
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
        <span className="text-[9px] md:text-[11px] font-[var(--font-headline)] font-[var(--font-headline)] text-[var(--color-on-surface)] tracking-widest uppercase">FitPlay</span>
      </div>
      <div className="flex items-center gap-2 text-[8px] md:text-[10px] text-[var(--color-text-muted)]">
        <span>Transform</span>
        <span>•</span>
        <span>Coaches</span>
        <span>•</span>
        <span className="px-2 py-0.5 rounded-full bg-[var(--color-surface)]/5 border border-[var(--color-border-specular)] text-[var(--color-on-surface)] font-medium">Start Training</span>
      </div>
    </div>

    <div className="my-auto relative z-10 pt-1">
      <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 mb-1 md:mb-2">
        <Star className="w-2 h-2 text-orange-500 fill-orange-500" />
        <span className="text-[7px] md:text-[9px] font-semibold text-orange-400">4.9 Rating (12k+ Transformed)</span>
      </div>
      <h3 className="font-[var(--font-headline)] font-[var(--font-headline)] text-[var(--color-on-surface)] text-lg md:text-2xl leading-tight tracking-tight mb-1.5">
        Stronger.<br />Leaner.<br />Rebuilt.
      </h3>
      <p className="text-[8px] md:text-xs text-[var(--color-text-muted)] line-clamp-2 max-w-[180px] md:max-w-[280px]">
        Take the leap today to get in the best shape of your life. Our mission is to support your health journey.
      </p>
    </div>

    <div className="flex items-end justify-between relative z-10 pt-1 border-t border-[var(--color-border-specular)]/[0.3]">
      <div className="flex gap-3">
        <div>
          <span className="block text-[6px] md:text-[8px] uppercase tracking-wider text-[var(--color-text-muted)]">Streak</span>
          <span className="font-[var(--font-headline)] font-[var(--font-headline)] text-[9px] md:text-xs text-[var(--color-on-surface)]">48 Days 🔥</span>
        </div>
        <div>
          <span className="block text-[6px] md:text-[8px] uppercase tracking-wider text-[var(--color-text-muted)]">Avg. Burn</span>
          <span className="font-[var(--font-headline)] font-[var(--font-headline)] text-[9px] md:text-xs text-[var(--color-on-surface)]">650 kcal</span>
        </div>
      </div>

      <div className="bg-[var(--color-surface)]/5 border border-[var(--color-border-specular)]/2 rounded-lg p-1 md:p-1.5 backdrop-blur-md flex items-center gap-1.5">
        <Activity className="w-3 h-3 md:w-4 md:h-4 text-orange-500" />
        <div>
          <div className="w-8 md:w-12 h-1 bg-[var(--color-surface)]/10 rounded-full overflow-hidden">
            <div className="w-[75%] h-full bg-orange-500 rounded-full" />
          </div>
          <span className="text-[5px] md:text-[7px] text-[var(--color-on-surface)]/80 block mt-0.5">Cardio 75%</span>
        </div>
      </div>
    </div>
  </div>
);

const AdPlayMockup = () => (
  <div id="mock-adplay" className="w-[300px] h-[180px] md:w-[480px] md:h-[270px] shrink-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#05060b] via-[#090b14] to-[#040508] border border-[var(--color-border-specular)] border-t-[var(--color-border-specular)]/1.2 overflow-hidden relative flex flex-col justify-between p-4 md:p-6 shadow-md dark:shadow-2xl transition-all duration-300 hover:border-blue-500/20">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-blue-600/10 blur-[60px] pointer-events-none" />

    <div className="flex items-center justify-between relative z-10">
      <div className="flex items-center gap-1.5">
        <Cpu className="w-3.5 h-3.5 text-blue-500" />
        <span className="text-[9px] md:text-[11px] font-[var(--font-headline)] font-[var(--font-headline)] text-[var(--color-on-surface)] tracking-wider uppercase">AdPlay</span>
      </div>
      <div className="flex items-center gap-2 text-[8px] md:text-[10px] text-[var(--color-text-muted)]">
        <span>Platform</span>
        <span>Features</span>
        <span>Pricing</span>
        <span className="px-2 py-0.5 rounded bg-blue-500 text-white font-semibold text-[6px] md:text-[8px]">Get Started</span>
      </div>
    </div>

    <div className="text-center my-auto relative z-10 py-1">
      <span className="inline-block text-[5px] md:text-[7px] tracking-widest text-blue-400 font-semibold uppercase bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full mb-1 md:mb-2">
        ✦ INTELLIGENCE PLATFORM V2.2
      </span>
      <h3 className="font-[var(--font-headline)] font-[var(--font-headline)] text-xl md:text-3xl text-[var(--color-on-surface)] tracking-tight leading-none mb-1.5">
        Scale Smarter.<br />
        <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Grow Faster.</span>
      </h3>
      <p className="text-[8px] md:text-xs text-[var(--color-text-muted)] max-w-[200px] md:max-w-xs mx-auto leading-relaxed line-clamp-2">
        AdPlay Intelligence runs raw behavioral signals into growth engines, processing millions of interactions per second.
      </p>

      <div className="flex justify-center gap-2 mt-2">
        <span className="px-2 py-0.5 rounded bg-[var(--color-on-surface)] text-[6px] md:text-[8px] font-semibold text-[var(--color-background)] flex items-center gap-1 shadow">
          <Zap className="w-2 h-2 text-blue-600 fill-blue-600" /> Start Free
        </span>
        <span className="px-2 py-0.5 rounded bg-[var(--color-surface)]/5 border border-[var(--color-border-specular)]/10 text-[6px] md:text-[8px] font-medium text-[var(--color-on-surface)] flex items-center gap-1">
          <Play className="w-2 h-2 text-[var(--color-on-surface)]/60 fill-[var(--color-on-surface)]/20" /> Watch Demo
        </span>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-3 pt-1 border-t border-[var(--color-border-specular)]/[0.3] relative z-10">
      <div className="flex items-center gap-1.5 bg-[var(--color-surface)]/[0.02] border border-[var(--color-border-specular)]/5 rounded-lg p-0.5 md:p-1">
        <TrendingUp className="w-3 h-3 text-blue-400" />
        <div>
          <span className="text-[5px] uppercase text-[var(--color-text-muted)] block leading-none">Conversion</span>
          <span className="text-[7px] md:text-[9px] font-semibold text-[var(--color-on-surface)] leading-none">+142% Revenue</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 bg-[var(--color-surface)]/[0.02] border border-[var(--color-border-specular)]/5 rounded-lg p-0.5 md:p-1">
        <Layers className="w-3 h-3 text-indigo-400" />
        <div>
          <span className="text-[5px] uppercase text-[var(--color-text-muted)] block leading-none">Signal Fidelity</span>
          <span className="text-[7px] md:text-[9px] font-semibold text-[var(--color-on-surface)] leading-none">99.98% Accurate</span>
        </div>
      </div>
    </div>
  </div>
);

/* Image Portfolio Mockup Frame */
const ImageMockupCard = ({ item }: { item: MarqueeItem }) => (
  <div
    id={`mock-${item.id}`}
    className="w-[300px] h-[180px] md:w-[480px] md:h-[270px] shrink-0 rounded-2xl md:rounded-3xl bg-[var(--color-surface-dim)] border border-[var(--color-border-specular)] overflow-hidden relative flex flex-col justify-between shadow-md dark:shadow-2xl transition-all duration-300 group cursor-pointer"
  >
    {/* Full Brightness Image Background */}
    {item.image && (
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 300px, 480px"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        priority={false}
      />
    )}

    {/* Bottom Gradient Overlay - Appears on Hover Only */}
    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    {/* Top Right Action Icon - Appears on Hover Only */}
    <div className="flex items-center justify-end p-3 md:p-4 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-black/50 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all">
        <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
      </div>
    </div>

    {/* Minimal Bottom Title - Appears on Hover Only (Pure White Text) */}
    <div className="p-3 md:p-4 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <h3 className="font-headline font-semibold text-sm md:text-base text-white tracking-tight leading-tight">
        {item.title}
      </h3>
    </div>
  </div>
);

/* Default Marquee Items */
const DEFAULT_MARQUEE_ITEMS: MarqueeItem[] = PORTFOLIO.map(p => ({
  id: p.id,
  title: p.title,
  image: p.image
}));

interface SocialProofMarqueeProps {
  items?: MarqueeItem[];
}

export default function SocialProofMarquee({ items }: SocialProofMarqueeProps) {
  const displayItems = items && items.length > 0 ? items : DEFAULT_MARQUEE_ITEMS;

  return (
    <section id="portfolio-marquee" className="relative w-full overflow-hidden pt-16 pb-2 bg-gradient-to-r from-transparent via-[var(--color-surface)]/[0.01] to-transparent">
      {/* Background Section Header */}
      <div className="text-center mb-10 relative z-10">
        <span className="text-[10px] md:text-xs font-semibold text-[var(--color-primary)] uppercase tracking-widest ">
          KARYA TERPILIH
        </span>
        <h3 className="font-headline text-2xl md:text-4xl font-semibold text-[var(--color-on-surface)] mt-3 tracking-tight">
          Situs &amp; Produk Digital yang Kami Bangun
        </h3>
      </div>

      {/* Absolute Edge Gradient Overlays for Fade Out Effect */}
      {/* <div className="absolute top-0 left-0 h-full w-24 md:w-48 bg-gradient-to-r from-[#0c0c0e] to-transparent z-10 pointer-events-none" /> */}
      {/* <div className="absolute top-0 right-0 h-full w-24 md:w-48 bg-gradient-to-l from-[#0c0c0e] to-transparent z-10 pointer-events-none" /> */}

      {/* Scrolling Marquee Wrapper */}
      <div className="marquee-container flex overflow-hidden w-full select-none pb-16">
        {/* First Loop */}
        <div className="flex shrink-0 items-center gap-4 md:gap-8 pr-4 md:pr-8 animate-marquee">
          {displayItems.map((item) => (
            <React.Fragment key={`marquee-1-${item.id}`}>
              {item.customMockup ? (
                item.customMockup
              ) : (
                <ImageMockupCard item={item} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Second Loop (Identical duplication for seamless continuous scroll) */}
        <div className="flex shrink-0 items-center gap-4 md:gap-8 pr-4 md:pr-8 animate-marquee">
          {displayItems.map((item) => (
            <React.Fragment key={`marquee-2-${item.id}`}>
              {item.customMockup ? (
                item.customMockup
              ) : (
                <ImageMockupCard item={item} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

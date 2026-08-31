"use client";

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface CardData {
  id: string;
  title: string;
  description: string;
}

const CARDS_DATA: CardData[] = [
  {
    id: '01',
    title: 'UI/UX Custom',
    description: 'Setiap tampilan dirancang dari nol untuk mencerminkan karakter brand dan kebutuhan pengguna.'
  },
  {
    id: '02',
    title: 'Teknologi Modern',
    description: 'Dibangun dengan teknologi web modern untuk menghasilkan website yang cepat, responsive, dan mudah dikembangkan.'
  },
  {
    id: '03',
    title: 'Proses Terstruktur',
    description: 'Setiap project memiliki tahapan dan timeline yang jelas agar proses pengerjaan tetap terarah dan tepat waktu.'
  },
  {
    id: '04',
    title: 'Support Personal',
    description: 'Komunikasi langsung selama project dan bantuan setelah website selesai untuk memastikan semuanya berjalan dengan baik.'
  }
];

const FeaturedCard = ({ card, shouldReduceMotion }: { card: CardData; shouldReduceMotion: boolean }) => {
  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : 0,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group relative rounded-[1.25rem] border border-[var(--color-border-specular)] overflow-hidden transition-all duration-[400ms] hover:border-primary/30 hover:-translate-y-1 flex flex-col h-full glass-card"
    >
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-specular)] to-transparent z-10" />

      {/* Visual element container */}
      <div className="w-full aspect-video rounded-t-[1.25rem] bg-[var(--color-surface-container)] border-b border-[var(--color-border-specular)] flex items-center justify-center overflow-hidden group-hover:scale-[1.03] transition-transform duration-[400ms] select-none relative"
        style={{
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(128, 128, 128, 0.15) 25%, rgba(128, 128, 128, 0.15) 26%, transparent 27%, transparent 74%, rgba(128, 128, 128, 0.15) 75%, rgba(128, 128, 128, 0.15) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(128, 128, 128, 0.15) 25%, rgba(128, 128, 128, 0.15) 26%, transparent 27%, transparent 74%, rgba(128, 128, 128, 0.15) 75%, rgba(128, 128, 128, 0.15) 76%, transparent 77%, transparent)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>
      </div>

      <div className="p-8 md:p-10 flex flex-col justify-between flex-grow relative">
        <div className="absolute -top-16 -right-16 text-9xl md:text-[140px] font-headline font-black text-[var(--color-on-surface)] opacity-[0.07] leading-none pointer-events-none select-none">
          {card.id}
        </div>

        <div className="relative z-10 space-y-4">
          <span className="text-xs font-headline font-semibold text-[var(--color-text-muted)] tracking-widest block">
            {card.id}.
          </span>
          <h3 className="font-headline text-3xl md:text-4xl font-semibold text-[var(--color-on-surface)] leading-tight">
            {card.title}
          </h3>
          <p className="font-sans text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-lg">
            {card.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const SupportingCard = ({ card, index, shouldReduceMotion }: { card: CardData; index: number; shouldReduceMotion: boolean }) => {
  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group relative rounded-[1.25rem] border border-[var(--color-border-specular)] p-8 md:p-10 overflow-hidden transition-all duration-[400ms] hover:border-primary/30 hover:-translate-y-0.5 flex flex-col justify-between h-full glass-card"
    >
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-specular)] to-transparent" />

      <div className="absolute -top-8 -left-6 text-8xl md:text-9xl font-headline font-black text-[var(--color-on-surface)] opacity-[0.06] leading-none pointer-events-none select-none">
        {card.id}
      </div>

      <div className="relative z-10 space-y-4 pt-12 md:pt-16 pb-4">
        <span className="text-xs font-headline font-semibold text-[var(--color-text-muted)] tracking-widest block">
          {card.id}.
        </span>
        <h3 className="font-headline text-2xl md:text-3xl font-semibold text-[var(--color-on-surface)] leading-tight">
          {card.title}
        </h3>
        <p className="font-sans text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
};

export default function WhyChooseBento() {
  const shouldReduceMotion = useReducedMotion();

  const card01 = CARDS_DATA.find(card => card.id === '01')!;
  const card02 = CARDS_DATA.find(card => card.id === '02')!;
  const card03 = CARDS_DATA.find(card => card.id === '03')!;
  const card04 = CARDS_DATA.find(card => card.id === '04')!;

  return (
    <section className="w-full">
      <div className="max-w-[95rem] mx-auto px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 auto-rows-fr">
          <div>
            <SupportingCard
              card={card01}
              index={0}
              shouldReduceMotion={shouldReduceMotion}
            />
          </div>

          <div>
            <SupportingCard
              card={card02}
              index={1}
              shouldReduceMotion={shouldReduceMotion}
            />
          </div>

          <div>
            <SupportingCard
              card={card03}
              index={2}
              shouldReduceMotion={shouldReduceMotion}
            />
          </div>

          <div>
            <SupportingCard
              card={card04}
              index={3}
              shouldReduceMotion={shouldReduceMotion}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

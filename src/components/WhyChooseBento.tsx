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
    title: 'Desain Eksklusif',
    description: 'Website dirancang khusus untuk identitas brand Anda.'
  },
  {
    id: '02',
    title: 'Koding Modern',
    description: 'Dibangun dengan teknologi modern untuk pengalaman yang cepat.'
  },
  {
    id: '03',
    title: 'Tepat Waktu',
    description: 'Proses terstruktur dengan timeline yang jelas.'
  },
  {
    id: '04',
    title: 'Dukungan Personal',
    description: 'Tetap mendapatkan bantuan bahkan setelah website selesai.'
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
      className="group relative rounded-[1.25rem] border border-white/[0.10] overflow-hidden transition-all duration-[400ms] hover:border-white/[0.14] hover:-translate-y-1 flex flex-col h-full"
      style={{
        background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.045), transparent 60%), #101117',
        boxShadow:
          'inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 4px 0 rgba(0, 0, 0, 0.24), 0 12px 28px rgba(0, 0, 0, 0.15)',
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }}
    >
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />

      {/* IMAGE PLACEHOLDER — replace with actual visual element */}
      <div className="w-full aspect-video rounded-t-[1.25rem] bg-[#0D0F15] border-b border-white/[0.06] flex items-center justify-center overflow-hidden group-hover:scale-[1.03] transition-transform duration-[400ms] select-none relative"
        style={{
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.01]" />
          <div 
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>
      </div>

      <div className="p-8 md:p-10 flex flex-col justify-between flex-grow relative">
         <div className="absolute -top-16 -right-16 text-9xl md:text-[140px] font-headline font-black opacity-[0.12] leading-none pointer-events-none select-none">
           {card.id}
         </div>

        <div className="relative z-10 space-y-4">
          <span className="text-xs font-headline font-bold text-white/40 tracking-widest block">
            {card.id}.
          </span>
          <h3 className="font-headline text-3xl md:text-4xl font-extrabold text-[#F5F5F5] leading-tight">
            {card.title}
          </h3>
          <p className="font-sans text-base md:text-lg text-[#94A3B8] leading-relaxed max-w-lg">
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
      className="group relative rounded-[1.25rem] border border-white/[0.08] p-8 md:p-10 overflow-hidden transition-all duration-[400ms] hover:border-white/[0.12] hover:-translate-y-0.5 flex flex-col justify-between h-full"
      style={{
        background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.03), transparent 55%), #0f1015',
        boxShadow:
          'inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 3px 0 rgba(0, 0, 0, 0.22), 0 8px 20px rgba(0, 0, 0, 0.12)',
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }}
    >
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="absolute -top-8 -left-6 text-8xl md:text-9xl font-headline font-black opacity-[0.10] leading-none pointer-events-none select-none">
        {card.id}
      </div>

      <div className="relative z-10 space-y-4 pt-12 md:pt-16 pb-4">
        <span className="text-xs font-headline font-bold text-white/40 tracking-widest block">
          {card.id}.
        </span>
        <h3 className="font-headline text-2xl md:text-3xl font-bold text-[#F5F5F5] leading-tight">
          {card.title}
        </h3>
        <p className="font-sans text-base md:text-lg text-[#94A3B8] leading-relaxed">
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

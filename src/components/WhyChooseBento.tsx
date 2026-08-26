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

export default function WhyChooseBento() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full">
      {/* 4 Equal Horizontal Minimal 3D Cards in 1 Row (Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 items-stretch">
        {CARDS_DATA.map((card, index) => (
          <motion.div
            key={card.id}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.5,
              delay: shouldReduceMotion ? 0 : index * 0.08,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="group relative rounded-[1.125rem] border border-white/[0.08] p-5 sm:p-6 overflow-hidden transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-1 flex flex-col justify-between"
            style={{
              background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.035), transparent 55%), #101117',
              boxShadow:
                'inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 3px 0 rgba(0, 0, 0, 0.22), 0 10px 24px rgba(0, 0, 0, 0.12)'
            }}
          >
            {/* Top Subtle Surface Highlight */}
            <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* 1. CLEAN IMAGE PLACEHOLDER (Dominant ~45-50% height) */}
            <div className="w-full aspect-[4/3] rounded-xl bg-[#0D0F15] border border-white/[0.06] flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5 select-none">
              <span className="text-[9px] font-mono tracking-[0.12em] text-white/25 uppercase font-medium">
                IMAGE PLACEHOLDER
              </span>
            </div>

            {/* 2. TITLE & 3. SHORT DESCRIPTION */}
            <div className="space-y-2 pt-5">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-[#F5F5F5] leading-snug">
                {card.title}
              </h3>
              <p className="font-sans text-[#8F98AA] text-xs sm:text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

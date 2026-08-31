"use client";

import React from 'react';
import { handleOpenInquiry } from '../lib/utils';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={() => handleOpenInquiry()}
        aria-label="Tanya Rencana Web via WhatsApp"
        className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-[1.2rem] md:rounded-[1.4rem] btn-tactile-base liquid-glass shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.28),0_4px_4px_rgba(0,0,0,0.25),0_8px_16px_rgba(0,0,0,0.15)] hover:-translate-y-1 active:translate-y-0.5 transition-all duration-200 cursor-pointer overflow-hidden group border border-white/20"
      >
        <img
          src="icon/WA.webp"
          alt="WhatsApp Icon"
          className="absolute inset-0 w-full h-full object-cover scale-[1.25] md:scale-[1.3] group-hover:scale-[1.3] transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] z-0"
        />
        {/* Soft highlight rim overlay to enforce glass edge inside over image */}
        <div className="absolute inset-0 shadow-[inset_0_0_12px_rgba(255,255,255,0.15)] pointer-events-none rounded-[inherit] z-[2]" />
      </button>
    </div>
  );
}

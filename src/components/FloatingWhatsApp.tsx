"use client";

import React from 'react';
import { handleOpenInquiry } from '../lib/utils';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={() => handleOpenInquiry()}
        aria-label="Tanya Rencana Web via WhatsApp"
        className="relative flex items-center justify-center w-20 h-20 rounded-[1.35rem] btn-tactile-base shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.28),0_3px_0_rgba(0,0,0,0.28),0_6px_12px_rgba(0,0,0,0.16)] hover:-translate-y-1 active:translate-y-0.5 transition-all duration-200 cursor-pointer overflow-hidden group border border-white/10"
      >
        <img
          src="icon/whatsapp.png"
          alt="WhatsApp Icon"
          className="w-full h-full group-hover:scale-110 transition-transform duration-300 "
        />
      </button>
    </div>
  );
}

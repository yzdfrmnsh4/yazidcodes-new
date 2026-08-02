"use client";

import React from 'react';
import { handleOpenInquiry } from '../lib/utils';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={() => handleOpenInquiry()}
        aria-label="Tanya Rencana Web via WhatsApp"
        className="relative flex items-center justify-center w-20 h-20 rounded-[1.35rem] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden group  "
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

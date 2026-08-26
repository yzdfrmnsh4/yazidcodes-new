"use client";

import React, { useState } from 'react';
import { ArrowLeft, Monitor, Smartphone, Check, HeartHandshake, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { PortfolioProject } from '../../../lib/types';
import { handleWhatsAppInquiryProject } from '../../../lib/utils';

interface PortfolioDetailClientProps {
  project: PortfolioProject;
}

export default function PortfolioDetailClient({ project }: PortfolioDetailClientProps) {
  const router = useRouter();
  const [projectViewMode, setProjectViewMode] = useState<'desktop' | 'mobile'>('desktop');

  const handleBack = () => {
    // Check if there is history to go back to, else go to portfolio catalog
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/portfolio');
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="relative z-10 pt-32 md:pt-40 max-w-7xl mx-auto px-6 md:px-12 mb-28 md:mb-40"
    >
      {/* Header / Back */}
      <div className="mb-10">
        <button 
          onClick={handleBack}
          className="inline-flex items-center gap-2 btn-ghost-tactile px-3.5 py-1.5 rounded-xl text-text-muted hover:text-white text-sm font-semibold mb-6 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Kembali
        </button>
        
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 border border-primary/20 px-3.5 py-1 rounded-full">
            {project.category}
          </span>
          <span className="text-text-muted text-xs font-semibold">
            Exclusive Client Project
          </span>
        </div>
        <h1 className="font-headline text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          {project.title}
        </h1>
      </div>

      {/* Split Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Responsive Simulator & visuals */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Visual simulator controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs text-text-muted font-semibold uppercase tracking-wider">Simulasi Preview Responsif</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-1 flex gap-1 self-stretch sm:self-auto justify-center">
              <button
                onClick={() => setProjectViewMode('desktop')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-all ${
                  projectViewMode === 'desktop' ? 'btn-active-tactile text-white shadow-md' : 'btn-ghost-tactile text-text-muted'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                Desktop View
              </button>
              <button
                onClick={() => setProjectViewMode('mobile')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-all ${
                  projectViewMode === 'mobile' ? 'btn-active-tactile text-white shadow-md' : 'btn-ghost-tactile text-text-muted'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                Mobile View
              </button>
            </div>
          </div>

          {/* Device Frame Wrapper */}
          <div className="flex justify-center items-center bg-[#12131a]/80 border border-white/5 rounded-[2rem] p-6 md:p-12 min-h-[350px] md:min-h-[500px]">
            <div
              className={`transition-all duration-500 overflow-hidden relative shadow-2xl rounded-2xl border border-white/10 ${
                projectViewMode === 'desktop' ? 'w-full max-w-4xl aspect-video' : 'w-72 max-w-xs aspect-[9/16]'
              }`}
            >
              {/* Simulator top-bar */}
              <div className="h-6 bg-white/5 border-b border-white/10 flex items-center px-3 gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
                <div className="mx-auto text-[10px] text-text-muted font-mono truncate max-w-[60%]">
                  {projectViewMode === 'desktop' ? 'https://yazidcodes.site/' : 'https://m.yazidcodes.site/'}
                  {project.id}
                </div>
              </div>

              {/* Image inside simulator */}
              <div className="w-full h-[calc(100%-24px)] overflow-y-auto select-none bg-slate-900 scrollbar-thin">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Additional description */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
            <h3 className="text-xl font-headline font-bold text-white">Deskripsi & Proses Desain</h3>
            <p className="text-text-muted text-sm leading-relaxed font-sans">
              Proyek ini dibangun menggunakan pendekatan user-centered design, memastikan setiap elemen visual dan transisi navigasi meningkatkan konversi pengunjung. Dibekali integrasi serverless yang andal, optimasi page-speed berskala tinggi, dan SEO terstruktur penuh untuk mendominasi peringkat mesin pencarian Google.
            </p>
          </div>
        </div>

        {/* Right Column: Specifications & CTA */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Tech specifications card */}
          <div className="glass-card p-6 rounded-3xl border border-white/5 space-y-4 bg-gradient-to-br from-white/[0.02] to-[#12131a]">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/5 pb-2">Spesifikasi Proyek</h4>
            
            <div className="space-y-3.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-text-muted">Metode Kerja</span>
                <span className="text-white font-semibold">Agile / Scrum Dev</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-text-muted">Tipe Proyek</span>
                <span className="text-white font-semibold">Kustom Premium</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-text-muted">Optimasi SEO</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">✔ High-score</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-text-muted">Responsivitas</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">✔ Semua Perangkat</span>
              </div>
            </div>
          </div>

          {/* Detailed Spec List */}
          <div className="p-6 rounded-3xl border border-white/5 bg-white/[0.02] space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Tentang Proyek</h4>
            <p className="text-xs text-text-muted leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Feature checklist */}
          <div className="p-6 rounded-3xl border border-white/5 bg-white/[0.02] space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Fitur Unggulan Proyek</h4>
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-text-muted">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Action CTA */}
          <div className="p-6 rounded-3xl border border-primary/20 bg-primary/5 text-center space-y-4">
            <div className="flex justify-center">
              <HeartHandshake className="w-10 h-10 text-primary animate-pulse" />
            </div>
            <div>
              <h5 className="font-headline font-bold text-white text-base">Ingin Website Seperti Ini?</h5>
              <p className="text-[11px] text-text-muted mt-1">
                Konsultasikan rencana website kustom premium Anda sekarang dengan Yazidcodes.
              </p>
            </div>
            <button
              onClick={() => handleWhatsAppInquiryProject(project.title)}
              className="w-full py-3.5 rounded-xl btn-gradient-tactile text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-primary/25 cursor-pointer"
            >
              Tanya Rencana Proyek Website
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </motion.main>
  );
}

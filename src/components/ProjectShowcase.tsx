"use client";

import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Monitor,
  Smartphone,
  X,
  Check
} from 'lucide-react';
import { motion, PanInfo } from 'motion/react';
import { PortfolioProject } from '../lib/types';

interface ProjectShowcaseProps {
  projects: PortfolioProject[];
  onSelectProject?: (project: PortfolioProject) => void;
}

export default function ProjectShowcase({ projects, onSelectProject }: ProjectShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const projectCount = projects.length;

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [selectedProject]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projectCount);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projectCount) % projectCount);
  };

  const handleCardClick = (index: number, project: PortfolioProject) => {
    if (index === activeIndex) {
      if (onSelectProject) {
        onSelectProject(project);
      } else {
        setSelectedProject(project);
        setViewMode('desktop');
      }
    } else {
      setActiveIndex(index);
    }
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 40;
    if (info.offset.x < -threshold) {
      handleNext();
    } else if (info.offset.x > threshold) {
      handlePrev();
    }
  };

  if (!projects || projectCount === 0) return null;

  return (
    <div className="relative w-full max-w-8xl mx-auto py-4 select-none">
      {/* LEFT & RIGHT CAROUSEL EDGE FADE MASKS */}
      <div className="absolute top-0 bottom-16 left-0 w-16 sm:w-24 md:w-36 z-40 bg-gradient-to-r from-[#0c0c0e] via-[#0c0c0e]/80 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-16 right-0 w-16 sm:w-24 md:w-36 z-40 bg-gradient-to-l from-[#0c0c0e] via-[#0c0c0e]/80 to-transparent pointer-events-none" />

      {/* 3D PERSPECTIVE CAROUSEL STAGE */}
      <div
        className="relative w-full h-[380px] sm:h-[440px] md:h-[500px] flex items-center justify-center overflow-hidden"
        style={{ perspective: '1200px' }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {projects.map((project, index) => {
            let diff = index - activeIndex;
            if (diff > projectCount / 2) diff -= projectCount;
            if (diff < -projectCount / 2) diff += projectCount;

            const isActive = diff === 0;

            let translateX = '0%';
            let scale = 1;
            let opacity = 1;
            let rotateY = 0;
            let zIndex = 30;

            if (isActive) {
              translateX = '0%';
              scale = 1;
              opacity = 1;
              rotateY = 0;
              zIndex = 30;
            } else if (diff === -1) {
              translateX = '-52%';
              scale = 0.88;
              opacity = 0.70;
              rotateY = -6;
              zIndex = 20;
            } else if (diff === 1) {
              translateX = '52%';
              scale = 0.88;
              opacity = 0.70;
              rotateY = 6;
              zIndex = 20;
            } else {
              translateX = diff < 0 ? '-100%' : '100%';
              scale = 0.75;
              opacity = 0;
              rotateY = diff < 0 ? -12 : 12;
              zIndex = 10;
            }

            return (
              <motion.div
                key={project.id}
                drag={isActive ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                onClick={() => handleCardClick(index, project)}
                animate={{
                  x: translateX,
                  scale,
                  opacity,
                  rotateY,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  zIndex,
                  transformStyle: 'preserve-3d',
                  boxShadow: isActive
                    ? 'inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 4px 0 rgba(0, 0, 0, 0.35), 0 24px 50px rgba(0, 0, 0, 0.50)'
                    : 'inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 4px 0 rgba(0, 0, 0, 0.25), 0 14px 32px rgba(0, 0, 0, 0.35)'
                }}
                className={`absolute w-[88vw] sm:w-[540px] md:w-[600px] lg:w-[620px] aspect-[16/10] rounded-[1.75rem] sm:rounded-[2.25rem] bg-[#101117] border border-white/[0.08] overflow-hidden flex flex-col justify-end cursor-pointer transition-colors duration-300 group ${isActive ? 'hover:border-white/[0.18]' : 'hover:border-white/[0.12]'
                  }`}
              >
                {/* 1. FULL-BLEED ABSOLUTE IMAGE LAYER (100% Width & Height) */}
                <div className="absolute inset-0 w-full h-full bg-[#0a0b10]">
                  <img
                    src={project.image}
                    alt={project.alt || project.title}
                    referrerPolicy="no-referrer"
                    onLoad={() => setLoadedImages((prev) => ({ ...prev, [project.id]: true }))}
                    className={`w-full h-full object-cover object-center transition-transform duration-700 ${isActive ? 'group-hover:scale-[1.03]' : ''
                      } ${loadedImages[project.id] ? 'opacity-100' : 'opacity-0'}`}
                  />
                  {!loadedImages[project.id] && (
                    <div className="absolute inset-0 bg-[#0d0e14] animate-pulse flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full border border-white/5 bg-white/[0.02]" />
                    </div>
                  )}
                </div>

                {/* 2. DARK GRADIENT OVERLAY LAYER (Bottom Digelapkan untuk Legibility) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/75 via-45% to-transparent pointer-events-none" />

                {/* 3. OVERLAY CONTENT AT BOTTOM OF CARD */}
                <div className="relative z-10 p-6 sm:p-7 md:p-8 flex items-end justify-between gap-4">
                  <div className="min-w-0 flex-1 space-y-1">
                    <span className="text-[10px] sm:text-[11px] font-bold font-geist uppercase tracking-[0.12em] text-[#3A7FF0] block truncate">
                      {project.category}
                    </span>
                    <h3 className="font-headline text-lg sm:text-xl md:text-2xl font-bold text-white truncate leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-white/70 line-clamp-2 leading-relaxed max-w-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Circular Compact Action Arrow */}
                  <div className="shrink-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(index, project);
                      }}
                      aria-label={`Lihat detail ${project.title}`}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full btn-outline-tactile flex items-center justify-center text-primary backdrop-blur-md bg-black/40 border border-white/15 transition-all duration-300 hover:scale-105 cursor-pointer group"
                    >
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CAROUSEL CONTROLS & PAGINATION */}
      <div className="flex flex-col items-center gap-3 mt-4 sm:mt-6 relative z-50">
        <div className="flex items-center gap-6">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            aria-label="Proyek sebelumnya"
            className="w-10 h-10 rounded-full btn-outline-tactile flex items-center justify-center text-white cursor-pointer hover:border-white/20 transition-all active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 text-white/80" />
          </button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Ke proyek ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${activeIndex === idx
                  ? 'w-6 h-2 bg-[#3A7FF0] shadow-[0_0_12px_rgba(58,127,240,0.5)]'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            aria-label="Proyek selanjutnya"
            className="w-10 h-10 rounded-full btn-outline-tactile flex items-center justify-center text-white cursor-pointer hover:border-white/20 transition-all active:scale-95"
          >
            <ChevronRight className="w-5 h-5 text-white/80" />
          </button>
        </div>

        {/* Subtle Swipe Hint Text */}
        <span className="text-[11px] font-sans text-text-muted/60 tracking-wider">
          Geser atau klik panah untuk melihat karya lainnya
        </span>
      </div>

      {/* PROJECT DETAIL DIALOG */}
      {selectedProject && (
        <div className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-md p-4 pt-28 md:pt-36 pb-6 flex justify-center items-start animate-in fade-in duration-300">
          <div className="glass-card w-full max-w-5xl rounded-[1.75rem] sm:rounded-[2.5rem] overflow-hidden relative flex flex-col border border-white/10 shadow-2xl bg-[#0c0c0e]/95 max-h-[calc(100vh-120px)] md:max-h-[calc(100vh-160px)]">
            {/* Top Close bar */}
            <div className="py-2.5 px-5 border-b border-white/5 flex items-center justify-between bg-black/40 shrink-0">
              <div>
                <span className="text-[#3A7FF0] font-bold text-[9px] uppercase tracking-widest block">{selectedProject.category}</span>
                <h3 className="text-base md:text-lg font-headline font-bold text-white">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-7 h-7 rounded-full btn-ghost-tactile flex items-center justify-center text-white cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Split Grid Content */}
            <div className="flex-1 overflow-y-auto min-h-0 p-6 md:p-8 space-y-8 scrollbar-thin">
              {/* Responsive Visual Live Preview Simulation */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-muted uppercase tracking-wider font-semibold">Simulasi Preview Responsif</span>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-1 flex gap-1">
                    <button
                      onClick={() => setViewMode('desktop')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-all ${viewMode === 'desktop' ? 'btn-active-tactile text-white shadow-md' : 'btn-ghost-tactile text-text-muted'
                        }`}
                    >
                      <Monitor className="w-3.5 h-3.5" />
                      Desktop View
                    </button>
                    <button
                      onClick={() => setViewMode('mobile')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-all ${viewMode === 'mobile' ? 'btn-active-tactile text-white shadow-md' : 'btn-ghost-tactile text-text-muted'
                        }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      Mobile View
                    </button>
                  </div>
                </div>

                {/* Device Frame */}
                <div className="flex justify-center bg-black/60 border border-white/5 rounded-3xl p-4 md:p-8 overflow-hidden min-h-[300px] md:min-h-[400px]">
                  <div
                    className={`transition-all duration-500 overflow-hidden relative shadow-2xl rounded-2xl border border-white/10 ${viewMode === 'desktop' ? 'w-full max-w-4xl aspect-video' : 'w-72 max-w-xs aspect-[9/16]'
                      }`}
                  >
                    {/* Simulator top-bar */}
                    <div className="h-6 bg-white/5 border-b border-white/10 flex items-center px-3 gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
                      <div className="mx-auto text-[10px] text-text-muted font-mono truncate max-w-[60%]">
                        {viewMode === 'desktop' ? 'https://yazidcodes.site/' : 'https://m.yazidcodes.site/'}
                        {selectedProject.id}
                      </div>
                    </div>

                    {/* Image inside simulator */}
                    <div className="w-full h-[calc(100%-24px)] overflow-y-auto select-none bg-slate-900 scrollbar-thin">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Specs */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Intro */}
                <div className="lg:col-span-2 space-y-4">
                  <h4 className="text-lg font-bold text-white font-headline">Tentang Proyek</h4>
                  <p className="text-text-muted leading-relaxed font-sans text-base">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="space-y-4 bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Fitur Unggulan</h4>
                  <ul className="space-y-3">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-text-muted">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Modal Bottom actions */}
            <div className="py-2.5 px-5 border-t border-white/5 bg-black/40 flex justify-end shrink-0">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl btn-outline-tactile text-white font-semibold text-xs cursor-pointer"
              >
                Tutup Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

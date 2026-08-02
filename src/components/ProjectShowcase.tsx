"use client";

import React, { useState, useEffect } from 'react';
import { Eye, Smartphone, Monitor, Shield, ArrowUpRight, Sparkles, X, Check } from 'lucide-react';
import { PortfolioProject } from '../lib/types';

interface ProjectShowcaseProps {
  projects: PortfolioProject[];
  onSelectProject?: (project: PortfolioProject) => void;
}

export default function ProjectShowcase({ projects, onSelectProject }: ProjectShowcaseProps) {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
      {projects.map((project) => (
        <div
          key={project.id}
          onClick={() => {
            if (onSelectProject) {
              onSelectProject(project);
            } else {
              setSelectedProject(project);
              setViewMode('desktop');
            }
          }}
          className="glass-card rounded-[1.75rem] sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden p-3 sm:p-4 group cursor-pointer hover:border-primary/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)]"
        >
          <div className="rounded-[1.25rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aspect-video relative bg-slate-950">
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.alt}
              referrerPolicy="no-referrer"
              onLoad={() => setLoadedImages(prev => ({ ...prev, [project.id]: true }))}
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                loadedImages[project.id] ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {!loadedImages[project.id] && (
              <div className="absolute inset-0 bg-[#12131a] animate-pulse flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary/30 animate-spin" style={{ animationDuration: '4s' }} />
                </div>
              </div>
            )}

            {/* Dark overlay with details always visible, getting richer on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex flex-col justify-end p-5 sm:p-6 md:p-8 transition-all duration-500 group-hover:from-black/100 group-hover:via-black/60">
              <span className="text-primary-container text-[11px] font-bold uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-primary group-hover:rotate-12 transition-transform duration-300" />
                {project.category}
              </span>
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 flex items-center justify-between group-hover:text-primary transition-colors duration-300">
                {project.title}
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300" />
              </h4>
              <p className="text-text-muted text-xs md:text-sm line-clamp-2 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Always visible quick pill */}
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 flex items-center gap-1.5 text-xs text-white">
              <Eye className="w-3.5 h-3.5 text-primary" />
              <span>Detail Proyek</span>
            </div>
          </div>
        </div>
      ))}

      {/* Project Detail Dialog */}
      {selectedProject && (
        <div className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-md p-4 pt-28 md:pt-36 pb-6 flex justify-center items-start animate-in fade-in duration-300">
          <div className="glass-card w-full max-w-5xl rounded-[1.75rem] sm:rounded-[2.5rem] overflow-hidden relative flex flex-col border border-white/10 shadow-2xl bg-[#0c0c0e]/95 max-h-[calc(100vh-120px)] md:max-h-[calc(100vh-160px)]">
            {/* Top Close bar */}
            <div className="py-2 px-4 md:py-2.5 md:px-5 border-b border-white/5 flex items-center justify-between bg-black/40 shrink-0">
              <div>
                <span className="text-primary font-bold text-[9px] uppercase tracking-widest">{selectedProject.category}</span>
                <h3 className="text-base md:text-lg font-headline font-bold text-white">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/15 transition-colors cursor-pointer"
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
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                        viewMode === 'desktop' ? 'bg-primary text-on-primary shadow-md' : 'text-text-muted hover:text-white'
                      }`}
                    >
                      <Monitor className="w-3.5 h-3.5" />
                      Desktop View
                    </button>
                    <button
                      onClick={() => setViewMode('mobile')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                        viewMode === 'mobile' ? 'bg-primary text-on-primary shadow-md' : 'text-text-muted hover:text-white'
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
                    className={`transition-all duration-500 overflow-hidden relative shadow-2xl rounded-2xl border border-white/10 ${
                      viewMode === 'desktop' ? 'w-full max-w-4xl aspect-video' : 'w-72 max-w-xs aspect-[9/16]'
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
            <div className="py-2 px-4 md:py-2.5 md:px-5 border-t border-white/5 bg-black/40 flex justify-end shrink-0">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-[11px] transition-all cursor-pointer"
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

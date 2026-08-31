"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { PortfolioProject } from '../lib/types';
import { useTheme } from '../lib/ThemeContext';

interface ProjectShowcaseProps {
  projects: PortfolioProject[];
}

interface PortfolioCardProps {
  project: PortfolioProject;
  theme: string;
  onSelect: () => void;
}

const PortfolioMarqueeCard: React.FC<PortfolioCardProps> = ({ project, theme, onSelect }) => {
  const [loaded, setLoaded] = useState(false);
  const isLight = theme === 'light';

  return (
    <div
      onClick={onSelect}
      className={`w-[320px] sm:w-[480px] md:w-[560px] lg:w-[600px] aspect-[16/9.5] rounded-2xl sm:rounded-[1.75rem] relative overflow-hidden shrink-0 group cursor-pointer transition-all duration-300 border ${isLight
        ? 'bg-[#FAFAF7] border-[var(--color-border-specular)] hover:border-[var(--color-primary)] shadow-[0_2px_8px_rgba(45,37,32,0.05)] hover:shadow-[0_4px_16px_rgba(45,37,32,0.09)]'
        : 'bg-[#101117] border-[var(--color-border-specular)] hover:border-[var(--color-primary)]/80 shadow-[0_2px_10px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_18px_rgba(0,0,0,0.35)]'
        }`}
    >
      {/* 1. Full-Bleed Screenshot Image */}
      <div className={`absolute inset-0 w-full h-full ${isLight ? 'bg-slate-100' : 'bg-[#0a0b10]'}`}>
        <Image
          src={project.image}
          alt={project.alt || project.title}
          sizes="(max-width: 640px) 320px, (max-width: 768px) 480px, 600px"
          fill
          className={`object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'
            }`}
          onLoad={() => setLoaded(true)}
        />
        {!loaded && (
          <div className={`absolute inset-0 animate-pulse flex items-center justify-center ${isLight ? 'bg-slate-200' : 'bg-[#0d0e14]'}`}>
            <div className="w-8 h-8 rounded-full border border-current opacity-20" />
          </div>
        )}
      </div>

      {/* 2. Normal State Subtle Category Badge Pill */}
      <div className="absolute top-4 left-4 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
        <span className={`text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-md border ${isLight
          ? 'bg-white/80 text-[var(--color-on-surface)] border-black/10 shadow-sm'
          : 'bg-black/60 text-white/90 border-white/10'
          }`}>
          {project.category}
        </span>
      </div>

      {/* 3. Interactive Hover Overlay — Minimal Bottom Gradient without heavy black blur */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 via-60% to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6 md:p-7 text-white z-20">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 space-y-1.5">
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-[#38bdf8] block font-semibold">
            {project.category}
          </span>

          <h3 className="font-headline text-base sm:text-lg md:text-xl font-semibold text-white line-clamp-1 leading-snug">
            {project.title}
          </h3>

          <p className="font-sans text-xs sm:text-sm text-white/85 line-clamp-2 leading-relaxed font-normal">
            {project.description}
          </p>

          <div className="pt-1.5 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white group-hover:text-primary transition-colors">
            <span>Lihat Detail</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const router = useRouter();
  const { theme } = useTheme();

  if (!projects || projects.length === 0) return null;

  const handleSelectProject = (projectId: string) => {
    router.push(`/portfolio/${projectId}`);
  };

  // Split projects into two balanced rows
  const topRowProjects = projects.filter((_, i) => i % 2 === 0);
  const bottomRowProjects = projects.filter((_, i) => i % 2 !== 0);

  // Fallback if one row is empty
  const row1 = topRowProjects.length > 0 ? topRowProjects : projects;
  const row2 = bottomRowProjects.length > 0 ? bottomRowProjects : projects;

  // Duplicate each array 3x to guarantee seamless infinite loop
  const row1Items = [...row1, ...row1, ...row1];
  const row2Items = [...row2, ...row2, ...row2];

  return (
    <div className="relative w-full max-w-full select-none py-2">
      {/* ROUNDED MARQUEE CONTAINER WRAPPER — Flush Top & Bottom (py-0) */}
      <div className="w-full overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[2rem] py-0 space-y-3 sm:space-y-4">
        {/* ROW 1: Moves Right to Left (← ← ←) */}
        <div className="marquee-row-wrapper overflow-hidden relative w-full">
          <div className="animate-marquee-left flex items-center gap-2 sm:gap-2">
            {row1Items.map((project, idx) => (
              <PortfolioMarqueeCard
                key={`top-${project.id}-${idx}`}
                project={project}
                theme={theme}
                onSelect={() => handleSelectProject(project.id)}
              />
            ))}
          </div>
        </div>

        {/* ROW 2: Moves Left to Right (→ → →) */}
        <div className="marquee-row-wrapper overflow-hidden relative w-full">
          <div className="animate-marquee-right flex items-center gap-2 sm:gap-2">
            {row2Items.map((project, idx) => (
              <PortfolioMarqueeCard
                key={`bottom-${project.id}-${idx}`}
                project={project}
                theme={theme}
                onSelect={() => handleSelectProject(project.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Hint */}
      <div className="text-center pt-3">
        <span className="text-[11px] font-sans text-[var(--color-text-muted)] tracking-wider">
          Arahkan kursor pada karya untuk menjeda dan melihat detail
        </span>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import { ArrowLeft, Search, Filter, SlidersHorizontal } from 'lucide-react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { PORTFOLIO } from '../../lib/data';
import { PortfolioProject } from '../../lib/types';
import { useTheme } from '../../lib/ThemeContext';

interface PortfolioGridCardProps {
  project: PortfolioProject;
  theme: string;
  onSelect: () => void;
}

const PortfolioGridCard: React.FC<PortfolioGridCardProps> = ({ project, theme, onSelect }) => {
  const [loaded, setLoaded] = useState(false);
  const isLight = theme === 'light';

  return (
    <div
      onClick={onSelect}
      className="group cursor-pointer flex flex-col space-y-3 sm:space-y-3.5 transition-all duration-300"
    >
      {/* 1. Rounded Screenshot Image Frame */}
      <div className={`w-full aspect-[16/10] rounded-2xl sm:rounded-[1.6rem] relative overflow-hidden border transition-all duration-500 group-hover:-translate-y-1.5 ${
        isLight
          ? 'bg-[#FAFAF7] border-[var(--color-border-specular)] shadow-[0_4px_16px_rgba(45,37,32,0.06)] group-hover:shadow-[0_12px_28px_rgba(45,37,32,0.12)] group-hover:border-[var(--color-primary)]'
          : 'bg-[#101117] border-[var(--color-border-specular)] shadow-[0_4px_18px_rgba(0,0,0,0.3)] group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] group-hover:border-[var(--color-primary)]/80'
      }`}>
        <Image
          src={project.image}
          alt={project.alt || project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setLoaded(true)}
        />
        {!loaded && (
          <div className={`absolute inset-0 animate-pulse flex items-center justify-center ${isLight ? 'bg-slate-200' : 'bg-[#0d0e14]'}`}>
            <div className="w-8 h-8 rounded-full border border-current opacity-20" />
          </div>
        )}

        {/* Category Pill Tag */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className={`text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-md border ${
            isLight
              ? 'bg-white/85 text-[var(--color-on-surface)] border-black/10 shadow-sm'
              : 'bg-black/65 text-white/90 border-white/10'
          }`}>
            {project.category}
          </span>
        </div>
      </div>

      {/* 2. Title & Short Description Below Image */}
      <div className="space-y-1 px-0.5">
        <h3 className="font-headline text-base sm:text-lg font-semibold text-[var(--color-on-surface)] group-hover:text-[var(--color-primary)] transition-colors leading-snug line-clamp-1">
          {project.title}
        </h3>

        <p className="font-sans text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default function PortfolioClient() {
  const router = useRouter();
  const { theme } = useTheme();
  const [isPending, startTransition] = useTransition();
  const [portfolioSearch, setPortfolioSearch] = useState('');
  const [portfolioCategory, setPortfolioCategory] = useState('Semua');

  const handleNavigate = (path: string) => {
    startTransition(() => {
      router.push(path);
    });
  };

  const handleSelectProject = (projectId: string) => {
    router.push(`/portfolio/${projectId}`);
  };

  // --- Portfolio filtering logic ---
  const filteredPortfolio = PORTFOLIO.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(portfolioSearch.toLowerCase()) ||
      project.description.toLowerCase().includes(portfolioSearch.toLowerCase()) ||
      project.category.toLowerCase().includes(portfolioSearch.toLowerCase());
    
    if (portfolioCategory === 'Semua') return matchesSearch;
    
    if (portfolioCategory === 'E-Commerce') {
      return matchesSearch && project.category.toLowerCase().includes('commerce');
    }
    if (portfolioCategory === 'Sistem Informasi') {
      return matchesSearch && (
        project.category.toLowerCase().includes('system') || 
        project.category.toLowerCase().includes('enterprise') || 
        project.category.toLowerCase().includes('inventory') || 
        project.category.toLowerCase().includes('hr')
      );
    }
    if (portfolioCategory === 'Web & Instansi') {
      return matchesSearch && (
        project.category.toLowerCase().includes('web') || 
        project.category.toLowerCase().includes('government') || 
        project.category.toLowerCase().includes('redesign') || 
        project.category.toLowerCase().includes('services')
      );
    }
    if (portfolioCategory === 'Portfolio & Design') {
      return matchesSearch && (
        project.category.toLowerCase().includes('design') || 
        project.category.toLowerCase().includes('portfolio') || 
        project.category.toLowerCase().includes('personal')
      );
    }
    return matchesSearch;
  });

  return (
    <motion.main
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="relative z-10 pt-32 md:pt-40 max-w-7xl mx-auto px-6 md:px-12 mb-28 md:mb-40"
    >
      {/* Header / Back */}
      <div className="mb-12">
        <button 
          onClick={() => handleNavigate('/')}
          className="inline-flex items-center gap-2 btn-hamburger-tactile px-4 py-2 rounded-xl text-[var(--color-on-surface)] text-xs sm:text-sm font-semibold mb-6 cursor-pointer group shadow-sm border border-[var(--color-border-specular)]"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Landing
        </button>
        
        <h1 className="font-headline text-4xl md:text-6xl font-semibold text-[var(--color-on-surface)] mb-4 tracking-tight">
          Portofolio Karya <span className="text-primary italic font-semibold">Premium</span>
        </h1>
        <p className="text-[var(--color-text-muted)] text-base md:text-lg max-w-2xl leading-relaxed">
          Jelajahi seluruh karya digital, sistem informasi, dan e-commerce eksklusif yang telah kami kembangkan. Klik karya untuk melihat detail serta simulasi responsif langsung.
        </p>
      </div>

      {/* Filter Tools & Search Bar */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-12 p-3 md:p-4 liquid-glass border border-[var(--color-border-specular)] rounded-3xl shadow-xl shadow-black/5 relative z-10 transition-all">
        {/* Search Bar */}
        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]" />
          <input
            type="text"
            placeholder="Cari karya portofolio..."
            value={portfolioSearch}
            onChange={(e) => setPortfolioSearch(e.target.value)}
            className="w-full bg-[var(--color-surface-container)] border border-[var(--color-border-specular)] rounded-2xl pl-11 pr-4 py-3 text-sm text-[var(--color-on-surface)] placeholder-[var(--color-text-muted)]/50 focus:outline-none focus:border-primary transition-all"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
          <span className="text-xs text-[var(--color-text-muted)] flex items-center gap-1 mr-2">
            <Filter className="w-3.5 h-3.5" />
            Kategori:
          </span>
          {['Semua', 'E-Commerce', 'Sistem Informasi', 'Web & Instansi', 'Portfolio & Design'].map((cat) => (
            <button
              key={cat}
              onClick={() => setPortfolioCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                portfolioCategory === cat
                  ? 'btn-active-tactile font-semibold shadow-lg shadow-primary/10 text-[var(--color-on-surface)]'
                  : 'btn-ghost-tactile text-[var(--color-text-muted)] hover:text-[var(--color-on-surface)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Grid List */}
      {filteredPortfolio.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredPortfolio.map((project) => (
            <PortfolioGridCard
              key={project.id}
              project={project}
              theme={theme}
              onSelect={() => handleSelectProject(project.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 glass-card rounded-[3rem] border border-[var(--color-border-specular)] p-12">
          <SlidersHorizontal className="w-12 h-12 text-[var(--color-text-muted)] mx-auto mb-4 animate-pulse" />
          <h3 className="text-xl font-semibold text-[var(--color-on-surface)] mb-2 font-headline">Karya Tidak Ditemukan</h3>
          <p className="text-[var(--color-text-muted)] text-sm max-w-sm mx-auto mb-6">
            Tidak ada proyek portofolio yang cocok dengan kata pencarian "{portfolioSearch}" atau kategori "{portfolioCategory}".
          </p>
          <button
            onClick={() => {
              setPortfolioSearch('');
              setPortfolioCategory('Semua');
            }}
            className="px-5 py-2.5 rounded-xl btn-outline-tactile text-[var(--color-on-surface)] font-semibold text-xs cursor-pointer"
          >
            Reset Pencarian
          </button>
        </div>
      )}
    </motion.main>
  );
}

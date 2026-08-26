"use client";

import React, { useState } from 'react';
import { ArrowLeft, Search, Filter, SlidersHorizontal } from 'lucide-react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import ProjectShowcase from '../../components/ProjectShowcase';
import { PORTFOLIO } from '../../lib/data';

export default function PortfolioClient() {
  const router = useRouter();
  const [portfolioSearch, setPortfolioSearch] = useState('');
  const [portfolioCategory, setPortfolioCategory] = useState('Semua');

  const handleNavigate = (path: string) => {
    router.push(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- Portfolio filtering logic ---
  const filteredPortfolio = PORTFOLIO.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(portfolioSearch.toLowerCase()) ||
      project.description.toLowerCase().includes(portfolioSearch.toLowerCase()) ||
      project.category.toLowerCase().includes(portfolioSearch.toLowerCase());
    
    if (portfolioCategory === 'Semua') return matchesSearch;
    
    // Custom filter categorization matching
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
          className="inline-flex items-center gap-2 btn-ghost-tactile px-3.5 py-1.5 rounded-xl text-text-muted hover:text-white text-sm font-semibold mb-6 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Landing
        </button>
        
        <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
          Portofolio Karya <span className="text-primary italic font-semibold">Premium</span>
        </h1>
        <p className="text-text-muted text-base md:text-lg max-w-2xl leading-relaxed">
          Jelajahi seluruh karya digital, sistem informasi, dan e-commerce eksklusif yang telah kami kembangkan. Klik karya untuk melihat detail serta simulasi responsif langsung.
        </p>
      </div>

      {/* Filter Tools & Search Bar */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-12 p-4 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-md">
        {/* Search Bar */}
        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="Cari karya portofolio..."
            value={portfolioSearch}
            onChange={(e) => setPortfolioSearch(e.target.value)}
            className="w-full bg-[#0c0c0e]/60 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary transition-all"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
          <span className="text-xs text-text-muted flex items-center gap-1 mr-2">
            <Filter className="w-3.5 h-3.5" />
            Kategori:
          </span>
          {['Semua', 'E-Commerce', 'Sistem Informasi', 'Web & Instansi', 'Portfolio & Design'].map((cat) => (
            <button
              key={cat}
              onClick={() => setPortfolioCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                portfolioCategory === cat
                  ? 'btn-active-tactile font-bold shadow-lg shadow-primary/10'
                  : 'btn-ghost-tactile text-text-muted hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Grid List */}
      {filteredPortfolio.length > 0 ? (
        <ProjectShowcase 
          projects={filteredPortfolio} 
          onSelectProject={(p) => handleNavigate(`/portfolio/${p.id}`)} 
        />
      ) : (
        <div className="text-center py-24 glass-card rounded-[3rem] border border-white/5 p-12">
          <SlidersHorizontal className="w-12 h-12 text-text-muted mx-auto mb-4 animate-pulse" />
          <h3 className="text-xl font-bold text-white mb-2 font-headline">Karya Tidak Ditemukan</h3>
          <p className="text-text-muted text-sm max-w-sm mx-auto mb-6">
            Tidak ada proyek portofolio yang cocok dengan kata pencarian "{portfolioSearch}" atau kategori "{portfolioCategory}".
          </p>
          <button
            onClick={() => {
              setPortfolioSearch('');
              setPortfolioCategory('Semua');
            }}
            className="px-5 py-2.5 rounded-xl btn-outline-tactile text-white font-semibold text-xs cursor-pointer"
          >
            Reset Pencarian
          </button>
        </div>
      )}
    </motion.main>
  );
}

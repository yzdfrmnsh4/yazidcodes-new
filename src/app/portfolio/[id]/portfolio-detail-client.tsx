"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Calendar, User, Tag, Check, HeartHandshake, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { PortfolioProject } from '../../../lib/types';
import { useTheme } from '../../../lib/ThemeContext';
import { handleWhatsAppInquiryProject } from '../../../lib/utils';

interface PortfolioDetailClientProps {
  project: PortfolioProject;
}

export default function PortfolioDetailClient({ project }: PortfolioDetailClientProps) {
  const router = useRouter();
  const { theme } = useTheme();
  const [heroLoaded, setHeroLoaded] = useState(false);

  const isLight = theme === 'light';

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/portfolio');
    }
  };

  // Default fallback paragraphs if detailedOverview is not set
  const paragraph1 = project.detailedOverview?.[0] || project.description;
  const paragraph2 = project.detailedOverview?.[1] ||
    'Proyek ini dikembangkan menggunakan pendekatan user-centered design, memastikan setiap elemen visual, kecepatan responsif, serta keamanan arsitektur sistem berjalan optimal di seluruh perangkat pengguna.';

  const detailImagesList = project.detailImages && project.detailImages.length > 0
    ? project.detailImages
    : [project.image];

  return (
    <motion.main
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="relative z-10 pt-32 md:pt-40 max-w-6xl mx-auto px-6 md:px-10 mb-28 md:mb-40 space-y-10 md:space-y-14"
    >
      {/* 1. Header & Back Navigation */}
      <div className="space-y-4">
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 btn-gradient-tactile px-4 py-2 rounded-xl text-[var(--color-on-surface)] text-xs sm:text-sm font-semibold mb-2 cursor-pointer group shadow-sm border border-[var(--color-border-specular)]"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Portofolio
        </button>

        {/* Title */}
        <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl font-semibold text-[var(--color-on-surface)] tracking-tight leading-[1.15]">
          {project.title}
        </h1>

        {/* Short Description */}
        <p className="text-[var(--color-text-muted)] text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed font-sans">
          {project.description}
        </p>
      </div>

      {/* 2. Main Hero Thumbnail Image */}
      <div className={`w-full aspect-[16/9] rounded-2xl sm:rounded-3xl md:rounded-[2.2rem] relative overflow-hidden border shadow-xl ${isLight
        ? 'bg-[#FAFAF7] border-[var(--color-border-specular)] shadow-[0_8px_30px_rgba(45,37,32,0.08)]'
        : 'bg-[#101117] border-[var(--color-border-specular)] shadow-[0_12px_36px_rgba(0,0,0,0.4)]'
        }`}>
        <Image
          src={project.image}
          alt={project.alt || project.title}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className={`object-cover object-top transition-all duration-700 ${heroLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          onLoad={() => setHeroLoaded(true)}
        />
        {!heroLoaded && (
          <div className={`absolute inset-0 animate-pulse flex items-center justify-center ${isLight ? 'bg-slate-200' : 'bg-[#0d0e14]'}`}>
            <div className="w-10 h-10 rounded-full border border-current opacity-20" />
          </div>
        )}
      </div>

      {/* 3. Meta Information Bar Grid (Timeline, Klien, Kategori, Direct Site Link) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Timeline */}
        <div className={`p-5 rounded-2xl border flex items-center gap-3.5 ${isLight ? 'bg-[var(--color-surface)] border-[var(--color-border-specular)]' : 'bg-white/[0.02] border-white/10'
          }`}>
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block">Timeline Pengerjaan</span>
            <span className="text-sm font-semibold text-[var(--color-on-surface)]">{project.timeline || '3-4 Minggu'}</span>
          </div>
        </div>

        {/* Klien */}
        <div className={`p-5 rounded-2xl border flex items-center gap-3.5 ${isLight ? 'bg-[var(--color-surface)] border-[var(--color-border-specular)]' : 'bg-white/[0.02] border-white/10'
          }`}>
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
            <User className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block">Klien</span>
            <span className="text-sm font-semibold text-[var(--color-on-surface)] truncate block max-w-[150px]">{project.client || 'Exclusive Client'}</span>
          </div>
        </div>

        {/* Kategori */}
        <div className={`p-5 rounded-2xl border flex items-center gap-3.5 ${isLight ? 'bg-[var(--color-surface)] border-[var(--color-border-specular)]' : 'bg-white/[0.02] border-white/10'
          }`}>
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
            <Tag className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block">Kategori</span>
            <span className="text-sm font-semibold text-[var(--color-on-surface)] truncate block max-w-[150px]">{project.category}</span>
          </div>
        </div>

        {/* Akses Situs Button */}
        <div className={`p-3.5 rounded-2xl border flex items-center ${isLight ? 'bg-[var(--color-surface)] border-[var(--color-border-specular)]' : 'bg-white/[0.02] border-white/10'
          }`}>
          <a
            href={project.siteUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!project.siteUrl || project.siteUrl === '#') {
                e.preventDefault();
                handleWhatsAppInquiryProject(project.title);
              }
            }}
            className="w-full py-3 px-4 rounded-xl btn-gradient-tactile text-white font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span>Kunjungi Website Live</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* 4. Detailed Overview Paragraphs (Maximal 2 Paragraphs) & Features */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Detailed Overview (2 Paragraphs) */}
        <div className="lg:col-span-8 space-y-6">
          <div className={`p-7 md:p-9 rounded-3xl border space-y-5 ${isLight ? 'bg-[var(--color-surface)] border-[var(--color-border-specular)]' : 'bg-white/[0.02] border-white/10'
            }`}>
            <h3 className="text-xl md:text-2xl font-headline font-semibold text-[var(--color-on-surface)] border-b border-[var(--color-border-specular)] pb-4">
              Gambaran & Deskripsi Proyek
            </h3>

            {/* Paragraph 1 */}
            <p className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed font-sans">
              {paragraph1}
            </p>

            {/* Paragraph 2 */}
            <p className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed font-sans">
              {paragraph2}
            </p>
          </div>
        </div>

        {/* Right Column: Features checklist & CTA */}
        <div className="lg:col-span-4 space-y-6">
          <div className={`p-6 rounded-3xl border space-y-4 ${isLight ? 'bg-[var(--color-surface)] border-[var(--color-border-specular)]' : 'bg-white/[0.02] border-white/10'
            }`}>
            <h4 className="text-xs font-semibold text-[var(--color-on-surface)] uppercase tracking-wider border-b border-[var(--color-border-specular)] pb-2">
              Fitur Unggulan Proyek
            </h4>
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-text-muted)]">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Inquiry CTA */}
          <div className={`p-6 rounded-3xl border text-center space-y-4 ${isLight ? 'bg-[var(--color-surface)] border-[var(--color-border-specular)] shadow-sm' : 'bg-white/[0.02] border-white/10'
            }`}>
            <div className="flex justify-center">
              <HeartHandshake className="w-9 h-9 text-primary animate-pulse" />
            </div>
            <div>
              <h5 className="font-headline font-semibold text-[var(--color-on-surface)] text-base">Tertarik dengan Proyek Ini?</h5>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">
                Konsultasikan kebutuhan aplikasi kustom Anda bersama tim Yazidcodes.
              </p>
            </div>
            <button
              onClick={() => handleWhatsAppInquiryProject(project.title)}
              className="w-full py-3 rounded-xl btn-gradient-tactile text-white font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              Konsultasi WhatsApp
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 5. Detail Image Gallery (Full Images) */}
      <div className="space-y-6 pt-4">
        <div className="border-b border-[var(--color-border-specular)] pb-4">
          <h3 className="text-xl md:text-2xl font-headline font-semibold text-[var(--color-on-surface)]">
            Tampilan Detail & Galeri Visual
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1">
            Tampilan lengkap resolusi tinggi dari antarmuka dan modul aplikasi {project.title}.
          </p>
        </div>

        <div className="space-y-8">
          {detailImagesList.map((imgSrc, index) => (
            <div
              key={index}
              className={`w-full rounded-2xl sm:rounded-3xl border overflow-hidden relative shadow-lg ${isLight ? 'bg-[#FAFAF7] border-[var(--color-border-specular)]' : 'bg-[#101117] border-white/10'
                }`}
            >
              <img
                src={imgSrc}
                alt={`${project.title} Detail ${index + 1}`}
                className="w-full h-auto object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}

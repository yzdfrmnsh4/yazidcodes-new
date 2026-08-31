"use client";

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import ShinyText from './ShinyText';
import { useTheme } from '../lib/ThemeContext';
import Image from 'next/image';
import { Mail, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const { theme } = useTheme();

  const handleScrollToSection = (id: string) => {
    if (pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        const offset = 90;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } else {
      router.push(`/#${id}`);
    }
  };

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <footer className="relative z-10 w-full backdrop-blur-md border-t border-[var(--color-border-specular)]  mt-20 md:mt-32 overflow-hidden">

      {/* Background DOT GRID & GLOW */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Subtle dot pattern using primary class */}
        <div className="light-dot-grid" style={{ opacity: theme === 'light' ? 0.7 : 0.4 }} />
        {/* Very subtle blue radial glow behind newsletter */}
        <div className="absolute top-0 right-0 lg:right-10 w-[600px] h-[600px] bg-primary/[0.035] blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">


        {/* Middle section: Links Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-12 py-16">

          {/* Brand Block */}
          <div className="col-span-2 flex flex-col gap-6 lg:pr-8">
            <div className="flex items-center gap-2 -ml-2">
              <div className="w-12 h-12 shrink-0">
                <Image src="/web-app-manifest-512x512.png" alt="Logo Yazidcodes" width={48} height={48} className="w-full h-full" />
              </div>
              <span className="font-headline font-bold text-2xl tracking-tight text-[var(--color-on-surface)]">
                yazidcodes
              </span>
            </div>
            <p className="text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed max-w-sm mt-2">
              Building modern websites that look good, perform fast, and help businesses grow.
            </p>
            <div className="flex gap-2 -ml-2 mt-1">
              <a href="https://instagram.com/yazidcodes" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[var(--color-text-muted)] hover:text-primary transition-colors p-2 hover:bg-[var(--color-on-surface)]/5 rounded-full">
                <Instagram className="w-[18px] h-[18px]" />
              </a>
              <a href="https://linkedin.com/in/yazidcodes" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[var(--color-text-muted)] hover:text-primary transition-colors p-2 hover:bg-[var(--color-on-surface)]/5 rounded-full">
                <Linkedin className="w-[18px] h-[18px]" />
              </a>
              <a href="https://github.com/yazidcodes" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[var(--color-text-muted)] hover:text-primary transition-colors p-2 hover:bg-[var(--color-on-surface)]/5 rounded-full">
                <Github className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          {/* Col 1: Layanan */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <span className="font-headline font-semibold text-[var(--color-on-surface)] text-sm tracking-wide uppercase">
              Layanan
            </span>
            <ul className="flex flex-col gap-3 text-sm text-[var(--color-text-muted)]">
              <li>
                <button
                  onClick={() => handleScrollToSection('layanan')}
                  className="hover:text-[var(--color-on-surface)] transition-colors cursor-pointer text-left"
                >
                  Jasa Pembuatan Website
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection('layanan')}
                  className="hover:text-[var(--color-on-surface)] transition-colors cursor-pointer text-left"
                >
                  Web Design &amp; UI/UX
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection('layanan')}
                  className="hover:text-[var(--color-on-surface)] transition-colors cursor-pointer text-left"
                >
                  Sistem SaaS &amp; E-Commerce
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection('layanan')}
                  className="hover:text-[var(--color-on-surface)] transition-colors cursor-pointer text-left"
                >
                  Konsultasi &amp; Maintenance
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Karya & Produk */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <span className="font-headline font-semibold text-[var(--color-on-surface)] text-sm tracking-wide uppercase">
              Karya &amp; Produk
            </span>
            <ul className="flex flex-col gap-3 text-sm text-[var(--color-text-muted)]">
              <li>
                <button
                  onClick={() => handleNavigate('/portfolio')}
                  className="hover:text-[var(--color-on-surface)] transition-colors cursor-pointer text-left"
                >
                  Portfolio Utama
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('/products')}
                  className="hover:text-[var(--color-on-surface)] transition-colors cursor-pointer text-left"
                >
                  Digital Products Store
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('/products')}
                  className="hover:text-[var(--color-on-surface)] transition-colors cursor-pointer text-left"
                >
                  Ready-made Boilerplates
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('/products')}
                  className="hover:text-[var(--color-on-surface)] transition-colors cursor-pointer text-left"
                >
                  Aset Desain Premium
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Informasi */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <span className="font-headline font-semibold text-[var(--color-on-surface)] text-sm tracking-wide uppercase">
              Informasi
            </span>
            <ul className="flex flex-col gap-3 text-sm text-[var(--color-text-muted)]">
              <li>
                <button
                  onClick={() => handleScrollToSection('pricing')}
                  className="hover:text-[var(--color-on-surface)] transition-colors cursor-pointer text-left"
                >
                  Rencana Harga Jasa
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection('faq')}
                  className="hover:text-[var(--color-on-surface)] transition-colors cursor-pointer text-left"
                >
                  Pertanyaan Umum (FAQ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection('why-choose')}
                  className="hover:text-[var(--color-on-surface)] transition-colors cursor-pointer text-left"
                >
                  Mengapa Memilih Kami
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/628123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-on-surface)] transition-colors"
                >
                  Tanya Rencana Proyek
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Ikuti Kami */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <span className="font-headline font-semibold text-[var(--color-on-surface)] text-sm tracking-wide uppercase">
              Ikuti Kami
            </span>
            <ul className="flex flex-col gap-3 text-sm text-[var(--color-text-muted)]">
              <li>
                <a
                  href="https://instagram.com/yazidcodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-on-surface)] transition-colors"
                >
                  Instagram @yazidcodes
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/yazidcodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-on-surface)] transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yazidcodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-on-surface)] transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/628123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-on-surface)] transition-colors"
                >
                  WhatsApp Business
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider line before copyright - VERY SUBTLE */}
        <div className="w-full h-[1px] bg-[var(--color-on-surface)] opacity-10 mb-8" />

        {/* Bottom row: Copyright on left, Terms/Privacy on right */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--color-text-muted)] pb-10 md:pb-24 font-sans">
          <span>
            © 2026 yazidcodes — Crafted for the modern web.
          </span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--color-on-surface)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--color-on-surface)] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[var(--color-on-surface)] transition-colors">Cookies Settings</a>
          </div>
        </div>

        {/* HUGE WATERMARK TYPOGRAPHY AT THE ABSOLUTE BOTTOM */}
        <div className="relative select-none pointer-events-none top-2 sm:top-8 md:top-10 mt-2 -mt-4 sm:-mt-8 md:-mt-12 lg:-mt-16 flex justify-center w-full overflow-hidden sm:overflow-visible">
          <ShinyText
            text="yazidcodes"
            disabled={false}
            speed={3}
            color={theme === 'light' ? 'rgba(45, 37, 32, 0.15)' : 'rgba(255, 255, 255, 0.22)'}
            shineColor={theme === 'light' ? 'rgba(37, 99, 235, 0.8)' : 'rgba(255, 255, 255, 0.95)'}
            className="font-headline font-semibold text-center tracking-tight sm:tracking-wider uppercase leading-none text-[14vw] sm:text-[14vw] md:text-[15vw]"
            style={{
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.36) 50%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.36) 50%, rgba(0,0,0,0) 100%)'
            }}
          />
        </div>
      </div>
    </footer>
  );
}

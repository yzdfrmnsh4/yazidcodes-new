"use client";

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import CurvedInput from './CurvedInput';
import ShinyText from './ShinyText';

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 w-full bg-[#07070a]/90 backdrop-blur-md border-t border-white/5 pt-16 md:pt-24 mt-20 md:mt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top section: Newsletter & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pb-16 border-b border-white/5">
          <div className="space-y-6">
            <h2 className="font-headline font-extrabold text-2xl md:text-4xl text-white tracking-tight leading-tight">
              Ingin Dapatkan Boilerplate &amp;<br />Update Tech Terbaru?
            </h2>
            <p className="text-text-muted text-sm md:text-base max-w-md leading-relaxed">
              Daftarkan email Anda untuk berlangganan newsletter bulanan tentang tips optimasi performa web, diskon produk, dan rilis boilerplate baru.
            </p>
          </div>
          
          <div className="flex flex-col items-start lg:items-end gap-6">
            <div className="w-full sm:w-[420px] max-w-full">
              <CurvedInput
                placeholder="Masukkan email Anda..."
                buttonText="Subscribe"
                theme="dark"
                bend={18}
                height={56}
                fontSize={14}
                buttonColor="var(--color-primary, #6366f1)"
                borderColor="rgba(255, 255, 255, 0.08)"
                backgroundColor="#111218"
                onSubmit={(email) => {
                  alert(`Terima kasih! Email ${email} berhasil didaftarkan.`);
                }}
              />
            </div>
            <p className="font-sans text-xs text-text-muted/70 text-left lg:text-right max-w-xs leading-normal">
              Wawasan seputar boilerplate terbaru, tips performa website, dan penawaran eksklusif dikirim langsung ke email Anda.
            </p>
          </div>
        </div>

        {/* Middle section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 py-16">
          {/* Col 1: Layanan */}
          <div className="flex flex-col gap-4">
            <span className="font-headline font-bold text-white text-sm tracking-wide uppercase">
              Layanan
            </span>
            <ul className="flex flex-col gap-3 text-xs md:text-sm text-text-muted">
              <li>
                <button 
                  onClick={() => handleScrollToSection('layanan')}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  Jasa Pembuatan Web
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection('layanan')}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  Desain UI/UX Eksklusif
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection('layanan')}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  Sistem SaaS &amp; E-Commerce
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection('layanan')}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  Konsultasi &amp; Maintenance
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Karya & Produk */}
          <div className="flex flex-col gap-4">
            <span className="font-headline font-bold text-white text-sm tracking-wide uppercase">
              Karya &amp; Produk
            </span>
            <ul className="flex flex-col gap-3 text-xs md:text-sm text-text-muted">
              <li>
                <button 
                  onClick={() => handleNavigate('/portfolio')}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  Portofolio Utama
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigate('/products')}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  Digital Products Store
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigate('/products')}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  Ready-made Boilerplates
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigate('/products')}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  Aset Desain Premium
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Informasi */}
          <div className="flex flex-col gap-4">
            <span className="font-headline font-bold text-white text-sm tracking-wide uppercase">
              Informasi
            </span>
            <ul className="flex flex-col gap-3 text-xs md:text-sm text-text-muted">
              <li>
                <button 
                  onClick={() => handleScrollToSection('pricing')}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  Rencana Harga Jasa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection('faq')}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  Pertanyaan Umum (FAQ)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection('why-choose')}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  Mengapa Memilih Kami
                </button>
              </li>
              <li>
                <a 
                  href="https://wa.me/628123456789" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors"
                >
                  Tanya Rencana Proyek
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Sosial Media */}
          <div className="flex flex-col gap-4">
            <span className="font-headline font-bold text-white text-sm tracking-wide uppercase">
              Ikuti Kami
            </span>
            <ul className="flex flex-col gap-3 text-xs md:text-sm text-text-muted">
              <li>
                <a 
                  href="https://instagram.com/yazidcodes" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors"
                >
                  Instagram @yazidcodes
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/yazidcodes" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a 
                  href="https://lynk.id/yazidcodes" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors"
                >
                  Lynk.id Link-in-Bio
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/628123456789" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp Business
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider line before copyright */}
        <div className="w-full h-[1px] bg-white/5 mb-8" />

        {/* Bottom row: Copyright on left, Terms/Privacy on right */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted pb-16 md:pb-24">
          <span>
            © {new Date().getFullYear()} yazidcodes. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies Settings</a>
          </div>
        </div>

        {/* HUGE WATERMARK TYPOGRAPHY AT THE ABSOLUTE BOTTOM */}
        <div className="relative select-none pointer-events-none mt-8 md:mt-12 lg:mt-16 mb-[-1.5rem] md:mb-[-3rem] lg:mb-[-4.5rem] flex justify-center w-full">
          <ShinyText
            text="yazidcodes"
            disabled={false}
            speed={3}
            color="rgba(255, 255, 255, 0.22)"
            shineColor="rgba(255, 255, 255, 0.95)"
            className="font-headline font-black text-center tracking-wider uppercase leading-none text-[15vw] w-full"
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

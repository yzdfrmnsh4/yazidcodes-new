"use client";

import React, { useState, useEffect, useRef } from 'react';
import type { gsap as GsapType } from 'gsap';
import { Sparkles, MessageSquareText, Send, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../lib/ThemeContext';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { handleOpenInquiry } from '../lib/utils';
import StarBorder from './StarBorder';

type CardNavLink = {
  label: string;
  ariaLabel: string;
  id: string;
};

type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  // Map path to view for active styles
  let currentView: 'home' | 'portfolio' | 'products' | 'portfolio-detail' | 'product-detail' = 'home';
  if (pathname === '/portfolio') {
    currentView = 'portfolio';
  } else if (pathname.startsWith('/portfolio/')) {
    currentView = 'portfolio-detail';
  } else if (pathname === '/products') {
    currentView = 'products';
  } else if (pathname.startsWith('/products/')) {
    currentView = 'product-detail';
  }

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (currentView !== 'home') return;

    const sections = ['hero', 'layanan', 'pricing', 'faq'];

    const handleScrollActive = () => {
      const scrollPosition = window.scrollY + 200;
      let currentSection = 'hero';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          if (scrollPosition >= element.offsetTop) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScrollActive);
    handleScrollActive();

    return () => window.removeEventListener('scroll', handleScrollActive);
  }, [currentView]);

  const handleItemClick = (id: string) => {
    setIsHamburgerOpen(false);
    setIsExpanded(false);

    if (id === 'portfolio') {
      router.push('/portfolio');
    } else if (id === 'products') {
      router.push('/products');
    } else {
      // It's a homepage anchor
      if (pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          const offset = scrolled ? 90 : 110;
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
    }
  };

  const items: CardNavItem[] = [
    {
      label: 'About',
      bgColor: 'rgba(30, 41, 59, 0.45)',
      textColor: '#fff',
      links: [
        { label: 'Home', ariaLabel: 'Go to Home', id: 'hero' },
        { label: 'Layanan', ariaLabel: 'Go to Layanan', id: 'layanan' }
      ]
    },
    {
      label: 'Projects',
      bgColor: 'rgba(15, 23, 42, 0.45)',
      textColor: '#fff',
      links: [
        { label: 'Portfolios', ariaLabel: 'Go to Portfolios', id: 'portfolio' },
        { label: 'Products', ariaLabel: 'Go to Products', id: 'products' }
      ]
    },
    {
      label: 'Information',
      bgColor: 'rgba(24, 24, 27, 0.45)',
      textColor: '#fff',
      links: [
        { label: 'Pricing', ariaLabel: 'Go to Pricing', id: 'pricing' },
        { label: 'FAQ', ariaLabel: 'Go to FAQ', id: 'faq' }
      ]
    }
  ];

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 280;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        // Read scrollHeight for accurate content layout size
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        const topBar = 72;
        const padding = 20;
        return topBar + contentHeight + padding;
      }
    }
    return 280; // Larger expanded height for desktop
  };

  // Perform smooth and immediate anims on toggle
  useEffect(() => {
    const navEl = navRef.current;
    if (!navEl) return;

    import('gsap').then(({ gsap }) => {
      if (isExpanded) {
        const targetHeight = calculateHeight();

        gsap.to(navEl, {
          height: targetHeight,
          duration: 0.3,
          ease: 'power3.out',
          overwrite: 'auto'
        });

        gsap.to(cardsRef.current, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.28,
          ease: 'power2.out',
          stagger: 0.04,
          overwrite: 'auto'
        });
      } else {
        gsap.to(navEl, {
          height: 72,
          duration: 0.25,
          ease: 'power3.inOut',
          overwrite: 'auto'
        });

        gsap.to(cardsRef.current, {
          y: 15,
          opacity: 0,
          scale: 0.97,
          duration: 0.2,
          ease: 'power2.in',
          stagger: 0.02,
          overwrite: 'auto'
        });
      }
    });
  }, [isExpanded]);

  // Handle immediate window resize updates
  useEffect(() => {
    const handleResize = () => {
      if (isExpanded && navRef.current) {
        const newHeight = calculateHeight();
        import('gsap').then(({ gsap }) => {
          gsap.set(navRef.current!, { height: newHeight });
        });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
    } else {
      setIsHamburgerOpen(false);
      setIsExpanded(false);
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) {
      cardsRef.current[i] = el;
    }
  };

  return (
    <div className="card-nav-container fixed inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[90%] max-w-[880px] z-[99] top-4 md:top-[2em]">
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} block h-[72px] p-0 rounded-2xl relative overflow-hidden will-change-[height] liquid-glass`}
      >
        {/* Top bar (Always visible, enlarged to 72px) */}
        <div className="card-nav-top absolute inset-x-0 top-0 h-[72px] flex items-center justify-between px-3 md:px-5 z-[10]">

          {/* Logo Container */}
          <div
            className="logo-container flex items-center cursor-pointer group gap-1.5 md:gap-2.5 py-1.5 px-2 md:py-2 md:px-3 rounded-xl active:scale-95 transition-all md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
            onClick={() => handleItemClick('hero')}
          >
            <div className="w-14 h-14 ">
              <Image src="/web-app-manifest-512x512.png" alt="Logo Yazidcodes" width={56} height={56} className='w-full h-full' priority />
            </div>
            <span className="font-headline font-semibold text-sm md:text-xl tracking-tight text-[var(--color-on-surface)] group-hover:text-primary transition-colors">
              yazidcodes
            </span>
          </div>

          {/* Desktop Only: Hamburger on the left */}
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group h-12 w-12 hidden md:flex flex-col items-center justify-center cursor-pointer gap-[6px] rounded-xl btn-hamburger-tactile transition-all`}
            onClick={toggleMenu}
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
              }
            }}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            aria-expanded={isExpanded}
            tabIndex={0}
          >
            <div
              className={`hamburger-line w-[24px] h-[2px] bg-white transition-[transform,opacity,margin] duration-250 ease-out [transform-origin:50%_50%] ${isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''
                } group-hover:opacity-100 opacity-90`}
            />
            <div
              className={`hamburger-line w-[24px] h-[2px] bg-white transition-[transform,opacity,margin] duration-250 ease-out [transform-origin:50%_50%] ${isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''
                } group-hover:opacity-100 opacity-90`}
            />
          </div>

          {/* Mobile Only actions container (Right aligned on mobile) */}
          <div className="flex items-center gap-1.5 md:hidden">
            {/* Theme Toggle Button (Mobile) */}
            <button
              onClick={toggleTheme}
              className="btn-theme-toggle w-9 h-9 shrink-0 md:w-10 md:h-10"
              aria-label="Toggle theme"
            >
              <div className={`icon-wrapper absolute transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${theme === 'dark' ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`}>
                <Sun className="w-[18px] h-[18px]" />
              </div>
              <div className={`icon-wrapper absolute transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${theme === 'light' ? 'rotate-0 opacity-100 scale-100' : 'rotate-90 opacity-0 scale-50'}`}>
                <Moon className="w-[18px] h-[18px]" />
              </div>
            </button>

            {/* Contact CTA Button (Compact on mobile) */}
            <button
              onClick={() => {
                setIsExpanded(false);
                setIsHamburgerOpen(false);
                handleOpenInquiry();
              }}
              className="hidden px-3.5 py-2 rounded-xl text-white font-semibold text-[11px] gap-1.5 cursor-pointer transition-all"
            >
              Hubungi Saya
              <Send className="w-3.5 h-3.5" />
            </button>

            {/* Hamburger on mobile */}
            <div
              className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group h-10 w-10 flex flex-col items-center justify-center cursor-pointer gap-[5px] rounded-xl btn-hamburger-tactile transition-all`}
              onClick={toggleMenu}
              role="button"
              aria-label={isExpanded ? 'Close menu' : 'Open menu'}
              aria-expanded={isExpanded}
              tabIndex={0}
            >
              <div
                className={`hamburger-line w-[20px] h-[2px] bg-white transition-[transform,opacity,margin] duration-250 ease-out [transform-origin:50%_50%] ${isHamburgerOpen ? 'translate-y-[3.5px] rotate-45' : ''
                  }`}
              />
              <div
                className={`hamburger-line w-[20px] h-[2px] bg-white transition-[transform,opacity,margin] duration-250 ease-out [transform-origin:50%_50%] ${isHamburgerOpen ? '-translate-y-[3.5px] -rotate-45' : ''
                  }`}
              />
            </div>
          </div>

          {/* Desktop Only: Theme Toggle + Contact CTA */}
          <div className="hidden md:flex items-center gap-2">
            {/* Theme Toggle Button (Desktop) */}
            <button
              onClick={toggleTheme}
              className="btn-theme-toggle w-10 h-10 group shrink-0"
              aria-label="Toggle theme"
            >
              <div className={`icon-wrapper absolute transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-rotate-[15deg] ${theme === 'dark' ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`}>
                <Sun className="w-5 h-5" />
              </div>
              <div className={`icon-wrapper absolute transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:rotate-[15deg] ${theme === 'light' ? 'rotate-0 opacity-100 scale-100' : 'rotate-90 opacity-0 scale-50'}`}>
                <Moon className="w-[18px] h-[18px]" />
              </div>
            </button>

            {/* Contact CTA Button */}
            <button
              onClick={() => {
                setIsExpanded(false);
                setIsHamburgerOpen(false);
                handleOpenInquiry();
              }}
              className="btn-gradient-tactile px-6 py-2.5 rounded-xl text-white font-semibold text-sm items-center gap-2 group cursor-pointer transition-all flex"
            >
              Hubungi Saya
              <Send className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:rotate-6 transition-transform" />
            </button>
          </div>
         
        </div>

        {/* Expandable Navigation content */}
        <div
          className={`card-nav-content absolute left-0 right-0 top-[72px] bottom-0 p-3.5 flex flex-col items-stretch gap-3 justify-start z-[5] ${isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
            } md:flex-row md:items-stretch md:gap-[16px]`}
          aria-hidden={!isExpanded}
        >
          {items.map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card select-none relative flex flex-col justify-between gap-2.5 p-4 rounded-xl min-w-0 flex-[1_1_auto] h-auto md:h-full md:min-h-0 md:flex-[1_1_0%] bg-[var(--color-surface)]/90 backdrop-blur-3xl border border-[var(--color-border-specular)] hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)] transition-all duration-300"
              ref={setCardRef(idx)}
            >
              <div className="nav-card-label font-headline font-semibold tracking-tight text-[var(--color-text-muted)] md:text-[var(--color-on-surface)] uppercase md:normal-case text-[11px] md:text-[21px]">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-row md:flex-col gap-3 md:gap-2.5">
                {item.links?.map((lnk, i) => {
                  const isActive =
                    (lnk.id === 'portfolio' && currentView === 'portfolio') ||
                    (lnk.id === 'products' && currentView === 'products') ||
                    (currentView === 'home' && lnk.id === activeSection);

                  return (
                    <button
                      key={`${lnk.label}-${i}`}
                      className={`nav-card-link inline-flex items-center gap-1.5 md:gap-2 no-underline cursor-pointer transition-all duration-250 text-[13.5px] md:text-[16px] font-sans font-semibold text-left flex-1 md:flex-none py-1 md:py-0 hover:-translate-y-0.5 active:translate-y-0.5 ${isActive ? 'text-primary' : 'text-[var(--color-text-muted)] hover:text-[var(--color-on-surface)]'
                        }`}
                      onClick={() => handleItemClick(lnk.id)}
                      aria-label={lnk.ariaLabel}
                    >
                      <ArrowUpRight className="nav-card-link-icon shrink-0 w-3.5 h-3.5 md:w-4 md:h-4 text-primary/80" aria-hidden="true" />
                      {lnk.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}

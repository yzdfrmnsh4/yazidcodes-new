"use client";

import React, { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Sparkles,
  Zap,
  Clock,
  HeartHandshake,
  Pencil,
  Code2,
  Rocket,
  Monitor,
} from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import dynamic from 'next/dynamic';

const SocialProofMarquee = dynamic(() => import('../components/SocialProofMarquee'), { ssr: false });
const ServiceCard = dynamic(() => import('../components/ServiceCard'));
const ProjectShowcase = dynamic(() => import('../components/ProjectShowcase'), { ssr: false });
const ProductCard = dynamic(() => import('../components/ProductCard'), { ssr: false });
const PlanCard = dynamic(() => import('../components/PlanCard'));
const Beams = dynamic(() => import('../components/Beams'), { ssr: false });
const WhyChooseBento = dynamic(() => import('../components/WhyChooseBento'));
const BorderGlow = dynamic(() => import('../components/BorderGlow'), { ssr: false });
const BlurText = dynamic(() => import('../components/BlurText'));
const StarBorder = dynamic(() => import('../components/StarBorder'));
const ShinyText = dynamic(() => import('../components/ShinyText'));
const StatCounter = dynamic(() => import('../components/StatCounter'), { ssr: false });

import { SERVICES, PORTFOLIO, PRODUCTS, PLANS, FAQS } from '../lib/data';
import { handleOpenInquiry } from '../lib/utils';
import { useTheme } from '../lib/ThemeContext';

/** Light-Mode text selection highlight wrapper for "Profesional" in Hero headline.
 * Uses real DOM elements for handle lines and circles, which are toggled by Light Mode CSS.
 */
const ProfesionalHighlight = ({ children }: { children: React.ReactNode }) => (
  <span className="text-selection-highlight">
    {children}
    {/* Left handle: vertical line + top-left circle */}
    <span className="sel-handle sel-handle-left" aria-hidden="true">
      <span className="sel-dot sel-dot-top" />
    </span>
    {/* Right handle: vertical line + bottom-right circle */}
    <span className="sel-handle sel-handle-right" aria-hidden="true">
      <span className="sel-dot sel-dot-bottom" />
    </span>
  </span>
);

/** Decorative sticky note — renders only in Light Mode. */
const HeroStickyNote = ({
  label,
  desc,
  icon,
  rotation,
  delay = 0,
  style,
  theme,
  colors,
  pinColor = 'red',
  anchorPosition,
}: {
  label: string;
  desc?: string;
  icon?: React.ReactNode;
  rotation: number;
  delay?: number;
  style?: React.CSSProperties;
  theme: string;
  colors: {
    bgFrom: string;
    bgTo: string;
    border: string;
    ink: string;
    rule: string;
    anchorBg: string;
    iconColor: string;
  };
  pinColor?: 'red' | 'blue';
  anchorPosition?: 'right' | 'right-top' | 'left' | 'left-top';
}) => {
  if (theme !== 'light') return null;
  const transform = `rotate(${rotation}deg)`;
  return (
    <div
      aria-hidden="true"
      className="hero-sticky-note"
      style={{
        '--sn-transform': transform,
        '--sn-bg-from': colors.bgFrom,
        '--sn-bg-to': colors.bgTo,
        '--sn-border-color': colors.border,
        '--sn-ink': colors.ink,
        '--sn-rule-color': colors.rule,
        '--sn-anchor-bg': colors.anchorBg,
        animationDelay: `${delay}ms`,
        ...style,
      } as React.CSSProperties}
    >
      {/* 3D push pin */}
      <span className={`hero-sticky-pin ${pinColor === 'blue' ? 'pin-blue' : ''}`} />

      {/* Connector Anchor Dot */}
      {anchorPosition && <span className={`hero-sticky-anchor-dot anchor-${anchorPosition}`} />}

      {/* Icon */}
      {icon && <div className="hero-sticky-note-icon">{icon}</div>}

      {/* Inner paper content area */}
      <div className="hero-sticky-note-body">
        <span className="hero-sticky-note-label">{label}</span>
        {desc && <p className="hero-sticky-note-desc">{desc}</p>}
      </div>
    </div>
  );
};

/** Muted color palettes for each sticky note */
const STICKY_COLORS = {
  orange: {
    bgFrom: '#FFF4ED',
    bgTo: '#FAFAF7',
    border: 'rgba(234, 88, 12, 0.22)',
    ink: '#431407',
    rule: 'rgba(234, 88, 12, 0.14)',
    anchorBg: '#F97316',
    iconColor: '#EA580C',
  },
  blue: {
    bgFrom: '#EFF6FF',
    bgTo: '#FAFAF7',
    border: 'rgba(37, 99, 235, 0.22)',
    ink: '#172554',
    rule: 'rgba(37, 99, 235, 0.14)',
    anchorBg: '#3B82F6',
    iconColor: '#2563EB',
  },
  cream: {
    bgFrom: '#FEFCE8',
    bgTo: '#FAFAF7',
    border: 'rgba(202, 138, 4, 0.22)',
    ink: '#422006',
    rule: 'rgba(202, 138, 4, 0.14)',
    anchorBg: '#F59E0B',
    iconColor: '#D97706',
  },
  green: {
    bgFrom: '#F0FDF4',
    bgTo: '#FAFAF7',
    border: 'rgba(22, 163, 74, 0.22)',
    ink: '#052E16',
    rule: 'rgba(22, 163, 74, 0.14)',
    anchorBg: '#22C55E',
    iconColor: '#16A34A',
  },
} as const;


export default function HomeClient() {
  const router = useRouter();
  const { theme } = useTheme();
  // Interactive FAQ active item state
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const handleToggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  const handleScrollToSection = (id: string) => {
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
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="relative z-10"
    >
      {/* HERO SECTION */}
      <section id="hero" className="relative w-full overflow-hidden pt-36 md:pt-48 pb-12 md:pb-24">
        {/* Background gradient conditional */}
        {theme === 'dark' ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-indigo-950/15 via-[var(--color-background)]/90 to-[var(--color-background)]" />
            {/* Beams Background with Smooth Edge Masks */}
            <div
              className="absolute top-0 bottom-0 -left-[15%] w-[130%] z-0 pointer-events-none opacity-45 select-none"
              style={{
                maskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)',
              }}
            >
              <Beams
                beamWidth={2}
                beamHeight={16}
                beamNumber={16}
                lightColor="#4f46e5"
                speed={1.5}
                noiseIntensity={1.8}
                scale={0.25}
                rotation={15}
              />
            </div>
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[var(--color-background)]" />
            {/* Subtle Editorial Grid Overlay with Radial Fade — slightly higher line contrast */}
            <div
              className="absolute inset-0 pointer-events-none select-none z-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(45, 37, 32, 0.09) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(45, 37, 32, 0.09) 1px, transparent 1px)
                `,
                backgroundSize: '44px 44px',
                maskImage: 'radial-gradient(ellipse 82% 70% at 50% 48%, black 20%, transparent 78%)',
                WebkitMaskImage: 'radial-gradient(ellipse 82% 70% at 50% 48%, black 20%, transparent 78%)',
              }}
            />
            {/* Decorative Sticky Notes — Light Mode only, hidden on mobile */}
            <div className="hidden lg:block">
              {/* LEFT TOP: Custom Design */}
              <HeroStickyNote
                label="CUSTOM DESIGN"
                desc="Desain website yang dibuat sesuai karakter dan identitas brand Anda."
                icon={<Pencil className="w-5 h-5" style={{ color: STICKY_COLORS.orange.iconColor }} />}
                rotation={-3}
                delay={580}
                theme={theme}
                colors={STICKY_COLORS.orange}
                pinColor="red"
                anchorPosition="right"
                style={{ top: '18%', left: '3.5%' }}
              />
              {/* LEFT LOWER: SEO-Friendly */}
              <HeroStickyNote
                label="SEO-FRIENDLY"
                desc="Struktur website yang siap dioptimalkan untuk mesin pencari dan membantu meningkatkan visibilitas bisnis."
                icon={<Code2 className="w-5 h-5" style={{ color: STICKY_COLORS.blue.iconColor }} />}
                rotation={2}
                delay={720}
                theme={theme}
                colors={STICKY_COLORS.blue}
                pinColor="blue"
                anchorPosition="right-top"
                style={{ top: '54%', left: '4.5%' }}
              />
              {/* RIGHT TOP: Fast Performance */}
              <HeroStickyNote
                label="FAST PERFORMANCE"
                desc="Website cepat dan ringan untuk memberikan pengalaman terbaik bagi setiap pengunjung."
                icon={<Rocket className="w-5 h-5" style={{ color: STICKY_COLORS.cream.iconColor }} />}
                rotation={4}
                delay={660}
                theme={theme}
                colors={STICKY_COLORS.cream}
                pinColor="red"
                anchorPosition="left"
                style={{ top: '16%', right: '3.5%' }}
              />
              {/* RIGHT LOWER: Responsive */}
              <HeroStickyNote
                label="RESPONSIVE"
                desc="Tampilan optimal di desktop, tablet, dan smartphone untuk semua pengguna."
                icon={<Monitor className="w-5 h-5" style={{ color: STICKY_COLORS.green.iconColor }} />}
                rotation={-2}
                delay={800}
                theme={theme}
                colors={STICKY_COLORS.green}
                pinColor="red"
                anchorPosition="left-top"
                style={{ top: '52%', right: '4.5%' }}
              />
              {/* Curved dashed connector lines between note pairs — top-left ↔ bottom-left & top-right ↔ bottom-right */}
              <svg
                className="hero-connector-lines"
                viewBox="0 0 1000 600"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Left connector: Top-Left note anchor dot → curves inward toward headline → Bottom-Left note anchor dot */}
                <path
                  d="M 180 188 C 265 165, 265 325, 192 360"
                  stroke="rgba(160, 155, 145, 0.32)"
                  strokeWidth="1.6"
                  strokeDasharray="6 5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
                {/* Right connector: Top-Right note anchor dot → curves inward toward headline → Bottom-Right note anchor dot */}
                <path
                  d="M 820 178 C 735 155, 735 315, 808 350"
                  stroke="rgba(160, 155, 145, 0.32)"
                  strokeWidth="1.6"
                  strokeDasharray="6 5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </>
        )}

        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--color-background)] via-[var(--color-background)]/40 to-transparent z-[2] pointer-events-none" />

        <div className="relative z-10 px-6 md:px-12">
          <div className="text-center mb-2 md:mb-2">
            <span className="inline-block px-3.5 py-1.5 rounded-[10px] bg-[var(--color-on-surface)]/[0.03] border border-[var(--color-border-specular)] text-[10px] sm:text-[11px] font-semibold text-[var(--color-text-muted)] tracking-widest uppercase">
              Solusi Digital Untuk Bisnis
            </span>
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.25] md:leading-[1.1] tracking-tight max-w-5xl mx-auto text-center mb-6">
            <BlurText
              text="Jasa Pembuatan Website Profesional & Modern"
              delay={120}
              animateBy="words"
              direction="top"
              highlightWords={["Profesional"]}
              highlightClassName="text-[var(--color-primary)] italic font-semibold px-1"
              highlightWrapper={ProfesionalHighlight}
            />
          </h1>

          <p className="font-sans text-sm sm:text-lg md:text-xl text-[var(--color-text-muted)] mb-3 max-w-2xl mx-auto leading-relaxed text-center">
            Kami membantu bisnis membangun website profesional yang cepat, responsive, dan dirancang sesuai kebutuhan brand untuk meningkatkan kredibilitas serta menjangkau lebih banyak pelanggan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-8 relative z-20 justify-center">
            <button
              onClick={() => handleOpenInquiry()}
              className="w-full sm:w-auto px-8 py-2 rounded-xl btn-gradient-tactile text-white font-semibold text-base cursor-pointer group flex items-center justify-center gap-2.5"
            >
              <img src="icon/WA.webp" alt="WhatsApp" className="w-10 h-10 object-cover drop-shadow-md group-hover:scale-110 transition-transform" />
              Konsultasi Gratis via WA
            </button>
            <button
              onClick={() => handleNavigate('/portfolio')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl btn-hamburger-tactile text-white font-semibold text-base cursor-pointer group flex items-center justify-center gap-2"
            >
              Lihat Portofolio
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="relative mb-28 md:mb-40 overflow-hidden bg-[var(--color-background)]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[400px] bg-gradient-to-b from-[#4f46e5]/[0.06] to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
        <SocialProofMarquee />
      </section>

      {/* SERVICES */}
      <motion.section
        id="layanan"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-6 md:px-12 mb-28 md:mb-40"
      >
        <div className="light-dot-grid" />
        <div className="absolute -left-1/4 top-1/4 w-[600px] h-[600px] bg-indigo-500/[0.03] blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '12s' }} />

        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-headline text-3xl md:text-5xl font-semibold text-[var(--color-on-surface)] mb-4 tracking-tight"
          >
            Layanan Pembuatan Website & Solusi Digital
          </motion.h2>
          <p className="text-[var(--color-text-muted)] text-base md:text-lg max-w-3xl leading-relaxed text-center mx-auto">
            Dari desain UI/UX hingga website cepat dan responsif, kami membantu membangun solusi digital yang sesuai dengan kebutuhan bisnis Anda.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary mx-auto rounded-full opacity-80"
          ></motion.div>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
            >
              <ServiceCard
                service={service}
                onOpenInquiry={handleOpenInquiry}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* PORTFOLIO HIGHLIGHT (Now showing Digital Products using ProductCard) */}
      <motion.section
        id="portfolio"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-6 md:px-12 mb-28 md:mb-40"
      >
        <div className="light-editorial-grid" />
        <div className="absolute -right-1/4 top-0 w-[700px] h-[700px] bg-purple-500/[0.03] blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '15s', animationDelay: '3s' }} />
        <div className="absolute -left-1/4 bottom-0 w-[600px] h-[600px] bg-primary/[0.02] blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-widest block mb-2">Aset Digital Premium</span>
            <h2 className="font-headline text-3xl md:text-5xl font-semibold text-[var(--color-on-surface)] mb-4 tracking-tight">
              Produk Digital Pilihan
            </h2>
            <p className="text-[var(--color-text-muted)] text-base md:text-lg max-w-xl leading-relaxed">
              Template, boilerplate, dan resource coding siap pakai untuk membantu Anda membangun project lebih cepat, tanpa harus memulai semuanya dari nol.
            </p>
          </motion.div>

          <Link
            href="/products"
            className="text-white font-semibold flex items-center gap-2 group text-sm md:text-base btn-gradient-tactile rounded-xl px-5 py-2.5 cursor-pointer inline-flex"
          >
            Eksplor Semua Produk ({PRODUCTS.length})
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* Cards Grid for Products */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10 px-0 md:px-6"
        >
          {PRODUCTS.slice(0, 3).map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
            >
              <ProductCard
                product={product}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* PRODUCTS HIGHLIGHT / PORTFOLIO SHOWCASE */}
      <motion.section
        id="products"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl mx-auto px-2.5 sm:px-4 md:px-5 mb-28 md:mb-40 relative overflow-hidden"
      >
        {/* Section Header (Constrained to max-w-7xl) */}
        <div className=" px-6 md:px-8 flex flex-col md:flex-row justify-between items-center mb-10 md:mb-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-widest block mb-2">Showcase Karya Terbaik</span>
            <h2 className="font-headline text-3xl md:text-5xl font-semibold text-[var(--color-on-surface)] mb-4 tracking-tight">
              Portfolio Website & Project Terpilih
            </h2>
            <p className="text-[var(--color-text-muted)] text-sm md:text-base max-w-xl leading-relaxed">
              Eksplorasi website, aplikasi, dan project digital yang kami bangun dengan fokus pada desain, performa, dan pengalaman pengguna.
            </p>
          </motion.div>

          <Link
            href="/portfolio"
            className="mt-6 md:mt-0 px-6 py-3 rounded-xl btn-gradient-tactile text-white text-xs md:text-sm font-semibold flex items-center gap-2 cursor-pointer inline-flex"
          >
            Semua Portofolio ({PORTFOLIO.length})
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>

        {/* Project Showcase Full Width Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 w-full"
        >
          <ProjectShowcase
            projects={PORTFOLIO}
          />
        </motion.div>
      </motion.section>

      {/* PRICING PLANS */}
      <motion.section
        id="pricing"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 md:px-12 mb-28 md:mb-40 relative"
      >
        <div className="light-dot-grid" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-widest block mb-2">Flexible Investment</span>
          <h2 className="font-headline text-3xl md:text-5xl font-semibold text-[var(--color-on-surface)] mb-4 tracking-tight">
            Pilih Paket Website yang Sesuai Kebutuhan Anda
          </h2>
          <p className="text-[var(--color-text-muted)] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Pilih paket website sesuai kebutuhan bisnis Anda — dari landing page profesional hingga website dengan fitur dan sistem custom.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start"
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
              className="h-full"
            >
              <PlanCard
                plan={plan}
                onSelectPlan={handleOpenInquiry}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* WHY CHOOSE US */}
      <motion.section
        id="why-choose"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-6 md:px-12 mb-40 md:mb-48"
      >
        <div className="light-editorial-grid" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-20">
          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-widest block mb-4">WHY YAZIDCODES</span>
            <h2 className="font-headline text-4xl md:text-5xl font-semibold text-[var(--color-on-surface)] mb-6 tracking-tight leading-tight">
              Kenapa Memilih Yazidcodes?
            </h2>
            <p className="text-[var(--color-text-muted)] text-base md:text-lg leading-relaxed max-w-lg">
              Dari landing page hingga website dengan sistem custom, setiap project kami dirancang dengan fokus pada desain, performa, dan kebutuhan bisnis Anda.
            </p>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-8 md:gap-12"
          >
            <StatCounter value={20} label="Clients Aktif" suffix="+" duration={2} />
            <StatCounter value={4} label="Tahun Pengalaman" suffix="+" duration={2} />
          </motion.div>
        </div>

        <WhyChooseBento />
      </motion.section>

      {/* FAQ ACCORDION */}
      <section id="faq" className="relative max-w-6xl mx-auto px-6 md:px-12 mb-28 md:mb-54">
        <div className="light-dot-grid" />
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-widest block mb-2">Tanya Jawab</span>
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-[var(--color-on-surface)] tracking-tight">
            Pertanyaan Umum
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start"
        >
          {FAQS.map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <motion.div
                key={faq.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                }}
                className="glass-card rounded-2xl overflow-hidden transition-all duration-300 border border-[var(--color-border-specular)]"
              >
                <button
                  onClick={() => handleToggleFaq(faq.id)}
                  className="w-full text-left p-6 cursor-pointer font-semibold flex justify-between items-center text-[var(--color-on-surface)] text-base md:text-lg font-headline transition-colors hover:text-primary"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-text-muted transition-transform duration-300 shrink-0 ml-4 ${isOpen ? 'rotate-180 text-primary' : 'rotate-0'
                      }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-white/5 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                >
                  <div className="p-6 text-[var(--color-text-muted)] text-sm md:text-base leading-relaxed bg-[var(--color-surface-container)]/50 font-sans">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* CALL TO ACTION SECTION */}
      {/* CALL TO ACTION SECTION */}
      <section id="cta" className="max-w-7xl mx-auto px-6 md:px-12 my-20  relative ">
        <div className="light-dot-grid" />
        <div className="absolute -left-12 -top-12 w-64 h-64 bg-primary/15 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-secondary/15 blur-3xl rounded-full pointer-events-none" />

        <BorderGlow
          edgeSensitivity={30}
          glowColor={theme === 'light' ? '217 90 60' : '244 80 80'}
          backgroundColor="transparent"
          borderRadius={32}
          glowRadius={50}
          glowIntensity={theme === 'light' ? 0.8 : 1.2}
          coneSpread={25}
          animated={true}
          colors={
            theme === 'light'
              ? ['#2563eb', '#38bdf8', '#818cf8']
              : ['#b8c4ff', '#ff9191', '#38bdf8']
          }
          className="w-full relative overflow-visible liquid-glass rounded-[32px] md:rounded-[36px]"
        >
          {/* MOCKUP CLIP CONTAINER - covers the card exactly matching its raw edges. 
              The clip-path allows massive overflow on top/sides but cleanly clips at bottom: 0px. */}
          <div
            className="absolute inset-0 z-20 pointer-events-none hidden md:block"
            style={{ clipPath: 'inset(-1200px -200px 0px -200px)' }}
          >
            {/* Mockup wrapper perfectly touches bottom-0 of the exterior root card */}
            <div className="absolute right-4 lg:right-10 xl:right-16 bottom-0 flex flex-col items-center justify-end w-[380px] ">
              {/* Ambient glow behind phone */}
              <div className="absolute inset-0 bg-blue-500/12 dark:bg-blue-400/15 blur-3xl rounded-[100px] scale-75 translate-y-32" />

              {/* Image is shifted down to reveal the top entirely while the bottom gets chopped flush by the card's boundary */}
              <Image
                src="/mockup.webp"
                alt="Yazidcodes iMessage Showcase Mockup"
                width={380}
                height={760}
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.30)] translate-y-[20%] md:translate-y-[25%] lg:translate-y-[28%] xl:translate-y-[32%]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 w-full py-10 px-6 sm:px-10 md:py-12 md:px-14 lg:py-14 lg:px-16">
            {/* LEFT CONTENT: constrained width to leave space for the overlapping mockup */}
            <div className="lg:col-span-7 md:max-w-[85%] lg:max-w-none text-left flex flex-col justify-center items-start">
              <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-widest block mb-2.5">
                Solusi Digital Terpercaya
              </span>

              <h2 className="font-headline text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[var(--color-on-surface)] mb-4 tracking-tight leading-[1.15]">
                Punya Ide Website? Mari Wujudkan Bersama
              </h2>

              <p className="font-sans text-[var(--color-text-muted)] text-sm sm:text-base md:text-lg mb-7 max-w-md lg:max-w-lg leading-relaxed font-medium">
                Konsultasikan kebutuhan digital Anda secara gratis dengan kami. Dapatkan website premium berkinerja tinggi yang dirancang khusus untuk mempercepat pertumbuhan bisnis Anda.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-stretch sm:items-center">
                <button
                  onClick={() => handleOpenInquiry('General')}
                  className="px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl btn-gradient-tactile text-white font-semibold text-sm md:text-base flex items-center justify-center gap-2.5 cursor-pointer group"
                >
                  Mulai Konsultasi Gratis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => handleNavigate('/portfolio')}
                  className="px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl btn-hamburger-tactile text-white font-semibold text-sm md:text-base flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  Lihat Hasil Karya
                </button>
              </div>
            </div>


          </div>
        </BorderGlow>
      </section>
    </motion.main>
  );
}

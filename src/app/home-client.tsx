"use client";

import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  Sparkles, 
  Zap,
  Clock,
  HeartHandshake
} from 'lucide-react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';

import SocialProofMarquee from '../components/SocialProofMarquee';
import ServiceCard from '../components/ServiceCard';
import ProjectShowcase from '../components/ProjectShowcase';
import ProductCard from '../components/ProductCard';
import PlanCard from '../components/PlanCard';
import dynamic from 'next/dynamic';
const Beams = dynamic(() => import('../components/Beams'), { ssr: false });
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import BorderGlow from '../components/BorderGlow';
import SideRays from '../components/SideRays';
import BlurText from '../components/BlurText';
import StarBorder from '../components/StarBorder';
import ShinyText from '../components/ShinyText';

import { SERVICES, PORTFOLIO, PRODUCTS, PLANS, FAQS } from '../lib/data';
import { handleOpenInquiry } from '../lib/utils';

export default function HomeClient() {
  const router = useRouter();

  // Interactive FAQ active item state
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const handleToggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const handleNavigate = (path: string) => {
    router.push(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      <section id="hero" className="relative w-full overflow-hidden pt-36 md:pt-48 pb-12 md:pb-24 bg-gradient-to-b from-blue-950/30 via-indigo-950/15 via-[#0c0c0e]/90 to-[#0c0c0e]">
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

        {/* Smooth Fade Transition Overlays */}
        <div className="absolute inset-x-0 bottom-0 h-72 md:h-96 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/95 via-blue-950/20 to-transparent z-[2] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0c0c0e] via-[#0c0c0e]/40 to-transparent z-[2] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-inner">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            <span className="text-[10px] md:text-xs font-semibold font-geist text-primary uppercase tracking-widest">
              Premium Web Experience
            </span>
          </div>

          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight max-w-5xl mx-auto text-center">
            <BlurText
              text="Jasa Pembuatan Website Profesional & Modern"
              delay={120}
              animateBy="words"
              direction="top"
              highlightWords={["Profesional"]}
              highlightClassName="text-primary italic font-semibold"
            />
          </h1>

          <p className="font-sans text-base sm:text-lg md:text-xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
            Kami membangun identitas digital masa depan dengan estetika 3D liquid glass yang memukau dan performa teknologi terkini untuk meningkatkan skala bisnis global Anda.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
            <button
              onClick={() => handleScrollToSection('layanan')}
              className="resin-button px-10 py-4.5 rounded-xl text-white font-bold text-base w-full sm:w-auto cursor-pointer"
            >
              Lihat Jasa
            </button>
            <StarBorder
              as="button"
              onClick={() => handleNavigate('/products')}
              color="#6366f1"
              speed="5s"
              className="w-full sm:w-auto cursor-pointer hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-300 rounded-xl"
              innerClassName="glass-card px-10 py-4.5 rounded-[11px] text-white font-semibold text-base"
            >
              Eksplor Produk Digital
            </StarBorder>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="relative mb-28 md:mb-40 overflow-hidden bg-gradient-to-b from-[#0c0c0e] via-[#0c0c0e]/60 to-indigo-950/20">
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
        <div className="absolute -left-1/4 top-1/4 w-[600px] h-[600px] bg-indigo-500/[0.03] blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '12s' }} />
        
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-headline text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"
          >
            Layanan Unggulan Kami
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-[0_2px_10px_rgba(184,196,255,0.3)]"
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
        <div className="absolute -right-1/4 top-0 w-[700px] h-[700px] bg-purple-500/[0.03] blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '15s', animationDelay: '3s' }} />
        <div className="absolute -left-1/4 bottom-0 w-[600px] h-[600px] bg-primary/[0.02] blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold font-geist text-primary uppercase tracking-widest block mb-2">Aset Digital Premium</span>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Produk Digital Pilihan
            </h2>
            <p className="text-text-muted text-base md:text-lg max-w-xl leading-relaxed">
              Boilerplate tangguh, template UI modern, dan panduan koding premium untuk mempercepat workflow pengembangan proyek koding Anda.
            </p>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => handleNavigate('/products')}
            className="text-primary font-bold flex items-center gap-2 group text-sm md:text-base border border-primary/20 hover:border-primary/50 rounded-xl px-5 py-2.5 bg-primary/5 transition-all cursor-pointer"
          >
            Eksplor Semua Produk ({PRODUCTS.length})
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </motion.button>
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
                onSelectProduct={(p) => handleNavigate(`/products/${p.id}`)} 
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* PRODUCTS HIGHLIGHT (Now showing Portfolio Projects using ProjectShowcase) */}
      <motion.section 
        id="products" 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 md:px-12 mb-28 md:mb-40 py-16 md:py-24 bg-surface-container/30 rounded-[3.5rem] md:rounded-[4.5rem] border border-white/5 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-35">
          <SideRays
            speed={1.5}
            rayColor1="#1d4ed8"
            rayColor2="#06b6d4"
            intensity={1.8}
            spread={2.5}
            origin="top-right"
            tilt={0}
            saturation={1.5}
            blend={0.7}
            falloff={1.6}
            opacity={1.0}
          />
        </div>

        <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-16 relative z-10 px-0 md:px-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <span className="text-xs font-bold font-geist text-primary uppercase tracking-widest block mb-2">Showcase Karya Terbaik</span>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Karya Terpilih
            </h2>
            <p className="text-text-muted text-sm md:text-base max-w-xl leading-relaxed">
              Eksplorasi proyek-proyek kustom premium yang menggabungkan fungsionalitas tanpa cela dan estetika visual tingkat tinggi.
            </p>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => handleNavigate('/portfolio')}
            className="mt-6 md:mt-0 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs md:text-sm font-bold flex items-center gap-2 hover:bg-white/10 transition-colors cursor-pointer"
          >
            Semua Portofolio ({PORTFOLIO.length})
            <ArrowRight className="w-4 h-4 text-primary" />
          </motion.button>
        </div>

        {/* Project Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 px-0 md:px-6"
        >
          <ProjectShowcase 
            projects={PORTFOLIO.slice(0, 2)} 
            onSelectProject={(proj) => handleNavigate(`/portfolio/${proj.id}`)} 
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
        className="max-w-7xl mx-auto px-6 md:px-12 mb-28 md:mb-40"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-xs font-bold font-geist text-primary uppercase tracking-widest block mb-2">Flexible Investment</span>
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Investasi Digital Anda
          </h2>
          <p className="text-text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Pilih paket pengerjaan website yang paling sesuai dengan target anggaran dan kebutuhan pengembangan bisnis Anda.
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
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center"
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
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
        className="max-w-5xl mx-auto px-6 md:px-12 mb-40 md:mb-48"
      >
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs font-bold font-geist text-primary uppercase tracking-widest block mb-2">Why Partner With Us</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-headline text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"
          >
            Mengapa Yazidcodes?
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-[0_2px_10px_rgba(184,196,255,0.3)]"
          ></motion.div>
        </div>

        <ScrollStack useWindowScroll={true} itemDistance={100} itemStackDistance={40} baseScale={0.88} rotationAmount={-1}>
          {/* Reason 1 */}
          <ScrollStackItem itemClassName="border border-white/5 bg-[#0e0e11]/90 backdrop-blur-xl relative overflow-hidden group hover:border-primary/20 transition-colors duration-300 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 blur-3xl rounded-full pointer-events-none group-hover:bg-primary/10 transition-colors duration-500" />
            <div className="flex-1 space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(184,196,255,0.15)]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white font-headline">Desain Eksklusif (No Template)</h3>
              <p className="text-text-muted text-sm md:text-base leading-relaxed font-sans">
                Setiap website dirancang dari nol, disesuaikan secara presisi dengan identitas brand Anda untuk keunikan visual maksimal. Kami menjamin visual yang berani, autentik, dan tidak pasaran.
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-text-muted/80 font-sans">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Desain kustom 100% menyesuaikan bisnis Anda
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Fokus pada identitas visual unik
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Tanpa template pasaran atau framework monoton
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-72 shrink-0 aspect-[4/3] bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-primary/10 transition-colors duration-300">
              <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] text-text-muted font-mono">
                <span>PROJECT_WIREFRAME</span>
                <span className="text-primary">100% UNIQUE</span>
              </div>
              <div className="space-y-2 py-4">
                <div className="h-2 w-3/4 bg-primary/20 rounded-full" />
                <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                <div className="h-2 w-5/6 bg-white/10 rounded-full" />
                <div className="h-10 w-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg flex items-center justify-center text-[10px] text-primary font-bold">
                  EXCLUSIVE HERO COMPONENT
                </div>
              </div>
              <div className="flex gap-2 text-[8px] font-mono text-text-muted/60 mt-2">
                <span className="px-1.5 py-0.5 bg-white/5 rounded border border-white/5">Figma</span>
                <span className="px-1.5 py-0.5 bg-white/5 rounded border border-white/5">Custom UX</span>
              </div>
            </div>
          </ScrollStackItem>

          {/* Reason 2 */}
          <ScrollStackItem itemClassName="border border-white/5 bg-[#0e0e11]/90 backdrop-blur-xl relative overflow-hidden group hover:border-secondary/20 transition-colors duration-300 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary/5 blur-3xl rounded-full pointer-events-none group-hover:bg-secondary/10 transition-colors duration-500" />
            <div className="flex-1 space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shadow-[0_0_15px_rgba(255,100,100,0.15)]">
                <Zap className="w-6 h-6 animate-pulse" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white font-headline">Koding Modern & Cepat</h3>
              <p className="text-text-muted text-sm md:text-base leading-relaxed font-sans">
                Dibangun menggunakan teknologi mutakhir (React, Next.js, Tailwind CSS) untuk kecepatan loading secepat kilat dan skor SEO sempurna. Meningkatkan kenyamanan pengunjung dan ranking pencarian Google Anda.
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-text-muted/80 font-sans">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Performa optimal secepat kilat
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Mobile-first responsive design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  SEO & Aksesibilitas skor sempurna
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-72 shrink-0 aspect-[4/3] bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex flex-col justify-center items-center relative overflow-hidden group-hover:border-secondary/10 transition-colors duration-300">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black text-emerald-400 font-headline mb-2">100</div>
                <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest">PageSpeed Score</div>
                <div className="text-[10px] text-text-muted mt-2 font-mono">Mobile & Desktop Friendly</div>
              </div>
            </div>
          </ScrollStackItem>

          {/* Reason 3 */}
          <ScrollStackItem itemClassName="border border-white/5 bg-[#0e0e11]/90 backdrop-blur-xl relative overflow-hidden group hover:border-tertiary/20 transition-colors duration-300 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-tertiary/5 blur-3xl rounded-full pointer-events-none group-hover:bg-tertiary/10 transition-colors duration-500" />
            <div className="flex-1 space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center text-tertiary shadow-[0_0_15px_rgba(255,145,0,0.15)]">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white font-headline">Penyelesaian Tepat Waktu</h3>
              <p className="text-text-muted text-sm md:text-base leading-relaxed font-sans">
                Kami sangat menghargai waktu Anda. Garansi penyelesaian pengerjaan selesai sesuai dengan timeline yang disepakati bersama tanpa kompromi kualitas.
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-text-muted/80 font-sans">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                  Timeline transparan terpantau real-time
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                  Pelaporan progress rutin per milestone
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                  Garansi selesai tepat pada tanggal rilis
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-72 shrink-0 aspect-[4/3] bg-white/[0.02] border border-white/5 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden group-hover:border-tertiary/10 transition-colors duration-300">
              <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] text-text-muted font-mono">
                <span>MILESTONE_TRACKER</span>
                <span className="text-tertiary">ON SCHEDULE</span>
              </div>
              <div className="space-y-4 py-2">
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] font-mono text-text-muted">
                    <span>Progress Pengembangan</span>
                    <span className="text-tertiary font-bold">100%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-tertiary to-secondary rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollStackItem>

          {/* Reason 4 */}
          <ScrollStackItem itemClassName="border border-white/5 bg-[#0e0e11]/90 backdrop-blur-xl relative overflow-hidden group hover:border-emerald-500/20 transition-colors duration-300 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none group-hover:bg-emerald-500/10 transition-colors duration-500" />
            <div className="flex-1 space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white font-headline">Dukungan & Bimbingan</h3>
              <p className="text-text-muted text-sm md:text-base leading-relaxed font-sans">
                Dukungan paska-rilis yang ramah, bimbingan privat, penjelasan struktur kode komprehensif, dan revisi responsif siap menemani langkah perjalanan digital bisnis Anda.
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-text-muted/80 font-sans">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Konsultasi private 1-on-1 gratis
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Dokumentasi kustomisasi kode mudah
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Dukungan teknis & pemeliharaan berkala
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-72 shrink-0 aspect-[4/3] bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-emerald-500/10 transition-colors duration-300">
              <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] text-text-muted font-mono">
                <span>SUPPORT_CHAT</span>
                <span className="text-emerald-400 font-bold">ONLINE</span>
              </div>
              <div className="space-y-1.5 py-1 text-[9px] text-text-muted/90 font-sans">
                <div className="bg-white/5 p-1.5 rounded-lg max-w-[85%]">
                  Bagaimana cara update teks di landing page?
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/20 p-1.5 rounded-lg text-emerald-300 max-w-[90%] ml-auto">
                  Sangat mudah! Kami sediakan bimbingan & panduan video privat.
                </div>
              </div>
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </motion.section>

      {/* FAQ ACCORDION */}
      <section id="faq" className="max-w-4xl mx-auto px-6 md:px-12 mb-28 md:mb-40">
        <div className="text-center mb-16">
          <span className="text-xs font-bold font-geist text-primary uppercase tracking-widest block mb-2">Tanya Jawab</span>
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-white tracking-tight">
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
          className="space-y-4"
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
                className="glass-card rounded-2xl overflow-hidden transition-all duration-300 border border-white/5 hover:border-white/10"
              >
                <button
                  onClick={() => handleToggleFaq(faq.id)}
                  className="w-full text-left p-6 cursor-pointer font-bold flex justify-between items-center text-white text-base md:text-lg font-headline transition-colors hover:text-primary"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-text-muted transition-transform duration-300 shrink-0 ml-4 ${
                      isOpen ? 'rotate-180 text-primary' : 'rotate-0'
                    }`}
                  />
                </button>
                
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-white/5 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="p-6 text-text-muted text-sm md:text-base leading-relaxed bg-[#0c0c0e]/40 font-sans">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section id="cta" className="max-w-5xl mx-auto px-6 md:px-12 mb-28 md:mb-40 relative">
        <div className="absolute -left-12 -top-12 w-64 h-64 bg-primary/15 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-secondary/15 blur-3xl rounded-full pointer-events-none" />
        
        <BorderGlow
          edgeSensitivity={30}
          glowColor="244 80 80"
          backgroundColor="transparent"
          borderRadius={32}
          glowRadius={50}
          glowIntensity={1.2}
          coneSpread={25}
          animated={true}
          colors={['#b8c4ff', '#ff9191', '#38bdf8']}
          className="w-full text-center py-10 px-6 md:py-12 md:px-16 relative overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/[0.03] to-[#0c0c0e]/90 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          {/* Visual Accent glow */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">Mulai Sekarang</span>
          </div>

          <h2 className="font-headline text-2xl md:text-4xl font-extrabold text-white mb-3 leading-tight max-w-3xl mx-auto tracking-tight">
            Siap Mewujudkan Website Impian Anda?
          </h2>
          
          <p className="font-sans text-text-muted text-xs md:text-sm max-w-2xl mx-auto leading-relaxed mb-8">
            Konsultasikan kebutuhan digital Anda secara gratis dengan kami. Dapatkan website premium berkinerja tinggi yang dirancang khusus untuk mempercepat pertumbuhan bisnis Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handleOpenInquiry('General')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-on-primary font-bold text-xs shadow-[0_4px_20px_rgba(184,196,255,0.25)] hover:shadow-[0_4px_30px_rgba(184,196,255,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              Mulai Konsultasi Gratis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => handleNavigate('/portfolio')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Lihat Hasil Karya
            </button>
          </div>
        </BorderGlow>
      </section>
    </motion.main>
  );
}

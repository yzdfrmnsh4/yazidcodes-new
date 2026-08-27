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
import Link from 'next/link';

import dynamic from 'next/dynamic';

const SocialProofMarquee = dynamic(() => import('../components/SocialProofMarquee'), { ssr: false });
const ServiceCard = dynamic(() => import('../components/ServiceCard'));
const ProjectShowcase = dynamic(() => import('../components/ProjectShowcase'), { ssr: false });
const ProductCard = dynamic(() => import('../components/ProductCard'), { ssr: false });
const PlanCard = dynamic(() => import('../components/PlanCard'));
const Beams = dynamic(() => import('../components/Beams'), { ssr: false });
const WhyChooseBento = dynamic(() => import('../components/WhyChooseBento'));
const BorderGlow = dynamic(() => import('../components/BorderGlow'), { ssr: false });
const SideRays = dynamic(() => import('../components/SideRays'), { ssr: false });
const BlurText = dynamic(() => import('../components/BlurText'));
const StarBorder = dynamic(() => import('../components/StarBorder'));
const ShinyText = dynamic(() => import('../components/ShinyText'));
const StatCounter = dynamic(() => import('../components/StatCounter'), { ssr: false });

import { SERVICES, PORTFOLIO, PRODUCTS, PLANS, FAQS } from '../lib/data';
import { handleOpenInquiry } from '../lib/utils';

export default function HomeClient() {
  // Interactive FAQ active item state
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const handleToggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center py-10">


          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight max-w-5xl mx-auto text-center">
            <BlurText
              text="Jasa Pembuatan Website Profesional & Modern"
              delay={120}
              animateBy="words"
              direction="top"
              highlightWords={["Profesional"]}
              highlightClassName="text-[#3A7FF0] italic font-semibold"
            />
          </h1>

          <p className="font-sans text-base sm:text-lg md:text-xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed text-center">
            Kami membangun identitas digital masa depan dengan estetika 3D liquid glass yang memukau dan performa teknologi terkini untuk meningkatkan skala bisnis global Anda.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
            <button
              onClick={() => handleScrollToSection('layanan')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl btn-gradient-tactile text-white font-bold text-base cursor-pointer group"
            >
              Lihat Jasa
              <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <StarBorder
              as="button"
              onClick={() => handleNavigate('/products')}
              color="rgba(93, 105, 160, 0.45)"
              speed="6s"
              className="w-full sm:w-auto cursor-pointer rounded-xl"
              innerClassName="w-full h-full px-8 py-4 rounded-xl btn-outline-tactile text-white font-semibold text-base"
            >
              Eksplor Produk Digital
            </StarBorder>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="relative mb-28 md:mb-40 overflow-hidden bg-gradient-to-b from-[#0c0c0e] via-[#0c0c0e]/60 to-[#0e0e12]">
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
        <div className="absolute -right-1/4 top-0 w-[700px] h-[700px] bg-purple-500/[0.03] blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '15s', animationDelay: '3s' }} />
        <div className="absolute -left-1/4 bottom-0 w-[600px] h-[600px] bg-primary/[0.02] blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold  text-primary uppercase tracking-widest block mb-2">Aset Digital Premium</span>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Produk Digital Pilihan
            </h2>
            <p className="text-text-muted text-base md:text-lg max-w-xl leading-relaxed">
              Boilerplate tangguh, template UI modern, dan panduan koding premium untuk mempercepat workflow pengembangan proyek koding Anda.
            </p>
          </motion.div>

          <Link
            href="/products"
            className="text-white font-bold flex items-center gap-2 group text-sm md:text-base btn-outline-tactile rounded-xl px-5 py-2.5 cursor-pointer inline-flex"
          >
            Eksplor Semua Produk ({PRODUCTS.length})
            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1.5 transition-transform" />
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
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-28 md:mb-40 relative"
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 relative z-10 px-0 md:px-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Showcase Karya Terbaik</span>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Karya Terpilih
            </h2>
            <p className="text-text-muted text-sm md:text-base max-w-xl leading-relaxed">
              Eksplorasi proyek-proyek kustom premium yang menggabungkan fungsionalitas tanpa cela dan estetika visual tingkat tinggi.
            </p>
          </motion.div>

          <Link
            href="/portfolio"
            className="mt-6 md:mt-0 px-6 py-3 rounded-xl btn-outline-tactile text-white text-xs md:text-sm font-bold flex items-center gap-2 cursor-pointer inline-flex"
          >
            Semua Portofolio ({PORTFOLIO.length})
            <ArrowRight className="w-4 h-4 text-primary" />
          </Link>
        </div>

        {/* Project Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10"
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
        className="max-w-7xl mx-auto px-6 md:px-12 mb-28 md:mb-40"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Flexible Investment</span>
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
        className="max-w-7xl mx-auto px-6 md:px-12 mb-40 md:mb-48"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-20">
          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">WHY YAZIDCODES</span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Mengapa Yazidcodes?
            </h2>
            <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-lg">
              Kami telah membantu puluhan bisnis untuk membangun identitas digital yang kuat dan presisi. Dengan pengalaman bertahun-tahun di industri digital, kami siap menjadi partner terpercaya Anda.
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
      <section id="faq" className="max-w-4xl mx-auto px-6 md:px-12 mb-28 md:mb-40">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Tanya Jawab</span>
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
                    className={`w-5 h-5 text-text-muted transition-transform duration-300 shrink-0 ml-4 ${isOpen ? 'rotate-180 text-primary' : 'rotate-0'
                      }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-white/5 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
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
      <section id="cta" className="max-w-7xl mx-auto px-6 md:px-12 mb-28 md:mb-40 relative">
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
          className="w-full text-center py-14 px-8 md:py-14 md:px-20 relative overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/[0.04] via-[#0d0e14]/95 to-[#0c0c0e]/90 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
        >
          {/* Visual Accent glow */}

          <h2 className="font-headline text-3xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-[1.15] max-w-4xl mx-auto tracking-tight">
            Siap Mewujudkan Website Impian Anda?
          </h2>

          <p className="font-sans text-text-muted text-base  max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
            Konsultasikan kebutuhan digital Anda secara gratis dengan kami. Dapatkan website premium berkinerja tinggi yang dirancang khusus untuk mempercepat pertumbuhan bisnis Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handleOpenInquiry('General')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl md:rounded-2xl btn-gradient-tactile text-white font-bold text-sm md:text-base flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              Mulai Konsultasi Gratis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => handleNavigate('/portfolio')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl md:rounded-2xl btn-outline-tactile text-white font-semibold text-sm md:text-base flex items-center justify-center gap-2.5 cursor-pointer"
            >
              Lihat Hasil Karya
            </button>
          </div>
        </BorderGlow>
      </section>
    </motion.main>
  );
}

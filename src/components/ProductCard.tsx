"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Layout, 
  Code2, 
  Sparkles, 
  Check, 
  ShoppingBag, 
  QrCode, 
  CreditCard, 
  ChevronRight, 
  CheckCircle2, 
  X, 
  Download, 
  Info,
  Layers,
  ArrowRight,
  HeartHandshake,
  ExternalLink
} from 'lucide-react';
import { DigitalProduct } from '../lib/types';

interface ProductCardProps {
  product: DigitalProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [cardImageLoaded, setCardImageLoaded] = useState(false);
  const [modalImageLoaded, setModalImageLoaded] = useState(false);
  
  // Checkout form states
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'qris' | 'gopay' | 'va'>('qris');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [step, setStep] = useState<'details' | 'success'>('details');

  useEffect(() => {
    if (showDetailModal || showCheckout) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [showDetailModal, showCheckout]);

  const getIcon = (name: string, sizeClass = "w-10 h-10") => {
    switch (name) {
      case 'dashboard':
        return <Layout className={`${sizeClass} text-primary`} />;
      case 'code':
        return <Code2 className={`${sizeClass} text-secondary`} />;
      case 'auto_awesome':
        return <Sparkles className={`${sizeClass} text-tertiary`} />;
      default:
        return <Layout className={`${sizeClass} text-primary`} />;
    }
  };

  const getColors = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          text: 'text-primary',
          border: 'border-primary/30',
          bg: 'bg-primary/10 hover:bg-primary hover:text-on-primary',
          solidBg: 'bg-primary text-on-primary',
          glow: 'shadow-[0_0_20px_rgba(184,196,255,0.1)]',
          badge: 'bg-primary/10 text-primary border-primary/20'
        };
      case 'secondary':
        return {
          text: 'text-secondary',
          border: 'border-secondary/30',
          bg: 'bg-secondary/10 hover:bg-secondary hover:text-on-secondary',
          solidBg: 'bg-secondary text-on-secondary',
          glow: 'shadow-[0_0_20px_rgba(211,187,255,0.1)]',
          badge: 'bg-secondary/10 text-secondary border-secondary/20'
        };
      case 'tertiary':
        return {
          text: 'text-tertiary',
          border: 'border-tertiary/30',
          bg: 'bg-tertiary/10 hover:bg-tertiary hover:text-on-tertiary',
          solidBg: 'bg-tertiary text-on-tertiary',
          glow: 'shadow-[0_0_20px_rgba(255,181,154,0.1)]',
          badge: 'bg-tertiary/10 text-tertiary border-tertiary/20'
        };
      default:
        return {
          text: 'text-primary',
          border: 'border-primary/30',
          bg: 'bg-primary/10 hover:bg-primary hover:text-on-primary',
          solidBg: 'bg-primary text-on-primary',
          glow: 'shadow-[0_0_20px_rgba(184,196,255,0.1)]',
          badge: 'bg-primary/10 text-primary border-primary/20'
        };
    }
  };

  const colors = getColors(product.color);

  // Helper properties depending on product IDs
  const getProductMeta = (id: string) => {
    switch (id) {
      case 'dashboard-template':
        return { category: 'Web UI Template', size: '12.4 MB', format: 'Figma & Next.js Source Code', license: 'Personal & Commercial Use' };
      case 'backend-boilerplate':
        return { category: 'Backend Framework', size: '4.8 MB', format: 'ZIP / Git Repository', license: 'Unlimited Projects Use' };
      case 'vibe-coding-guide':
        return { category: 'E-Book & Manual', size: '18.5 MB', format: 'PDF & Notion Workspace', license: 'Lifetime Access' };
      case 'nextjs-saas-boilerplate':
        return { category: 'Fullstack SaaS Boilerplate', size: '28.1 MB', format: 'GitHub Repository Invite', license: 'Standard Commercial License' };
      case 'minimalist-portfolio':
        return { category: 'Landing Web Template', size: '8.2 MB', format: 'HTML & React App Source', license: 'Personal Portfolio Use' };
      case 'figma-design-system':
        return { category: 'Figma Library UI', size: '45.7 MB', format: '.FIG File Format', license: 'Design Team Lifetime' };
      
      // Portfolio items
      case 'luxury-brand':
        return { category: 'E-Commerce & Branding', size: 'Live Demo', format: 'Custom Website', license: 'Exclusive Project' };
      case 'saas-analytics':
        return { category: 'Interface Design & Dev', size: 'Live Demo', format: 'SaaS Platform App', license: 'Exclusive Project' };
      case 'cryptoverse-defi':
        return { category: 'Web3 & DeFi App', size: 'Live Demo', format: 'Decentralized Finance', license: 'Exclusive Project' };
      case 'ai-copywriter':
        return { category: 'AI Tool & SaaS', size: 'Live Demo', format: 'Gemini AI App Integration', license: 'Exclusive Project' };
      case 'creative-studio':
        return { category: 'Branding & Agency', size: 'Live Demo', format: 'Creative Portfolio Web', license: 'Exclusive Project' };
      case 'fintech-wealth':
        return { category: 'Finance & Cloud Computing', size: 'Live Demo', format: 'Secured Cloud Service', license: 'Exclusive Project' };
      
      default:
        return { category: 'Digital Resource', size: '15.0 MB', format: 'Instant Download ZIP', license: 'Standard Personal Use' };
    }
  };

  const meta = getProductMeta(product.id);

  const isPortfolio = product.price === 'Custom Order';

  // Parse numeric price for calculation
  const basePrice = isPortfolio ? 0 : (parseInt(product.price.replace(/[^\d]/g, '')) * 1000 || 0);
  const currentPrice = discountApplied ? basePrice * 0.7 : basePrice; // 30% off with promo

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'VIBE30') {
      setDiscountApplied(true);
    } else {
      alert('Kode promo salah! Coba gunakan kode: VIBE30 untuk diskon 30%');
    }
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Harap isi Nama dan Email Anda!');
      return;
    }
    setStep('success');
  };

  const handleCloseCheckout = () => {
    setShowCheckout(false);
    setStep('details');
    setPromoCode('');
    setDiscountApplied(false);
    setName('');
    setEmail('');
  };

  const handleOpenDetailModal = () => {
    setShowDetailModal(true);
  };

  const handleCloseDetailModal = () => {
    setShowDetailModal(false);
  };

  const handleTriggerCheckout = () => {
    window.open(product.previewUrl, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppInquiry = () => {
    const text = `Halo Yazidcodes, saya sangat tertarik dengan proyek "${product.title}" dan ingin berkonsultasi mengenai pembuatan website serupa.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/628123456789?text=${encodedText}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Link 
        href={`/products/${product.id}`}
        className="glass-card p-5 md:p-6 rounded-[1.75rem] sm:rounded-[2.5rem] flex flex-col border border-white/5 hover:border-white/10 hover:scale-[1.01] transition-all duration-300 h-full relative group cursor-pointer block"
      >
        {/* Product Preview Image */}
        <div className="-mt-5 -mx-5 md:-mt-6 md:-mx-6 rounded-t-[1.65rem] sm:rounded-t-[2.4rem] rounded-b-2xl overflow-hidden aspect-[16/10] relative mb-6 bg-[#0c0c0e]/60 border-b border-white/10 shadow-inner">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover transition-all duration-700 group-hover:scale-105 ${
              cardImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setCardImageLoaded(true)}
          />
          {!cardImageLoaded && (
            <div className="absolute inset-0 bg-[#12131a] animate-pulse flex items-center justify-center">
              <div className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary/30 animate-spin" style={{ animationDuration: '4s' }} />
              </div>
            </div>
          )}
        </div>

        {/* Info */}
        <h4 className="text-lg sm:text-xl font-bold text-white mb-2 font-headline group-hover:text-primary transition-colors">
          {product.title}
        </h4>
        <p className="text-text-muted text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
          {product.description}
        </p>

        {/* Pricing / CTA Row */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div>
            <span className="text-[10px] text-text-muted uppercase block tracking-wider">
              {isPortfolio ? "Kategori Proyek" : "Aset Digital"}
            </span>
            <span className="text-base font-extrabold text-white">{product.price}</span>
          </div>
          
          <button
            type="button"
            className="px-4 py-2 rounded-xl btn-outline-tactile text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer group-hover:border-white/20 transition-all"
          >
            Lihat Detail
            <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </Link>

      {/* ================= PRODUCT DETAIL MODAL ================= */}
      {showDetailModal && (
        <div className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-md p-4 pt-28 md:pt-36 pb-6 flex justify-center items-start animate-in fade-in duration-300">
          <div className="glass-card w-full max-w-4xl rounded-[1.75rem] sm:rounded-[2.5rem] overflow-hidden relative flex flex-col border border-white/10 shadow-2xl bg-[#0c0c0e]/95 max-h-[calc(100vh-120px)] md:max-h-[calc(100vh-160px)]">
            
            {/* Top Close Bar */}
            <div className="py-2 px-4 md:py-2.5 md:px-5 border-b border-white/5 flex items-center justify-between bg-[#12131a]/40 shrink-0">
              <div className="flex items-center gap-3">
                <span className={`text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full border ${colors.badge}`}>
                  {meta.category}
                </span>
                <span className="text-[11px] text-text-muted">
                  {isPortfolio ? "Karya Portofolio Premium" : "Aset Digital Premium"}
                </span>
              </div>
              <button
                onClick={handleCloseDetailModal}
                className="w-7 h-7 rounded-full btn-ghost-tactile flex items-center justify-center text-white cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
 
            {/* Split Content */}
            <div className="flex-1 overflow-y-auto min-h-0 p-6 md:p-8 space-y-8 scrollbar-thin">
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                
                {/* Left product visual card info */}
                <div className="lg:col-span-2 bg-white/[0.02] border border-white/5 p-6 rounded-3xl flex flex-col items-center justify-center text-center">
                  {/* Image container inside modal */}
                  <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5 border border-white/10 bg-[#0c0c0e]/60 relative">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className={`object-cover ${
                        modalImageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => setModalImageLoaded(true)}
                    />
                    {!modalImageLoaded && (
                      <div className="absolute inset-0 bg-[#12131a] animate-pulse flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-primary/30 animate-spin" style={{ animationDuration: '4s' }} />
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3 w-8 h-8 rounded-lg bg-black/60 border border-white/10 backdrop-blur-md flex items-center justify-center">
                      {getIcon(product.iconName, "w-4.5 h-4.5")}
                    </div>
                  </div>
                  <h3 className="text-xl font-headline font-bold text-white mb-1">{product.title}</h3>
                  <p className="text-xs text-text-muted mb-4">{meta.format}</p>
                  
                  <div className="w-full bg-[#0c0c0e]/60 rounded-2xl p-4 border border-white/5 space-y-2 text-left mb-6">
                    <div className="flex justify-between text-xs">
                      <span className="text-text-muted">{isPortfolio ? "Metode Kerja" : "File Size"}</span>
                      <span className="text-white font-semibold font-mono">{isPortfolio ? "Kustom & Responsif" : meta.size}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-text-muted">{isPortfolio ? "Tipe Proyek" : "Lisensi"}</span>
                      <span className="text-white font-semibold">{isPortfolio ? "Commercial Client" : meta.license}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-text-muted">{isPortfolio ? "Layanan Dev" : "Format Aset"}</span>
                      <span className="text-white font-semibold truncate max-w-[120px]">{isPortfolio ? "Fullstack Coding" : meta.format}</span>
                    </div>
                  </div>

                  <div className="w-full text-center">
                    <span className="text-xs text-text-muted block mb-1">
                      {isPortfolio ? "Status Proyek" : "Investasi Aset"}
                    </span>
                    <span className="text-2xl font-extrabold text-white block mb-4">
                      {isPortfolio ? "Custom Website" : product.price}
                    </span>
                    
                    {isPortfolio ? (
                      <button
                        onClick={handleWhatsAppInquiry}
                        className="w-full py-3 px-5 rounded-2xl btn-gradient-tactile text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <HeartHandshake className="w-4 h-4" />
                        Pesan Website Serupa
                      </button>
                    ) : (
                      <button
                        onClick={handleTriggerCheckout}
                        className="w-full py-3 px-5 rounded-2xl btn-primary-tactile text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Beli di Lynk.id
                      </button>
                    )}
                  </div>
                </div>

                {/* Right extensive features & desc */}
                <div className="lg:col-span-3 space-y-6">
                  <div>
                    <h4 className="text-lg font-headline font-bold text-white mb-3">
                      {isPortfolio ? "Deskripsi Proyek" : "Deskripsi Produk"}
                    </h4>
                    <p className="text-text-muted text-sm leading-relaxed font-sans">
                      {product.description} {!isPortfolio && "Produk digital ini dirancang khusus untuk memenuhi standar industri koding yang tinggi. Cocok bagi developer, agensi, dan kreator yang ingin mempercepat waktu rilis proyek dengan kualitas kode yang pixel-perfect dan modular."}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                      {isPortfolio ? "Fitur & Integrasi Utama" : "Spesifikasi & Keunggulan"}
                    </h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.01] border border-white/5">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-xs text-text-muted">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {isPortfolio ? (
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 flex items-start gap-3">
                      <HeartHandshake className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-[11px] text-text-muted leading-relaxed">
                        Setiap proyek portofolio kami dibuat secara kustom penuh dari awal untuk mencerminkan identitas unik brand Anda. Hubungi kami untuk konsultasi pembuatan web serupa.
                      </p>
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 flex items-start gap-3">
                      <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-[11px] text-text-muted leading-relaxed">
                        Sistem kami mengirimkan file secara otomatis melalui email yang Anda daftarkan sesaat setelah pembayaran terverifikasi. Nikmati garansi update berkala secara gratis seumur hidup.
                      </p>
                    </div>
                  )}
                </div>

              </div>

            </div>

            {/* Bottom Actions */}
            <div className="py-2 px-4 md:py-2.5 md:px-5 border-t border-white/5 bg-[#12131a]/40 flex justify-end gap-3 shrink-0">
              <button
                onClick={handleCloseDetailModal}
                className="px-3.5 py-1.5 rounded-xl btn-outline-tactile text-white font-semibold text-[10px] md:text-[11px] cursor-pointer"
              >
                Kembali ke Katalog
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= SIMULATED LYNK.ID POPUP CHECKOUT ================= */}
      {showCheckout && (
        <div className="fixed inset-0 z-[85] bg-black/90 backdrop-blur-sm p-4 pt-28 md:pt-36 pb-6 flex items-start justify-center animate-in fade-in duration-200">
          <div className="bg-[#12131a] border border-white/15 w-full max-w-md rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[calc(100vh-120px)] md:max-h-[calc(100vh-160px)]">
            
            {/* Mock Lynk.id Header */}
            <div className="bg-[#1e1f26] px-4.5 py-2.5 border-b border-white/5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 rounded-full bg-primary flex items-center justify-center text-[8px] font-black text-white">L</div>
                <span className="text-xs font-bold text-white tracking-tight">
                  lynk<span className="text-primary">.id</span>/yazidcodes
                </span>
              </div>
              <button
                onClick={handleCloseCheckout}
                className="text-xs text-white btn-ghost-tactile rounded-lg px-2.5 py-1 cursor-pointer"
              >
                Kembali
              </button>
            </div>
 
            {step === 'details' ? (
              <form onSubmit={handlePay} className="flex-1 overflow-y-auto min-h-0 p-6 space-y-6 scrollbar-thin">
                {/* Product mini header */}
                <div className="flex gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    {getIcon(product.iconName)}
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">{product.title}</h5>
                    <p className="text-xs text-text-muted line-clamp-1">{product.description}</p>
                    <p className="text-xs text-primary font-bold mt-1">E-Book & Panduan Digital</p>
                  </div>
                </div>

                {/* Buyer Information */}
                <div className="space-y-3">
                  <span className="text-xs font-bold text-white uppercase tracking-wider block">Informasi Pembeli</span>
                  <div className="space-y-2">
                    <input
                      type="text"
                      required
                      placeholder="Nama Lengkap Anda"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/35 focus:outline-none focus:border-primary transition-all"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Alamat Email (Pengiriman Link)"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/35 focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                </div>

                {/* Promo Code area */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-white uppercase tracking-wider block">Gunakan Kode Promo</span>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Contoh: VIBE30"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-white/30 uppercase focus:outline-none focus:border-primary"
                    />
                    <button
                      type="button"
                      onClick={handleApplyPromo}
                      className="px-4 py-2 rounded-xl btn-primary-tactile text-xs text-white font-bold cursor-pointer"
                    >
                      Terapkan
                    </button>
                  </div>
                  {discountApplied ? (
                    <p className="text-xs text-green-400 font-medium flex items-center gap-1">
                      <Check className="w-3 h-3" /> Diskon 30% Terpasang!
                    </p>
                  ) : (
                    <p className="text-[11px] text-text-muted">
                      Petunjuk: Gunakan kode promo <strong className="text-primary font-mono">VIBE30</strong> untuk diskon 30%
                    </p>
                  )}
                </div>

                {/* Payment Methods */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-white uppercase tracking-wider block">Metode Pembayaran</span>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('qris')}
                      className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                        paymentMethod === 'qris'
                          ? 'btn-active-tactile text-white'
                          : 'btn-ghost-tactile text-text-muted'
                      }`}
                    >
                      <QrCode className="w-5 h-5 text-primary" />
                      <span className="text-[10px] font-bold">QRIS (Otomatis)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('gopay')}
                      className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                        paymentMethod === 'gopay'
                          ? 'btn-active-tactile text-white'
                          : 'btn-ghost-tactile text-text-muted'
                      }`}
                    >
                      <ShoppingBag className="w-5 h-5 text-primary" />
                      <span className="text-[10px] font-bold">GoPay / Shopee</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('va')}
                      className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                        paymentMethod === 'va'
                          ? 'btn-active-tactile text-white'
                          : 'btn-ghost-tactile text-text-muted'
                      }`}
                    >
                      <CreditCard className="w-5 h-5 text-primary" />
                      <span className="text-[10px] font-bold">Virtual Account</span>
                    </button>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl space-y-2">
                  <div className="flex justify-between text-xs text-text-muted">
                    <span>Harga Produk</span>
                    <span>IDR {basePrice.toLocaleString('id-ID')}</span>
                  </div>
                  {discountApplied && (
                    <div className="flex justify-between text-xs text-green-400">
                      <span>Potongan Promo (30%)</span>
                      <span>- IDR {(basePrice * 0.3).toLocaleString('id-ID')}</span>
                    </div>
                  )}
                  <div className="h-[1px] bg-white/10 my-1"></div>
                  <div className="flex justify-between text-sm font-bold text-white">
                    <span>Total Bayar</span>
                    <span className="text-primary">IDR {currentPrice.toLocaleString('id-ID')}</span>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="resin-button w-full py-3.5 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Bayar & Selesaikan Transaksi
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="flex-1 overflow-y-auto min-h-0 p-8 text-center flex flex-col items-center justify-center space-y-6 scrollbar-thin">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>
                <div className="space-y-2">
                  <h5 className="text-xl font-bold text-white font-headline">Pembayaran Berhasil!</h5>
                  <p className="text-text-muted text-sm px-4">
                    Terima kasih, <strong className="text-white">{name}</strong>. Pembayaran untuk <strong className="text-white">{product.title}</strong> telah kami terima.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/5 p-4 rounded-2xl w-full text-left space-y-2 text-xs text-text-muted">
                  <p>• Tautan unduhan file digital telah dikirimkan ke email: <strong className="text-white">{email}</strong></p>
                  <p>• Silakan periksa folder inbox atau spam Anda dalam 1 - 2 menit kedepan.</p>
                </div>
                <button
                  onClick={() => {
                    handleCloseCheckout();
                    handleCloseDetailModal();
                  }}
                  className="w-full py-3 rounded-xl btn-outline-tactile text-white font-semibold text-sm cursor-pointer"
                >
                  Selesai
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

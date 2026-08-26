"use client";

import React from 'react';
import { ArrowLeft, Check, Info, QrCode, ShoppingBag, CreditCard, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { DigitalProduct } from '../../../lib/types';
import { getProductMeta } from '../../../lib/utils';

interface ProductDetailClientProps {
  product: DigitalProduct;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/products');
    }
  };

  const meta = getProductMeta(product.id);

  return (
    <motion.main
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="relative z-10 pt-32 md:pt-40 max-w-7xl mx-auto px-6 md:px-12 mb-28 md:mb-40"
    >
      {/* Header / Back */}
      <div className="mb-10">
        <button 
          onClick={handleBack}
          className="inline-flex items-center gap-2 btn-ghost-tactile px-3.5 py-1.5 rounded-xl text-text-muted hover:text-white text-sm font-semibold mb-6 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Kembali
        </button>
        
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-widest bg-secondary/10 border border-secondary/20 px-3.5 py-1 rounded-full">
            {meta.category}
          </span>
          <span className="text-text-muted text-xs font-semibold">
            Aset Premium Siap Pakai
          </span>
        </div>
        <h1 className="font-headline text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          {product.title}
        </h1>
      </div>

      {/* Split Content layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left column: Visuals & specifications description */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Big Preview Image Card */}
          <div className="glass-card overflow-hidden rounded-[2rem] border border-white/5 bg-[#12131a]/80 p-3 md:p-4">
            <div className="aspect-[16/10] w-full rounded-[1.65rem] overflow-hidden border border-white/10 bg-[#0c0c0e]/60 relative">
              <img
                src={product.image}
                alt={product.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* About & Features spec details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-headline font-bold text-white mb-3">Deskripsi Lengkap</h3>
              <p className="text-text-muted text-sm leading-relaxed font-sans">
                {product.description} Produk digital premium ini dirancang khusus dengan optimasi kinerja tingkat tinggi, ramah SEO, serta kemudahan kustomisasi untuk mempercepat proses perilisan aplikasi atau website Anda.
              </p>
            </div>

            <div className="space-y-3.5">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Fitur &amp; Keunggulan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.01] border border-white/5">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs text-text-muted leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#12131a]/60 border border-white/5 flex gap-3.5 items-start">
              <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-white">Sistem Pengiriman Otomatis</h4>
                <p className="text-[11px] text-text-muted leading-relaxed">
                  Sistem kami mengirimkan file dan instruksi lengkap secara otomatis melalui email yang Anda daftarkan sesaat setelah pembayaran berhasil terverifikasi.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Right column: Specs list, price & Sticky Checkout Form */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Specs List summary */}
          <div className="glass-card p-6 rounded-3xl border border-white/5 bg-[#12131a] space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/5 pb-2">Informasi Berkas</h4>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between">
                <span className="text-text-muted">Ukuran File</span>
                <span className="text-white font-mono font-bold">{meta.size}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Format Aset</span>
                <span className="text-white font-semibold">{meta.format}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Lisensi Pemakaian</span>
                <span className="text-white font-semibold">{meta.license}</span>
              </div>
            </div>
          </div>

          {/* Lynk.id Purchase Section */}
          <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 bg-[#12131a]/95 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
            
            <div className="text-center space-y-2 mb-6">
              <span className="text-xs text-text-muted uppercase tracking-widest font-extrabold bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Dapatkan Akses Instan
              </span>
              <div className="text-4xl font-black text-white mt-3">{product.price}</div>
              <p className="text-xs text-text-muted">Akses seumur hidup termasuk pembaruan gratis.</p>
            </div>

            <div className="border-t border-white/5 pt-6 space-y-6">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3.5">
                <h5 className="text-xs font-bold text-white uppercase tracking-wider">Metode Pembayaran</h5>
                <p className="text-xs text-text-muted leading-relaxed">
                  Pembayaran diproses dengan aman secara otomatis melalui <strong className="text-white">Lynk.id</strong> menggunakan metode pembayaran lokal terpopuler:
                </p>
                
                {/* Grid of payment badges */}
                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold text-text-muted">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center gap-1">
                    <QrCode className="w-4 h-4 text-primary" />
                    <span>QRIS</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center gap-1">
                    <ShoppingBag className="w-4 h-4 text-secondary" />
                    <span>E-Wallet</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center gap-1">
                    <CreditCard className="w-4 h-4 text-tertiary" />
                    <span>VA Bank</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => window.open(product.previewUrl, '_blank', 'noopener,noreferrer')}
                  className="w-full py-4 rounded-2xl btn-gradient-tactile text-white font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-primary/25 cursor-pointer group"
                >
                  Beli Sekarang di Lynk.id
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <p className="text-[10px] text-text-muted text-center leading-relaxed">
                  Anda akan diarahkan ke halaman resmi toko kami di <strong className="text-white font-mono">lynk.id/yazidcodes</strong> untuk menyelesaikan pembayaran dan mengunduh berkas secara instan.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </motion.main>
  );
}

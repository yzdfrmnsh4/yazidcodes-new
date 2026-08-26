"use client";

import React, { useState } from 'react';
import { ArrowLeft, Search, Filter, SlidersHorizontal } from 'lucide-react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import ProductCard from '../../components/ProductCard';
import { PRODUCTS } from '../../lib/data';

export default function ProductsClient() {
  const router = useRouter();
  const [productsSearch, setProductsSearch] = useState('');
  const [productsCategory, setProductsCategory] = useState('Semua');

  const handleNavigate = (path: string) => {
    router.push(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- Products filtering logic ---
  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch = 
      product.title.toLowerCase().includes(productsSearch.toLowerCase()) ||
      product.description.toLowerCase().includes(productsSearch.toLowerCase());

    if (productsCategory === 'Semua') return matchesSearch;
    if (productsCategory === 'Boilerplate') {
      return matchesSearch && (product.title.toLowerCase().includes('boilerplate') || product.description.toLowerCase().includes('boilerplate'));
    }
    if (productsCategory === 'Web Assets') {
      return matchesSearch && (product.title.toLowerCase().includes('template') || product.title.toLowerCase().includes('portfolio'));
    }
    if (productsCategory === 'E-Books') {
      return matchesSearch && (product.title.toLowerCase().includes('panduan') || product.title.toLowerCase().includes('guide'));
    }
    if (productsCategory === 'Figma') {
      return matchesSearch && product.title.toLowerCase().includes('figma');
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
          Digital Assets <span className="text-secondary italic font-semibold">Store</span>
        </h1>
        <p className="text-text-muted text-base md:text-lg max-w-2xl leading-relaxed">
          Boilerplate tangguh, template UI modern, dan e-book koding premium untuk mempercepat workflow koding Anda. Klik produk untuk membaca spesifikasi detail &amp; memulai order.
        </p>
      </div>

      {/* Filter Tools & Search Bar */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-12 p-4 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-md">
        {/* Search Bar */}
        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="Cari aset digital..."
            value={productsSearch}
            onChange={(e) => setProductsSearch(e.target.value)}
            className="w-full bg-[#0c0c0e]/60 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-secondary transition-all"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
          <span className="text-xs text-text-muted flex items-center gap-1 mr-2">
            <Filter className="w-3.5 h-3.5" />
            Kategori Aset:
          </span>
          {['Semua', 'Boilerplate', 'Web Assets', 'E-Books', 'Figma'].map((cat) => (
            <button
              key={cat}
              onClick={() => setProductsCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                productsCategory === cat
                  ? 'btn-active-tactile font-bold shadow-lg shadow-secondary/10'
                  : 'btn-ghost-tactile text-text-muted hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Grid List */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onSelectProduct={(p) => handleNavigate(`/products/${p.id}`)} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 glass-card rounded-[3rem] border border-white/5 p-12">
          <SlidersHorizontal className="w-12 h-12 text-text-muted mx-auto mb-4 animate-pulse" />
          <h3 className="text-xl font-bold text-white mb-2 font-headline">Aset Tidak Ditemukan</h3>
          <p className="text-text-muted text-sm max-w-sm mx-auto mb-6">
            Tidak ada aset digital premium yang cocok dengan kata pencarian "{productsSearch}" atau kategori "{productsCategory}".
          </p>
          <button
            onClick={() => {
              setProductsSearch('');
              setProductsCategory('Semua');
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

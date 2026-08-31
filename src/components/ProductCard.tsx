"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Layout,
  Code2,
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { DigitalProduct } from '../lib/types';
import { getProductMeta } from '../lib/utils';

interface ProductCardProps {
  product: DigitalProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [cardImageLoaded, setCardImageLoaded] = useState(false);
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
          text: 'text-[var(--color-primary)]',
          border: 'border-[var(--color-primary)]/30',
          bg: 'bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)]',
          solidBg: 'bg-[var(--color-primary)] text-[var(--color-on-primary)]',
          glow: 'shadow-[0_0_20px_rgba(37,99,235,0.1)]',
          badge: 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/20'
        };
      case 'secondary':
        return {
          text: 'text-[var(--color-secondary)]',
          border: 'border-[var(--color-secondary)]/30',
          bg: 'bg-[var(--color-secondary)]/10 hover:bg-[var(--color-secondary)] hover:text-[var(--color-on-secondary)]',
          solidBg: 'bg-[var(--color-secondary)] text-[var(--color-on-secondary)]',
          glow: 'shadow-[0_0_20px_rgba(79,70,229,0.1)]',
          badge: 'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] border-[var(--color-secondary)]/20'
        };
      case 'tertiary':
        return {
          text: 'text-[var(--color-tertiary)]',
          border: 'border-[var(--color-tertiary)]/30',
          bg: 'bg-[var(--color-tertiary)]/10 hover:bg-[var(--color-tertiary)] hover:text-[var(--color-on-tertiary)]',
          solidBg: 'bg-[var(--color-tertiary)] text-[var(--color-on-tertiary)]',
          glow: 'shadow-[0_0_20px_rgba(234,88,12,0.1)]',
          badge: 'bg-[var(--color-tertiary)]/10 text-[var(--color-tertiary)] border-[var(--color-tertiary)]/20'
        };
      default:
        return {
          text: 'text-[var(--color-primary)]',
          border: 'border-[var(--color-primary)]/30',
          bg: 'bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)]',
          solidBg: 'bg-[var(--color-primary)] text-[var(--color-on-primary)]',
          glow: 'shadow-[0_0_20px_rgba(37,99,235,0.1)]',
          badge: 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/20'
        };
    }
  };

  const colors = getColors(product.color);

  const meta = getProductMeta(product.id);

  const isPortfolio = product.price === 'Custom Order';




  return (
    <>
      <Link
        href={`/products/${product.id}`}
        className="glass-card p-5 md:p-6 rounded-2xl flex flex-col border border-[var(--color-border-specular)] hover:border-[var(--color-primary)] hover:scale-[1.01] transition-all duration-300 h-full relative group cursor-pointer block"
      >
        {/* Product Preview Image */}
        <div className="-mt-5 -mx-5 md:-mt-6 md:-mx-6 rounded-t-2xl m-3 overflow-hidden aspect-[16/10] relative mb-6 bg-[var(--color-surface-dim)]/60 border-b border-[var(--color-border-specular)] shadow-inner ">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover transition-all duration-700 group-hover:scale-105 ${cardImageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            onLoad={() => setCardImageLoaded(true)}
          />
          {!cardImageLoaded && (
            <div className="absolute inset-0 bg-[var(--color-surface)] animate-pulse flex items-center justify-center">
              <div className="w-10 h-10 rounded-full border border-[var(--color-border-specular)] bg-[var(--color-surface)]/[0.02] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[var(--color-primary)]/30 animate-spin" style={{ animationDuration: '4s' }} />
              </div>
            </div>
          )}
        </div>

        {/* Info */}
        <h4 className="text-lg sm:text-xl font-semibold text-[var(--color-on-surface)] mb-2 font-[var(--font-headline)] group-hover:text-[var(--color-primary)] transition-colors">
          {product.title}
        </h4>
        <p className="text-[var(--color-text-muted)] text-sm mb-3 flex-grow line-clamp-3 leading-relaxed">
          {product.description}
        </p>

        {/* Pricing / CTA Row */}
        <div className="flex flex-col gap-3 pt-4 border-t border-[var(--color-border-specular)]/5">
          <div className="flex flex-col">
            <span className="text-[10px] text-[var(--color-text-muted)] uppercase block tracking-wider mb-0.5">
              {isPortfolio ? "Kategori Proyek" : "Aset Digital"}
            </span>
            <div className="flex items-center gap-1.5 flex-wrap mt-0.5">
              <span className="text-xl font-semibold text-[var(--color-on-surface)] leading-none">{product.price}</span>
              {!isPortfolio && product.price !== 'Gratis' && (
                <span className="text-[15px] font-medium text-[var(--color-text-muted)] opacity-70 line-through decoration-[var(--color-text-muted)]/60 leading-none">
                  {product.price.replace(/(\d+)/, (match) => (parseInt(match) * 2).toString())}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-1">
            <button
              type="button"
              className="w-full py-2 rounded-xl btn-hamburger-tactile text-white font-semibold text-xs flex justify-center items-center gap-1.5 cursor-pointer transition-all"
            >
              Lihat Detail
              <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open('https://lynk.id/yazidcodes', '_blank', 'noopener,noreferrer');
              }}
              className="w-full py-2 rounded-xl btn-gradient-tactile text-white font-semibold text-xs flex justify-center items-center gap-1.5 cursor-pointer shadow-md transition-all"
            >
              Beli Sekarang
              <ExternalLink className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
        </div>
      </Link>


    </>
  );
}

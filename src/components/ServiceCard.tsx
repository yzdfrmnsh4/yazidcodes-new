import React from 'react';
import { Monitor, Palette, Rocket, GraduationCap } from 'lucide-react';
import { ServiceItem } from '../lib/types';
import SpotlightCard from './SpotlightCard';

interface ServiceCardProps {
  service: ServiceItem;
  onOpenInquiry: (serviceTitle?: string) => void;
}

export default function ServiceCard({ service, onOpenInquiry }: ServiceCardProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'web':
        return <Monitor className="w-8 h-8 text-[var(--color-primary)]" />;
      case 'brush':
        return <Palette className="w-8 h-8 text-[var(--color-secondary)]" />;
      case 'rocket_launch':
        return <Rocket className="w-8 h-8 text-[var(--color-tertiary)]" />;
      case 'academic':
        return <GraduationCap className="w-8 h-8 text-[var(--color-quaternary)]" />;
      default:
        return <Monitor className="w-8 h-8 text-[var(--color-primary)]" />;
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-[var(--color-primary)]/10 border-[var(--color-primary)]/20 hover:bg-[var(--color-primary)]/20',
          shadow: 'shadow-[0_0_40px_rgba(184,196,255,0.05)]',
          glow: 'rgba(59, 130, 246, 0.12)',
          textGlow: 'text-[var(--color-primary)]'
        };
      case 'secondary':
        return {
          bg: 'bg-[var(--color-secondary)]/10 border-[var(--color-secondary)]/20 hover:bg-[var(--color-secondary)]/20',
          shadow: 'shadow-[0_0_40px_rgba(211,187,255,0.05)]',
          glow: 'rgba(99, 102, 241, 0.12)',
          textGlow: 'text-[var(--color-secondary)]'
        };
      case 'tertiary':
        return {
          bg: 'bg-[var(--color-tertiary)]/10 border-[var(--color-tertiary)]/20 hover:bg-[var(--color-tertiary)]/20',
          shadow: 'shadow-[0_0_40px_rgba(255,181,154,0.05)]',
          glow: 'rgba(255, 181, 154, 0.12)',
          textGlow: 'text-[var(--color-tertiary)]'
        };
      case 'quaternary':
        return {
          bg: 'bg-[var(--color-quaternary)]/10 border-[var(--color-quaternary)]/20 hover:bg-[var(--color-quaternary)]/20',
          shadow: 'shadow-[0_0_40px_rgba(16,185,129,0.05)]',
          glow: 'rgba(16, 185, 129, 0.12)',
          textGlow: 'text-[var(--color-quaternary)]'
        };
      default:
        return {
          bg: 'bg-[var(--color-primary)]/10 border-[var(--color-primary)]/20 hover:bg-[var(--color-primary)]/20',
          shadow: 'shadow-[0_0_40px_rgba(184,196,255,0.05)]',
          glow: 'rgba(59, 130, 246, 0.12)',
          textGlow: 'text-[var(--color-primary)]'
        };
    }
  };

  const classes = getColorClasses(service.color);

  return (
    <SpotlightCard
      className="border border-[var(--color-border-specular)] hover:border-[var(--color-primary)] transition-all duration-300"
      spotlightColor={classes.glow}
    >
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border transition-all duration-300 ${classes.bg} ${classes.shadow}`}
      >
        {getIcon(service.iconName)}
      </div>

      <h3 className="font-headline text-2xl font-semibold text-[var(--color-on-surface)] mb-4 group-hover:text-[var(--color-primary)] transition-colors">
        {service.title}
      </h3>

      <p className="text-[var(--color-text-muted)] font-sans text-base leading-relaxed mb-2">
        {service.description}
      </p>
    </SpotlightCard>
  );
}

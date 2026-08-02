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
        return <Monitor className="w-8 h-8 text-primary" />;
      case 'brush':
        return <Palette className="w-8 h-8 text-secondary" />;
      case 'rocket_launch':
        return <Rocket className="w-8 h-8 text-tertiary" />;
      case 'academic':
        return <GraduationCap className="w-8 h-8 text-quaternary" />;
      default:
        return <Monitor className="w-8 h-8 text-primary" />;
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/10 border-primary/20 hover:bg-primary/20',
          shadow: 'shadow-[0_0_40px_rgba(184,196,255,0.05)]',
          glow: 'rgba(59, 130, 246, 0.12)',
          textGlow: 'text-primary'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary/10 border-secondary/20 hover:bg-secondary/20',
          shadow: 'shadow-[0_0_40px_rgba(211,187,255,0.05)]',
          glow: 'rgba(99, 102, 241, 0.12)',
          textGlow: 'text-secondary'
        };
      case 'tertiary':
        return {
          bg: 'bg-tertiary/10 border-tertiary/20 hover:bg-tertiary/20',
          shadow: 'shadow-[0_0_40px_rgba(255,181,154,0.05)]',
          glow: 'rgba(255, 181, 154, 0.12)',
          textGlow: 'text-tertiary'
        };
      case 'quaternary':
        return {
          bg: 'bg-quaternary/10 border-quaternary/20 hover:bg-quaternary/20',
          shadow: 'shadow-[0_0_40px_rgba(16,185,129,0.05)]',
          glow: 'rgba(16, 185, 129, 0.12)',
          textGlow: 'text-quaternary'
        };
      default:
        return {
          bg: 'bg-primary/10 border-primary/20 hover:bg-primary/20',
          shadow: 'shadow-[0_0_40px_rgba(184,196,255,0.05)]',
          glow: 'rgba(59, 130, 246, 0.12)',
          textGlow: 'text-primary'
        };
    }
  };

  const classes = getColorClasses(service.color);

  return (
    <SpotlightCard
      className="p-6 sm:p-8 md:p-10 rounded-[1.75rem] sm:rounded-[2.5rem]"
      spotlightColor={classes.glow}
    >
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border transition-all duration-300 ${classes.bg} ${classes.shadow}`}
      >
        {getIcon(service.iconName)}
      </div>

      <h3 className="font-headline text-2xl font-bold text-white mb-4">
        {service.title}
      </h3>

      <p className="text-text-muted font-sans text-base leading-relaxed mb-2">
        {service.description}
      </p>
    </SpotlightCard>
  );
}

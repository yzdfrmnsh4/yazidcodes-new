import React from 'react';
import { Check, X, Star } from 'lucide-react';
import { PricingPlan } from '../lib/types';

interface PlanCardProps {
  plan: PricingPlan;
  onSelectPlan: (planName?: string) => void;
}

export default function PlanCard({ plan, onSelectPlan }: PlanCardProps) {
  const isPremium = plan.isPopular;

  return (
    <div
      className={`relative h-full flex flex-col transition-all duration-500 ${isPremium ? 'lg:-translate-y-6' : ''
        }`}
    >
      {/* Most Popular Badge */}
      {isPremium && (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 px-4 py-2 bg-[var(--color-primary)] border border-[var(--color-primary)]/50 rounded-full text-white text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5 shadow-lg shadow-[var(--color-primary)]/30">
          <Star className="w-3 h-3 fill-white" />
          Paling Populer
        </div>
      )}

      <div
        className={`pricing-card-wrapper ${isPremium ? 'pricing-card-popular' : ''} relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex flex-col h-full transition-all duration-400`}
      >
        {/* Top Shiny Border */}
        {isPremium && (
          <div
            className="absolute top-0 left-0 right-0 h-px z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.4) 30%, rgba(255, 255, 255, 0.2) 50%, rgba(59, 130, 246, 0.4) 70%, transparent 100%)',
            }}
          />
        )}

        {/* Inner highlight layer */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[var(--color-surface)]/[0.05] to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-7 md:p-9 flex flex-col flex-grow">
          {/* Header */}
          <div className="mb-6">
            <div className="mb-4">

              <h4 className="text-2xl md:text-3xl font-semibold text-[var(--color-on-surface)] font-[var(--font-headline)] leading-tight">
                {plan.name}
              </h4>
              <span className="text-sm md:text-base font-normal text-[var(--color-text-muted)] ">{plan.desc}</span>
            </div>

            {/* Price section */}
            <span className="text-sm md:text-base font-normal text-[var(--color-text-muted)]">
              {(plan.id === 'premium' || plan.id === 'starter') && 'Mulai dari'}
            </span>
            <div className="flex items-baseline gap-1">
              <span className={`text-4xl md:text-5xl font-[var(--font-headline)] tracking-tight ${isPremium ? 'text-[var(--color-primary)]' : 'text-[var(--color-on-surface)]'}`}>
                {plan.price}
              </span>
              {plan.period && (
                <span className="text-sm md:text-base font-normal text-[var(--color-text-muted)] ">
                  {plan.period}
                </span>
              )}
            </div>
          </div>

          {/* Separator line */}
          <div className="h-px w-16 bg-gradient-to-r from-[var(--color-border-specular)]/0.5 to-transparent mb-6" />

          {/* Description */}
          {plan.description && (
            <p className="text-sm md:text-base text-[var(--color-text-muted)] mb-6 leading-relaxed line-clamp-3">
              {plan.description}
            </p>
          )}

          {/* Features List */}
          <ul className="space-y-3 mb-8 flex-grow">
            {plan.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm md:text-base font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-on-surface)]/90"
              >
                <Check
                  className={`w-5 h-5 shrink-0 mt-0.5 ${isPremium ? 'text-[var(--color-primary)]' : 'text-[var(--color-on-surface)]/40'}`}
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => onSelectPlan(plan.name)}
            className={`w-full py-3 md:py-4 px-6 rounded-xl md:rounded-2xl font-semibold text-sm md:text-base transition-all duration-400 cursor-pointer mt-auto text-white ${isPremium ? 'btn-gradient-tactile' : 'btn-hamburger-tactile'}`}
          >
            {plan.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

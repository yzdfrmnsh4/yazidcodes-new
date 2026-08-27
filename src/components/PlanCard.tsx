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
      className={`relative h-full flex flex-col transition-all duration-500 ${
        isPremium ? 'lg:-translate-y-6' : ''
      }`}
    >
      {/* Most Popular Badge */}
      {isPremium && (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 px-4 py-2 bg-primary border border-primary/50 rounded-full text-white text-xs font-black uppercase tracking-widest flex items-center gap-1.5 shadow-lg shadow-primary/30">
          <Star className="w-3 h-3 fill-white" />
          Paling Populer
        </div>
      )}

      <div
        className={`relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex flex-col h-full transition-all duration-400 ${
          isPremium
            ? 'border border-white/10'
            : 'border border-white/5'
        }`}
        style={{
          background: isPremium
            ? 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.08), transparent 60%), linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)',
          boxShadow: isPremium
            ? 'inset 0 1px 2px rgba(255, 255, 255, 0.15), inset 0 -1px 2px rgba(0, 0, 0, 0.3), 0 20px 50px -15px rgba(59, 130, 246, 0.2), 0 20px 60px -20px rgba(0, 0, 0, 0.8)'
            : 'inset 0 1px 1px rgba(255, 255, 255, 0.08), inset 0 -1px 1px rgba(0, 0, 0, 0.2), 0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        }}
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
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/[0.05] to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-7 md:p-9 flex flex-col flex-grow">
          {/* Header */}
          <div className="mb-6">
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 font-headline leading-tight">
              {plan.name}
            </h4>

            {/* Price section */}
            <div className="flex items-baseline gap-1">
              <span className={`text-4xl md:text-5xl font-semibold tracking-tight ${isPremium ? 'text-primary' : 'text-white'}`}>
                {plan.price}
              </span>
              {plan.period && (
                <span className="text-sm md:text-base font-normal text-text-muted">
                  {plan.period}
                </span>
              )}
            </div>
          </div>

          {/* Separator line */}
          <div className="h-px w-16 bg-gradient-to-r from-white/20 to-transparent mb-6" />

          {/* Description */}
          {plan.description && (
            <p className="text-sm md:text-base text-text-muted mb-6 leading-relaxed line-clamp-3">
              {plan.description}
            </p>
          )}

          {/* Features List */}
          <ul className="space-y-3 mb-8 flex-grow">
            {plan.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm md:text-base font-medium text-text-muted transition-colors hover:text-white/90"
              >
                <Check
                  className={`w-5 h-5 shrink-0 mt-0.5 ${isPremium ? 'text-primary' : 'text-white/40'}`}
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Call to action button */}
          <button
            onClick={() => onSelectPlan(plan.name)}
            className={`w-full py-3 md:py-4 px-6 rounded-xl md:rounded-2xl font-bold text-sm md:text-base transition-all duration-400 cursor-pointer mt-auto ${
              isPremium
                ? 'btn-gradient-tactile text-white'
                : 'btn-outline-tactile text-white'
            }`}
          >
            {plan.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

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
      style={{
        transform: isPremium ? 'scale(1.03)' : 'scale(1)',
        transition: 'transform 0.4s ease',
      }}
      className={`glass-card p-6 sm:p-8 md:p-10 rounded-[1.75rem] sm:rounded-[2.5rem] flex flex-col relative h-full transition-all duration-300 hover:border-white/10 ${
        isPremium ? 'bg-white/[0.07] border border-primary/20 shadow-2xl' : 'border border-white/5'
      }`}
    >
      {/* Most Popular Badge */}
      {isPremium && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary border border-primary/30 rounded-full text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-black/40 flex items-center gap-1.5">
          <Star className="w-3 h-3 fill-white" />
          Most Popular
        </div>
      )}

      <h4 className="text-xl font-bold text-white mb-2 font-headline">{plan.name}</h4>
      
      {/* Price section */}
      <div className="text-3xl font-black text-white mb-6 flex items-baseline">
        <span className={isPremium ? 'text-primary' : 'text-white'}>{plan.price}</span>
        {plan.period && (
          <span className="text-sm font-normal text-text-muted ml-1">{plan.period}</span>
        )}
      </div>

      {/* Separator line */}
      <div className="h-[1px] w-full bg-white/5 mb-8"></div>

      {/* Features List */}
      <ul className="space-y-4 mb-10 flex-grow">
        {plan.features.map((feature, i) => {
          // Check if feature is not supported in Starter
          const isUnavailable = plan.id === 'starter' && feature.includes('Custom Animation');
          return (
            <li
              key={i}
              className={`flex items-center gap-3 text-sm font-medium transition-colors ${
                isUnavailable ? 'opacity-30 line-through text-text-muted' : 'text-text-muted hover:text-white'
              }`}
            >
              {isUnavailable ? (
                <X className="w-4 h-4 text-red-400 shrink-0" />
              ) : (
                <Check
                  className={`w-4 h-4 shrink-0 ${isPremium ? 'text-primary' : 'text-primary'}`}
                />
              )}
              <span>{feature}</span>
            </li>
          );
        })}
      </ul>

      {/* Call to action button */}
      <button
        onClick={() => onSelectPlan(plan.name)}
        className={`w-full py-4 rounded-2xl font-bold text-sm transition-all duration-200 cursor-pointer ${
          isPremium
            ? 'btn-gradient-tactile text-white text-base'
            : 'btn-outline-tactile text-white'
        }`}
      >
        {plan.buttonText}
      </button>
    </div>
  );
}

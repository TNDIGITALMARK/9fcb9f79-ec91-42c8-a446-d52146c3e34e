'use client';

import { Check, Sparkles } from 'lucide-react';
import { SubscriptionPlan } from '@/lib/data/glampass-data';
import Link from 'next/link';

interface PlanCardProps {
  plan: SubscriptionPlan;
}

export function PlanCard({ plan }: PlanCardProps) {
  return (
    <div
      className={`
        relative bg-white rounded-2xl p-8 shadow-lg
        transition-all duration-300 hover:shadow-xl hover:-translate-y-2
        border-2
        ${plan.isPremium ? 'border-gold shadow-gold' : 'border-purple-lighter/60'}
        ${plan.isPopular ? 'ring-2 ring-purple ring-offset-4' : ''}
      `}
    >
      {/* Popular Badge */}
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-purple text-white px-6 py-1.5 rounded-full text-sm font-semibold shadow-md">
            Mais Popular
          </span>
        </div>
      )}

      {/* Premium Badge */}
      {plan.isPremium && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="premium-badge flex items-center gap-1.5 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            Premium
          </span>
        </div>
      )}

      {/* Plan Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-heading font-bold text-purple-text mb-2">
          {plan.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {plan.description}
        </p>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline justify-center">
            <span className="text-4xl font-heading font-bold text-gold">
              R$ {plan.price.toFixed(2).replace('.', ',')}
            </span>
            <span className="text-gray-600 ml-2">/mês</span>
          </div>
        </div>
      </div>

      {/* Features List */}
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className={`
              flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5
              ${plan.isPremium ? 'bg-gold/20' : 'bg-purple-lighter/40'}
            `}>
              <Check className={`w-3.5 h-3.5 ${plan.isPremium ? 'text-gold' : 'text-purple-medium'}`} />
            </div>
            <span className="text-sm text-gray-700 leading-relaxed">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link
        href={`/pagamento?plan=${plan.id}`}
        className="block w-full py-3.5 rounded-lg font-bold text-center text-white bg-gradient-purple hover:shadow-purple transition-all duration-200 hover:scale-105"
      >
        Assinar Agora
      </Link>

      {/* Salon Info */}
      <p className="text-xs text-center text-gray-500 mt-4">
        Válido em salões parceiros • Cheia de Charme
      </p>
    </div>
  );
}

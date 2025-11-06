"use client";

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for trying out',
    features: [
      'Beautiful UI components',
      'Dark mode support',
      'Basic animations',
      'Community support',
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'For serious projects',
    features: [
      'Everything in Starter',
      'Advanced animations',
      'Priority support',
      'Custom components',
      'Regular updates',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    description: 'For large teams',
    features: [
      'Everything in Pro',
      'Dedicated support',
      'Custom development',
      'SLA guarantee',
      'Training sessions',
    ],
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className={`relative rounded-2xl p-8 ${
            plan.highlighted
              ? 'bg-gradient-to-br from-primary to-accent text-white shadow-2xl scale-105'
              : 'bg-white dark:bg-neutral-dark border border-slate-200 dark:border-slate-700 shadow-lg'
          }`}
        >
          {plan.highlighted && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
          )}
          
          <div className="text-center mb-6">
            <h3 className={`text-2xl font-bold mb-2 ${
              plan.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'
            }`}>
              {plan.name}
            </h3>
            <p className={`text-sm ${
              plan.highlighted ? 'text-white/90' : 'text-slate-600 dark:text-slate-400'
            }`}>
              {plan.description}
            </p>
          </div>

          <div className="text-center mb-6">
            <span className={`text-5xl font-bold ${
              plan.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'
            }`}>
              {plan.price}
            </span>
            <span className={`text-sm ${
              plan.highlighted ? 'text-white/90' : 'text-slate-600 dark:text-slate-400'
            }`}>
              /month
            </span>
          </div>

          <ul className="space-y-3 mb-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <Check className={`h-5 w-5 shrink-0 ${
                  plan.highlighted ? 'text-white' : 'text-green-500'
                }`} />
                <span className={`text-sm ${
                  plan.highlighted ? 'text-white' : 'text-slate-600 dark:text-slate-300'
                }`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 rounded-lg font-semibold transition-colors ${
              plan.highlighted
                ? 'bg-white text-primary hover:bg-slate-100'
                : 'bg-primary text-white hover:bg-primary-dark dark:bg-primary-light dark:hover:bg-primary'
            }`}
          >
            Get Started
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
}
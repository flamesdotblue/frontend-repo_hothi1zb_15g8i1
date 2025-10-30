import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$19',
    period: '/mo',
    highlight: false,
    features: [
      'Up to 10 videos / month',
      'Standard avatars & voices',
      'Basic templates',
      '720p exports'
    ],
    cta: 'Get Starter'
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/mo',
    highlight: true,
    features: [
      'Unlimited projects',
      'Premium avatars & voices',
      'Brand kit & templates',
      '1080p exports'
    ],
    cta: 'Start Pro'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    highlight: false,
    features: [
      'SSO & user management',
      'Private hosting options',
      'Tailored workflows',
      'Priority support'
    ],
    cta: 'Contact Sales'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-[#0a0a0f] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-fuchsia-500/10" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Choose a plan that fits your team. Upgrade or cancel anytime.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border p-6 backdrop-blur ${
                t.highlight
                  ? 'border-white/20 bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset,0_20px_80px_-20px_rgba(168,85,247,0.35)]'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-fuchsia-500 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-bold">{t.price}</span>
                <span className="mb-1 text-sm text-white/70">{t.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-white/80">
                    <Check size={16} className="mt-0.5 text-emerald-400" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3">
                {t.name !== 'Enterprise' ? (
                  <button className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition ${
                    t.highlight ? 'bg-white text-black hover:bg-white/90' : 'bg-white/10 text-white hover:bg-white/20'
                  }`}>
                    {t.cta} <ArrowRight size={16} />
                  </button>
                ) : (
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-white text-black px-4 py-2 text-sm font-semibold transition hover:bg-white/90">
                      Book Demo <ArrowRight size={16} />
                    </button>
                    <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20">
                      Contact Sales
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

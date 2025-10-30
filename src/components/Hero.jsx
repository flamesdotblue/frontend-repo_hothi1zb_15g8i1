import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays to improve contrast over the 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
          <Rocket size={14} /> AI Text-to-Video
        </span>
        <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Turn text or slides into branded videos in minutes
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
          Reel Reports helps teams transform scripts, docs, or presentations into polished videos with avatars, voiceovers, and your brand style—powered by AI.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Get Started <ArrowRight size={16} />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}

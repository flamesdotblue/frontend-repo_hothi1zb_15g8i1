import React from 'react';
import { FileText, Mic, Palette, Download } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Turn any document or script into a video',
    desc: 'Upload a script, doc, or slides. Our AI structures it into scenes and auto-generates visuals.'
  },
  {
    icon: Mic,
    title: 'Choose avatar and voiceover',
    desc: 'Select from professional AI avatars and natural-sounding voices in multiple languages.'
  },
  {
    icon: Palette,
    title: 'Customize with brand colors and templates',
    desc: 'Apply your brand kit, fonts, and layouts to keep every video on-brand.'
  },
  {
    icon: Download,
    title: 'Download or share instantly',
    desc: 'Export in HD or share a secure link with teammates and stakeholders.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-[#06060a] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">How it works</h2>
          <p className="mt-3 text-white/70">
            Four simple steps to go from text to a polished, on-brand video.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <div className="mb-4 inline-flex rounded-lg bg-white/10 p-2 text-white">
                <f.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

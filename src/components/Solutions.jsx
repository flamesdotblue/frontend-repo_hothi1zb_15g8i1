import React from 'react';
import { Building2, Megaphone, GraduationCap, Presentation } from 'lucide-react';

const solutions = [
  {
    icon: Building2,
    title: 'Internal communication',
    desc: 'Share updates, announcements, and executive summaries as quick videos everyone will watch.'
  },
  {
    icon: Megaphone,
    title: 'Marketing content',
    desc: 'Turn blogs and campaign briefs into social-ready videos for every channel.'
  },
  {
    icon: GraduationCap,
    title: 'Training videos',
    desc: 'Convert SOPs and handbooks into engaging training modules with voiceover.'
  },
  {
    icon: Presentation,
    title: 'Reports & presentations',
    desc: 'Transform slide decks into narrated video summaries for clients or leadership.'
  }
];

export default function Solutions() {
  return (
    <section className="w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Solutions for every team</h2>
          <p className="mt-3 text-white/70">From updates to in-depth training, Reel Reports adapts to your workflow.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 inline-flex rounded-lg bg-white/10 p-2">
                <s.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

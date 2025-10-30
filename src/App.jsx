import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Pricing from './components/Pricing';
import { Twitter, Github, Linkedin } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 text-white">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-orange-400" />
            <span className="text-sm font-semibold tracking-tight">Reel Reports</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#solutions" className="hover:text-white">Solutions</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#footer" className="rounded-lg bg-white/10 px-3 py-1.5 text-white hover:bg-white/20">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Features />
        <div id="solutions">
          <Solutions />
        </div>
        <Pricing />

        {/* Footer inline (not a separate component to keep total components at four) */}
        <footer id="footer" className="border-t border-white/10 bg-[#050507] py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col justify-between gap-8 sm:flex-row">
              <div className="max-w-md">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-orange-400" />
                  <span className="text-sm font-semibold tracking-tight">Reel Reports</span>
                </div>
                <p className="mt-3 text-sm text-white/70">
                  Create AI-powered, on-brand videos from text or slides. Faster updates, clearer communication.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a href="#" aria-label="Twitter" className="rounded-md p-2 text-white/70 transition hover:bg-white/10 hover:text-white">
                    <Twitter size={18} />
                  </a>
                  <a href="#" aria-label="GitHub" className="rounded-md p-2 text-white/70 transition hover:bg-white/10 hover:text-white">
                    <Github size={18} />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="rounded-md p-2 text-white/70 transition hover:bg-white/10 hover:text-white">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>

              <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
                <div>
                  <h4 className="text-sm font-semibold">Company</h4>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    <li><a href="#" className="hover:text-white">About</a></li>
                    <li><a href="#" className="hover:text-white">Blog</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Legal</h4>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white">Terms</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Product</h4>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    <li><a href="#features" className="hover:text-white">Features</a></li>
                    <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Contact</h4>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    <li><a href="#" className="hover:text-white">Book Demo</a></li>
                    <li><a href="#" className="hover:text-white">Contact Sales</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">
              © {new Date().getFullYear()} Reel Reports. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

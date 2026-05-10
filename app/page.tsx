"use client";

import { motion } from "framer-motion";
import { Mic, FileText, Type, Radar, Globe2, Radio, Target, Leaf, Sparkles, Smartphone, Download, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToolClick = (toolName: string) => {
    if (typeof window !== "undefined") {
      alert(`${toolName} feature is opening. Please wait...`);
    }
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[var(--bg)] transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/80 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-sora font-bold text-xl tracking-tight">
            <div className="w-8 h-8 rounded-lg bg-[var(--primary)] text-[var(--primary-invert)] flex items-center justify-center text-sm">
              SM
            </div>
            SpeechMate
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--text-muted)]">
            <Link href="#tools" className="hover:text-[var(--text-main)] transition-colors">Tools</Link>
            <Link href="#languages" className="hover:text-[var(--text-main)] transition-colors">Languages</Link>
            <Link href="#community" className="hover:text-[var(--text-main)] transition-colors">Community</Link>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => document.documentElement.classList.toggle('dark')}
              className="p-2 rounded-full hover:bg-[var(--surface-hover)] transition-colors"
              aria-label="Toggle Theme"
            >
              <svg className="w-5 h-5 hidden dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg className="w-5 h-5 block dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
            <button onClick={() => handleToolClick('Login')} className="btn-primary text-sm px-4 py-2">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-[var(--accent)]" />
              General Access Now Available
            </span>
            <h1 className="text-5xl md:text-7xl font-sora font-extrabold tracking-tight leading-[1.1] mb-6">
              Where Language <br className="hidden md:block" />
              Barriers <span className="text-[var(--text-muted)]">End.</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-muted)] mb-8">
              A professional suite for heritage language translation, learning, and cultural preservation. Built for the Andaman & Nicobar linguistic ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => handleToolClick('Get Started')} className="btn-primary w-full sm:w-auto">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => handleToolClick('Download App')} className="btn-secondary w-full sm:w-auto">
                <Smartphone className="w-4 h-4" />
                Download App
              </button>
            </div>
          </motion.div>
        </div>

        {/* Translation Tools Grid */}
        <div id="tools" className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-sora font-bold">Core Capabilities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Voice Translator", desc: "Real-time speech-to-text with noise filtering.", icon: Mic },
              { name: "Document Hub", desc: "Upload PDFs and images for automated translation.", icon: FileText },
              { name: "Text Context", desc: "Chat-style interface with contextual grammar.", icon: Type },
              { name: "Dialect Radar", desc: "Heatmap of regional dialect variations.", icon: Radar },
            ].map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                onClick={() => handleToolClick(tool.name)}
                className="glass-panel p-6 cursor-pointer flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center mb-6">
                  <tool.icon className="w-6 h-6 text-[var(--text-main)]" />
                </div>
                <h3 className="font-sora font-semibold text-lg mb-2">{tool.name}</h3>
                <p className="text-[var(--text-muted)] text-sm mb-4 flex-grow">{tool.desc}</p>
                <div className="flex items-center text-[var(--accent)] text-sm font-medium mt-auto group">
                  Open Tool <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Explore & Learn Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          <div className="lg:col-span-2 glass-panel p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 justify-between cursor-pointer" onClick={() => handleToolClick('Community Hub')}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg)] border border-[var(--border)] text-xs font-bold uppercase tracking-wider mb-4">
                <Globe2 className="w-3 h-3" /> Connect
              </div>
              <h2 className="text-3xl font-sora font-bold mb-4">Global Community Hub</h2>
              <p className="text-[var(--text-muted)] max-w-md">
                Engage with native speakers, linguists, and learners. Share audio snippets, ask for dialect corrections, and participate in heritage challenges.
              </p>
            </div>
            <div className="w-full md:w-48 h-48 rounded-2xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center">
               <Globe2 className="w-16 h-16 text-[var(--border)]" />
            </div>
          </div>

          <div className="glass-panel p-8 md:p-10 flex flex-col justify-between cursor-pointer" onClick={() => handleToolClick('Daily Practice')}>
            <div>
              <div className="w-12 h-12 rounded-xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[var(--text-main)]" />
              </div>
              <h3 className="text-2xl font-sora font-bold mb-3">Daily Practice</h3>
              <p className="text-[var(--text-muted)] text-sm">
                Maintain your streak with personalized 5-minute pronunciation sessions.
              </p>
            </div>
            <button className="btn-secondary w-full mt-8">Start Session</button>
          </div>
        </div>

        {/* Culture Tools */}
        <div>
          <h2 className="text-2xl font-sora font-bold mb-8">Cultural Immersion</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Story Radio", desc: "Listen to folk tales in native audio.", icon: Radio },
              { name: "Flora & Fauna", desc: "Local ecosystem dictionary.", icon: Leaf },
              { name: "Offline Models", desc: "Download ASR models for remote areas.", icon: Download },
            ].map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (0.1 * i) }}
                onClick={() => handleToolClick(tool.name)}
                className="glass-panel p-6 cursor-pointer flex items-center gap-4 hover:border-[var(--accent)]"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center shrink-0">
                  <tool.icon className="w-5 h-5 text-[var(--text-main)]" />
                </div>
                <div>
                  <h4 className="font-sora font-semibold">{tool.name}</h4>
                  <p className="text-[var(--text-muted)] text-xs mt-1">{tool.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="border-t border-[var(--border)] bg-[var(--surface)] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-sora font-bold tracking-tight flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[var(--primary)] text-[var(--primary-invert)] flex items-center justify-center text-[10px]">SM</div>
            SpeechMate General
          </div>
          <p className="text-[var(--text-muted)] text-sm">
            © {new Date().getFullYear()} SpeechMate Project. Andaman & Nicobar.
          </p>
        </div>
      </footer>
    </main>
  );
}

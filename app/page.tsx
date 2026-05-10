"use client";

import { motion } from "framer-motion";
import { Mic, FileText, Type, Radar, Globe2, Radio, Target, Leaf, Sparkles, Smartphone, Download, ArrowRight, Activity } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToolClick = (toolName: string) => {
    // Non-blocking toast notification replaces the synchronous alert() to fix INP
    toast.loading(`Launching ${toolName}...`, {
      description: "Please wait while we establish a secure connection.",
      duration: 2000,
    });
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/70 backdrop-blur-xl border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-sora font-bold text-xl tracking-tight">
            <div className="w-8 h-8 rounded-lg bg-[var(--primary)] text-[var(--primary-invert)] flex items-center justify-center text-sm">
              <Activity className="w-4 h-4" />
            </div>
            SpeechMate
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-muted)]">
            <Link href="#capabilities" className="hover:text-white transition-colors">Capabilities</Link>
            <Link href="#community" className="hover:text-white transition-colors">Network</Link>
            <Link href="#models" className="hover:text-white transition-colors">Offline Models</Link>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => handleToolClick('Console')} className="text-sm font-medium hover:text-white transition-colors">
              Sign In
            </button>
            <button onClick={() => handleToolClick('Dashboard')} className="btn-primary text-sm px-4 py-2">
              Dashboard <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-40 pb-24">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-sm font-medium mb-8 text-[var(--text-muted)] shadow-sm">
              <Sparkles className="w-4 h-4 text-[var(--primary)]" />
              SpeechMate Engine v2.0 Live
            </span>
            <h1 className="text-5xl md:text-7xl font-sora font-extrabold tracking-tight leading-[1.1] mb-8">
              Where Language <br className="hidden md:block" />
              Barriers <span className="text-gradient-accent">End.</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-muted)] mb-10 max-w-2xl mx-auto leading-relaxed">
              A professional suite for heritage language translation, learning, and cultural preservation. Built for the Andaman & Nicobar linguistic ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => handleToolClick('Translator Console')} className="btn-primary w-full sm:w-auto px-8 py-3 text-base">
                Start Translating
              </button>
              <button onClick={() => handleToolClick('Download App')} className="btn-secondary w-full sm:w-auto px-8 py-3 text-base">
                <Smartphone className="w-4 h-4" />
                Download App
              </button>
            </div>
          </motion.div>
        </div>

        {/* Translation Tools Grid */}
        <div id="capabilities" className="mb-32">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-sora font-bold text-white mb-2">Core Capabilities</h2>
              <p className="text-[var(--text-muted)]">State-of-the-art ASR and NLP tools.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Voice Translator", desc: "Real-time speech-to-text with advanced noise & VAD filtering.", icon: Mic },
              { name: "Document Hub", desc: "Upload PDFs and images for automated OCR translation.", icon: FileText },
              { name: "Text Context", desc: "Chat-style interface with contextual grammar and syntax checks.", icon: Type },
              { name: "Dialect Radar", desc: "Geospatial heatmap of regional dialect variations and evolution.", icon: Radar },
            ].map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                onClick={() => handleToolClick(tool.name)}
                className="glass-panel p-8 cursor-pointer flex flex-col h-full group"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center mb-6 group-hover:border-[var(--primary)] transition-colors">
                  <tool.icon className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <h3 className="font-sora font-semibold text-lg mb-3 text-white">{tool.name}</h3>
                <p className="text-[var(--text-muted)] text-sm mb-6 flex-grow leading-relaxed">{tool.desc}</p>
                <div className="flex items-center text-[var(--text-muted)] text-sm font-medium mt-auto group-hover:text-white transition-colors">
                  Initialize <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Explore & Learn Section */}
        <div id="community" className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-32">
          <div className="lg:col-span-2 glass-panel p-10 md:p-12 flex flex-col md:flex-row items-center gap-10 justify-between cursor-pointer group" onClick={() => handleToolClick('Community Hub')}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--bg)] border border-[var(--border)] text-xs font-bold uppercase tracking-wider mb-6 text-[var(--text-muted)]">
                <Globe2 className="w-3 h-3 text-[var(--accent)]" /> Global Network
              </div>
              <h2 className="text-3xl font-sora font-bold mb-4 text-white">Community Hub</h2>
              <p className="text-[var(--text-muted)] max-w-md leading-relaxed mb-8">
                Engage with native speakers, linguists, and learners. Share audio snippets, ask for dialect corrections, and participate in heritage challenges securely.
              </p>
              <div className="text-[var(--primary)] font-medium flex items-center text-sm">
                Connect Network <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            <div className="w-full md:w-56 h-56 rounded-full bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center relative overflow-hidden group-hover:border-[var(--primary)] transition-colors">
               <div className="absolute inset-0 bg-[var(--primary)] opacity-5 blur-3xl rounded-full group-hover:opacity-10 transition-opacity"></div>
               <Globe2 className="w-20 h-20 text-[var(--border)] group-hover:text-[var(--primary)] transition-colors relative z-10" />
            </div>
          </div>

          <div className="glass-panel p-10 md:p-12 flex flex-col justify-between cursor-pointer group" onClick={() => handleToolClick('Daily Practice')}>
            <div>
              <div className="w-12 h-12 rounded-lg bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center mb-6 group-hover:border-[var(--accent)] transition-colors">
                <Target className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <h3 className="text-2xl font-sora font-bold mb-3 text-white">Daily Practice</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Maintain your cognitive streak with personalized 5-minute pronunciation validation sessions.
              </p>
            </div>
            <button className="btn-secondary w-full mt-8 group-hover:bg-[var(--surface-hover)] group-hover:text-white">
              Start Session
            </button>
          </div>
        </div>

        {/* Culture Tools */}
        <div id="models">
          <h2 className="text-3xl font-sora font-bold text-white mb-10">Ecosystem Integrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Story Radio", desc: "Stream high-fidelity folk tales in native audio formats.", icon: Radio },
              { name: "Flora & Fauna", desc: "Indexed local ecosystem dictionary with image recognition.", icon: Leaf },
              { name: "Offline Models", desc: "Download quantized ASR models for remote execution.", icon: Download },
            ].map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (0.1 * i) }}
                onClick={() => handleToolClick(tool.name)}
                className="glass-panel p-8 cursor-pointer flex items-start gap-5 hover:border-[var(--border-hover)] group"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:bg-[var(--surface)] transition-colors">
                  <tool.icon className="w-5 h-5 text-[var(--text-muted)] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-sora font-semibold text-white mb-2">{tool.name}</h4>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed">{tool.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="border-t border-[var(--border)] bg-[var(--bg)] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-sora font-bold tracking-tight flex items-center gap-2 text-white">
            <div className="w-6 h-6 rounded bg-[var(--primary)] text-[var(--primary-invert)] flex items-center justify-center text-[10px]">
              <Activity className="w-3 h-3" />
            </div>
            SpeechMate OS
          </div>
          <p className="text-[var(--text-muted)] text-sm">
            © {new Date().getFullYear()} SpeechMate Platform. Andaman & Nicobar Ecosystem.
          </p>
        </div>
      </footer>
    </main>
  );
}

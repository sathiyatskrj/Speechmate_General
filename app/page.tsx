"use client";

import { Mic, FileText, Type, Radar, Globe2, Target, Leaf, Radio, Download, ArrowRight, Sparkles, Smartphone, LogIn, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function Home() {
  const handleToolClick = (toolName: string) => {
    toast.loading(`Launching ${toolName}...`, {
      description: "Securely connecting to SpeechMate services.",
      duration: 2000,
    });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30">
      
      {/* Navbar */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-slate-950/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 font-semibold text-lg tracking-tight">
            <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            SpeechMate
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <Link href="#capabilities" className="hover:text-white transition-colors">Capabilities</Link>
            <Link href="#community" className="hover:text-white transition-colors">Network</Link>
            <Link href="#ecosystem" className="hover:text-white transition-colors">Ecosystem</Link>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleToolClick('Login')} 
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors hidden sm:block"
            >
              Sign In
            </button>
            <button 
              onClick={() => handleToolClick('Dashboard')} 
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-full transition-all shadow-md hover:shadow-indigo-500/25 flex items-center gap-2"
            >
              Dashboard <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sm font-medium text-indigo-400 mb-8 shadow-sm">
            <Sparkles className="w-4 h-4" />
            SpeechMate Engine v2.0 Live
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">
            Where Language <br className="hidden sm:block" />
            Barriers End.
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            A professional suite for heritage language translation, learning, and cultural preservation. Built for the Andaman & Nicobar linguistic ecosystems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => handleToolClick('Translator Console')} 
              className="w-full sm:w-auto bg-white text-slate-950 hover:bg-slate-200 px-8 py-3.5 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
            >
              Start Translating
            </button>
            <button 
              onClick={() => handleToolClick('Android App')} 
              className="w-full sm:w-auto bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white px-8 py-3.5 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Smartphone className="w-5 h-5 text-slate-400" />
              Download App
            </button>
          </div>
        </div>
      </div>

      {/* Core Capabilities */}
      <div id="capabilities" className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-800/50">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Core Capabilities</h2>
            <p className="text-slate-400 text-lg">State-of-the-art ASR and NLP tools powered by custom models.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Voice Translator", desc: "Real-time speech-to-text with advanced noise & VAD filtering.", icon: Mic, color: "text-blue-400", bg: "bg-blue-500/10", border: "group-hover:border-blue-500/30" },
            { name: "Document Hub", desc: "Upload PDFs and images for automated OCR translation.", icon: FileText, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "group-hover:border-emerald-500/30" },
            { name: "Text Context", desc: "Chat-style interface with contextual grammar and syntax checks.", icon: Type, color: "text-purple-400", bg: "bg-purple-500/10", border: "group-hover:border-purple-500/30" },
            { name: "Dialect Radar", desc: "Geospatial heatmap of regional dialect variations and evolution.", icon: Radar, color: "text-rose-400", bg: "bg-rose-500/10", border: "group-hover:border-rose-500/30" },
          ].map((tool, i) => (
            <div 
              key={i}
              onClick={() => handleToolClick(tool.name)}
              className={`group bg-slate-900 border border-slate-800 rounded-2xl p-8 cursor-pointer transition-all hover:bg-slate-800/80 ${tool.border}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${tool.bg}`}>
                <tool.icon className={`w-6 h-6 ${tool.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{tool.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{tool.desc}</p>
              <div className="flex items-center text-sm font-medium text-slate-500 group-hover:text-white transition-colors">
                Initialize <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community & Practice */}
      <div id="community" className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-800/50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div 
            onClick={() => handleToolClick('Community Hub')}
            className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-indigo-500/30 rounded-3xl p-10 sm:p-14 cursor-pointer group transition-colors relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-64 h-64 bg-indigo-500/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-indigo-500/20 transition-colors"></div>
            
            <div className="relative z-10 md:flex md:items-center md:justify-between gap-10">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800/50 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-6">
                  <Globe2 className="w-4 h-4" /> Global Network
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Community Hub</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-md">
                  Engage with native speakers, linguists, and learners. Share audio snippets, ask for dialect corrections, and participate securely.
                </p>
                <div className="text-indigo-400 font-medium flex items-center">
                  Connect Network <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="hidden md:flex w-48 h-48 rounded-full border border-slate-700/50 items-center justify-center bg-slate-900/50">
                <Globe2 className="w-20 h-20 text-slate-700 group-hover:text-indigo-500 transition-colors" />
              </div>
            </div>
          </div>

          <div 
            onClick={() => handleToolClick('Daily Practice')}
            className="bg-slate-900 border border-slate-800 hover:border-orange-500/30 rounded-3xl p-10 sm:p-14 cursor-pointer group transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Daily Practice</h3>
              <p className="text-slate-400 leading-relaxed">
                Maintain your cognitive streak with personalized 5-minute pronunciation validation sessions.
              </p>
            </div>
            <button className="w-full mt-8 bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 rounded-xl transition-colors">
              Start Session
            </button>
          </div>

        </div>
      </div>

      {/* Ecosystem */}
      <div id="ecosystem" className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-800/50">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-12 text-center sm:text-left">Ecosystem Integrations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Story Radio", desc: "Stream high-fidelity folk tales in native audio formats.", icon: Radio, hover: "hover:border-amber-500/30" },
            { name: "Flora & Fauna", desc: "Indexed local ecosystem dictionary with image recognition.", icon: Leaf, hover: "hover:border-green-500/30" },
            { name: "Offline Models", desc: "Download quantized ASR models for remote execution.", icon: Download, hover: "hover:border-cyan-500/30" },
          ].map((tool, i) => (
            <div 
              key={i}
              onClick={() => handleToolClick(tool.name)}
              className={`bg-slate-900 border border-slate-800 rounded-2xl p-8 cursor-pointer transition-colors group flex items-start gap-5 ${tool.hover}`}
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-slate-700 transition-colors">
                <tool.icon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">{tool.name}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-semibold tracking-tight flex items-center gap-2 text-white">
            <div className="w-6 h-6 rounded bg-indigo-500 flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            SpeechMate OS
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SpeechMate Platform. Andaman & Nicobar Ecosystem.
          </p>
        </div>
      </footer>
    </main>
  );
}

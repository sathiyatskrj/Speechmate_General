"use client";

import { Mic, FileText, Type, Radar, Globe2, Radio, Target, Leaf, Sparkles, Smartphone, Download, ArrowRight, Sun } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToolClick = (toolName: string) => {
    toast.success(`Opening ${toolName}`, {
      description: "Redirecting to the portal...",
    });
    setTimeout(() => {
      router.push(`/?tool=${toolName.toLowerCase().replace(/\s+/g, '-')}`);
    }, 800);
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen relative z-10 font-sans text-[#003731]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-[#FF7043]">
            <Sun className="w-6 h-6" />
            SpeechMate
          </div>
          <div className="hidden md:flex items-center gap-8 font-semibold text-[#00574D]">
            <Link href="#capabilities" className="hover:text-[#FF7043] transition-colors">Tools</Link>
            <Link href="#community" className="hover:text-[#FF7043] transition-colors">Network</Link>
            <Link href="#models" className="hover:text-[#FF7043] transition-colors">Downloads</Link>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => handleToolClick('Sign In')} className="btn-glass text-sm px-4 py-2 hidden sm:flex">
              Log In
            </button>
            <button onClick={() => handleToolClick('Dashboard')} className="btn-tropical text-sm px-4 py-2">
              Dashboard
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-36 pb-24 relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24 animate-float">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-white/50 text-sm font-bold text-[#FF7043] shadow-sm mb-8">
            <Sparkles className="w-4 h-4" />
            SpeechMate Engine v2.0 Live
          </span>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-tight mb-6 text-white drop-shadow-md">
            Where Language <br className="hidden md:block" />
            Barriers <span className="text-[#FFCC80]">End.</span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-[#003731] mb-10 leading-relaxed bg-white/40 px-6 py-3 rounded-2xl backdrop-blur-sm border border-white/30 shadow-sm">
            A vibrant suite for heritage language translation, learning, and cultural preservation. Built for the beautiful Andaman & Nicobar islands.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button onClick={() => handleToolClick('Translator Console')} className="btn-tropical w-full sm:w-auto px-8 py-4 text-lg">
              Start Translating
            </button>
            <button onClick={() => handleToolClick('Download App')} className="btn-glass w-full sm:w-auto px-8 py-4 text-lg">
              <Smartphone className="w-5 h-5" />
              Get Android App
            </button>
          </div>
        </div>

        {/* Translation Tools Grid */}
        <div id="capabilities" className="mb-24">
          <div className="mb-8 text-center bg-white/60 py-4 rounded-2xl backdrop-blur-md border border-white/40 shadow-sm max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-[#00574D]">Translation Tools</h2>
            <p className="font-medium mt-1 text-[#00838F]">State-of-the-art native linguistics.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Voice Translator", desc: "Real-time speech-to-text with advanced noise filtering.", icon: Mic, color: "text-[#FF7043]" },
              { name: "Document Hub", desc: "Upload PDFs for automated OCR and localized translation.", icon: FileText, color: "text-[#2DD4BF]" },
              { name: "Text Context", desc: "Chat interface with contextual grammar and syntax checks.", icon: Type, color: "text-[#8B5CF6]" },
              { name: "Dialect Radar", desc: "Geospatial heatmap of island dialect variations.", icon: Radar, color: "text-[#EC4899]" },
            ].map((tool, i) => (
              <div
                key={i}
                onClick={() => handleToolClick(tool.name)}
                className="island-card p-6 flex flex-col h-full cursor-pointer group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm ${tool.color}`}>
                  <tool.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#003731]">{tool.name}</h3>
                <p className="font-medium text-[#00574D] flex-grow leading-relaxed">{tool.desc}</p>
                <div className="mt-6 font-bold text-[#FF7043] flex items-center group-hover:text-[#E64A19] transition-colors">
                  Launch App <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Culture & Practice Section */}
        <div id="community" className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          <div className="lg:col-span-2 island-card p-10 flex flex-col md:flex-row items-center gap-10 justify-between cursor-pointer group" onClick={() => handleToolClick('Community Hub')}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 text-[#00838F] text-xs font-bold uppercase tracking-wider mb-4 border border-white">
                <Globe2 className="w-4 h-4" /> Global Network
              </div>
              <h2 className="text-4xl font-extrabold mb-4 text-[#006064]">Community Hub</h2>
              <p className="font-medium text-[#00838F] max-w-md leading-relaxed mb-8 text-lg">
                Engage with native speakers and learners. Share audio, ask for corrections, and participate in challenges.
              </p>
              <button className="btn-tropical">
                Join the Network
              </button>
            </div>
            <Globe2 className="w-32 h-32 text-[#4DD0E1] group-hover:scale-110 transition-transform duration-500 opacity-60 hidden md:block" />
          </div>

          <div className="island-card p-10 flex flex-col justify-between cursor-pointer group" onClick={() => handleToolClick('Daily Practice')}>
            <div>
              <div className="w-16 h-16 rounded-2xl bg-white/60 border border-white flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#F57C00]" />
              </div>
              <h3 className="text-3xl font-extrabold mb-3 text-[#E65100]">Daily Practice</h3>
              <p className="font-medium text-[#EF6C00] leading-relaxed">
                Maintain your cognitive streak with quick 5-minute sessions.
              </p>
            </div>
            <button className="btn-glass w-full mt-8 border-[#F57C00] text-[#F57C00] hover:bg-[#F57C00] hover:text-white">
              Start Session
            </button>
          </div>
        </div>

        {/* Integrations */}
        <div id="models">
          <div className="mb-8 text-center bg-white/60 py-4 rounded-2xl backdrop-blur-md border border-white/40 shadow-sm max-w-sm mx-auto">
             <h2 className="text-3xl font-bold text-[#00574D]">Ecosystem</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Story Radio", desc: "Stream local folk tales in native audio formats.", icon: Radio, text: "text-[#FBC02D]" },
              { name: "Flora & Fauna", desc: "Indexed ecosystem dictionary with AI image recognition.", icon: Leaf, text: "text-[#7CB342]" },
              { name: "Offline Models", desc: "Download ASR models for remote execution.", icon: Download, text: "text-[#8E24AA]" },
            ].map((tool, i) => (
              <div
                key={i}
                onClick={() => handleToolClick(tool.name)}
                className="island-card p-8 cursor-pointer flex items-start gap-5 group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-white border border-white flex items-center justify-center shrink-0 shadow-sm ${tool.text}`}>
                  <tool.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-[#003731]">{tool.name}</h4>
                  <p className="font-medium text-[#00574D] leading-relaxed">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-white/50 py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="font-bold tracking-tight flex items-center gap-2 text-[#FF7043] text-xl">
            <Sun className="w-6 h-6" />
            SpeechMate Web
          </div>
          <p className="font-bold text-[#00574D]">
            © {new Date().getFullYear()} Andaman & Nicobar Heritage Ecosystem.
          </p>
        </div>
      </footer>
    </main>
  );
}

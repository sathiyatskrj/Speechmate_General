"use client";

import { Mic, FileText, Type, Radar, Globe2, Radio, Target, Leaf, Sparkles, Smartphone, Download, ArrowRight, Sun } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleToolClick = (toolName: string) => {
    toast.success(`Opening ${toolName}`, {
      description: "Redirecting to the portal...",
    });
    // Actually route somewhere so the app feels alive
    setTimeout(() => {
      router.push(`/?tool=${toolName.toLowerCase().replace(/\s+/g, '-')}`);
    }, 800);
  };

  return (
    <main className="min-h-screen relative z-10 font-inter text-[#003731]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-sora font-bold text-xl tracking-tight text-[#FF7043]">
            <Sun className="w-6 h-6" />
            SpeechMate
          </div>
          <div className="hidden md:flex items-center gap-8 font-semibold text-[#00574D]">
            <Link href="#capabilities" className="hover:text-[#FF7043] transition-colors">Tools</Link>
            <Link href="#community" className="hover:text-[#FF7043] transition-colors">Network</Link>
            <Link href="#models" className="hover:text-[#FF7043] transition-colors">Downloads</Link>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => handleToolClick('Sign In')} className="btn-secondary text-sm px-4 py-2">
              Log In
            </button>
            <button onClick={() => handleToolClick('Dashboard')} className="btn-primary text-sm px-4 py-2">
              Dashboard
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-36 pb-24 relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-white/50 text-sm font-bold text-[#FF7043] shadow-sm mb-8">
            <Sparkles className="w-4 h-4" />
            SpeechMate Engine v2.0 Live
          </span>
          <h1 className="text-5xl md:text-7xl font-sora font-extrabold tracking-tight leading-tight mb-6 text-white drop-shadow-md">
            Where Language <br className="hidden md:block" />
            Barriers <span className="text-[#FFCC80]">End.</span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-[#003731] mb-10 leading-relaxed bg-white/40 px-6 py-3 rounded-2xl backdrop-blur-sm border border-white/30">
            A vibrant suite for heritage language translation, learning, and cultural preservation. Built for the beautiful Andaman & Nicobar islands.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button onClick={() => handleToolClick('Translator Console')} className="btn-primary w-full sm:w-auto px-8 py-4 text-lg">
              Start Translating
            </button>
            <button onClick={() => handleToolClick('Download App')} className="btn-secondary w-full sm:w-auto px-8 py-4 text-lg bg-white border-2">
              <Smartphone className="w-5 h-5" />
              Get Android App
            </button>
          </div>
        </div>

        {/* Translation Tools Grid */}
        <div id="capabilities" className="mb-24">
          <div className="mb-8 text-center bg-white/60 py-4 rounded-2xl backdrop-blur-md border border-white/40 shadow-sm">
            <h2 className="text-3xl font-sora font-bold text-[#00574D]">Translation Tools</h2>
            <p className="font-medium mt-1">State-of-the-art native linguistics.</p>
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
                className="island-card p-6 flex flex-col h-full cursor-pointer group bg-white/90"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${tool.color}`}>
                  <tool.icon className="w-7 h-7" />
                </div>
                <h3 className="font-sora font-bold text-xl mb-3">{tool.name}</h3>
                <p className="font-medium text-[#00574D] flex-grow leading-relaxed">{tool.desc}</p>
                <div className="mt-6 font-bold text-[#FF7043] flex items-center group-hover:text-[#E64A19]">
                  Launch App <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Culture & Practice Section */}
        <div id="community" className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          <div className="lg:col-span-2 island-card p-10 flex flex-col md:flex-row items-center gap-10 justify-between cursor-pointer group bg-gradient-to-br from-white/95 to-blue-50/90" onClick={() => handleToolClick('Community Hub')}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F7FA] text-[#00838F] text-xs font-bold uppercase tracking-wider mb-4 border border-[#B2EBF2]">
                <Globe2 className="w-4 h-4" /> Global Network
              </div>
              <h2 className="text-4xl font-sora font-extrabold mb-4 text-[#006064]">Community Hub</h2>
              <p className="font-medium text-[#00838F] max-w-md leading-relaxed mb-8 text-lg">
                Engage with native speakers and learners. Share audio, ask for corrections, and participate in challenges.
              </p>
              <button className="btn-primary">
                Join the Network
              </button>
            </div>
            <Globe2 className="w-32 h-32 text-[#4DD0E1] group-hover:scale-110 transition-transform duration-500 opacity-50 hidden md:block" />
          </div>

          <div className="island-card p-10 flex flex-col justify-between cursor-pointer group bg-gradient-to-br from-white/95 to-orange-50/90" onClick={() => handleToolClick('Daily Practice')}>
            <div>
              <div className="w-16 h-16 rounded-2xl bg-[#FFE0B2] flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#F57C00]" />
              </div>
              <h3 className="text-3xl font-sora font-extrabold mb-3 text-[#E65100]">Daily Practice</h3>
              <p className="font-medium text-[#EF6C00] leading-relaxed">
                Maintain your cognitive streak with quick 5-minute sessions.
              </p>
            </div>
            <button className="btn-secondary w-full mt-8 border-[#F57C00] text-[#F57C00]">
              Start Session
            </button>
          </div>
        </div>

        {/* Integrations */}
        <div id="models">
          <div className="mb-8 text-center bg-white/60 py-4 rounded-2xl backdrop-blur-md border border-white/40 shadow-sm">
             <h2 className="text-3xl font-sora font-bold text-[#00574D]">Ecosystem</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Story Radio", desc: "Stream local folk tales in native audio formats.", icon: Radio, bg: "bg-[#FFF9C4]", text: "text-[#FBC02D]" },
              { name: "Flora & Fauna", desc: "Indexed ecosystem dictionary with AI image recognition.", icon: Leaf, bg: "bg-[#DCEDC8]", text: "text-[#7CB342]" },
              { name: "Offline Models", desc: "Download ASR models for remote execution.", icon: Download, bg: "bg-[#E1BEE7]", text: "text-[#8E24AA]" },
            ].map((tool, i) => (
              <div
                key={i}
                onClick={() => handleToolClick(tool.name)}
                className="island-card p-8 cursor-pointer flex items-start gap-5 bg-white/90 group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${tool.bg} ${tool.text}`}>
                  <tool.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-sora font-bold text-xl mb-2">{tool.name}</h4>
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
          <div className="font-sora font-bold tracking-tight flex items-center gap-2 text-[#FF7043] text-xl">
            <Sun className="w-6 h-6" />
            SpeechMate Web
          </div>
          <p className="font-bold text-[#00574D]">
            © {new Date().getFullYear()} Andaman & Nicobar Heritage Ecosystem.
          </p>
        </div>
      </footer>

      {/* Simple native animation classes */}
      <style dangerouslySetInnerHTML={{__html: `
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </main>
  );
}

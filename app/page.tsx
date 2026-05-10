"use client";

import { Mic, FileText, Type, Radar, Globe2, Target, Leaf, Radio, Download, ArrowRight, Sparkles, Smartphone, Code, Shield, MapPin, Zap } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
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
      const slug = toolName.toLowerCase().replace(/\s+/g, '-');
      router.push(`/tools/${slug}`);
    }, 800);
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen relative z-10 font-sans text-[#003731]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-[#FF7043]">
            <MapPin className="w-6 h-6" />
            SpeechMate
          </div>
          <div className="hidden md:flex items-center gap-8 font-semibold text-[#00574D]">
            <Link href="#problem" className="hover:text-[#FF7043] transition-colors">The Mission</Link>
            <Link href="#features" className="hover:text-[#FF7043] transition-colors">Features</Link>
            <Link href="#architecture" className="hover:text-[#FF7043] transition-colors">Tech</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/sathiyatskrj/Speechmate" target="_blank" className="btn-glass text-sm px-4 py-2 hidden sm:flex">
              <Code className="w-4 h-4" /> Source
            </Link>
            <button onClick={() => toast.success("APK downloading...")} className="btn-tropical text-sm px-4 py-2">
              Get App
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-36 pb-24 relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24 animate-float">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-white/50 text-sm font-bold text-[#00838F] shadow-sm mb-8">
            <Globe2 className="w-4 h-4" />
            General Public & Tourism Edition (v1.4.9)
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 text-white drop-shadow-md">
            Bridging the <br className="hidden md:block" />
            Island <span className="text-[#FFCC80]">Language Gap.</span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-[#003731] mb-10 leading-relaxed bg-white/40 px-8 py-4 rounded-3xl backdrop-blur-sm border border-white/30 shadow-sm max-w-3xl">
            An offline, voice-enabled translation and cultural immersion hub built for travelers, researchers, and locals navigating the Andaman & Nicobar archipelago.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button onClick={() => toast.success("Starting APK download...")} className="btn-tropical w-full sm:w-auto px-8 py-4 text-lg">
              <Smartphone className="w-5 h-5" />
              Download Android APK
            </button>
            <Link href="https://github.com/sathiyatskrj/Speechmate" target="_blank" className="btn-glass w-full sm:w-auto px-8 py-4 text-lg bg-white border-2">
              <Code className="w-5 h-5" />
              View on GitHub
            </Link>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-sm font-bold text-white drop-shadow-md flex-wrap">
            <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-[#FFCC80]" /> 100% Offline</div>
            <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#FFCC80]" /> Flutter 3.29+</div>
            <div className="flex items-center gap-2"><Mic className="w-4 h-4 text-[#FFCC80]" /> Whisper STT</div>
          </div>
        </div>

        {/* The Problem Section */}
        <div id="problem" className="mb-24">
           <div className="island-card p-10 md:p-14 bg-gradient-to-br from-white/95 to-[#E0F7FA]/90">
             <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-1">
                  <h2 className="text-3xl font-extrabold text-[#006064] mb-4">The Connectivity Challenge</h2>
                  <p className="text-lg text-[#00838F] font-medium leading-relaxed mb-6">
                    A traveler arrives in the remote islands of the Andaman and Nicobar archipelago. Between indigenous communities speaking Nicobarese or Aka-Jeru, and settlers speaking Hindi or Tamil, the language barrier is immense.
                  </p>
                  <p className="text-lg text-[#00838F] font-medium leading-relaxed">
                    With virtually <strong className="text-[#FF7043]">zero internet connectivity</strong>, cloud-based tools like Google Translate fail entirely. Endangered languages remain inaccessible. SpeechMate is built to run 100% offline, on-device, to solve this.
                  </p>
                </div>
                <div className="w-full md:w-1/3 bg-white rounded-3xl p-6 shadow-sm border border-[#B2EBF2] flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-[#006064] font-bold"><Globe2 className="w-5 h-5 text-red-500" /> Google Translate: Fails offline</div>
                  <div className="flex items-center gap-3 text-[#006064] font-bold"><FileText className="w-5 h-5 text-red-500" /> Phrasebooks: Outdated</div>
                  <div className="flex items-center gap-3 text-[#006064] font-bold"><Sparkles className="w-5 h-5 text-green-500" /> SpeechMate: 100% Offline STT</div>
                </div>
             </div>
           </div>
        </div>

        {/* Core Features */}
        <div id="features" className="mb-24">
          <div className="mb-8 text-center bg-white/60 py-4 rounded-2xl backdrop-blur-md border border-white/40 shadow-sm max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-[#00574D]">Traveler Capabilities</h2>
            <p className="font-medium mt-1 text-[#00838F]">Stripped of classroom tools, built for real-world utility.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Omni-Lingual Translator", desc: "Speak in English/Hindi/Tamil to translate locally.", icon: Mic, color: "text-[#FF7043]" },
              { name: "Tribal Dictionaries", desc: "Access 2,400+ words in Nicobarese & Great Andamanese.", icon: FileText, color: "text-[#2DD4BF]" },
              { name: "On-device STT", desc: "Hands-free translation using bundled Whisper AI.", icon: Target, color: "text-[#8B5CF6]" },
              { name: "Camera OCR", desc: "Scan restaurant menus, signs, or local documents.", icon: Leaf, color: "text-[#EC4899]" },
              { name: "Survival Phrases", desc: "Quick-access greetings, directions, and food terms.", icon: Type, color: "text-[#F57C00]" },
              { name: "Cultural Hub", desc: "Learn the heritage, traditions, and history offline.", icon: Globe2, color: "text-[#00BCD4]" },
            ].map((tool, i) => (
              <div
                key={i}
                onClick={() => handleToolClick(tool.name)}
                className="island-card p-8 flex flex-col h-full bg-white/90 cursor-pointer group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform ${tool.color}`}>
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

        {/* Architecture */}
        <div id="architecture" className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24">
          <div className="island-card p-10 flex flex-col justify-center bg-white/95">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3E0] text-[#E65100] text-xs font-bold uppercase tracking-wider mb-6 border border-[#FFE0B2]">
                <Settings className="w-4 h-4" /> Technical Specs
             </div>
             <h2 className="text-4xl font-extrabold mb-6 text-[#E65100]">Architecture</h2>
             <p className="font-medium text-[#EF6C00] leading-relaxed mb-6 text-lg">
                No generative AI or cloud LLMs. All translation is deterministic dictionary + algorithmic NLP, ensuring zero data privacy leaks.
             </p>
             <ul className="space-y-4 font-bold text-[#003731]">
               <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#FF7043]"></span> Flutter UI (Riverpod)</li>
               <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#FF7043]"></span> WhisperService (NDK 27 C++)</li>
               <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#FF7043]"></span> NeuralEngine (Dictionary + NLP)</li>
               <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#FF7043]"></span> ML Kit (OCR + Object Detection)</li>
               <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#FF7043]"></span> SQLite DatabaseManager</li>
             </ul>
          </div>
          
          <div className="island-card p-10 flex flex-col justify-center bg-white/95">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F7FA] text-[#00838F] text-xs font-bold uppercase tracking-wider mb-6 border border-[#B2EBF2]">
                <Shield className="w-4 h-4" /> Licensing
             </div>
             <h2 className="text-4xl font-extrabold mb-6 text-[#006064]">Data Sovereignty</h2>
             <p className="font-medium text-[#00838F] leading-relaxed mb-6 text-lg">
                SpeechMate uses a split-licensing model to keep the source code open while strictly protecting indigenous data.
             </p>
             <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-[#003731]">Software: Apache 2.0</h4>
                  <p className="text-sm font-medium text-[#00574D]">Source code is free to modify and distribute.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-[#003731]">Linguistic Data: CC BY-NC 4.0</h4>
                  <p className="text-sm font-medium text-[#00574D]">No commercial use or AI training allowed for tribal assets.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-white/50 py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="font-bold tracking-tight flex items-center gap-2 text-[#FF7043] text-xl">
            <MapPin className="w-6 h-6" />
            SpeechMate App
          </div>
          <p className="font-bold text-[#00574D]">
            © {new Date().getFullYear()} T Sathiya Moorthy. Andaman & Nicobar Edition.
          </p>
        </div>
      </footer>
    </main>
  );
}

// Temporary icon to avoid import error
function Settings({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
}

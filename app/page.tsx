"use client";

import { Mic, FileText, Type, Radar, Globe2, Target, Leaf, Radio, Download, ArrowRight, Sparkles, Smartphone, Code, Shield, MapPin, Zap, Settings, BookOpen } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.4 } }
  };

  return (
    <main className="min-h-screen relative z-10 font-sans text-[#003731] overflow-hidden">
      {/* Premium Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.05)] transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 font-extrabold text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FF7043] to-[#F57C00]"
          >
            <Image src="/logo_main.png" alt="SpeechMate Logo" width={40} height={40} className="w-10 h-10 rounded-xl shadow-lg" />
            SpeechMate
          </motion.div>
          <div className="hidden md:flex items-center gap-10 font-bold text-[#00574D]">
            <Link href="#problem" className="hover:text-[#FF7043] transition-colors">Mission</Link>
            <Link href="#features" className="hover:text-[#FF7043] transition-colors">Capabilities</Link>
            <Link href="#architecture" className="hover:text-[#FF7043] transition-colors">Architecture</Link>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <Link href="https://github.com/sathiyatskrj/Speechmate" target="_blank" className="text-[#00574D] hover:text-[#FF7043] font-bold text-sm hidden sm:flex items-center gap-2 transition-colors">
              <Code className="w-5 h-5" /> Source
            </Link>
            <Link href="https://github.com/sathiyatskrj/Speechmate/releases/latest" target="_blank" onClick={() => toast.success("Redirecting to download...")} className="btn-tropical text-sm px-6 py-3 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2">
              Get App
            </Link>
          </motion.div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-40 pb-24 relative z-10">
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-white text-sm font-bold text-[#00838F] shadow-sm mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#FF7043]" />
              General Public & Tourism Edition (v1.4.9)
            </div>
            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-8 text-[#003731]">
              Bridging the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7043] to-[#F57C00]">Language Gap.</span>
            </h1>
            <p className="text-xl font-medium text-[#00574D] mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              An offline, voice-enabled translation and cultural immersion hub built for travelers, researchers, and locals navigating the Andaman & Nicobar archipelago.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="https://github.com/sathiyatskrj/Speechmate/releases/latest" target="_blank" onClick={() => toast.success("Redirecting to download...")} className="btn-tropical w-full sm:w-auto px-8 py-4 text-lg shadow-xl shadow-[#FF7043]/20 hover:-translate-y-1 transition-all inline-flex items-center justify-center gap-2">
                <Smartphone className="w-5 h-5" />
                Download APK
              </Link>
              <Link href="https://github.com/sathiyatskrj/Speechmate" target="_blank" className="btn-glass w-full sm:w-auto px-8 py-4 text-lg bg-white border-2 hover:-translate-y-1 transition-all inline-flex items-center justify-center gap-2">
                <Code className="w-5 h-5" />
                View on GitHub
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full max-w-lg hidden lg:block"
          >
            {/* Abstract UI representation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00BCD4]/20 to-[#FF7043]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative bg-white/90 backdrop-blur-xl border border-white shadow-2xl rounded-[3rem] p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
               <div className="flex items-center justify-between mb-8">
                 <div className="w-12 h-12 rounded-2xl bg-[#FF7043]/10 flex items-center justify-center text-[#FF7043]"><Mic className="w-6 h-6"/></div>
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-400"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                   <div className="w-3 h-3 rounded-full bg-green-400"></div>
                 </div>
               </div>
               <div className="space-y-4 mb-8">
                 <div className="h-4 bg-gray-100 rounded-full w-3/4"></div>
                 <div className="h-4 bg-gray-100 rounded-full w-1/2"></div>
               </div>
               <div className="p-6 rounded-3xl bg-gradient-to-br from-[#00BCD4]/10 to-[#2DD4BF]/10 border border-[#00BCD4]/20">
                 <div className="flex items-center gap-4 text-[#00838F] font-bold text-lg mb-2">
                   <Target className="w-5 h-5"/> On-Device Inference
                 </div>
                 <p className="text-[#00574D] font-medium text-sm">Processing Nicobarese linguistics locally via NDK 27.</p>
               </div>
            </div>
          </motion.div>
        </div>

        {/* The Problem Section */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          id="problem" 
          className="mb-32"
        >
           <div className="bg-gradient-to-br from-[#003731] to-[#00574D] rounded-[3rem] p-10 md:p-16 shadow-2xl text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-[#00BCD4] opacity-20 blur-[100px] rounded-full"></div>
             <div className="flex flex-col md:flex-row gap-16 items-center relative z-10">
                <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-black mb-6">Zero Signal? <br/><span className="text-[#2DD4BF]">No Problem.</span></h2>
                  <p className="text-xl text-white/80 font-medium leading-relaxed mb-8">
                    Between indigenous communities speaking Nicobarese or Aka-Jeru, and settlers speaking Hindi or Tamil, the language barrier is immense. With virtually zero internet, cloud-based tools fail entirely. 
                  </p>
                  <div className="flex items-center gap-4 text-[#2DD4BF] font-bold text-lg bg-white/10 px-6 py-4 rounded-2xl border border-white/10 inline-flex backdrop-blur-md">
                     <Shield className="w-6 h-6"/> SpeechMate runs 100% on-device.
                  </div>
                </div>
                <div className="w-full md:w-auto grid grid-cols-1 gap-4">
                  <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-3xl flex items-center gap-4">
                    <div className="bg-red-500/20 p-3 rounded-full text-red-400"><Globe2 className="w-6 h-6"/></div>
                    <div><h4 className="font-bold text-red-200">Google Translate</h4><p className="text-red-400/80 text-sm font-medium">Fails entirely offline</p></div>
                  </div>
                  <div className="bg-yellow-500/10 border border-yellow-500/20 p-6 rounded-3xl flex items-center gap-4">
                    <div className="bg-yellow-500/20 p-3 rounded-full text-yellow-400"><BookOpen className="w-6 h-6"/></div>
                    <div><h4 className="font-bold text-yellow-200">Phrasebooks</h4><p className="text-yellow-400/80 text-sm font-medium">Static & Outdated</p></div>
                  </div>
                </div>
             </div>
           </div>
        </motion.div>

        {/* Core Features */}
        <div id="features" className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-[#003731] mb-4">Traveler Capabilities</h2>
            <p className="text-xl font-medium text-[#00574D]">Stripped of classroom tools, built for real-world utility.</p>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { name: "Offline Web Translator", desc: "Search 13,000+ words in Nicobarese & Great Andamanese locally.", icon: FileText, color: "from-[#2DD4BF] to-[#00BCD4]" },
              { name: "Survival Phrases", desc: "Quick-access greetings, directions, and emergency terms.", icon: Type, color: "from-[#F57C00] to-[#E65100]" },
              { name: "Cultural Hub", desc: "Learn the heritage, traditions, and history completely offline.", icon: Globe2, color: "from-[#00BCD4] to-[#0097A7]" },
            ].map((tool, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                onClick={() => handleToolClick(tool.name)}
                className="group relative bg-white/90 backdrop-blur-xl border border-white p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${tool.color} opacity-10 rounded-bl-[100px] group-hover:scale-150 transition-transform duration-500`}></div>
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-white mb-8 shadow-md transform group-hover:rotate-6 transition-transform`}>
                  <tool.icon className="w-8 h-8" />
                </div>
                <h3 className="font-black text-2xl mb-3 text-[#003731]">{tool.name}</h3>
                <p className="font-medium text-[#00574D] flex-grow text-lg leading-relaxed">{tool.desc}</p>
                
                <div className="mt-8 pt-6 border-t border-gray-100 font-bold text-[#FF7043] flex items-center group-hover:text-[#E64A19] transition-colors">
                  Initialize Console <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Architecture & Licensing */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          id="architecture" 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24"
        >
          <motion.div variants={itemVariants} className="bg-white/95 backdrop-blur-xl border border-white shadow-xl rounded-[3rem] p-12">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF3E0] text-[#E65100] text-sm font-bold tracking-wider mb-8">
                <Settings className="w-5 h-5" /> Technical Architecture
             </div>
             <h2 className="text-4xl font-black mb-6 text-[#003731]">Deterministic Offline Engine</h2>
             <p className="font-medium text-[#00574D] leading-relaxed mb-10 text-lg">
                No generative AI or cloud LLMs. All translation relies on a strict deterministic dictionary mapped to algorithmic NLP, ensuring zero data privacy leaks.
             </p>
             <ul className="space-y-4 font-bold text-[#00838F] text-lg">
               <li className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100"><Zap className="w-6 h-6 text-[#FF7043]"/> Flutter UI (Riverpod State)</li>
               <li className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100"><Mic className="w-6 h-6 text-[#FF7043]"/> WhisperService (NDK 27 C++)</li>
               <li className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100"><Shield className="w-6 h-6 text-[#FF7043]"/> SQLite DatabaseManager</li>
             </ul>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white/95 backdrop-blur-xl border border-white shadow-xl rounded-[3rem] p-12 flex flex-col justify-center">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E0F7FA] text-[#00838F] text-sm font-bold tracking-wider mb-8">
                <Shield className="w-5 h-5" /> Licensing
             </div>
             <h2 className="text-4xl font-black mb-6 text-[#003731]">Data Sovereignty</h2>
             <p className="font-medium text-[#00574D] leading-relaxed mb-10 text-lg">
                SpeechMate strictly utilizes a split-licensing model to keep the source code open while fiercely protecting indigenous data rights.
             </p>
             <div className="space-y-6">
                <div className="bg-white border-2 border-gray-100 p-6 rounded-3xl shadow-sm hover:border-[#2DD4BF] transition-colors">
                  <h4 className="font-black text-xl text-[#003731] mb-2">Software: Apache 2.0</h4>
                  <p className="text-[#00838F] font-medium">The mobile application source code is free to modify, compile, and distribute.</p>
                </div>
                <div className="bg-white border-2 border-gray-100 p-6 rounded-3xl shadow-sm hover:border-[#FF7043] transition-colors">
                  <h4 className="font-black text-xl text-[#003731] mb-2">Linguistic Data: CC BY-NC 4.0</h4>
                  <p className="text-[#00838F] font-medium">No commercial use or AI training is allowed for any of the tribal datasets.</p>
                </div>
             </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-white py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="font-black tracking-tight flex items-center gap-3 text-[#FF7043] text-2xl">
            <Image src="/logo_main.png" alt="SpeechMate Logo" width={32} height={32} className="w-8 h-8 rounded-lg" />
            SpeechMate
          </div>
          <p className="font-bold text-[#00574D]">
            © {new Date().getFullYear()} T Sathiya Moorthy. Andaman & Nicobar Edition.
          </p>
        </div>
      </footer>
    </main>
  );
}

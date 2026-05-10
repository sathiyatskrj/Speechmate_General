"use client";

import { motion, Variants } from "framer-motion";
import { Mic, Camera, Radio, FileText, Type, Radar, BookOpen, MessageCircle, ChevronRight, Globe2, Sparkles, Flame, Star } from "lucide-react";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <main className="min-h-screen pb-24 selection:bg-teal-500/30">
      {/* Header / Gamification Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0 border-white/5 px-6 py-4 flex justify-between items-center max-w-5xl mx-auto rounded-b-3xl mt-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full gradient-teal flex items-center justify-center font-bold font-sora text-[#003731]">
            SM
          </div>
          <span className="font-sora font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-teal-100">
            SpeechMate
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="glass px-3 py-1.5 rounded-full flex items-center gap-1.5 border-orange-500/20 bg-orange-500/10">
            <Flame className="w-4 h-4 text-orange-500" />
            <span className="font-bold text-sm text-orange-100">12</span>
          </div>
          <div className="glass px-3 py-1.5 rounded-full flex items-center gap-1.5 border-purple-500/20 bg-purple-500/10">
            <Star className="w-4 h-4 text-purple-400" />
            <span className="font-bold text-sm text-purple-100">2,450 XP</span>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-32">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-teal-500/30 text-teal-300 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Discover India's Heritage Languages</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-sora font-extrabold tracking-tight leading-tight">
            Select Your <br />
            <span className="gradient-text-teal">Language</span>
          </h1>
          <p className="text-lg text-[var(--on-surface-dim)] max-w-2xl mx-auto mt-6">
            Embark on a journey to master rare and endangered heritage languages with interactive, AI-powered tools.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {/* Language Cards */}
          {[
            {
              name: "Pū (Car Nicobarese)",
              desc: "Spoken in the Nicobar Islands",
              meta: "34 LESSONS AVAILABLE",
              gradient: "gradient-nicobarese",
              glow: "glow-pink",
              icon: "🌴",
            },
            {
              name: "Aka-Jeru",
              desc: "Great Andamanese",
              meta: "HERITAGE LEVEL 2",
              gradient: "gradient-andamanese",
              glow: "glow-orange",
              icon: "🏹",
            },
            {
              name: "Onges",
              desc: "Discover the ancient rhythms",
              meta: "NEW ARRIVAL",
              gradient: "gradient-onge",
              glow: "glow-teal",
              icon: "🌊",
            },
          ].map((lang, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative overflow-hidden rounded-3xl p-8 cursor-pointer border border-white/10 ${lang.gradient} shadow-2xl transition-all duration-300 group`}
            >
              <div className="absolute top-0 right-0 p-6 text-6xl opacity-20 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                {lang.icon}
              </div>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-sora font-bold text-2xl text-white mb-2 leading-tight">
                  {lang.name}
                </h3>
                <p className="text-white/80 text-sm mb-8 font-medium">
                  {lang.desc}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[10px] font-bold tracking-wider text-white/90 bg-black/20 px-3 py-1.5 rounded-full uppercase">
                    {lang.meta}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-white/10 flex-1"></div>
            <h2 className="font-sora font-bold flex items-center gap-2 text-[var(--on-surface-dim)] tracking-wide uppercase text-sm">
              <span className="text-lg">🛠️</span> Translation Tools
            </h2>
            <div className="h-px bg-white/10 flex-1"></div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { name: "Document Translator", icon: FileText, color: "text-teal-400", bg: "bg-teal-500/10", border: "border-teal-500/20" },
              { name: "Text Translator", icon: Type, color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
              { name: "Voice Translator", icon: Mic, color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" },
              { name: "Dialect Radar", icon: Radar, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
            ].map((tool, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                className="glass rounded-2xl p-6 cursor-pointer border border-white/5 flex flex-col items-center justify-center text-center gap-4 transition-all hover:border-white/20"
              >
                <div className={`w-14 h-14 rounded-2xl ${tool.bg} ${tool.border} border flex items-center justify-center`}>
                  <tool.icon className={`w-6 h-6 ${tool.color}`} />
                </div>
                <span className="font-sora font-semibold text-sm">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Extra Bento Grid (Student Dash elements) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
           <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="glass rounded-3xl p-8 col-span-1 md:col-span-2 relative overflow-hidden group"
           >
             <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 blur-[80px] rounded-full group-hover:bg-teal-500/30 transition-colors"></div>
             <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center mb-6">
                    <Globe2 className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="font-sora text-3xl font-bold mb-2">Community Hub</h3>
                  <p className="text-[var(--on-surface-dim)] max-w-sm">Connect with native speakers and language learners worldwide.</p>
                </div>
                <button className="btn-primary w-max mt-8">
                  Join Community
                </button>
             </div>
           </motion.div>

           <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="glass rounded-3xl p-8 relative overflow-hidden group border-orange-500/20"
           >
             <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-500/20 blur-[60px] rounded-full group-hover:bg-orange-500/30 transition-colors"></div>
             <div className="relative z-10 flex flex-col h-full justify-between items-center text-center">
                <div className="w-16 h-16 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mb-6">
                  <Mic className="w-8 h-8 text-orange-400 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-sora text-xl font-bold mb-2">Daily Practice</h3>
                  <p className="text-[var(--on-surface-dim)] text-sm">Pronounce 5 words today</p>
                </div>
                <button className="btn-ghost w-full mt-6 justify-center">
                  Start Now
                </button>
             </div>
           </motion.div>
        </div>
      </div>
    </main>
  );
}

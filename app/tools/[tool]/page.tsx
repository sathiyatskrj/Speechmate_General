"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, Settings, Mic, FileText, Type, Radar, Target, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ToolPage({ params }: { params: Promise<{ tool: string }> }) {
  const resolvedParams = use(params);
  const toolName = resolvedParams.tool.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  // Map icons based on string
  const getIcon = () => {
    if (toolName.includes("Voice")) return <Mic className="w-12 h-12 text-[#FF7043]" />;
    if (toolName.includes("Document")) return <FileText className="w-12 h-12 text-[#2DD4BF]" />;
    if (toolName.includes("Text")) return <Type className="w-12 h-12 text-[#8B5CF6]" />;
    if (toolName.includes("Radar")) return <Radar className="w-12 h-12 text-[#EC4899]" />;
    if (toolName.includes("Community")) return <Globe2 className="w-12 h-12 text-[#00BCD4]" />;
    return <Target className="w-12 h-12 text-[#F57C00]" />;
  };

  return (
    <main className="min-h-screen bg-slate-50 relative z-10 font-sans text-[#003731] flex flex-col">
      <nav className="border-b border-gray-200 bg-white px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-[#00574D] font-bold hover:text-[#FF7043] transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
        <div className="font-sora font-bold text-lg text-[#003731]">
          {toolName} Console
        </div>
        <button className="p-2 text-gray-500 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors">
          <Settings className="w-5 h-5" />
        </button>
      </nav>

      <div className="flex-grow flex items-center justify-center p-6 bg-gradient-to-b from-sky-50 to-teal-50">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-10 border border-gray-100 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF7043] via-[#00BCD4] to-[#2DD4BF]"></div>
          
          <div className="w-24 h-24 mx-auto bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center mb-8 shadow-sm">
            {getIcon()}
          </div>
          
          <h1 className="text-4xl font-sora font-extrabold text-[#003731] mb-4">
            {toolName} Workspace
          </h1>
          <p className="text-lg text-[#00574D] font-medium mb-10 max-w-lg mx-auto">
            This module has been initialized successfully. The user interface for this specific tool will be integrated here from the Flutter repository.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <button className="bg-[#FF7043] hover:bg-[#E64A19] text-white px-8 py-3 rounded-full font-bold shadow-md transition-colors">
              Initialize Connection
            </button>
            <Link href="/" className="px-8 py-3 rounded-full font-bold text-[#FF7043] border-2 border-[#FF7043] hover:bg-[#FFF3E0] transition-colors">
              Close Tool
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

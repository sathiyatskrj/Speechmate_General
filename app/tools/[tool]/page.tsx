"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, LayoutDashboard, Terminal, Loader2 } from "lucide-react";
import WebTranslator from "../WebTranslator";
import SurvivalPhrases from "../SurvivalPhrases";
import CulturalHub from "../CulturalHub";

export default function ToolWorkspace({ params }: { params: Promise<{ tool: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const [toolName, setToolName] = useState("Loading...");
  const [status, setStatus] = useState<"idle" | "connecting" | "connected">("idle");

  useEffect(() => {
    const name = resolvedParams.tool
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    setToolName(name);
  }, [resolvedParams.tool]);

  const handleConnect = () => {
    setStatus("connecting");
    setTimeout(() => {
      setStatus("connected");
    }, 1500); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0F7FA] to-[#B2EBF2] font-sans">
      {/* Top Navigation */}
      <div className="bg-white/80 backdrop-blur-md border-b border-white shadow-sm p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-[#00574D] font-bold hover:text-[#FF7043] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </button>
          <div className="flex items-center gap-2 font-bold text-[#00838F]">
            <LayoutDashboard className="w-5 h-5" /> {toolName} Console
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 md:p-12 mt-8">
        <div className="island-card p-8 bg-white/95 backdrop-blur-xl shadow-2xl relative overflow-hidden rounded-[2rem]">
          {/* Header */}
          <div className="flex items-center gap-4 border-b border-gray-100 pb-6 mb-8 relative z-10">
            <div className="w-12 h-12 bg-gradient-to-br from-[#00BCD4] to-[#0097A7] rounded-xl flex items-center justify-center text-white shadow-md">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-[#003731]">{toolName} Workspace</h1>
              <p className="font-medium text-[#00838F] mt-1">
                {status === "idle" && "This offline module is ready to mount locally."}
                {status === "connecting" && "Establishing offline local context..."}
                {status === "connected" && "Module is successfully loaded and running directly in your browser."}
              </p>
            </div>
          </div>

          {/* Connection Controls */}
          <div className="flex items-center justify-between bg-gray-50 p-6 rounded-2xl border border-gray-100 relative z-10">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full animate-pulse ${
                status === "idle" ? "bg-gray-400" : 
                status === "connecting" ? "bg-[#FF7043]" : "bg-green-500"
              }`}></div>
              <span className={`font-bold text-lg ${
                status === "idle" ? "text-gray-500" : 
                status === "connecting" ? "text-[#FF7043]" : "text-green-600"
              }`}>
                {status === "idle" ? "Offline Status: Standby" : 
                 status === "connecting" ? "Booting Engine..." : "Engine Active"}
              </span>
            </div>

            {status === "idle" && (
              <button onClick={handleConnect} className="btn-tropical px-6 py-3">
                Initialize Engine
              </button>
            )}

            {status === "connecting" && (
              <button disabled className="btn-glass px-6 py-3 bg-white border opacity-70">
                <Loader2 className="w-5 h-5 animate-spin text-[#FF7043]" />
              </button>
            )}

            {status === "connected" && (
              <button onClick={() => setStatus("idle")} className="btn-glass px-6 py-3 bg-white border border-red-200 text-red-500 hover:bg-red-50">
                Shutdown
              </button>
            )}
          </div>

          {/* Dynamic Component Mounting */}
          {status === "connected" && (
            <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
              {toolName === "Offline Web Translator" && <WebTranslator />}
              {toolName === "Survival Phrases" && <SurvivalPhrases />}
              {toolName === "Cultural Hub" && <CulturalHub />}
              {!["Offline Web Translator", "Survival Phrases", "Cultural Hub"].includes(toolName) && (
                <div className="p-12 text-center border-2 border-dashed border-gray-200 rounded-3xl mt-8">
                  <h3 className="text-xl font-bold text-gray-500 mb-2">Module Not Found in Web Environment</h3>
                  <p className="text-gray-400 font-medium max-w-md mx-auto">This feature requires native device capabilities (like offline ML Kit or NDK STT inference). Please download the Android APK to use this module.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

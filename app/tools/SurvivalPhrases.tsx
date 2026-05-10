"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Info, Volume2 } from "lucide-react";
import { toast } from "sonner";

interface PhraseEntry {
  english?: string;
  nicobarese?: string;
  great_andamanese?: string;
  category?: string;
  meaning?: string;
}

export default function SurvivalPhrases() {
  const [phrases, setPhrases] = useState<PhraseEntry[]>([]);

  useEffect(() => {
    const fetchPhrases = async () => {
      try {
        let allPhrases: PhraseEntry[] = [];
        
        // Fetch Nicobarese
        try {
          const res = await fetch("/data/dictionary_phrases.json");
          if (res.ok) {
            const data = await res.json();
            const mapped = data.map((item: any) => ({
              english: item.text || item.english,
              nicobarese: item.nicobarese || item.translation,
              category: "Nicobarese Phrases"
            })).filter((item: any) => item.english);
            allPhrases = [...allPhrases, ...mapped];
          }
        } catch (e) {}

        // Fetch Great Andamanese
        try {
          const resGA = await fetch("/data/phrases_great_andamanese.json");
          if (resGA.ok) {
            const dataGA = await resGA.json();
            const mappedGA = dataGA.map((item: any) => ({
              english: item.english || item.phrase,
              great_andamanese: item.great_andamanese || item.translation,
              meaning: item.meaning,
              category: "Great Andamanese Phrases"
            })).filter((item: any) => item.english || item.great_andamanese);
            allPhrases = [...allPhrases, ...mappedGA];
          }
        } catch (e) {}

        setPhrases(allPhrases);
      } catch (error) {
        console.error("Failed to load phrases");
      }
    };
    
    fetchPhrases();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white overflow-hidden text-left">
      <div className="bg-gradient-to-r from-[#F57C00] to-[#E65100] p-6 text-white">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
           <MessageCircle className="w-6 h-6" /> Survival Phrases Engine
        </h2>
        <p className="font-medium text-white/90">Quick-access essential greetings and directions.</p>
      </div>
      
      <div className="p-8 space-y-6">
        {phrases.length === 0 ? (
          <div className="p-8 text-center text-gray-400">Loading phrases...</div>
        ) : (
          phrases.map((phrase, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-[#FF7043] transition-colors group flex items-start justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#FF7043] mb-3">{phrase.category}</div>
                
                <div className="text-2xl font-bold text-[#003731] mb-2">{phrase.english}</div>
                
                {phrase.nicobarese && (
                  <div className="text-xl text-[#00838F] font-medium">{phrase.nicobarese}</div>
                )}
                {phrase.great_andamanese && (
                  <div className="text-xl text-[#00838F] font-medium">{phrase.great_andamanese}</div>
                )}
                {phrase.meaning && (
                  <div className="mt-3 flex items-start gap-2 text-sm text-gray-500 bg-white p-3 rounded-xl border border-gray-100">
                    <Info className="w-4 h-4 mt-0.5 text-[#F57C00] shrink-0" />
                    <span className="font-medium">{phrase.meaning}</span>
                  </div>
                )}
              </div>
              <button 
                onClick={() => {
                  if ('speechSynthesis' in window && phrase.english) {
                    const utter = new SpeechSynthesisUtterance(phrase.english);
                    utter.rate = 0.8;
                    window.speechSynthesis.speak(utter);
                    toast.success("Speaking phrase...");
                  } else {
                    toast.error("Speech synthesis not available.");
                  }
                }}
                className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#F57C00] hover:border-[#F57C00] transition-colors shadow-sm shrink-0"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Search, Loader2, Volume2, History } from "lucide-react";
import { toast } from "sonner";

interface DictEntry {
  englishText: string;
  translatedText: string;
  emoji: string;
  category: string;
  language: string;
}

export default function WebTranslator() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [dictionary, setDictionary] = useState<DictEntry[]>([]);
  const [results, setResults] = useState<DictEntry[]>([]);

  useEffect(() => {
    const fetchDictionary = async () => {
      try {
        const categories = [
          "colors", "body_parts", "numbers", "feelings", "animals", 
          "nature", "family", "phrases", "things", "great_andamanese", "dialects"
        ];
        let allData: DictEntry[] = [];
        
        for (const cat of categories) {
          try {
            const res = await fetch(`/data/dictionary_${cat}.json`);
            if (res.ok) {
              const data = await res.json();
              const mapped = data.map((item: any) => ({
                englishText: item.text || item.english || "",
                translatedText: item.nicobarese || item.great_andamanese || item.translation || "",
                emoji: item.emoji || (item.great_andamanese ? '🏹' : '💬'),
                category: cat,
                language: item.great_andamanese ? 'Great Andamanese' : (item.nicobarese ? 'Nicobarese' : 'Regional Dialect')
              })).filter((item: DictEntry) => item.englishText && item.translatedText);
              
              allData = [...allData, ...mapped];
            }
          } catch (e) {
            console.error(`Failed to load ${cat}`);
          }
        }
        setDictionary(allData);
      } catch (error) {
        console.error("Dictionary load error:", error);
      }
    };
    
    fetchDictionary();
  }, []);

  const handleSearch = () => {
    if (!query.trim()) return;
    setIsSearching(true);
    
    setTimeout(() => {
      const found = dictionary.filter(item => 
        item.englishText.toLowerCase().includes(query.toLowerCase()) || 
        item.translatedText.toLowerCase().includes(query.toLowerCase())
      );
      setResults(found);
      setIsSearching(false);
      
      if (found.length === 0) {
        toast.error("No translation found", { description: "Try checking your spelling."});
      }
    }, 400);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white overflow-hidden text-left">
      <div className="bg-gradient-to-r from-[#FF7043] to-[#00BCD4] p-6 text-white">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
           Offline Web Translator Engine
        </h2>
        <p className="font-medium text-white/90">Loaded {dictionary.length} entries across Nicobarese &amp; Great Andamanese. Try &quot;water&quot;, &quot;blue&quot;, &quot;arm&quot;, or &quot;hello&quot;.</p>
      </div>
      
      <div className="p-8">
        <div className="flex gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Type English or Nicobarese..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:border-[#FF7043] focus:outline-none focus:ring-4 focus:ring-[#FF7043]/10 transition-all font-medium text-lg"
            />
          </div>
          <button 
            onClick={handleSearch}
            disabled={isSearching}
            className="bg-[#003731] hover:bg-[#00574D] text-white px-8 rounded-xl font-bold transition-colors flex items-center gap-2"
          >
            {isSearching ? <Loader2 className="w-5 h-5 animate-spin" /> : "Translate"}
          </button>
        </div>

        {results.length > 0 && (
          <div className="space-y-4">
            <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <History className="w-4 h-4" /> {results.length} Translation Results
            </div>
            {results.slice(0, 50).map((result, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-center justify-between hover:border-[#2DD4BF] transition-colors group">
                <div className="flex items-center gap-6">
                  <div className="text-4xl group-hover:scale-110 transition-transform">{result.emoji || '💬'}</div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
                      <span className="text-[#FF7043]">{result.category.replaceAll('_', ' ')}</span>
                      <span className="text-gray-300">·</span>
                      <span className="text-[#00838F]">{result.language}</span>
                    </div>
                    <div className="text-2xl font-bold text-[#003731]">{result.englishText}</div>
                    <div className="text-xl text-[#00838F] font-medium mt-1">{result.translatedText}</div>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    if ('speechSynthesis' in window) {
                      const utter = new SpeechSynthesisUtterance(result.englishText);
                      utter.rate = 0.8;
                      window.speechSynthesis.speak(utter);
                      toast.success("Speaking: " + result.englishText);
                    } else {
                      toast.error("Speech synthesis not available in this browser");
                    }
                  }}
                  className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#00BCD4] hover:border-[#00BCD4] transition-colors shadow-sm shrink-0"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>
            ))}
            {results.length > 50 && (
              <p className="text-center text-sm text-gray-400 font-medium pt-4">Showing first 50 of {results.length} results. Refine your search for better results.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

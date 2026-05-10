"use client";

import { useState, useEffect } from "react";
import { BookOpen, Map } from "lucide-react";

export default function CulturalHub() {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchCulture = async () => {
      try {
        const res = await fetch("/data/culture_data.md");
        if (res.ok) {
          const text = await res.text();
          setContent(text);
        }
      } catch (e) {
        console.error("Failed to load culture data");
      }
    };
    fetchCulture();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white overflow-hidden text-left">
      <div className="bg-gradient-to-r from-[#00BCD4] to-[#0097A7] p-6 text-white">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
           <Map className="w-6 h-6" /> Cultural Heritage Hub
        </h2>
        <p className="font-medium text-white/90">Learn about the traditions and history of the Andaman & Nicobar archipelago.</p>
      </div>
      
      <div className="p-8">
        <div className="prose prose-lg prose-[#00574D] max-w-none">
          {content ? (
            <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>').replace(/## (.*)/g, '<h2>$1</h2>').replace(/# (.*)/g, '<h1>$1</h1>') }} />
          ) : (
            <div className="text-center text-gray-400">Loading heritage data...</div>
          )}
        </div>
      </div>
    </div>
  );
}

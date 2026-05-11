"use client";

import { motion } from "framer-motion";
import { Compass, BookHeart, Users, Anchor, MessageSquare, Trees, Shield, Sparkles } from "lucide-react";

const cultureData = [
  {
    id: "geography",
    title: "The Archipelago",
    icon: Compass,
    color: "from-emerald-500 to-teal-600",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-100 hover:border-emerald-300",
    content: (
      <div className="space-y-4">
        <p className="text-[#00574D] font-medium leading-relaxed">
          The Nicobar Islands are a rugged, pristine forested archipelago in the eastern Indian Ocean, serving as a natural boundary between the Bay of Bengal and the Andaman Sea.
        </p>
        <ul className="space-y-2 text-[#00574D] text-sm">
          <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">✦</span> <strong>Islands:</strong> 22 islands, of which only 12 are inhabited.</li>
          <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">✦</span> <strong>Major Hubs:</strong> Car Nicobar (North), Nancowry & Kamorta (Central), Great Nicobar (South).</li>
          <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">✦</span> <strong>Ecology:</strong> Tropical, dense mangrove forests, and rich marine biodiversity.</li>
        </ul>
      </div>
    )
  },
  {
    id: "history",
    title: "Historical Legacy",
    icon: BookHeart,
    color: "from-amber-500 to-orange-600",
    iconColor: "text-amber-600",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-100 hover:border-amber-300",
    content: (
      <div className="space-y-4">
        <p className="text-[#00574D] font-medium leading-relaxed">
          The islands hold a deep, resilient history, transitioning from ancient maritime references to modern integration.
        </p>
        <ul className="space-y-2 text-[#00574D] text-sm">
          <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">✦</span> <strong>Ancient Era:</strong> Referred to as &quot;Nakkavaram&quot; (Land of the Naked) in the 1050 CE Thanjavur inscriptions of the Chola Empire.</li>
          <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">✦</span> <strong>Colonial Era:</strong> Successively visited by Portuguese missionaries, colonized by Denmark (1756), and later the British Empire (1869).</li>
          <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">✦</span> <strong>Resilience:</strong> Survived Japanese occupation during WWII and the devastating 2004 Indian Ocean Tsunami.</li>
        </ul>
      </div>
    )
  },
  {
    id: "people",
    title: "The People & Spirit",
    icon: Users,
    color: "from-rose-500 to-pink-600",
    iconColor: "text-rose-600",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-100 hover:border-rose-300",
    content: (
      <div className="space-y-4">
        <p className="text-[#00574D] font-medium leading-relaxed">
          The indigenous Nicobarese call themselves <em>Holchu</em> (Friend). Their society is deeply communal and historically matrilineal.
        </p>
        <ul className="space-y-2 text-[#00574D] text-sm">
          <li className="flex items-start gap-2"><span className="text-rose-500 mt-1">✦</span> <strong>Belief Systems:</strong> A unique syncretism of deeply rooted Animism (reverence for spirits of the sea and forest) blended with Protestant Christianity.</li>
          <li className="flex items-start gap-2"><span className="text-rose-500 mt-1">✦</span> <strong>Kinship:</strong> Extended families live in large communal huts (<em>ma-pati</em>), governed by a council of elders. Women hold high societal status and can be tribal chiefs.</li>
          <li className="flex items-start gap-2"><span className="text-rose-500 mt-1">✦</span> <strong>Festivals:</strong> The Ossuary (Pig) Festival is a vital ceremony honoring ancestors with circular dances, feasting, and community bonding.</li>
        </ul>
      </div>
    )
  },
  {
    id: "livelihood",
    title: "Livelihood & Crafts",
    icon: Anchor,
    color: "from-blue-500 to-indigo-600",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-100 hover:border-blue-300",
    content: (
      <div className="space-y-4">
        <p className="text-[#00574D] font-medium leading-relaxed">
          The Nicobarese economy has traditionally been a subsistence model, deeply intertwined with the ocean and the jungle.
        </p>
        <ul className="space-y-2 text-[#00574D] text-sm">
          <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">✦</span> <strong>Sustenance:</strong> Based on coconut (copra) cultivation, areca nut, pandanus, pig rearing, and artisanal fishing.</li>
          <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">✦</span> <strong>Woodcraft:</strong> Masterful creators of <em>Kareau</em> (elaborate wooden spirit figures) used to ward off illness and evil.</li>
          <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">✦</span> <strong>Navigation:</strong> Construction of outrigger dugout canoes, essential for inter-island trade and navigation. Chowra island is historically famous for traditional pottery.</li>
        </ul>
      </div>
    )
  },
  {
    id: "language",
    title: "Linguistic Tapestry",
    icon: MessageSquare,
    color: "from-violet-500 to-purple-600",
    iconColor: "text-violet-600",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-100 hover:border-violet-300",
    content: (
      <div className="space-y-4">
        <p className="text-[#00574D] font-medium leading-relaxed">
          The Nicobarese languages form an isolated branch of the Austroasiatic language family, highlighting ancient migratory connections.
        </p>
        <ul className="space-y-2 text-[#00574D] text-sm">
          <li className="flex items-start gap-2"><span className="text-violet-500 mt-1">✦</span> <strong>Dialect Continuum:</strong> Includes Car, Chowra, Teressa, Nancowry, and Southern Nicobarese. Mutually unintelligible across distant islands.</li>
          <li className="flex items-start gap-2"><span className="text-violet-500 mt-1">✦</span> <strong>Oral Tradition:</strong> Historically unwritten; knowledge, folklore, and lineage were passed down entirely through oral storytelling.</li>
          <li className="flex items-start gap-2"><span className="text-violet-500 mt-1">✦</span> <strong>Phonology:</strong> Features complex vowel systems (up to 14 vowels) and unique loan words from historic traders.</li>
        </ul>
      </div>
    )
  }
];

export default function CulturalHub() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-4 mb-24 font-sans px-4">
      {/* Header Banner */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden bg-gradient-to-br from-[#003731] via-[#00574D] to-[#00838F] rounded-[3rem] p-10 md:p-14 shadow-2xl text-white mb-10"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF7043] opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2DD4BF] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-bold text-[#2DD4BF] mb-6 shadow-sm">
             <Shield className="w-4 h-4" />
             Verified Indigenous Knowledge
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight flex items-center gap-4">
             <Trees className="w-10 h-10 md:w-12 md:h-12 text-[#FF7043]" />
             Cultural Heritage Hub
          </h2>
          <p className="text-lg md:text-xl font-medium text-white/90 leading-relaxed max-w-2xl">
            Explore the authentic traditions, deep-rooted history, and vibrant lifestyle of the Andaman & Nicobar archipelago. This knowledge is curated to foster respect and understanding for the indigenous Holchu people.
          </p>
        </div>
      </motion.div>

      {/* Bento Grid Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {cultureData.map((section, idx) => (
          <motion.div 
            key={section.id}
            variants={itemVariants}
            className={`group bg-white rounded-[2.5rem] p-8 shadow-xl border-2 ${section.borderColor} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col relative overflow-hidden`}
          >
            {/* Background Glow */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${section.color} opacity-5 rounded-bl-[100px] group-hover:scale-150 group-hover:opacity-10 transition-all duration-500`}></div>
            
            {/* Header */}
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className={`w-14 h-14 rounded-2xl ${section.bgColor} flex items-center justify-center shadow-inner transform group-hover:rotate-6 transition-transform`}>
                <section.icon className={`w-7 h-7 ${section.iconColor}`} />
              </div>
              <h3 className="text-2xl font-black text-[#003731] leading-tight">
                {section.title}
              </h3>
            </div>
            
            {/* Content */}
            <div className="relative z-10 flex-grow">
              {section.content}
            </div>
          </motion.div>
        ))}

        {/* Call to action card */}
        <motion.div 
          variants={itemVariants}
          className="group bg-gradient-to-br from-[#FF7043] to-[#F57C00] rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center text-center relative overflow-hidden text-white"
        >
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <Sparkles className="w-12 h-12 mb-6 text-white/90" />
          <h3 className="text-2xl font-black mb-4">Preserve & Respect</h3>
          <p className="font-medium text-white/90 leading-relaxed mb-6">
            The heritage of the Nicobarese people is a living, breathing testament to human resilience and harmony with nature. Let us engage with respect.
          </p>
          <div className="px-6 py-3 bg-white text-[#E65100] font-bold rounded-xl shadow-md text-sm hover:scale-105 transition-transform cursor-pointer">
            Ethical Tourism Guidelines
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

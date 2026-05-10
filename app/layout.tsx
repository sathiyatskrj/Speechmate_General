import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpeechMate - Where Language Barriers End",
  description: "A heritage language learning and translation platform for India's Andaman & Nicobar islands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-teal-500/30 selection:text-teal-200">
        {/* Background Noise Texture */}
        <div className="fixed inset-0 z-[-1] pointer-events-none noise-bg mix-blend-overlay"></div>
        {/* Subtle Ambient Gradients */}
        <div className="fixed inset-0 z-[-2] pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-500/10 blur-[120px] animate-pulse-glow"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-pink-500/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        </div>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpeechMate - Island Heritage",
  description: "A heritage language learning platform for the Andaman & Nicobar islands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-[#FF7043]/30 selection:text-[#003731]">
        <Toaster theme="light" position="top-center" />
        <div className="wave-container">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>
        {children}
      </body>
    </html>
  );
}

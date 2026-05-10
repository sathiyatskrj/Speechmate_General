import type { Metadata } from "next";
import { Toaster } from "sonner";
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
    <html lang="en">
      <body className="antialiased selection:bg-blue-500/30 selection:text-blue-200">
        <Toaster theme="dark" position="bottom-right" />
        {children}
      </body>
    </html>
  );
}

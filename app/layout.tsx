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
      <body className="antialiased selection:bg-gray-200 selection:text-gray-900 dark:selection:bg-gray-800 dark:selection:text-gray-100">
        {children}
      </body>
    </html>
  );
}

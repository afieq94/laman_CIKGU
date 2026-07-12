import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Laman CIKGU | Modern Cafe & Kitchen",
  description:
    "Kafe moden dengan kopi artisan dan hidangan rumahan. Tempah meja anda di Laman CIKGU.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ms"
      className={cn("h-full", "scroll-smooth", "antialiased", dmSans.variable, playfair.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full font-sans text-coffee">{children}</body>
    </html>
  );
}

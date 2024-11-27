import "@/styles/globals.css";
import "@/styles/ham.css";

import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { Oswald, Roboto, Playfair_Display } from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Istanbul Restaurant Withington | Authentic Turkish Cuisine",
  description:
    "Istanbul Withington was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality.",
  icons: [{ rel: "icon", url: "/images/logo.png" }],
};

const manrope = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom flex min-h-screen bg-[#070707] font-roboto text-[#FBEAD2] antialiased",
          manrope.variable,
          roboto.variable,
          playfair.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

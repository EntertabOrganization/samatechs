import type { Metadata } from "next";
import { Montserrat, Quicksand, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SAMATECHS — Strategic Clarity. Measurable Impact.",
    template: "%s — SAMATECHS",
  },
  description:
    "SAMATECHS advises leadership teams on complex strategic, operational, risk, technology, and cross-border challenges—designing implementation-ready solutions that strengthen decision-making and deliver measurable results.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${quicksand.variable} ${plexArabic.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-white text-navy antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

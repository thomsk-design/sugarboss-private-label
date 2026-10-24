import type { Metadata } from "next";
// Self-hosted fonts (no request to Google at runtime)
import "@fontsource/cormorant-garamond/latin-400.css";
import "@fontsource/cormorant-garamond/latin-400-italic.css";
import "@fontsource/cormorant-garamond/latin-500.css";
import "@fontsource/cormorant-garamond/latin-500-italic.css";
import "@fontsource/cormorant-garamond/latin-600.css";
import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-500.css";
import "@fontsource/manrope/latin-600.css";
import "@fontsource/manrope/latin-700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sugar Boss Private Label | Your brand, our sugar paste",
  description:
    "Professional sugar paste and skincare, made in Canada by Sugar Boss Professional and finished under your brand. Private label products and branded online boutiques.",
  openGraph: {
    title: "Sugar Boss Private Label",
    description: "Your name, poured in gold. Canadian-made private label sugaring products.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

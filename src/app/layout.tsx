import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fresh For Less Window Cleaning | Merseyside & Cheshire | Free Quotes",
  description:
    "Professional window cleaning across Merseyside & Cheshire. Traditional and water-fed pole cleaning for homes and businesses. Free quotes. Call 07724564683.",
  keywords:
    "window cleaning, Merseyside, Cheshire, Liverpool, Wirral, Chester, water fed pole, commercial window cleaning, domestic window cleaning",
  openGraph: {
    title: "Fresh For Less Window Cleaning | Merseyside & Cheshire",
    description:
      "Professional window cleaning for homes and businesses. Traditional & water-fed pole methods. Serving Merseyside & Cheshire.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

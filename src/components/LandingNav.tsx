"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LandingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-lg">
              CC
            </div>
            <div className="flex flex-col">
              <span
                className={`text-sm font-bold leading-tight transition-colors ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                Crystal Clear
              </span>
              <span
                className={`text-xs leading-tight transition-colors ${
                  scrolled ? "text-blue-600" : "text-blue-200"
                }`}
              >
                Window Cleaning
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:07724564683"
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                scrolled
                  ? "bg-blue-50 text-blue-700 hover:bg-blue-100"
                  : "bg-white/15 text-white hover:bg-white/25"
              }`}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="hidden sm:inline">07724 564683</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a
              href="#quote"
              className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-blue-600/40"
            >
              Free Quote
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

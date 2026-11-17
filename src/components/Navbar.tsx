"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { FileText, Menu, X, Terminal } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Honors & Stats", href: "#honors" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Monospace Code Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-mono text-sm sm:text-base font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span>&lt;{portfolioData.personalInfo.name} /&gt;</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Direct link to satsolo.com */}
          <a
            href={portfolioData.personalInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono font-medium text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/10 transition-colors"
          >
            <span>satsolo.com ↗</span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-300" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 px-4 pt-2 pb-6 space-y-3 font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={portfolioData.personalInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-xs font-mono font-medium text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/10"
          >
            <span>satsolo.com ↗</span>
          </a>
        </div>
      )}
    </header>
  );
}

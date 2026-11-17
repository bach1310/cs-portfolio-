"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Honors", href: "#honors" },
    { name: "Projects", href: "#work" },
    { name: "Leadership", href: "#leadership" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#090b0e]/90 border-b border-[#1a1f2b] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Brand Name */}
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-white hover:text-sky-400 transition-colors flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-sky-400"></span>
          <span>{portfolioData.personalInfo.displayName}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-wider text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}

          <a
            href={portfolioData.personalInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1 rounded text-xs font-mono text-sky-400 border border-sky-500/30 hover:bg-sky-500/10 transition-colors"
          >
            <span>satsolo.com</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#1a1f2b] bg-[#090b0e]/98 px-5 py-4 space-y-3 font-mono text-xs uppercase tracking-wider text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-sky-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={portfolioData.personalInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center gap-1.5 py-2 text-sky-400"
          >
            <span>satsolo.com</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </header>
  );
}

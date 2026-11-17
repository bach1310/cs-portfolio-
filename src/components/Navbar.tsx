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
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/85 border-b border-slate-200 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Brand Name */}
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-slate-900 hover:text-sky-600 transition-colors flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-sky-500"></span>
          <span>{portfolioData.personalInfo.displayName}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-wider text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-slate-950 transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}

          <a
            href={portfolioData.personalInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1 rounded text-xs font-mono font-semibold text-sky-700 bg-sky-50 border border-sky-200 hover:bg-sky-100 transition-colors"
          >
            <span>satsolo.com</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-slate-950"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/98 px-5 py-4 space-y-3 font-mono text-xs uppercase tracking-wider text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-sky-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={portfolioData.personalInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center gap-1.5 py-2 text-sky-700 font-semibold"
          >
            <span>satsolo.com</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </header>
  );
}

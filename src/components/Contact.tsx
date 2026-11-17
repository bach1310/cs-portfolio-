"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Copy, Check, ExternalLink, Mail, Phone } from "lucide-react";

export default function Contact() {
  const { personalInfo } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="py-20 border-t border-slate-900 relative bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase mb-2">
          // 04. Inquiries & Admissions
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          Get in Touch
        </h3>
        <p className="text-slate-400 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
          I welcome conversations regarding college admissions (Fall 2027 intake), software engineering collaborations, or educational technology initiatives.
        </p>

        <div className="inline-flex items-center gap-3 p-2 pl-4 rounded-xl bg-slate-900 border border-slate-800 mb-6 max-w-md w-full justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis">
            <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-mono text-slate-200 truncate">
              {personalInfo.email}
            </span>
          </div>

          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs font-semibold transition-colors flex-shrink-0"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>{personalInfo.phone}</span>
          </div>
          <a
            href={personalInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
          >
            <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
            <span>satsolo.com</span>
          </a>
        </div>

        <div className="text-xs font-mono text-slate-600 pt-8 border-t border-slate-900">
          © 2026 {personalInfo.name} • Le Quy Don Gifted • Class of 2027 • Da Nang, Vietnam
        </div>
      </div>
    </footer>
  );
}

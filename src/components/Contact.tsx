"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight, ArrowUp, Mail, Phone, Globe, Code2, Check, Copy } from "lucide-react";

export default function Contact() {
  const { personalInfo } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    {
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: <Mail className="w-4 h-4 text-sky-600" />,
      actionable: true,
    },
    {
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
      icon: <Phone className="w-4 h-4 text-sky-600" />,
    },
    {
      label: "Live Platform",
      value: "satsolo.com",
      href: personalInfo.website,
      icon: <Globe className="w-4 h-4 text-sky-600" />,
    },
    {
      label: "GitHub",
      value: "github.com/bach1310",
      href: personalInfo.github,
      icon: <Code2 className="w-4 h-4 text-sky-600" />,
    },
  ];

  return (
    <footer id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold tracking-widest text-sky-600 uppercase mb-2">
            06 / Contact & Collaboration
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-950 tracking-tight max-w-2xl">
            Let&apos;s discuss computer science, AI research, or undergraduate admissions.
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-xl">
            Open for technical collaborations, educational AI initiatives, and Fall 2027 university admissions inquiries.
          </p>
        </div>

        {/* Contact Links Grid with WCAG 44px min touch target & interactive copy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contactLinks.map((link) => (
            <div
              key={link.label}
              className="relative p-5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group flex flex-col justify-between min-h-[130px]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-100">
                  {link.icon}
                </div>

                {link.actionable ? (
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-sky-600 hover:bg-sky-50 transition-colors flex items-center gap-1 text-xs font-mono"
                    title="Copy Email"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <span className="flex items-center gap-1 text-emerald-600 font-bold">
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied!</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-slate-400 hover:text-slate-600">
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Copy</span>
                      </span>
                    )}
                  </button>
                ) : (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    aria-label={`Open ${link.label}`}
                    className="p-1.5 text-slate-400 group-hover:text-sky-600 transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-slate-500 block mb-1 font-bold tracking-wider">
                  {link.label}
                </span>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors truncate block"
                >
                  {link.value}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            Based in {personalInfo.location} · Available worldwide
          </div>

          <a
            href="#top"
            className="hover:text-slate-900 transition-colors flex items-center gap-1.5 font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </footer>
  );
}

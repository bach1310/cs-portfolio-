import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight, ArrowUp, Mail, Phone, Globe, Code2 } from "lucide-react";

export default function Contact() {
  const { personalInfo } = portfolioData;

  const contactLinks = [
    {
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: <Mail className="w-4 h-4 text-sky-400" />,
    },
    {
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
      icon: <Phone className="w-4 h-4 text-sky-400" />,
    },
    {
      label: "Live Platform",
      value: "satsolo.com",
      href: personalInfo.website,
      icon: <Globe className="w-4 h-4 text-sky-400" />,
    },
    {
      label: "GitHub",
      value: "github.com/bach1310",
      href: personalInfo.github,
      icon: <Code2 className="w-4 h-4 text-sky-400" />,
    },
  ];

  return (
    <footer id="contact" className="py-20 bg-[#07090c] border-t border-[#1a1f2b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold tracking-widest text-sky-400 uppercase mb-2">
            06 / Contact & Collaboration
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight max-w-2xl">
            Let&apos;s discuss computer science, AI research, or undergraduate admissions.
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Open for technical collaborations, educational AI initiatives, and Fall 2027 university admissions inquiries.
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="p-5 rounded-xl border border-[#1e2535] bg-[#11141c]/60 hover:bg-[#151a24] hover:border-sky-500/40 transition-all group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-[#181d28] border border-[#232a3b]">
                  {link.icon}
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition-colors" />
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400 block mb-0.5">
                  {link.label}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-sky-300 transition-colors truncate block">
                  {link.value}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1a1f2b] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            Based in {personalInfo.location} · Available worldwide
          </div>

          <a
            href="#top"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </footer>
  );
}

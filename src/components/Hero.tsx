import { portfolioData } from "@/data/portfolioData";
import { ArrowRight, ExternalLink, Mail, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  const { personalInfo, impactMetrics } = portfolioData;

  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Admissions & High School Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 text-xs font-mono mb-6">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            <span>Le Quy Don Gifted • Class of 2027 • Da Nang, VN</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              {personalInfo.name}
            </span>
            . <br />
            Engineering AI-driven software with mathematical rigor.
          </h1>

          {/* Hook Paragraph */}
          <p className="text-lg text-slate-300 leading-relaxed mb-6 font-normal">
            Co-Founder & Lead Developer of{" "}
            <a
              href={personalInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 font-medium underline underline-offset-4 hover:text-emerald-300 inline-flex items-center gap-1"
            >
              satsolo.com
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            . Bridging advanced mathematics (SAT 800 Math) and modern full-stack AI engineering to democratize education for high schoolers across Vietnam.
          </p>

          {/* Location marker */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-8 font-mono">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>{personalInfo.school} • {personalInfo.location}</span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 font-mono text-sm transition-all"
            >
              <span>Visit satsolo.com</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-medium text-sm transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </a>
          </div>
        </div>

        {/* KEY ACHIEVEMENTS IN NUMBERS */}
        <div className="mt-16 pt-8 border-t border-slate-800/80">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
            // Quantified Impact & Academic Benchmarks
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {impactMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-emerald-500/40 transition-colors group"
              >
                <div className="text-3xl sm:text-4xl font-mono font-bold text-white group-hover:text-emerald-400 transition-colors tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-slate-200 mt-1 uppercase tracking-wider">
                  {metric.label}
                </div>
                <div className="text-[11px] font-mono text-emerald-400/90 mt-1">
                  {metric.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

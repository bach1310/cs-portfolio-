import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight, CheckCircle2, Sparkles, Terminal } from "lucide-react";

export default function Projects() {
  const { flagshipProject } = portfolioData;

  return (
    <section id="work" className="py-20 border-b border-[#1a1f2b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold tracking-widest text-sky-400 uppercase mb-2">
            02 / Featured engineering project · AI & Full-Stack
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {flagshipProject.title}
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            {flagshipProject.subtitle}
          </p>
        </div>

        {/* Flagship Project Box */}
        <div className="rounded-2xl border border-[#1e2535] bg-[#11141c]/70 p-6 sm:p-8 space-y-8">
          
          {/* Header row with status & link */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#1e2535]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-mono text-emerald-400 font-medium">
                {flagshipProject.status}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={flagshipProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono text-xs font-semibold transition-colors"
              >
                <span>Open Live Platform (satsolo.com)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Project Dossier: 4 Structured Quadrants */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-sky-400" />
              <span>Project Dossier & Engineering Ownership</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#0b0e14] border border-[#1c2230]">
                <span className="text-xs font-mono text-slate-300 font-semibold block mb-1">
                  Problem & Purpose
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {flagshipProject.dossier.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0b0e14] border border-[#1c2230]">
                <span className="text-xs font-mono text-sky-300 font-semibold block mb-1">
                  Product & Technical Features
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {flagshipProject.dossier.product}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0b0e14] border border-[#1c2230]">
                <span className="text-xs font-mono text-emerald-300 font-semibold block mb-1">
                  Results & Quantified Application
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {flagshipProject.dossier.results}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0b0e14] border border-[#1c2230]">
                <span className="text-xs font-mono text-amber-300 font-semibold block mb-1">
                  Bach Pham&apos;s Direct Ownership
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {flagshipProject.dossier.ownership}
                </p>
              </div>
            </div>
          </div>

          {/* Architecture & Signal Path */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Architecture & Data Flow Pipeline</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {flagshipProject.pipeline.map((stage) => (
                <div
                  key={stage.step}
                  className="p-3.5 rounded-lg border border-[#1c2230] bg-[#0b0e14]"
                >
                  <div className="text-xs font-mono text-sky-400 font-bold mb-1">
                    {stage.step} · {stage.name}
                  </div>
                  <div className="text-[11px] text-slate-400 leading-snug">
                    {stage.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack row */}
          <div className="pt-4 border-t border-[#1e2535] flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-mono text-slate-400">Core Technologies:</span>
            <div className="flex flex-wrap gap-1.5">
              {flagshipProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-[#181d28] text-slate-300 border border-[#232a3b]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight, Sparkles, Terminal, CheckCircle2 } from "lucide-react";

export default function Projects() {
  const { flagshipProject } = portfolioData;

  return (
    <section id="work" className="py-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold tracking-widest text-sky-600 uppercase mb-2">
            02 / Featured engineering project · AI & Full-Stack
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
            {flagshipProject.title}
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 max-w-2xl leading-relaxed">
            {flagshipProject.subtitle}
          </p>
        </div>

        {/* Flagship Project Box with elevated border and shadow */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-8 shadow-xs hover:border-slate-300 transition-all duration-200">
          
          {/* Header row with status & link */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-mono text-emerald-800 font-bold">
                {flagshipProject.status}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={flagshipProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-lg bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-mono text-xs font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Open Live Platform (satsolo.com)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Project Dossier: 4 Structured Quadrants with color-coded top indicators */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-600 mb-4 flex items-center gap-2 font-bold">
              <Terminal className="w-4 h-4 text-sky-600" />
              <span>Project Dossier & Engineering Ownership</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Problem */}
              <div className="p-5 rounded-xl bg-slate-50/80 border border-slate-200 border-t-2 border-t-slate-500 shadow-2xs hover:shadow-xs transition-shadow">
                <span className="text-xs font-mono text-slate-900 font-bold uppercase tracking-wider block mb-1.5">
                  01 / Problem & Purpose
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {flagshipProject.dossier.problem}
                </p>
              </div>

              {/* Product */}
              <div className="p-5 rounded-xl bg-slate-50/80 border border-slate-200 border-t-2 border-t-sky-500 shadow-2xs hover:shadow-xs transition-shadow">
                <span className="text-xs font-mono text-sky-800 font-bold uppercase tracking-wider block mb-1.5">
                  02 / Product & Technical Features
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {flagshipProject.dossier.product}
                </p>
                <a
                  href={flagshipProject.evidence.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2.5 text-[11px] font-mono text-slate-500 hover:text-sky-700 underline-offset-2 hover:underline transition-colors"
                >
                  Evidence ↗
                </a>
              </div>

              {/* Results */}
              <div className="p-5 rounded-xl bg-slate-50/80 border border-slate-200 border-t-2 border-t-emerald-500 shadow-2xs hover:shadow-xs transition-shadow">
                <span className="text-xs font-mono text-emerald-800 font-bold uppercase tracking-wider block mb-1.5">
                  03 / Results & Quantified Impact
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {flagshipProject.dossier.results}
                </p>
                <a
                  href={flagshipProject.evidence.social}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2.5 text-[11px] font-mono text-slate-500 hover:text-sky-700 underline-offset-2 hover:underline transition-colors"
                >
                  Evidence ↗
                </a>
              </div>

              {/* Ownership */}
              <div className="p-5 rounded-xl bg-slate-50/80 border border-slate-200 border-t-2 border-t-amber-500 shadow-2xs hover:shadow-xs transition-shadow">
                <span className="text-xs font-mono text-amber-800 font-bold uppercase tracking-wider block mb-1.5">
                  04 / Bach Pham&apos;s Direct Ownership
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {flagshipProject.dossier.ownership}
                </p>
              </div>
            </div>
          </div>

          {/* Architecture & Signal Path */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-600 mb-4 flex items-center gap-2 font-bold">
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span>Architecture & Data Flow Pipeline</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {flagshipProject.pipeline.map((stage) => (
                <div
                  key={stage.step}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100/70 hover:border-sky-300 transition-all duration-200 group"
                >
                  <div className="text-xs font-mono text-sky-700 font-bold mb-1.5 flex items-center justify-between">
                    <span>{stage.step} · {stage.name}</span>
                  </div>
                  <div className="text-xs text-slate-600 leading-relaxed">
                    {stage.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack row */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-mono text-slate-600 font-bold">Core Technologies:</span>
            <div className="flex flex-wrap gap-2">
              {flagshipProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200/90 font-medium"
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

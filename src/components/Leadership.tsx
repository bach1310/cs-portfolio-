import { portfolioData } from "@/data/portfolioData";
import { Users, BookOpen } from "lucide-react";

export default function Leadership() {
  const { leadershipGroups } = portfolioData;

  return (
    <section id="leadership" className="py-20 border-b border-[#1a1f2b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold tracking-widest text-sky-400 uppercase mb-2">
            03 / Leadership & extracurricular activities
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Technical leadership and community stewardship.
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Structured by: Role — Scope/Target — Key Responsibilities — Quantified Impact & Metrics.
          </p>
        </div>

        {/* Groups */}
        <div className="space-y-12">
          {leadershipGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-[#1e2535]">
                <span className="text-xs font-mono font-bold text-sky-400">
                  {group.groupTitle}
                </span>
                <span className="text-slate-500 font-mono text-xs">/</span>
                <span className="text-sm font-semibold text-white">
                  {group.categoryName}
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline font-mono">
                  · {group.subtext}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {group.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl border border-[#1e2535] bg-[#11141c]/60 hover:border-sky-500/30 transition-all flex flex-col md:flex-row md:items-start justify-between gap-6"
                  >
                    <div className="space-y-2 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                        <span className="text-sky-400 font-semibold">{item.year}</span>
                        <span>·</span>
                        <span className="text-slate-200 font-medium">{item.role}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {item.title}
                      </h3>

                      <div className="text-xs font-mono text-slate-400">
                        Scope: {item.scope}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex-shrink-0 self-start md:self-center">
                      <div className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-[#181d28] text-sky-300 border border-[#232a3b]">
                        {item.metrics}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

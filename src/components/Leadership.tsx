import { portfolioData } from "@/data/portfolioData";

export default function Leadership() {
  const { leadershipGroups } = portfolioData;

  return (
    <section id="leadership" className="py-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold tracking-widest text-sky-600 uppercase mb-2">
            03 / Leadership & extracurricular activities
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
            Technical leadership and community stewardship.
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Structured by: Role — Scope/Target — Key Responsibilities — Quantified Impact & Metrics.
          </p>
        </div>

        {/* Groups */}
        <div className="space-y-12">
          {leadershipGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <span className="text-xs font-mono font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200/80">
                  {group.groupTitle}
                </span>
                <span className="text-slate-300 font-mono text-xs">/</span>
                <span className="text-sm font-bold text-slate-900 tracking-tight">
                  {group.categoryName}
                </span>
                <span className="text-xs text-slate-500 hidden sm:inline font-mono">
                  · {group.subtext}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {group.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col md:flex-row md:items-start justify-between gap-6 group"
                  >
                    <div className="space-y-2 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500">
                        <span className="text-sky-700 font-bold bg-sky-50 px-2 py-0.5 rounded border border-sky-200/80">{item.year}</span>
                        <span className="text-slate-300">·</span>
                        <span className="text-slate-800 font-semibold">{item.role}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight group-hover:text-sky-700 transition-colors">
                        {item.title}
                      </h3>

                      <div className="text-xs font-mono text-slate-500">
                        Scope: {item.scope}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex-shrink-0 self-start md:self-center">
                      <div className="px-3.5 py-2 rounded-xl text-xs font-mono font-bold bg-slate-100 text-slate-900 border border-slate-200/80 shadow-2xs">
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

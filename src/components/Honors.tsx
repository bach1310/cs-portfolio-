import { portfolioData, HonorAward } from "@/data/portfolioData";
import { CheckCircle2 } from "lucide-react";

export default function Honors() {
  const { honors } = portfolioData;

  return (
    <section id="honors" className="py-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold tracking-widest text-sky-600 uppercase mb-2">
            01 / Academic honors & awards
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
            Distinctions, competitions, and verified honors.
          </h2>
        </div>

        {/* List of Honors with subtle lift micro-interactions & WCAG contrast */}
        <div className="space-y-4">
          {honors.map((item: HonorAward) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-4 group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500">
                  <span className="text-sky-700 font-bold bg-sky-50 px-2 py-0.5 rounded border border-sky-200/80">{item.year}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-600 font-medium">{item.scope}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight group-hover:text-sky-700 transition-colors">
                  {item.title}
                </h3>

                <div className="text-xs font-mono text-slate-500">
                  {item.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>

              {item.tag && (
                <div className="flex-shrink-0 self-start md:self-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-sky-50 text-sky-800 border border-sky-200 shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                    <span>{item.tag}</span>
                  </span>
                </div>
              )}
              </div>

              {item.evidence && (
                <div className="flex justify-end">
                  <a
                    href={item.evidence}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono font-bold text-red-600 bg-red-50 border border-red-200 hover:bg-red-100 hover:border-red-300 hover:text-red-700 transition-colors"
                  >
                    Evidence ↗
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

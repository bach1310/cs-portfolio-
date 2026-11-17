import { portfolioData, HonorItem } from "@/data/portfolioData";
import { Award, Users, Trophy } from "lucide-react";

export default function Honors() {
  const { honorsAndLeadership } = portfolioData;

  const getCategoryIcon = (category: string) => {
    if (category === "Leadership") return <Users className="w-5 h-5 text-emerald-400" />;
    if (category === "Athletics") return <Trophy className="w-5 h-5 text-emerald-400" />;
    return <Award className="w-5 h-5 text-emerald-400" />;
  };

  return (
    <section id="honors" className="py-20 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase mb-2">
            // 03. Leadership, Honors & Academics
          </h2>
          <h3 className="text-3xl font-bold text-white tracking-tight">
            Academic Track Record & Extracurriculars
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Combining rigorous STEM fundamentals with software leadership and community initiatives in Da Nang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {honorsAndLeadership.map((item: HonorItem, idx: number) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between hover:border-slate-700 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/50">
                    {getCategoryIcon(item.category)}
                  </div>
                  {item.highlightNumber && (
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                      {item.highlightNumber}
                    </span>
                  )}
                </div>

                <span className="text-[11px] font-mono text-slate-400 block mb-1">
                  {item.organization} • {item.year}
                </span>
                <h4 className="text-base font-bold text-white mb-1.5">{item.title}</h4>
                <div className="text-xs font-semibold text-emerald-300 mb-3 font-mono">
                  {item.roleOrAward}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

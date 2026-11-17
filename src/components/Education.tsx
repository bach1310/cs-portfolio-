import { portfolioData } from "@/data/portfolioData";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 border-b border-[#1a1f2b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold tracking-widest text-sky-400 uppercase mb-2">
            05 / Education & academic foundation
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Academic foundation and specialized curriculum.
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Core high school institution, advanced quantitative coursework, and standardized testing benchmarks.
          </p>
        </div>

        {/* Education Card */}
        <div className="p-6 sm:p-8 rounded-2xl border border-[#1e2535] bg-[#11141c]/60 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1e2535]">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-sky-950/60 border border-sky-500/30 text-sky-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block uppercase">
                  Academic Institution
                </span>
                <h3 className="text-xl font-bold text-white">
                  {education.institution}
                </h3>
                <span className="text-xs text-slate-400">{education.location}</span>
              </div>
            </div>

            <span className="text-xs font-mono text-sky-400 bg-sky-950/50 px-3 py-1.5 rounded-md border border-sky-500/30 self-start sm:self-center">
              {education.standing}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-[#0b0e14] border border-[#1c2230] space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Academic Performance
              </span>
              <div className="text-white font-medium">{education.gpa}</div>
              <div className="text-sky-300 font-mono text-xs">{education.standardized}</div>
            </div>

            <div className="p-4 rounded-xl bg-[#0b0e14] border border-[#1c2230] space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Relevant Coursework
              </span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-[#181d28] text-slate-300 border border-[#232a3b]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

import { portfolioData } from "@/data/portfolioData";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold tracking-widest text-sky-600 uppercase mb-2">
            05 / Education & academic foundation
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
            Academic foundation and specialized curriculum.
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-xl">
            Core high school institution, advanced quantitative coursework, and standardized testing benchmarks.
          </p>
        </div>

        {/* Education Card */}
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-sky-700">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 block uppercase font-medium">
                  Academic Institution
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {education.institution}
                </h3>
                <span className="text-xs text-slate-500">{education.location}</span>
              </div>
            </div>

            <span className="text-xs font-mono text-sky-700 bg-sky-50 px-3 py-1.5 rounded-md border border-sky-200 font-semibold self-start sm:self-center">
              {education.standing}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block font-medium">
                Academic Performance
              </span>
              <div className="text-slate-900 font-bold">{education.gpa}</div>
              <div className="text-sky-700 font-mono text-xs font-medium">{education.standardized}</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block font-medium">
                Relevant Coursework
              </span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-white text-slate-700 border border-slate-200"
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

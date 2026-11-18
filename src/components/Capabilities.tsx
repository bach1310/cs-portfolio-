import { portfolioData, CapabilityItem } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";

export default function Capabilities() {
  const { capabilities } = portfolioData;

  return (
    <section id="capabilities" className="py-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold tracking-widest text-sky-600 uppercase mb-2">
            04 / Engineering profile
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
            Capabilities, connected to evidence.
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-xl">
            Tools are valuable because they make systems possible — not as isolated proficiency claims.
          </p>
        </div>

        {/* 4 Cards Grid with micro-interactions and evidence links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((item: CapabilityItem) => (
            <div
              key={item.index}
              className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <span className="text-xs font-mono font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200/80 inline-block mb-3">
                  {item.index}
                </span>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Skill pills with subtle hover */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100/80 hover:bg-slate-200/80 text-slate-800 border border-slate-200/80 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Validated In Row */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500 font-medium">Validated in:</span>
                <div className="flex items-center gap-3">
                  {item.validatedIn.map((val) => (
                    <a
                      key={val.name}
                      href={val.href}
                      target={val.href.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="text-sky-700 hover:text-sky-900 inline-flex items-center gap-1 font-semibold hover:underline"
                    >
                      <span>{val.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

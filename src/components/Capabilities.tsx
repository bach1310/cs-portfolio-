import { portfolioData, CapabilityItem } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";

export default function Capabilities() {
  const { capabilities } = portfolioData;

  return (
    <section id="capabilities" className="py-20 border-b border-[#1a1f2b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold tracking-widest text-sky-400 uppercase mb-2">
            04 / Engineering profile
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Capabilities, connected to evidence.
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Tools are valuable because they make systems possible — not as isolated proficiency claims.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((item: CapabilityItem) => (
            <div
              key={item.index}
              className="p-6 rounded-xl border border-[#1e2535] bg-[#11141c]/60 hover:border-sky-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-sky-400 block mb-2">
                  {item.index}
                </span>

                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[#181d28] text-slate-300 border border-[#232a3b]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Validated In Row */}
              <div className="pt-4 border-t border-[#1e2535] flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">Validated in:</span>
                <div className="flex items-center gap-3">
                  {item.validatedIn.map((val) => (
                    <a
                      key={val.name}
                      href={val.href}
                      target={val.href.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 font-semibold"
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

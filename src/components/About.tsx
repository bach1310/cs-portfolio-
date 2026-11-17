import { portfolioData } from "@/data/portfolioData";
import { Code2, Cpu, Wrench, Globe } from "lucide-react";

export default function About() {
  const { personalInfo, skills, academicProfile } = portfolioData;

  const categoryIcons: Record<string, React.ReactNode> = {
    "Programming Languages": <Code2 className="w-4 h-4 text-emerald-400" />,
    "Frameworks & Databases": <Cpu className="w-4 h-4 text-emerald-400" />,
    "AI / ML & Developer Tools": <Wrench className="w-4 h-4 text-emerald-400" />,
    "Languages Spoken": <Globe className="w-4 h-4 text-emerald-400" />,
  };

  return (
    <section id="about" className="py-20 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase mb-2">
            // 01. Background & Technical Stack
          </h2>
          <h3 className="text-3xl font-bold text-white tracking-tight">About Me</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-4 text-slate-300 leading-relaxed text-base">
            <p>
              I am a high school student at <span className="text-white font-medium">{personalInfo.school}</span> in{" "}
              <span className="text-white font-medium">{personalInfo.location}</span>, planning to major in Computer
              Science for the Fall 2027 college admissions cycle.
            </p>
            <p>
              My journey bridges mathematical theory with engineering execution. From achieving a{" "}
              <span className="text-emerald-400 font-mono text-sm font-semibold">perfect 800 on SAT Math</span> and winning{" "}
              <span className="text-white font-medium">Third Prize in the City Physics Competition</span>, I apply rigorous problem-solving logic to building scalable software systems.
            </p>
            <p>
              Through co-founding <span className="text-emerald-400 font-mono text-sm font-semibold">satsolo.com</span>, I built an LLM-assisted learning platform supporting 800+ registered students across 10 Vietnamese cities. As Head of Technical at the Young Creation Club, I also mentor 15 fellow high school engineers in AI prompt design, API integration, and full-stack development.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm mt-6">
              <span className="text-emerald-400 font-mono font-semibold block mb-2">Academic Index:</span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                {academicProfile.map((stat, i) => (
                  <li key={i} className="flex flex-col">
                    <span className="text-xs text-slate-400">{stat.label}</span>
                    <span className="font-mono text-emerald-300 font-medium">{stat.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-2">
              Technical Stack
            </h4>
            {skills.map((categoryGroup) => (
              <div
                key={categoryGroup.category}
                className="p-4 rounded-lg border border-slate-800 bg-slate-900/50"
              >
                <div className="flex items-center gap-2 mb-3 font-mono text-xs font-semibold text-slate-200">
                  {categoryIcons[categoryGroup.category] || null}
                  <span>{categoryGroup.category}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categoryGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-md font-mono bg-slate-800/80 text-emerald-300 border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

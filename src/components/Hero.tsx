import { portfolioData } from "@/data/portfolioData";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";

export default function Hero() {
  const { personalInfo, heroHighlights } = portfolioData;

  return (
    <section id="top" className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Main Content Column: Intro, Relocated 2x2 Highlights & Actions */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-7">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-mono tracking-wider text-slate-600 uppercase border border-slate-200/80">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              <span>{personalInfo.eyebrow}</span>
            </div>

            {/* Name & Academic Direction */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 leading-tight">
                {personalInfo.fullName}
              </h1>

              <div className="text-base sm:text-lg font-mono text-sky-700 font-semibold tracking-tight">
                {personalInfo.title}
              </div>
            </div>

            {/* Introduction / Bio */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-2xl">
              {personalInfo.bio}
            </p>

            {/* PORTFOLIO HIGHLIGHTS: Integrated 2x2 Grid directly below Intro */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold">
                  Portfolio Highlights & Key Benchmarks
                </span>
                <span className="text-xs font-mono text-sky-700 font-semibold hidden sm:inline">
                  4 Verified Milestones
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {heroHighlights.map((item) => (
                  <a
                    key={item.index}
                    href={item.href}
                    className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white hover:border-sky-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group flex flex-col justify-between min-h-[120px]"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[11px] font-mono font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-200/80">
                          {item.index} {item.category && `· ${item.category}`}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>

                      <div className="text-sm sm:text-base font-bold text-slate-950 group-hover:text-sky-700 transition-colors tracking-tight leading-snug">
                        {item.title}
                      </div>
                    </div>

                    <div className="mt-3.5 pt-2.5 border-t border-slate-100 text-xs font-mono text-slate-600 leading-normal">
                      {item.detail}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Action Links with WCAG touch targets & hover states */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#honors"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-lg bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-mono text-xs font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Academic Honors</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-lg bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 border border-slate-300 font-mono text-xs font-medium transition-all hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[44px] rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-mono text-xs font-medium transition-all hover:border-slate-400"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href={personalInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[44px] rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-300 font-mono text-xs font-semibold transition-all hover:shadow-xs"
              >
                <span>satsolo.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-sky-600" />
              </a>
            </div>

          </div>

          {/* Right Column: STUDENT PROFILE CARD (Clean, balanced, no duplicate highlights) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-4 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200">
              
              {/* Photo with clean contain and seamless white background */}
              <div className="w-full h-[280px] sm:h-[320px] rounded-xl overflow-hidden bg-white border border-slate-200 flex items-center justify-center p-2">
                <img
                  src="/portrait.png"
                  alt={personalInfo.fullName}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* School Section */}
              <div className="pt-3.5 mt-3.5 border-t border-slate-200">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-0.5">
                  SCHOOL
                </div>
                <div className="text-sm font-bold text-slate-900 tracking-tight">
                  Le Quy Don High School for the Gifted
                </div>
              </div>

              {/* Direction Section */}
              <div className="pt-2.5 mt-2.5 border-t border-slate-200">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-0.5">
                  DIRECTION
                </div>
                <div className="text-sm font-semibold text-sky-700">
                  Computer Science
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
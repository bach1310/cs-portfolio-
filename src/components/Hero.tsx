import { portfolioData } from "@/data/portfolioData";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";

export default function Hero() {
  const { personalInfo, heroHighlights } = portfolioData;

  return (
    <section id="top" className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Title, Intro & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono tracking-wider text-slate-500 uppercase flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              <span>{personalInfo.eyebrow}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 leading-none">
              {personalInfo.fullName}
            </h1>

            <div className="text-base sm:text-lg font-mono text-sky-700 font-semibold">
              {personalInfo.title}
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-xl">
              {personalInfo.bio}
            </p>

            {/* Quick Links Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#honors"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-mono text-xs font-semibold transition-colors shadow-sm"
              >
                <span>Academic Honors</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-mono text-xs font-medium transition-colors"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-mono text-xs transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={personalInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 font-mono text-xs font-semibold transition-colors"
              >
                <span>satsolo.com</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: STUDENT PROFILE (100% IDENTICAL TO FRIEND'S SCREENSHOT) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Student Profile Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-3 sm:p-3.5 shadow-xs">
              
              {/* Photo with rounded corners */}
              <div className="w-full h-[280px] sm:h-[320px] rounded-lg overflow-hidden bg-white flex items-center justify-center p-1">
                <img
                  src="/portrait.png"
                  alt={personalInfo.fullName}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* School Section */}
              <div className="pt-3 mt-3 border-t border-slate-200">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold mb-0.5">
                  SCHOOL
                </div>
                <div className="text-sm font-semibold text-slate-900">
                  Le Quy Don High School for the Gifted
                </div>
              </div>

              {/* Direction Section */}
              <div className="pt-2.5 mt-2.5 border-t border-slate-200">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold mb-0.5">
                  DIRECTION
                </div>
                <div className="text-sm font-semibold text-slate-900">
                  Computer Science
                </div>
              </div>

            </div>

            {/* Portfolio Highlights Grid */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500 px-1 font-semibold">
                Portfolio Highlights
              </div>

              {heroHighlights.map((item) => (
                <a
                  key={item.index}
                  href={item.href}
                  className="flex items-center justify-between p-3.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 hover:border-sky-400 transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-sky-600 font-bold">
                      {item.index}
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-slate-900 group-hover:text-sky-700 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        {item.detail}
                      </div>
                    </div>
                  </div>
                  <ArrowDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 -rotate-45 group-hover:rotate-0 transition-transform" />
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

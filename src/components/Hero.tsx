import { portfolioData } from "@/data/portfolioData";
import { ArrowDown, ArrowUpRight, GraduationCap, MapPin, User } from "lucide-react";

export default function Hero() {
  const { personalInfo, heroHighlights } = portfolioData;

  return (
    <section id="top" className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Title & Pitch */}
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

          {/* Right Column: Student Profile (With Portrait Photo Slot) & Highlights */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Student Profile Card with Avatar/Portrait */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/90 shadow-sm space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-sky-600" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
                    Student Profile
                  </span>
                </div>
                <span className="text-[11px] font-mono text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded border border-sky-200 font-semibold">
                  {personalInfo.standing}
                </span>
              </div>

              {/* Portrait + Info Row */}
              <div className="flex items-center gap-4">
                {/* Portrait Slot */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 border-white shadow-sm flex-shrink-0 bg-gradient-to-br from-sky-100 to-slate-200 flex items-center justify-center group">
                  {/* Real Photo Image (Drop avatar.jpg in public/ folder) */}
                  <img
                    src="/avatar.jpg"
                    alt={personalInfo.fullName}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback gracefully if avatar.jpg doesn't exist yet
                      (e.target as HTMLElement).style.opacity = "0";
                    }}
                  />
                  {/* Sleek Fallback Placeholder Initials if no photo is added yet */}
                  <div className="absolute inset-0 -z-0 flex flex-col items-center justify-center text-sky-700 font-mono">
                    <User className="w-7 h-7 text-sky-600 mb-0.5" />
                    <span className="text-[10px] font-bold tracking-wider">PHOTO</span>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="space-y-1 text-xs">
                  <div className="text-sm font-bold text-slate-950">
                    {personalInfo.fullName}
                  </div>
                  <div className="text-slate-700 font-medium leading-tight">
                    {personalInfo.school}
                  </div>
                  <div className="text-sky-700 font-mono text-[11px] font-semibold">
                    {personalInfo.focus}
                  </div>
                  <div className="text-slate-500 font-mono text-[11px]">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              <div className="pt-2.5 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Da Nang, Vietnam</span>
                <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Class of 2027
                </span>
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

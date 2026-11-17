"use client";

import { portfolioData, Project } from "@/data/portfolioData";
import { ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 border-t border-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase mb-2">
            // 02. Flagship Software & Community Deployments
          </h2>
          <h3 className="text-3xl font-bold text-white tracking-tight">Featured Projects</h3>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            Software built to address educational inequality in standardized test preparation with production metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project: Project) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{project.category}</span>
                  </div>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>Visit Live Platform</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-sm font-mono text-slate-300 mb-6">{project.oneLiner}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-6">
                  <div>
                    <span className="font-semibold text-slate-200 block mb-1">
                      Problem Addressed:
                    </span>
                    <span className="text-slate-400 leading-relaxed">
                      {project.problemStatement}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-emerald-400 block mb-1">
                      Engineering & AI Solution:
                    </span>
                    <span className="text-slate-400 leading-relaxed">
                      {project.solution}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-xs font-mono text-slate-400 block mb-2">
                    Verified Product Impact:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-emerald-950/40 text-emerald-300 border border-emerald-500/20"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800/70 text-slate-300 border border-slate-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ExternalLink, Github, Loader, Code } from "lucide-react";
import React from "react";

function Projects({ darkMode, projects, isLoading }) {
  return (
    <section
      id="projects"
      className={`py-24 ${darkMode ? "bg-slate-800/30" : "bg-slate-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p
            className={`text-xl ${
              darkMode ? "text-slate-400" : "text-slate-600"
            } max-w-2xl mx-auto`}
          >
            A showcase of my recent work and creative solutions
          </p>
        </div>
        <div className="grid gap-8">
          {!isLoading ? (
            projects.map((item) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-2xl flex flex-col md:flex-row hover:scale-102 ${
                  darkMode
                    ? "bg-slate-900/40 border-slate-700/50 hover:bg-slate-800/60"
                    : "bg-white/40 border-slate-200/60 hover:bg-white/60"
                } backdrop-blur-md`}
              >
                {/* Image Section - Takes full width on mobile, half on desktop */}
                <div className="relative w-full md:w-1/2 aspect-[21/9] md:aspect-auto overflow-hidden group">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-800">
                      <Code size={48} className="text-slate-600" />
                    </div>
                  )}
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                </div>

                {/* Content Section - Takes full width on mobile, half on desktop */}
                <div className="p-6 md:p-10 flex flex-col justify-center w-full md:w-1/2 relative z-20">
                  <div className="mb-4">
                    <h3
                      className={`text-2xl md:text-3xl font-bold mb-3 ${
                        darkMode ? "text-white" : "text-slate-800"
                      } group-hover:text-indigo-500 transition-colors duration-300`}
                    >
                      {item.title}
                    </h3>
                    <div className="w-12 h-1 bg-indigo-500 rounded-full mb-6 transform origin-left group-hover:scale-x-150 transition-transform duration-300" />
                    <p
                      className={`text-base md:text-lg leading-relaxed mb-6 ${
                        darkMode ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.tech?.map((t, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-xs font-medium rounded-full border ${
                          darkMode
                            ? "bg-slate-800/50 text-indigo-300 border-slate-700"
                            : "bg-indigo-50 text-indigo-700 border-indigo-100"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 pt-4 border-t border-slate-200/10 dark:border-slate-700/50">
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                        darkMode
                          ? "text-slate-300 hover:text-white"
                          : "text-slate-600 hover:text-indigo-600"
                      }`}
                    >
                      <Github size={20} />
                      <span>Source Code</span>
                    </a>
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      <ExternalLink size={18} />
                      <span>Live Project</span>
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center">
              <div className="flex items-center justify-center gap-3">
                <Loader className="animate-spin" size={24} />
                <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                  Loading projects...
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;

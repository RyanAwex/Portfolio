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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {!isLoading ? (
            projects.map((item) => (
              <div
                key={item.id}
                className={`group rounded-2xl overflow-hidden border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col ${
                  darkMode
                    ? "bg-slate-900/80 border-slate-700 shadow-xl"
                    : "bg-white/80 border-slate-200 shadow-lg"
                }`}
              >
                <div className="relative h-56 bg-linear-to-br from-slate-700 to-slate-800 group-hover:from-indigo-900 group-hover:to-purple-900 transition-all duration-500 flex items-center justify-center overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="text-slate-400 text-center">
                      <Code size={48} className="mx-auto mb-2 opacity-50" />
                      <span className="text-sm">Project Screenshot</span>
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col grow">
                  <div className="flex flex-col grow">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-500 transition-colors">
                      {item.title}
                    </h3>
                    <p
                      className={`mb-6 text-base leading-relaxed ${
                        darkMode ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tech?.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold hover:text-indigo-500 transition-colors group/link"
                    >
                      <Github size={18} />
                      Code
                      <ExternalLink
                        size={14}
                        className="opacity-0 group-hover/link:opacity-100 transition-opacity"
                      />
                    </a>
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold hover:text-indigo-500 transition-colors group/link"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                      <ExternalLink
                        size={14}
                        className="opacity-0 group-hover/link:opacity-100 transition-opacity"
                      />
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

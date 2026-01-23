import { Loader } from "lucide-react";
import React from "react";

function Skills({ darkMode, skills, isLoading }) {
  return (
    <section id="skills" className={`py-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Tech Stack
          </h2>
          <p
            className={`text-xl ${
              darkMode ? "text-slate-400" : "text-slate-600"
            } max-w-2xl mx-auto`}
          >
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {!isLoading ? (
            skills.map((skill) => (
              <div
                key={skill.name}
                className={`group p-6 rounded-2xl flex items-center gap-4 border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  darkMode
                    ? "bg-slate-800/50 border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800/80"
                    : "bg-white/50 border-slate-200 hover:border-indigo-500/50 hover:bg-white/80"
                } shadow-lg`}
              >
                <div className="p-2 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
                  <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                </div>
                <span className="font-semibold text-lg">{skill.name}</span>
              </div>
            ))
          ) : (
            <div className="text-center col-span-full">
              <div className="flex items-center justify-center gap-3">
                <Loader className="animate-spin" size={24} />
                <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                  Loading skills...
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;

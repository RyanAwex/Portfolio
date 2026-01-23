import { Code, Github, Linkedin, Mail } from "lucide-react";
import React from "react";

function About({ darkMode }) {
  return (
    <section
      id="about"
      className={`py-24 ${darkMode ? "bg-slate-800/30" : "bg-slate-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              About Me
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p className={darkMode ? "text-slate-300" : "text-slate-600"}>
                Hello! I'm a passionate full-stack developer with a strong
                foundation in both front-end and back-end technologies. I love
                creating clean, efficient code and building intuitive user
                interfaces that deliver exceptional experiences.
              </p>
              <div className="space-y-3">
                <p className={darkMode ? "text-slate-300" : "text-slate-600"}>
                  <span className="font-semibold text-indigo-500">
                    Front-End:
                  </span>{" "}
                  Proficient in HTML, CSS, JavaScript, TypeScript, and React.js,
                  with expertise in Tailwind CSS for modern, responsive designs.
                </p>
                <p className={darkMode ? "text-slate-300" : "text-slate-600"}>
                  <span className="font-semibold text-indigo-500">
                    Back-End:
                  </span>{" "}
                  Experienced with Node.js, Express, PostgreSQL, and MongoDB for
                  building robust APIs and scalable server-side solutions.
                </p>
              </div>
            </div>
            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com/RyanAwex"
                className={`p-3 rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300 transform hover:scale-110 ${
                  darkMode
                    ? "bg-slate-700 text-white"
                    : "bg-slate-200 text-slate-700"
                }`}
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rayane-sefiani-13271b332/"
                className={`p-3 rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300 transform hover:scale-110 ${
                  darkMode
                    ? "bg-slate-700 text-white"
                    : "bg-slate-200 text-slate-700"
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:rayanesefiani.dev@gmail.com"
                className={`p-3 rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300 transform hover:scale-110 ${
                  darkMode
                    ? "bg-slate-700 text-white"
                    : "bg-slate-200 text-slate-700"
                }`}
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-linear-to-r from-indigo-500 to-purple-600 rounded-3xl opacity-20 blur-2xl"></div>
            <div
              className={`relative p-8 rounded-3xl border backdrop-blur-sm hover:scale-105 transition-transform duration-300 ${
                darkMode
                  ? "bg-slate-900/80 border-slate-700 shadow-2xl"
                  : "bg-white/80 border-slate-200 shadow-xl"
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-indigo-500/10 rounded-xl">
                  <Code size={32} className="text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Clean Code Advocate</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                    Quality & Performance
                  </p>
                </div>
              </div>
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                I believe in writing readable, maintainable, and scalable code.
                Every project is an opportunity to push boundaries and deliver
                solutions that stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

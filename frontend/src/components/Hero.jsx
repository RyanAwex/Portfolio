import { HashLink } from "react-router-hash-link";
import React from "react";
import { ChevronDown } from "lucide-react";

function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className={`relative pt-28 pb-12 sm:h-screen lg:max-h-256 flex items-center justify-center overflow-hidden`}
    >
      <div className="w-full max-w-4xl mx-auto text-center">
        <div className="mb-4 md:mb-6">
          <span
            className={`inline-block px-4 py-2 font-semibold text-sm uppercase tracking-wider rounded-full border ${
              darkMode
                ? "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
                : "bg-indigo-500/10 text-indigo-500 border-indigo-500/20"
            }`}
          >
            Full Stack Developer
          </span>
        </div>
        <h1
          className={`text-5xl xs:text-6xl md:text-7xl  font-extrabold mb-8 px-2 tracking-tight leading-tight wrap-break-word ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Hi, I'm <br className="block" />
          <span className="bg-linear-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Rayane Sefiani.
          </span>
        </h1>
        <p
          className={`text-lg md:text-xl mx-auto px-2 mb-12 leading-relaxed max-w-100 md:max-w-150 font-light ${
            darkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          I specialize in crafting clean, accessible, and high-performance web
          applications. From scalable APIs to modern front-ends, I bring ideas
          to life with code.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center sm:items-center mx-auto w-full max-w-100 sm:max-w-150 px-5">
          <HashLink
            smooth
            to="#projects"
            className={`group px-6 py-3 sm:px-10 sm:py-4 text-md md:text-lg font-bold max-w-100 rounded-xl transition-all duration-300 shadow-2xl transform hover:scale-105 ${
              darkMode
                ? "bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-indigo-500/50"
                : "bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-indigo-500/50"
            }`}
          >
            View My Work
            <ChevronDown
              className="inline ml-2 group-hover:translate-y-1 transition-transform"
              size={20}
            />
          </HashLink>
          <HashLink
            smooth
            to="#contact"
            className={`px-6 py-3 sm:px-10 sm:py-4 text-md md:text-lg border-2 font-bold max-w-100 rounded-xl transition-all duration-300 hover:bg-indigo-500/10 ${
              darkMode
                ? "border-slate-400 hover:border-indigo-400 text-slate-200 hover:text-indigo-400"
                : "border-slate-300 hover:border-indigo-500 text-slate-700 hover:text-indigo-500"
            }`}
          >
            Get In Touch
          </HashLink>
        </div>
        <div
          className={`mt-10 animate-bounce ${
            darkMode ? "text-slate-400" : "text-slate-500"
          }`}
        >
          <ChevronDown size={32} className="mx-auto opacity-70" />
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
}

export default Hero;

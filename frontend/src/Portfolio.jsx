import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Moon,
  Sun,
  ChevronDown,
  Loader,
} from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import axios from "axios";
import { API } from "./api";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  // Toggle Dark Mode Class on HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const getSkills = async () => {
    setIsLoading(true);
    const response = await axios.get(`${API}/skills`);
    setSkills(response.data);
    setIsLoading(false);
  };
  const getProjects = async () => {
    setIsLoading(true);
    const response = await axios.get(`${API}/projects`);
    setProjects(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    getProjects();
    getSkills();
  }, []);

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-slate-50 text-slate-900 duration-300"
      }`}
    >
      {/* --- HEADER --- */}
      <nav
        className={`fixed w-full z-50 backdrop-blur-md shadow-sm duration-300 ${
          darkMode
            ? "bg-slate-900/90 border-b border-slate-800"
            : "bg-white/90 border-b border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="shrink-0 font-bold text-2xl tracking-tighter text-indigo-500 indie">
              RS.
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <HashLink
                  smooth
                  key={link.name}
                  to={link.href}
                  className="hover:text-indigo-500 font-medium transition-colors focus:outline-none "
                >
                  {link.name}
                </HashLink>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:opacity-75 hover:dark:opacity-75 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                aria-label="Open mobile menu"
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                onClick={() => setMobileMenuOpen(true)}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Slide-over mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 flex justify-end md:hidden h-screen">
            <div
              className={`w-72 h-screen flex flex-col relative animate-slide-in ${
                darkMode ? "bg-slate-900" : "bg-white"
              }`}
            >
              {/* Close Button */}
              <button
                aria-label="Close mobile menu"
                className="p-2 rounded-lg transition absolute top-[14px] right-[26px]  hover:bg-red-500 dark:hover:bg-red-500 hover:text-white dark:hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={20} />
              </button>

              {/* Mobile links */}
              <ul className="flex flex-col items-start w-full pt-20 bg-white dark:bg-slate-900">
                {navLinks.map(
                  (link) =>
                    link.href !== "#contact" && (
                      <li key={link.href} className="w-full">
                        <HashLink
                          smooth
                          to={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block w-full py-4 px-8 font-semibold text-lg
                              hover:bg-gray-100 dark:hover:bg-gray-800
                              transition-colors"
                        >
                          {link.name}
                        </HashLink>
                      </li>
                    )
                )}

                <li className="w-full px-8 py-4">
                  <HashLink
                    smooth
                    to="/#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center bg-blue-600
                            dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600
                            text-white font-semibold py-3 rounded-lg transition"
                  >
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section
        className="pt-32 pb-20 px-4 flex items-center justify-center min-h-screen"
        id="home"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-indigo-500 font-bold tracking-wide uppercase mb-4 indie">
            Full Stack Developer
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Hi, I'm <br className="hidden md:block" />
            <span className="text-indigo-500 bg-clip-text bg-linear-to-r from-indigo-500 to-purple-600">
              Rayane Sefiani.
            </span>
          </h1>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            I'm focusing on clean, accessible and performant web applications. I
            build scalable APIs and modern front-ends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 text-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-indigo-500/25 indie"
            >
              View Work
            </a>
            <a
              href="#contact"
              className={`px-8 py-3 text-lg border font-bold rounded-lg transition-all indie ${
                darkMode
                  ? "border-slate-700 hover:bg-slate-800"
                  : "border-slate-300 hover:bg-slate-100"
              }`}
            >
              Contact Me
            </a>
          </div>
          <div className="mt-10 animate-bounce text-slate-400">
            <ChevronDown className="mx-auto" />
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section
        id="about"
        className={`py-20 ${darkMode ? "bg-slate-800/50" : "bg-slate-100"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p
                className={`mb-4 leading-relaxed ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Hello! I am a passionate developer with a strong foundation in
                both front-end and back-end development. I love creating clean,
                efficient code and intuitive user interfaces.
              </p>
              <p
                className={`mb-6 leading-relaxed ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                <span className="font-bold">Front-End:</span> Solid foundation
                in HTML, CSS, JavaScript, TypeScript, and React.js, with an
                expanding skill set in Tailwind CSS. <br />{" "}
                <span className="font-bold">Back-End:</span> Strong proficiency
                in Node.js, Express, PostgreSQL, and MongoDB for developing
                robust backend servers and building CRUD APIs.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/RyanAwex"
                  className="text-slate-400 hover:text-indigo-500 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rayane-sefiani-13271b332/"
                  className="text-slate-400 hover:text-indigo-500 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:ryanawex@gmail.com"
                  className="text-slate-400 hover:text-indigo-500 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-purple-600 rounded-2xl transform rotate-3 opacity-20 blur-lg"></div>
              <div
                className={`relative p-8 rounded-2xl border ${
                  darkMode
                    ? "bg-slate-900 border-slate-700"
                    : "bg-white border-slate-200"
                }`}
              >
                <Code size={48} className="text-indigo-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Clean Code enthusiast
                </h3>
                <p className="text-slate-500">
                  Always striving for readable, maintainable, and scalable
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>
          <div className="grid grid-cols-2 md:flex items-center justify-center flex-wrap gap-6">
            {!isLoading ? (
              skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`p-6 rounded-xl flex items-center justify-center gap-4  border transition-all hover:scale-105 ${
                    darkMode
                      ? "bg-slate-800 border-slate-700 hover:border-indigo-500"
                      : "bg-white border-slate-200 hover:border-indigo-500"
                  }`}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10"
                  />
                  <span className="font-semibold">{skill.name}</span>
                </div>
              ))
            ) : (
              <div className="text-center col-span-2">
                <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                  Loading skills
                  <Loader
                    className="inline-block ml-2 animate-spin"
                    size={20}
                  />
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section
        id="projects"
        className={`py-20 ${darkMode ? "bg-slate-800/50" : "bg-slate-100"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {!isLoading ? (
              projects.map((item) => (
                <div
                  key={item.id}
                  className={`group rounded-xl overflow-hidden border transition-all ${
                    darkMode
                      ? "bg-slate-900 border-slate-700"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <div className="h-48 bg-slate-700 group-hover:bg-indigo-900 transition-colors flex items-center justify-center">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="text-slate-400 h-full w-full object-cover object-top"
                      />
                    ) : (
                      <span className="text-slate-400">Project Screenshot</span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      Project Title {item.title}
                    </h3>
                    <p
                      className={`mb-4 text-sm ${
                        darkMode ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {item.description}
                    </p>
                    <div className="flex gap-2 mb-4">
                      {item.tech?.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs rounded bg-indigo-500/10 text-indigo-500"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-auto">
                      <a
                        href={item.github}
                        target="_blank"
                        className="flex items-center gap-1 text-sm font-medium hover:text-indigo-500"
                      >
                        <Github size={16} /> Code
                      </a>
                      <a
                        href={item.demo}
                        target="_blank"
                        className="flex items-center gap-1 text-sm font-medium hover:text-indigo-500"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center col-span-3">
                <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                  Loading projects
                  <Loader
                    className="inline-block ml-2 animate-spin"
                    size={20}
                  />
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p
            className={`mb-8 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            I'm currently available for freelance work or full-time
            opportunities. If you have a project that needs some creative touch,
            let's chat.
          </p>
          <a
            href="mailto:ryanawex@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-bold rounded-lg transition-all indie"
          >
            <Mail size={20} /> Message me!
          </a>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer
        className={`py-8 border-t ${
          darkMode
            ? "bg-slate-900 border-slate-800"
            : "bg-white border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Rayane Sefiani. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

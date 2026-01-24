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
import { HashLink } from "react-router-hash-link";
import axios from "axios";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;
  const API = import.meta.env.VITE_MODE === "development" ? "http://localhost:5000/api" : `${API_URL}/api`;

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
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
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
    // eslint-disable-next-line
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
        className={`fixed w-full z-50 backdrop-blur-md shadow-xl duration-300 ${
          darkMode
            ? "bg-slate-900/90 border-b border-slate-800"
            : "bg-white/90 border-b border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="shrink-0 font-bold text-2xl tracking-tighter text-indigo-500">
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
                className="p-2 rounded-full hover:opacity-75 hover:dark:opacity-75 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                aria-label="Open mobile menu"
                className="p-2 rounded-full hover:opacity-75 hover:dark:opacity-75 transition-colors"
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
              className={`w-72 h-screen flex flex-col relative transform translate-x-0 transition-transform duration-300 ease-out backdrop-blur-md shadow-xl ${
                darkMode
                  ? "bg-slate-900/95 border-l border-slate-800"
                  : "bg-white/95 border-l border-slate-200"
              }`}
            >
              {/* Close Button */}
              <button
                aria-label="Close mobile menu"
                className="p-2 rounded-lg transition absolute top-3.5 right-6.5  hover:bg-red-500 dark:hover:bg-red-500 hover:text-white dark:hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={20} />
              </button>

              {/* Mobile links */}
              <ul className="flex flex-col items-start w-full pt-20 bg-transparent">
                {navLinks.map(
                  (link) =>
                    link.href !== "#contact" && (
                      <li key={link.href} className="w-full">
                        <HashLink
                          smooth
                          to={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block w-full py-4 px-8 font-semibold text-lg
                              transition-colors ${
                                darkMode
                                  ? "hover:bg-gray-800"
                                  : "hover:bg-gray-200"
                              } `}
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

      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} skills={skills} isLoading={isLoading} />
      <Projects darkMode={darkMode} projects={projects} isLoading={isLoading} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;

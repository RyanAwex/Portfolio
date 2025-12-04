import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Terms from "./Terms";
import Privacy from "./Privacy";

export default function App() {
  // manage theme in the root so that any component can toggle via custom event or prop drilling
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem("theme", theme);
    } catch {
      console.log();
    }
  }, [theme]);

  return (
    <Routes>
      <Route
        index
        element={
          <>
            <div className="min-h-screen bg-white dark:bg-[#111111] text-gray-800 dark:text-gray-200 font-sans">
              <Header theme={theme} setTheme={setTheme} />
              <main>
                <div className="bg-gray-50 dark:bg-[#0b0b0b]">
                  <div className="max-w-6xl mx-auto px-6">
                    <Hero />
                  </div>
                </div>
                <div className="bg-white dark:bg-[#111111]">
                  <div className="max-w-6xl mx-auto px-6">
                    <AboutMe />
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-[#0b0b0b]">
                  <div className="max-w-6xl mx-auto px-6">
                    <Projects />
                  </div>
                </div>
                <div className="bg-white dark:bg-[#111111]">
                  <div className="max-w-6xl mx-auto px-6">
                    <Skills />
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-[#0b0b0b]">
                  <div className="max-w-6xl mx-auto px-6">
                    <Contact />
                  </div>
                </div>
              </main>
              <Footer />
            </div>
          </>
        }
      />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
}

import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default function Header({ theme, setTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          smooth
          to="#home"
          className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          RS.
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-black dark:text-white">
          <Link smooth to="#about" className="hover:text-primary">
            About
          </Link>
          <Link smooth to="#projects" className="hover:text-primary">
            Projects
          </Link>
          <Link smooth to="#skills" className="hover:text-primary">
            Skills
          </Link>
          <Link smooth to="#contact" className="hover:text-primary">
            Contact
          </Link>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </nav>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button
            aria-label="Open mobile menu"
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
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

        {/* Slide-over mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black/70 flex justify-end md:hidden">
            <div className="w-72 h-full shadow-lg flex flex-col relative animate-slide-in bg-white dark:bg-gray-900">
              {/* Close Button */}
              <button
                aria-label="Close mobile menu"
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-red-500 dark:hover:bg-red-500 hover:text-white dark:hover:text-white transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 6l8 8M6 14L14 6" />
                </svg>
              </button>

              {/* Mobile links */}
              <ul className="flex flex-col items-start w-full pt-20">
                {[
                  { href: "#home", label: "Home" },
                  { href: "#about", label: "About" },
                  { href: "#projects", label: "Projects" },
                  { href: "#skills", label: "Skills" },
                ].map((item) => (
                  <li key={item.href} className="w-full">
                    <Link
                      smooth
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full py-4 px-8 font-semibold text-lg
                      hover:bg-gray-100 dark:hover:bg-gray-800
                      transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}

                <li className="w-full px-8 py-4">
                  <Link
                    smooth
                    to="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center bg-blue-600
                    dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600
                    text-white font-semibold py-3 rounded-lg transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Slide animation */}
      <style>
        {`
          @keyframes slide-in {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          .animate-slide-in {
            animation: slide-in 0.3s cubic-bezier(.4,0,.2,1);
          }
        `}
      </style>
    </header>
  );
}

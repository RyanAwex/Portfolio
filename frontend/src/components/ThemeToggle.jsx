import React from "react";

export default function ThemeToggle({ theme, setTheme }) {
  // slider UI - switch style
  const isDark = theme === "dark";

  const toggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggle}
      aria-pressed={isDark}
      title="Toggle theme"
      className="relative inline-flex items-center h-8 w-14 rounded-full p-1 focus:outline-none"
    >
      <span
        className={`absolute inset-0 rounded-full transition-colors duration-200 toggle-bg ${
          isDark ? "bg-gray-700" : "bg-gray-300"
        }`}
      />
      <span
        className={`relative w-6 h-6 rounded-full bg-white shadow transform toggle-dot ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
}

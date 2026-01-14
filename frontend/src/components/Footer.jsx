import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

function Footer({ darkMode }) {
  return (
    <footer
      className={`py-8 border-t backdrop-blur-sm ${
        darkMode
          ? "bg-slate-900/80 border-slate-800"
          : "bg-white/80 border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p
          className={`text-sm ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          © {new Date().getFullYear()} Rayane Sefiani. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

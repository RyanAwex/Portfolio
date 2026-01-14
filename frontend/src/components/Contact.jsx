import { Mail, ExternalLink, Github, Linkedin } from "lucide-react";
import React from "react";

function Contact({ darkMode }) {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-xl leading-relaxed max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            I'm currently available for freelance projects or full-time
            opportunities. If you have an idea that needs to be brought to life,
            let's connect and make it happen.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="mailto:rayanesefiani.dev@gmail.com"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-lg font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-105"
          >
            <Mail size={24} />
            Send Message
            <ExternalLink
              size={18}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </a>
          <div className="flex gap-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

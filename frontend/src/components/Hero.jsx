import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Hero() {
  return (
    <section id="home" className="min-h-[100vh] flex items-center">
      <div className="w-full text-center py-24">
        <h1 className="text-5xl md:text-6xl font-extrabold text-black dark:text-white">
          Hi, I'm <span className="text-primary">Rayane Sefiani</span>.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Full-stack developer focusing on clean, accessible and performant web
          applications. I build scalable APIs and modern front-ends.
        </p>
        <HashLink
          smooth
          to="#projects"
          className="inline-block mt-8 px-7 py-4 rounded-lg bg-primary text-white  text-lg font-bold shadow hover:bg-accent transition"
        >
          View My Work
        </HashLink>
      </div>
    </section>
  );
}

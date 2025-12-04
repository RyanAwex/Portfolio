import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 dark:bg-black/60"
        onClick={onClose}
      />

      {/* Modal card */}
      <div
        className="
          relative z-10 max-w-4xl w-full rounded-xl overflow-hidden
          bg-white dark:bg-zinc-900
          border border-gray-200 dark:border-zinc-700
          shadow-lg
          p-4 md:p-6
        "
        aria-label={`Details for ${project.title}`}
      >
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>

          <button
            onClick={onClose}
            aria-label="Close"
            className="ml-4 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white px-3 py-1 rounded"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg border border-gray-300 dark:border-zinc-700"
          />

          <div className="text-gray-700 dark:text-gray-300">
            <p>{project.description}</p>

            {/* Tech Stack */}
            {project.tech?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-primary text-xs text-white px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-block px-4 py-2 rounded-lg
                  border border-gray-300 dark:border-zinc-700
                  hover:bg-gray-100 dark:hover:bg-zinc-800
                "
              >
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-block px-4 py-2 rounded-lg bg-primary text-white
                  hover:opacity-90
                "
              >
                Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

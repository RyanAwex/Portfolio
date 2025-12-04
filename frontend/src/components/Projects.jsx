import React, { useState, useEffect } from "react";
import ProjectModal from "./ProjectModal";
import axios from "axios";
import { API } from "../api.js";

export default function Projects() {
  const [openProject, setOpenProject] = useState(null);
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      const response = await axios.get(`${API}/api/projects`);
      setProjects(response.data);
    };
    getProjects();
  }, []);

  // lock scroll when modal is open
  useEffect(() => {
    if (openProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [openProject]);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">
          <span className="text-primary mr-3">02.</span>
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects &&
            projects.map((p) => (
              <article
                key={p.id}
                className="
                project-card
                p-6 rounded-xl shadow-md transform transition-transform duration-300 cursor-pointer
                border border-transparent
                bg-white dark:bg-zinc-900
                hover:border-gray-300 dark:hover:border-gray-700
              "
                onClick={() => setOpenProject(p)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setOpenProject(p);
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="rounded-lg mb-6 w-full h-48 object-cover"
                  loading="lazy"
                />
                <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">
                  {p.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech?.map((t, idx) => (
                    <span
                      key={idx}
                      className="bg-primary text-xs text-white px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center ">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenProject(p);
                    }}
                    className="text-primary font-semibold hover:underline"
                  >
                    View Details
                  </button>
                </div>
              </article>
            ))}
        </div>
      </div>

      {openProject && (
        <ProjectModal
          project={openProject}
          onClose={() => setOpenProject(null)}
        />
      )}
    </section>
  );
}

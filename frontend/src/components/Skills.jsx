import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { API } from "../api.js";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getSkills = async () => {
      const response = await axios.get(`${API}/api/skills`);
      setSkills(response.data);
    };
    getSkills();
  }, []);
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16  text-black dark:text-white">
          <span className="text-primary mr-3">03.</span>
          Skills
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-2 p-4 rounded-lg transition-transform transform hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

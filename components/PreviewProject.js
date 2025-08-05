"use client";

import { useState } from "react";

export default function PreviewProject() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: "humanmend",
      title: "HumanMend — 2025",
      studio: "New Apology",
    },
    {
      id: "lily-ballif",
      title: "Lily Ballif Portfolio — 2024",
      studio: "Studio Sugarcoat",
    },
  ];

  return (
    <div className="flex">
      <ul className="w-[250px]">
        {projects.map((project) => (
          <li
            key={project.id}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <button>
              {hoveredProject === project.id ? (
                <>
                  <span className="blur-[1px] transition-all duration-200">
                    Designed by{" "}
                  </span>
                  {project.studio}
                </>
              ) : (
                project.title
              )}
            </button>
          </li>
        ))}
      </ul>
      <div className="w-[480px] h-[270px]">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`rectangle ${
              hoveredProject === project.id ? "" : "hidden"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

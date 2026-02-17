"use client";

import { Github } from "lucide-react";
import { Badge } from "./ui/badge";

let projects = [
  {
    name: "QCpy",
    description:
      "Open source quantum computing Python library. Team invited to SIGCSE 2023 to present project.",
    github: "https://github.com/QCpython/QCpy",
    tags: ["Python", "Numpy", "Quantum Computing", "OSS", "Research"],
  },
  {
    name: "Beaver",
    description:
      "Open source event logger with SSE streams for 'real-time' monitoring.",
    github: "https://github.com/parisosuch/beaver",
    tags: ["Astro", "Sqlite3", "Bun"],
  },
];

export default function Projects() {
  return (
    <div className="w-full space-y-2">
      <h1 className="text-lg sm:text-2xl font-bold">Projects</h1>
      <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="space-y-2 border-2 border-gray-200 shadow-sm rounded-md p-2"
          >
            <div className="flex flex-row items-center justify-between w-full">
              {project.name}
              <a href={project.github} target="_blank">
                <Github size={18} />
              </a>
            </div>
            <p className="text-xs font-mono">{project.description}</p>
            <div>
              {project.tags.map((tag, tagIndex) => (
                <Badge variant="outline" key={tagIndex} className="font-mono">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

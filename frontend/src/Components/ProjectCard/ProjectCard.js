import React from "react";

// One project card on the home page. Data comes from src/data/projects.js.
const ProjectCard = ({ project }) => (
  <article className="h-full bg-white border border-stone-200 rounded-3xl overflow-hidden flex flex-col transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.25)]">
    {project.cover ? (
      <img
        src={project.cover}
        alt={project.title}
        loading="lazy"
        className="w-full h-[220px] object-cover"
      />
    ) : (
      // No screenshot yet: a soft purple panel with the project name
      <div className="h-[220px] bg-accent-soft flex items-center justify-center px-6">
        <span className="font-display font-bold text-3xl text-accent text-center">
          {project.title}
        </span>
      </div>
    )}
    <div className="p-6 pb-7 flex flex-col gap-2.5 flex-1">
      <h3 className="font-display font-semibold text-[23px]">{project.title}</h3>
      <p className="font-body text-base leading-relaxed text-zinc-600">
        {project.summary}
      </p>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto pt-3 font-body font-semibold text-[15px] text-accent hover:underline"
      >
        View Project →
      </a>
    </div>
  </article>
);

export default ProjectCard;

import React from "react";
import ProjectCard from "../pages/ProjectCard";

const projects = [
  {
    title: "Loyiha 1",
    description: "Bu loyiha haqida",
    link: "http://example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Loyiha 2",
    description: "Bu loyiha haqida",
    link: "http://example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Loyiha 3",
    description: "Bu loyiha haqida",
    link: "http://example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Loyiha 4",
    description: "Bu loyiha haqida",
    link: "http://example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Loyiha 5",
    description: "Bu loyiha haqida",
    link: "http://example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Loyiha 6",
    description: "Bu loyiha haqida",
    link: "http://example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Loyiha 7",
    description: "Bu loyiha haqida",
    link: "http://example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Loyiha 8",
    description: "Bu loyiha haqida",
    link: "http://example.com",
    image: "https://via.placeholder.com/150",
  },
];

function Projects() {
  return (
    <div className="projects">
      <h1>Loyihalarim</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;

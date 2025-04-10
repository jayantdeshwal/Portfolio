import React from "react";
import CurrConvImg from "../assets/img1.avif";
import PassImg from "../assets/password.png";
import ToDoImg from "../assets/to-do.png";
import TextUtilImg from "../assets/text.png";

const projects = [
  {
    id: 1,
    name: "TextUtils",
    technologies: "ReactJS",
    image: TextUtilImg,
    github: "https://text-utils-alpha-pearl.vercel.app/",
  },
  {
    id: 2,
    name: "Password Generator",
    technologies: "ReactJS",
    image: PassImg,
    github: "https://password-generator-nu-lyart.vercel.app/",
  },
  {
    id: 3,
    name: "Currency Converter",
    technologies: "ReactJS",
    image: CurrConvImg,
    github: "https://currencyconverter-eta-two.vercel.app/",
  },
  {
    id: 4,
    name: "ToDo Manager",
    technologies: "ReactJS",
    image: ToDoImg,
    github: "https://todocontext-nu.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hover:opacity-80 transition-opacity duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Link
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

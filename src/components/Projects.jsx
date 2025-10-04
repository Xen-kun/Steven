import TitleComponent from "./TitleUnderline";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Budget Planner",
    description: "A budget management tool that helps users track expenses, set savings goals, and analyze spending habits.",
    image: "../images/Budgetplanner.png",
    technologies: ["React", "Node.js", "TailwindCSS"],
    liveUrl: "#",
    unfinished: true, // mark as unfinished
  },
  {
    id: 2,
    title: "Resource-Aware De Novo Genome Assembly Algorithm for Short Read Sequences on Lower-end Machine",
    description: "An algorithm for genome assembly designed for lower-end machines, optimizing memory usage and efficiency.",
    image: "../images/DeNovoAssembly.png",
    technologies: ["Python", "BioPython", "NumPy", "Quast", "FastP", "Tkinter"],
    noPreview: true
  },
  {
    id: 3,
    title: "Weather Analytics Dashboard",
    description: "A dashboard that visualizes weather trends and forecasts with clean charts and statistics.",
    image: "../images/WeatherAnalytics.png",
    technologies: ["React", "Node.js", "TailwindCSS"],
    liveUrl: "#",
    unfinished: true, // mark as unfinished
  },
  {
    id: 4,
    title: "Pokemon WonderTrade",
    description: "A data analysis school project simulating Pokémon Wonder Trade, exploring trade patterns and probabilities using Python and visualization tools.",
    image: "../images/Analytics.png",
    technologies: ["Python", "Pandas", "Matplotlib", "Google Colab"],
    liveUrl: "https://colab.research.google.com/drive/1QGgRgEdqeTskHY-IBm75nZo_V-MoZNez?usp=sharing",
    unfinished: false, // now marked as finished
  }
];

export default function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="projects" className="bg-gray-100 w-full max-w-5xl mx-auto">
      <div className="container mx-auto px-6 md:px-0 text-center">
        <TitleComponent>Featured Projects</TitleComponent>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Here are some of my recent projects that showcase my skills and passion for development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                if (!project.unfinished && !project.noPreview && project.liveUrl) {
                  window.open(project.liveUrl, "_blank");
                } else if (project.unfinished) {
                  setIsModalOpen(true);
                }
              }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 overflow-hidden group flex flex-col w-full max-w-sm mx-auto cursor-pointer"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div
                  className="flex gap-3"
                  onClick={(e) => e.stopPropagation()} // 🔒 Prevents triggering card click
                >
                  {project.unfinished ? (
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-900 transition"
                    >
                      🚀 Live Demo
                    </button>
                  ) : project.noPreview ? (
                    <p className="text-xs text-gray-500 italic">
                      No preview available on this thesis project.
                    </p>
                  ) : (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()} // 🔒 Avoid double opening
                      className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-900 transition"
                    >
                      🚀 Live Demo
                    </a>
                  )}

                  {/* Code button (optional if you have repo link) */}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md hover:bg-gray-100 transition"
                    >
                      💻 Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-sm w-full text-center">
            <h3 className="text-xl font-bold mb-4">Notice</h3>
            <p className="mb-6">This project is not yet finished.</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-5 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}


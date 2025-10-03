import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Budget Planner",
    description: "A budget management tool that helps users track expenses, set savings goals, and analyze spending habits.",
    image: "../images/Budgetplanner.png",
    technologies: ["React", "Node.js", "MySQL"],
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
    technologies: ["React", "Node.js", "MySQL"],
    liveUrl: "#",
    unfinished: true, // mark as unfinished
  }
];

export default function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="projects" className="bg-gray-100 w-full max-w-5xl mx-auto">
      <div className="container mx-auto px-6 md:px-0 text-center">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <span className="block w-20 h-0.5 bg-black mx-auto mb-8"></span>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Here are some of my recent projects that showcase my skills and passion for development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-2 overflow-hidden group flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-t-lg w-full h-56 object-cover transition-transform duration-400 ease-in-out group-hover:scale-105 group-hover:brightness-75"
                />
              </div>

              <div className="p-6 text-left flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-sm rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.unfinished ? (
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="inline-block px-5 py-2 bg-black text-white rounded hover:-translate-y-1 hover:shadow-md transition"
                    >
                      🚀 View Live Demo
                    </button>
                  ) : project.noPreview ? (
                    <p className="text-sm text-gray-500 italic">
                      No preview available on this thesis project
                    </p>
                  ) : (
                    <a
                      href={project.liveUrl}
                      className="inline-block px-5 py-2 bg-black text-white rounded hover:-translate-y-1 hover:shadow-md transition"
                    >
                      🚀 View Live Demo
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

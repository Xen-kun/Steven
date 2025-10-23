import TitleComponent from "./TitleUnderline";
import { useState } from "react";

const projects = [
  // 🧠 CODING PROJECTS
  {
    id: 1,
    category: "coding",
    title: "Budget Planner",
    description: "A budget management tool that helps users track expenses, set savings goals, and analyze spending habits.",
    image: "../images/Budgetplanner.png",
    technologies: ["React", "Node.js", "TailwindCSS","Shadcn UI"],
    unfinished: true,
  },

  {
    id: 2,
    category: "coding",
    title: "Resource-Aware De Novo Genome Assembly Algorithm",
    description: "An algorithm for genome assembly designed for lower-end machines, optimizing memory usage and efficiency.",
    image: "../images/DeNovoAssembly.png",
    technologies: ["Python", "BioPython", "NumPy", "Quast", "FastP", "Tkinter"],
    noPreview: true,
  },

  {
    id: 3,
    category: "coding",
    title: "Weather Analytics Dashboard",
    description: "A dashboard that visualizes weather trends and forecasts with clean charts and statistics.",
    image: "../images/WeatherAnalytics.png",
    technologies: ["React", "Node.js", "TailwindCSS", ,"Shadcn UI"],
    unfinished: true,
  },

  {
    id: 4,
    category: "coding",
    title: "Pokémon WonderTrade Data Analysis",
    description: "A data analysis project simulating Pokémon Wonder Trade, exploring trade patterns and probabilities using Python and visualization tools.",
    image: "../images/Analytics.png",
    technologies: ["Python", "Pandas", "Matplotlib", "Google Colab"],
    liveUrl: "https://colab.research.google.com/drive/1QGgRgEdqeTskHY-IBm75nZo_V-MoZNez?usp=sharing",
  },

  {
    id: 5,
    category: "figma",
    title: "My Personal Portfolio UI",
    description: "My personal portfolio design initially created in Figma before depployed in vercel, focused on minimalistic layouts and modern typography.",
    image: "../images/PortfolioWebsite.png",
    technologies: ["Figma", "Prototyping"],
    liveUrl: "https://www.figma.com/design/6u8cs6xHzsq0gJCK25U5cA/Figma-Designs?node-id=242-2&t=ZLnrENMqs49ENpBB-1",
  },

  {
    id: 6,
    category: "figma",
    title: "Coffee Ecommerce Website",
    description: "A data-driven admin dashboard concept for e-commerce analytics and inventory management that soon to be develop and deploy on the internet.",
    image: "../images/ECommerce.png",
    technologies: ["Figma", "UI Design", "Prototyping"],
    liveUrl: "https://www.figma.com/design/6u8cs6xHzsq0gJCK25U5cA/Figma-Designs?node-id=244-8&t=ZLnrENMqs49ENpBB-1",
  },

  {
    id: 7,
    category: "coding",
    title: "PangaldawXpress",
    description: "A live food delivery platform for Filipino dishes, featuring an admin dashboard for managing orders, menus, and customer analytics with a clean, data-driven design.A data-driven admin dashboard concept for e-commerce analytics and inventory management. Check out the live demo!",
    image: "../images/PangaldawXpress.png",
    technologies: ["Hostinger Web Builder"],
    liveUrl: "https://pangaldawxpress.shop/",
  },

  {
    id: 8,
    category: "figma",
    title: "Chat UI",
    description: "A semi Discord-inspired messaging platform designed for e-learning. It includes features such as servers, group chats, and discussion channels to support academic collaboration. The interface focuses on simplicity, organization, and user engagement—providing students and educators with a familiar yet structured environment for online learning.",
    image: "../images/ChatUI.png",
    technologies: ["Figma", "Prototyping"],
    liveUrl: "https://www.figma.com/design/vETskYjyBMPfkGd9eaT9RY/Chat-UI--HCI--Project?node-id=101-3&t=Xwih1BXWODkIktTn-1", 
  },

  {id: 9,
    category: "coding",
    title: "Revamp Marci Metzger Homepage",
    description: "A redesigned static Home page inspired by an existing website (https://marcimetzger.com). The project enhances visual design, usability, and responsiveness while retaining original content and images for a cleaner, more engaging user experience.",
    image: "../images/MarciMetzers.png",
    technologies: ["React", "Node.js", "TailwindCSS"],
    liveUrl: "https://marci-metzger-home.vercel.app/",
  },
];

export default function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Separate projects by category
  const codingProjects = projects.filter((p) => p.category === "coding");
  const figmaProjects = projects.filter((p) => p.category === "figma");

  // Reusable Project Grid Component
  const ProjectGrid = ({ title, items }) => (
    <div className="mb-20">
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((project) => (
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
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>

            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-100 text-xs rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

              <div
                className="flex gap-3"
                onClick={(e) => e.stopPropagation()}
              >
                {project.unfinished ? (
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-900 transition"
                  >
                    🚀 Live Demo
                  </button>
                ) : project.noPreview ? (
                  <p className="text-xs text-gray-500 italic">No preview available on this thesis project.</p>
                ) : (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-900 transition"
                  >
                    🚀 Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="projects" className="bg-gray-100 w-full max-w-5xl mx-auto py-16">
      <div className="container mx-auto px-6 md:px-0 text-center">
        <TitleComponent>Featured Projects</TitleComponent>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Here are some of my recent and school projects that showcase my skills in both <span className="font-medium text-black">development</span> and <span className="font-medium text-black">design</span>.
        </p>

        {/* Coding Projects */}
        <ProjectGrid title="💻 Coding Projects" items={codingProjects} />

        {/* Figma Projects */}
        <ProjectGrid title="🎨 Figma Designs" items={figmaProjects} />
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

import { Badge } from "./ui/badge";
import { Code, Database, Cloud } from "lucide-react"; 

const techCategories = [
  {
    category: "Frontend",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    technologies: ["React.js", "Vue.js", "JavaScript", "Tailwind CSS", "SCSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    icon: <Database className="w-6 h-6 text-green-500" />,
    technologies: ["Node.js", "Express", "Python", "C", "C++", "PHP Laravel", "MySQL"],
  },
  {
    category: "Tools & DevOps",
    icon: <Cloud className="w-6 h-6 text-orange-500" />,
    technologies: ["Git", "Docker", "Vercel", "Linux", "Nginx", "CI/CD", "XAMPP", "Figma"],
  },
];

export default function TechStack() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
          <span className="block w-20 h-0.5 bg-black mx-auto mb-8"></span>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category) => (
            <div
              key={category.category}
              className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition-transform hover:scale-105"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-lg bg-gray-100 mb-4">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="px-3 py-1 rounded-lg border border-gray-300 transition-all duration-200 
                               hover:bg-black hover:text-white hover:border-black 
                               cursor-pointer transform hover:-translate-y-0.5 hover:shadow-md"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            Always learning and exploring new technologies to stay current with industry trends.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-sm">Fast Development</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎨</div>
              <div className="text-sm">Creative Design</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔧</div>
              <div className="text-sm">Problem Solving</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-sm">Performance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

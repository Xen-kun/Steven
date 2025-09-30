import { Badge } from "./ui/badge";

const techCategories = [
  {
    category: "Frontend",
    technologies: [
      "React.js", "JavaScript", 
      "Tailwind CSS", "SCSS", "HTML5", "CSS3"
    ]
  },
  {
    category: "Backend",
    technologies: [
      "Node.js", "Express", "FastAPI", "Python", "C++", "C", "MySQL", "PHP Laravel"
    ]
  },
  {
    category: "Tools & DevOps",
    technologies: [
      "Git", "Docker", "Vercel", "Linux", "Nginx", "CI/CD"
    ]
  },
  {
    category: "Mobile & Others",
    technologies: [
      "Figma", "Webpack", "Vite"
    ]
  }
];

export default function TechStack() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          {/* Title with underline (same style as Projects) */}
          <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
          <span className="block w-20 h-0.5 bg-black mx-auto mb-8"></span>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-xl mb-4 text-center">{category.category}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
        
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

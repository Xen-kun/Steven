import { Badge } from "./ui/badge";

const techCategories = [
  {
    category: "Frontend",
    technologies: [
      "React", "Next.js", "Vue.js", "TypeScript", "JavaScript", 
      "Tailwind CSS", "SCSS", "HTML5", "CSS3"
    ]
  },
  {
    category: "Backend",
    technologies: [
      "Node.js", "Express", "FastAPI", "Python", "PostgreSQL", 
      "MongoDB", "Redis", "GraphQL", "REST APIs"
    ]
  },
  {
    category: "Tools & DevOps",
    technologies: [
      "Git", "Docker", "AWS", "Vercel", "Firebase", 
      "Jenkins", "Linux", "Nginx", "CI/CD"
    ]
  },
  {
    category: "Mobile & Others",
    technologies: [
      "React Native", "Flutter", "Figma", "Adobe XD", 
      "Photoshop", "Webpack", "Vite", "ESLint"
    ]
  }
];

export default function TechStack() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Tech Stack</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
          <p className="text-muted-foreground mb-8">
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
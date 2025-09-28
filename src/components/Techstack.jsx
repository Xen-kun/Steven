import TitleComponent from "./TitleComponent"
import { Badge } from "./ui/badge";
import { Lightning, Palette, Wrench, Rocket } from "lucide-react";

export function TechStack() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Tech Stack</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-lg text-muted-foreground mb-16">
          Technologies and tools I work with to bring ideas to life.
        </p>

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS", "SCSS", "HTML5", "CSS3"].map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {["Node.js", "Express", "FastAPI", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs"].map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Tools & DevOps */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Tools & DevOps</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {["Git", "Docker", "AWS", "Vercel", "Firebase", "Jenkins", "Linux", "Nginx", "CI/CD"].map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Mobile & Others */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Mobile & Others</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {["React Native", "Flutter", "Figma", "Adobe XD", "Photoshop", "Webpack", "Vite", "ESLint"].map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <p className="text-muted-foreground mb-10">
          Always learning and exploring new technologies to stay current with industry trends.
        </p>

        {/* Icons section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <Lightning className="w-6 h-6 text-orange-500 mb-2" />
            <span className="font-medium">Fast Development</span>
          </div>
          <div className="flex flex-col items-center">
            <Palette className="w-6 h-6 text-pink-500 mb-2" />
            <span className="font-medium">Creative Design</span>
          </div>
          <div className="flex flex-col items-center">
            <Wrench className="w-6 h-6 text-purple-500 mb-2" />
            <span className="font-medium">Problem Solving</span>
          </div>
          <div className="flex flex-col items-center">
            <Rocket className="w-6 h-6 text-red-500 mb-2" />
            <span className="font-medium">Performance</span>
          </div>
        </div>
      </div>
    </section>
  );
}

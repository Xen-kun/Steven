import TitleComponent from "./TitleUnderline";
import { Code2, Server, Palette } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">

        <TitleComponent> About Me </TitleComponent>

        {/* Grid for About + Skills */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Passionate Developer</h3>
            <p className="text-gray-600 mb-5">
              With <span className="font-semibold">over 2 years of experience </span> 
              in software development during my college days, constributing academic and side projects, I specialize in creating 
              modern, responsive applications using the latest technologies. 
              I believe in writing clean, maintainable code and following best practices.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you can find me exploring frameworks and trends, 
              contributing to open source projects, collaborating, or sharing knowledge 
              with my peers or cicle.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6 md:px-12">
            <h2 className="text-xl font-semibold">What I can do</h2>

            {/* Frontend */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-100 shadow-sm bg-white">
                <Code2 className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Frontend Development</h4>
                <p className="text-sm text-gray-500">React  · Tailwind</p>
              </div>
            </div>

            {/* Backend */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-100 shadow-sm bg-white">
                <Server className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Backend Development</h4>
                <p className="text-sm text-gray-500">Node.js · Express · SQL/NoSQL</p>
              </div>
            </div>

            {/* UI/UX */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-100 shadow-sm bg-white">
                <Palette className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-700">UI/UX Design</h4>
                <p className="text-sm text-gray-500">Figma · Prototyping · Accessibility</p>
              </div>
            </div>
          </div>
        </div>

        {/* Currently Learning Card */}
      <div className="mt-[60px] flex justify-center">
          <div className="border rounded-lg p-5 shadow-sm bg-gray-50 max-w-md text-center">
            <h4 className="font-semibold text-gray-800 mb-2">Currently Learning</h4>
            <p className="text-gray-600 text-sm">
              Continuously learning <span className="font-medium text-blue-600">React.js </span>core concepts 
              and currently exploring <span className="font-medium text-green-600">MERN Stack </span> 
              to build full-stack scalable applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

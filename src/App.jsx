import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Techstacks from "./components/Techstack";

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Navbar />

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="py-20 w-full bg-white">
        <div className="px-6 max-w-6xl mx-auto">
          <About />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 w-full bg-gray-100">
        <div className="px-6 max-w-6xl mx-auto">
          <Projects />
        </div>
      </section>

      {/* Tech Stack */}
      <section id="techstack" className="py-20 w-full bg-white">
        <div className="px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Techstacks</h2>
          <p className="text-gray-600">[Coming soon...]</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 w-full bg-gray-100">
        <div className="px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <p className="text-gray-600">[Coming soon...]</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center border-t mt-12">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Steven. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects"

function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Navbar />

      <section id="home" className="min-h-screen flex items-center justify-center">
        <Hero />
      </section>

      <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
        <About />
      </section>

      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <Projects />
      </section>

      <section id="techstack" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Tech Stack</h2>
        <p className="text-center text-gray-600">[Coming soon...]</p>
      </section>

      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <p className="text-center text-gray-600">[Coming soon...]</p>
      </section>

      <footer className="py-6 text-center border-t mt-12">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Steven. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

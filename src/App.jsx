import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Techstacks from "./components/Techstack";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Navbar />

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center">
        <Home />
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
          <Techstacks />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 w-full bg-gray-100">
        <div className="px-6 max-w-6xl mx-auto text-center">
          <Contact />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center border-t">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Steven. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

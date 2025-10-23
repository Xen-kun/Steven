import { Download } from "lucide-react";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-5 bg-white"
    >
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
        Hi, I'm <span className="text-blue-600">Steven</span>
      </h1>

      {/* Subtitle */}
      <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
        Junior Full Stack Developer & Creative UI/UX Designer
      </h2>

      {/* Description */}
      <p className="max-w-2xl text-gray-500 mb-8">
        I recently graduated with a degree in <span className="text-gray-800 font-bold">Computer Science </span>last July 11,2025 from Mariano Marcos State University.
        I craft digital experiences that blend beautiful design with robust functionality. 
        Passionate about building scalable applications and exploring cutting-edge technologies.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="#projects"
          className="px-6 py-3 bg-black text-white rounded-md 
                    hover:bg-white hover:text-black  
                    transform hover:-translate-y-1 hover:shadow-lg 
                    transition duration-200 ease-in-out"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-md 
                    hover:bg-black hover:text-white  
                    transform hover:-translate-y-1 hover:shadow-lg 
                    transition duration-200 ease-in-out"
        >
          Get In Touch
        </a>
        <a
          href="/resume/Daleja_Stevenson_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-100 text-gray-800 rounded-md flex items-center gap-2
                    hover:bg-black hover:text-white  
                    transform hover:-translate-y-1 hover:shadow-lg 
                    transition duration-200 ease-in-out"
        >
          <Download size={18} />
          Resume
        </a>
      </div>
    </section>
  );
}

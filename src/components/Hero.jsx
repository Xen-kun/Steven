export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white"
    >
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
        Hi, I'm <span className="text-blue-600">Steven</span>
      </h1>

      {/* Subtitle */}
      <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
        Junior Full Stack Developer
      </h2>

      {/* Description */}
      <p className="max-w-2xl text-gray-500 mb-8">
        I craft digital experiences that blend beautiful design with robust functionality. 
        Passionate about building scalable applications and exploring cutting-edge technologies.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 transition"
        >
          Get In Touch
        </a>
      </div>
    </section>
  )
}

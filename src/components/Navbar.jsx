
function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold">Steven.</a>
        <div className="space-x-6">
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#projects" className="hover:text-indigo-600">Projects</a>
          <a href="#techstack" className="hover:text-indigo-600">Tech Stack</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
          <a href="#contact" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-indigo-600">Hire Me</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

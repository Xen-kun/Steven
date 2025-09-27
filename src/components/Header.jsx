
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold">Steven.</h1>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#techstack" className="hover:text-blue-500">Tech Stack</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
        <a href="#contact" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          Hire Me
        </a>
      </div>
    </header>
  );
}

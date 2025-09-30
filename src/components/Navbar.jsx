import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "techstack", "contact"];
      const scrollPos = window.scrollY + 100; // offset for header height

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }

      setScrolled(window.scrollY > 10); // toggle glass effect when scrolling
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["About", "Projects", "Tech Stack", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/30 backdrop-blur-md border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center py-4 px-6">
        {/* Logo */}
        <a href="#home" className="text-4xl font-mono font-bold animate-rgb-glow">
          <h1 className="text-xl font-bold">&lt;/Steven&gt;</h1>
        </a>

        {/* Push nav to the right */}
        <div className="ml-auto flex items-center">
          {/* Hamburger Button (Mobile) */}
          <button
            className="md:hidden p-2 rounded-lg focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Nav Links */}
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full bg-white/30 backdrop-blur-md border-b border-white/20 md:border-0 md:bg-transparent md:backdrop-blur-0 md:static md:block`}
          >
            <ul className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 p-4 md:p-0">
              {navItems.map((item) => {
                const id = item.toLowerCase().replace(" ", "");
                const isActive = activeSection === id;
                return (
                  <li key={item}>
                    <a
                      href={`#${id}`}
                      className={`block px-3 py-2 rounded-md 
                                 hover:bg-white/20 md:hover:bg-transparent
                                 md:relative md:inline-block md:after:content-['']
                                 md:after:absolute md:after:left-0 md:after:-bottom-1
                                 md:after:w-0 md:after:h-[2px] md:after:bg-blue-500
                                 md:hover:after:w-full md:after:transition-all md:after:duration-300
                                 md:hover:text-blue-500
                                 ${isActive ? "md:after:w-full md:text-blue-500" : ""}`}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href="#contact"
                  className="block bg-black text-white px-4 py-2 rounded-md 
                             hover:bg-gray-800 md:inline-block"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

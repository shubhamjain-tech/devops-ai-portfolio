import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-cyan-400">
          SJ
        </a>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#services" className="hover:text-cyan-400">Services</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
          <li><a href="#certifications" className="hover:text-cyan-400">Certifications</a></li>

        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex gap-4 text-xl text-gray-300">
          <a
            href="https://github.com/shubhamjain-tech"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="hover:text-cyan-400 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/shubham-jain-685520148/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="hover:text-cyan-400 transition" />
          </a>

          <a
            href="https://medium.com/@shubhamjain9005"
            target="_blank"
            rel="noreferrer"
          >
            <FaMedium className="hover:text-cyan-400 transition" />
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
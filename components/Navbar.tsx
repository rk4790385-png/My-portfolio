"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-4 text-white">
        
        <h1 className="text-2xl font-bold tracking-wide">Raj.dev</h1>

        <div className="flex gap-8 text-lg">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

      </div>
    </nav>
  );
}
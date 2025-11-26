"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Experiencia", href: "#experiencia" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        <h1 className="text-xl font-bold text-purple-500">
          Roy<span className="text-white">Barrera</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-purple-400 transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-black/90 px-5 py-4 space-y-4 text-white">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="block text-lg hover:text-purple-400 transition"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

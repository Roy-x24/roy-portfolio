"use client";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre mí", href: "#sobre-mi" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Experiencia", href: "#experiencia" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  // Resalta el enlace de la sección que se está viendo
  useEffect(() => {
    const sections = navItems
      .map((i) => document.getElementById(i.href.slice(1)))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));

    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "bg-black/70 backdrop-blur-xl border-white/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        <a href="#inicio" className="font-mono text-lg font-bold text-white">
          <span className="text-purple-400">&lt;</span>
          Roy<span className="text-cyan-400">Barrera</span>
          <span className="text-purple-400"> /&gt;</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`px-3 py-2 rounded-full transition ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
          <li className="ml-2">
            <button
              onClick={() => window.dispatchEvent(new Event("open-palette"))}
              className="rounded-full border border-white/15 px-3 py-1.5 font-mono text-xs text-gray-400 hover:text-white hover:border-white/40 transition"
              aria-label="Abrir paleta de comandos"
            >
              Ctrl K
            </button>
          </li>
          <li className="ml-1">
            <a
              href="/Curriculum.pdf"
              download
              className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white transition"
            >
              Descargar CV
            </a>
          </li>
        </ul>

        {/* Botón móvil */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <ul className="md:hidden px-5 pb-5 pt-2 space-y-1 text-white">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="block py-2 text-lg hover:text-purple-400 transition"
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

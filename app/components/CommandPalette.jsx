"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { profile } from "../data/portfolio";

const items = [
  { label: "Ir a Inicio", hint: "sección", href: "#inicio" },
  { label: "Ir a Sobre mí", hint: "sección", href: "#sobre-mi" },
  { label: "Ir a Habilidades", hint: "sección", href: "#habilidades" },
  { label: "Ir a Proyectos", hint: "sección", href: "#proyectos" },
  { label: "Ir a Arquitectura", hint: "sección", href: "#arquitectura" },
  { label: "Ir a Experiencia", hint: "sección", href: "#experiencia" },
  { label: "Ir a GitHub en vivo", hint: "sección", href: "#github" },
  { label: "Abrir la terminal", hint: "sección", href: "#terminal" },
  { label: "Ir a Contacto", hint: "sección", href: "#contacto" },
  { label: "Descargar CV", hint: "acción", href: "/Curriculum.pdf", download: true },
  { label: "Abrir GitHub", hint: "externo", href: profile.github, external: true },
  { label: "Abrir LinkedIn", hint: "externo", href: profile.linkedin, external: true },
  { label: "Enviar email", hint: "acción", href: `mailto:${profile.email}` },
];

// Paleta de comandos estilo VS Code: Ctrl/Cmd + K
export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-palette", onOpen);
    };
  }, []);

  // Se monta solo al abrir, así su estado siempre empieza limpio
  return open ? <Palette close={() => setOpen(false)} /> : null;
}

function Palette({ close }) {
  const [query, setQuery] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef(null);

  const results = useMemo(
    () => items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const go = (item) => {
    close();
    if (item.external) window.open(item.href, "_blank", "noopener");
    else if (item.download || item.href.startsWith("mailto")) {
      const a = document.createElement("a");
      a.href = item.href;
      if (item.download) a.download = "";
      a.click();
    } else {
      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSel((s) => Math.min(s + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSel((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter" && results[sel]) go(results[sel]);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 backdrop-blur-sm px-4 pt-[15vh]"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Paleta de comandos"
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/15 bg-[#0d0b18] shadow-2xl shadow-purple-900/40"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSel(0);
          }}
          onKeyDown={onKeyDown}
          placeholder="Escribe para buscar... (Esc para cerrar)"
          className="w-full border-b border-white/10 bg-transparent px-5 py-4 text-white outline-none placeholder:text-gray-500"
        />
        <ul className="max-h-80 overflow-y-auto p-2">
          {results.length === 0 && (
            <li className="px-4 py-6 text-center text-sm text-gray-500">Sin resultados</li>
          )}
          {results.map((r, i) => (
            <li key={r.label}>
              <button
                onMouseEnter={() => setSel(i)}
                onClick={() => go(r)}
                className={`flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-left text-sm transition ${
                  i === sel ? "bg-purple-600/30 text-white" : "text-gray-300"
                }`}
              >
                {r.label}
                <span className="font-mono text-xs text-gray-500">{r.hint}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

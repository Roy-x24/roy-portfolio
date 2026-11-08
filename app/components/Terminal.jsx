"use client";
import { useRef, useState, useEffect } from "react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import {
  profile,
  skillGroups,
  projects,
  experience,
  education,
} from "../data/portfolio";

const commands = {
  help: () => [
    "Comandos disponibles:",
    "  whoami       quién soy",
    "  skills       mi stack técnico",
    "  projects     proyectos destacados",
    "  experience   dónde he trabajado",
    "  education    formación y certificaciones",
    "  contact      cómo contactarme",
    "  sudo hire roy",
    "  clear        limpiar la terminal",
  ],
  whoami: () => [
    `${profile.name} — desarrollador de software en ${profile.location}.`,
    "Full Stack · Backend · Cybersecurity (aprendiendo).",
    "Me gusta el código limpio, la seguridad desde el diseño y entregar rápido.",
  ],
  skills: () =>
    skillGroups.map((g) => `${g.title.padEnd(16)} ${g.items.join(", ")}`),
  projects: () =>
    projects.map((p) => `▸ ${p.title} — ${p.tagline}\n    ${p.repo}`),
  experience: () =>
    experience.map((e) => `▸ ${e.org}\n    ${e.role}`),
  education: () =>
    education.map((e) => `▸ ${e.title} (${e.org}) [${e.status}]`),
  contact: () => [
    `email     ${profile.email}`,
    `linkedin  ${profile.linkedin}`,
    `github    ${profile.github}`,
  ],
  "sudo hire roy": () => [
    "[sudo] verificando credenciales... OK",
    "✔ Permiso concedido. Excelente decisión.",
    `→ Escríbeme a ${profile.email}`,
  ],
};

export default function Terminal() {
  const [lines, setLines] = useState([
    { type: "out", text: 'Bienvenido. Escribe "help" para ver los comandos.' },
  ]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState([]);
  const [hIndex, setHIndex] = useState(-1);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    // Solo desplaza el contenedor interno, nunca la página
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const run = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === "clear") {
      setLines([]);
      return;
    }
    const fn = commands[cmd];
    const out = fn
      ? fn()
      : [`comando no encontrado: ${cmd}. Prueba con "help".`];
    setLines((l) => [
      ...l,
      { type: "in", text: raw },
      ...out.map((text) => ({ type: "out", text })),
    ]);
    setHistory((h) => [raw, ...h]);
    setHIndex(-1);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      run(value);
      setValue("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const i = Math.min(hIndex + 1, history.length - 1);
      if (history[i] !== undefined) {
        setHIndex(i);
        setValue(history[i]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const i = hIndex - 1;
      setHIndex(i);
      setValue(i >= 0 ? history[i] : "");
    }
  };

  return (
    <section id="terminal" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          eyebrow="terminal"
          title="Pregúntame desde la consola"
          subtitle='Es una terminal de verdad (más o menos). Prueba con "help", "projects" o "sudo hire roy".'
        />

        <Reveal>
          <div
            className="rounded-2xl border border-white/10 bg-black/80 shadow-2xl shadow-cyan-900/20 overflow-hidden cursor-text"
            onClick={() => inputRef.current?.focus({ preventScroll: true })}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-3 font-mono text-xs text-gray-400">
                roy@panama: ~
              </span>
            </div>

            <div
              ref={bodyRef}
              className="h-80 overflow-y-auto p-5 font-mono text-sm leading-6"
            >
              {lines.map((l, i) =>
                l.type === "in" ? (
                  <div key={i}>
                    <span className="text-emerald-400">roy@panama</span>
                    <span className="text-gray-500">:~$ </span>
                    <span className="text-white">{l.text}</span>
                  </div>
                ) : (
                  <div key={i} className="whitespace-pre-wrap break-words text-gray-300">
                    {l.text}
                  </div>
                )
              )}
              <div className="flex">
                <span className="text-emerald-400">roy@panama</span>
                <span className="text-gray-500">:~$&nbsp;</span>
                <input
                  ref={inputRef}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={onKeyDown}
                  aria-label="Comando de terminal"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck={false}
                  className="flex-1 bg-transparent text-white outline-none caret-cyan-400"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {["help", "whoami", "projects", "skills", "sudo hire roy"].map((c) => (
              <button
                key={c}
                onClick={() => run(c)}
                className="rounded-full border border-white/10 px-4 py-1.5 font-mono text-xs text-gray-400 hover:border-cyan-400/60 hover:text-cyan-300 transition"
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

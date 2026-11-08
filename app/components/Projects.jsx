"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { projects, profile } from "../data/portfolio";

const filters = ["Todos", "Full Stack", "Backend", "Frontend"];

// Actualiza las variables CSS que usa el efecto "spotlight"
function trackMouse(e) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

function ProjectCard({ project }) {
  const featured = project.featured;
  return (
    <article
      onMouseMove={trackMouse}
      className={`spotlight group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-purple-500/60 hover:-translate-y-1 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          {featured && (
            <span className="mb-3 inline-block rounded-full bg-purple-500/15 px-3 py-1 text-xs font-mono text-purple-300">
              ★ Destacado
            </span>
          )}
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="mt-1 text-sm text-cyan-300">{project.tagline}</p>
        </div>
        <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
          {project.category}
        </span>
      </div>

      <p className="mt-4 text-gray-400 leading-relaxed">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-300">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-center gap-2">
            <span className="text-emerald-400">✓</span>
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-md bg-black/50 border border-white/10 px-2.5 py-1 font-mono text-xs text-gray-300"
            >
              {s}
            </span>
          ))}
        </div>
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-purple-300 hover:text-white transition"
        >
          Ver código <span className="inline-block transition group-hover:translate-x-1">→</span>
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("Todos");
  const visible = projects.filter((p) => filter === "Todos" || p.category === filter);

  return (
    <section id="proyectos" className="relative py-28 px-6 bg-[#0b0a14]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="proyectos"
          title="Cosas que he construido"
          subtitle="Una selección de mis repositorios: sistemas de microservicios, plataformas de cumplimiento, juegos con IA y aplicaciones en tiempo casi real."
        />

        <Reveal className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-full px-5 py-2 text-sm font-medium transition border ${
                filter === f
                  ? "bg-purple-600 border-purple-500 text-white"
                  : "border-white/10 text-gray-400 hover:text-white hover:border-white/30"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {visible.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={`${profile.github}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-xl border border-white/15 bg-white/5 px-8 py-3 font-semibold hover:bg-white/10 transition"
          >
            Ver los 28 repositorios en GitHub →
          </a>
        </Reveal>
      </div>
    </section>
  );
}

import Image from "next/image";
import Typewriter from "./Typewriter";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden"
    >
      <div className="aurora">
        <span />
        <span />
        <span />
      </div>
      <div className="grid-bg absolute inset-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="float relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-purple-500 via-cyan-400 to-pink-500 blur-md opacity-80" />
          <Image
            src="/Roy.jpg"
            alt="Foto de Roy Barrera"
            width={160}
            height={160}
            priority
            className="relative w-40 h-40 rounded-full object-cover border-4 border-black"
          />
        </div>

        <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Disponible para nuevas oportunidades
        </span>

        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight">
          Hola, soy <span className="text-gradient">{profile.name}</span>
        </h1>

        <p className="mt-5 h-9 font-mono text-xl md:text-2xl text-gray-300">
          <span className="text-purple-400">&gt; </span>
          <Typewriter words={profile.roles} />
        </p>

        <p className="mt-4 max-w-2xl text-gray-400 leading-relaxed">
          Desarrollador de software en {profile.location}. Construyo sistemas
          web de punta a punta: APIs, microservicios, bases de datos e
          interfaces modernas que resuelven problemas reales.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#proyectos"
            className="group px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 transition font-semibold shadow-lg shadow-purple-600/30"
          >
            Ver mis proyectos{" "}
            <span className="inline-block transition group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="/Curriculum.pdf"
            download
            className="px-8 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition font-semibold border border-white/15"
          >
            Descargar CV
          </a>
        </div>

        <div className="mt-8 flex gap-5 text-sm text-gray-400">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white transition">
            GitHub
          </a>
          <span aria-hidden="true">·</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition">
            LinkedIn
          </a>
          <span aria-hidden="true">·</span>
          <a href={`mailto:${profile.email}`} className="hover:text-white transition">
            Email
          </a>
        </div>
      </div>

      <a
        href="#sobre-mi"
        aria-label="Bajar a Sobre mí"
        className="absolute bottom-8 z-10 flex h-10 w-6 justify-center rounded-full border-2 border-white/30 pt-2"
      >
        <span className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
      </a>
    </section>
  );
}

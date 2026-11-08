import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import Counter from "./Counter";
import { stats } from "../data/portfolio";

const code = [
  ["const", " roy", ": Developer", " = {"],
  ["  location", ": ", '"Panamá"', ","],
  ["  roles", ": ", '["Full Stack", "Backend", "Cybersecurity"]', ","],
  ["  stack", ": ", '["React", "Vue", "Python", "Bun", "PostgreSQL", "Docker"]', ","],
  ["  learning", ": ", '["PCAP", "Cloud Fundamentals", "Ciberseguridad"]', ","],
  ["  openToWork", ": ", "true", ","],
  ["};"],
];

function tokenClass(tok, j) {
  if (j === 0 && tok === "const") return "text-purple-400";
  if (tok.startsWith('"') || tok.startsWith("[")) return "text-emerald-300";
  if (tok === "true") return "text-orange-300";
  if (j === 0) return "text-cyan-300";
  return "text-gray-300";
}

export default function About() {
  return (
    <section id="sobre-mi" className="relative py-28 px-6 bg-[#0b0a14]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="sobre mí" title="Código limpio, problemas reales" />

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal className="space-y-5 text-gray-300 text-lg leading-relaxed">
            <p>
              Soy desarrollador de software con experiencia en frontend y
              backend, en proyectos académicos y profesionales donde he
              diseñado, desarrollado e integrado aplicaciones web y sistemas
              internos.
            </p>
            <p>
              Me gusta entender bien el problema, planificar la solución y
              escribir código estructurado y mantenible. He trabajado con
              arquitecturas cliente-servidor, microservicios, bases de datos y
              APIs, cuidando tanto la lógica como la experiencia de usuario.
            </p>
            <p>
              Trabajo cómodo en equipo, con Scrum, control de versiones y
              revisiones de código. Aprendo rápido y asumo cada proyecto con
              compromiso. Actualmente estudio la Licenciatura en Desarrollo y
              Gestión de Software en la UTP y me preparo para la certificación
              PCAP de Python.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-2xl border border-white/10 bg-black/60 shadow-2xl shadow-purple-900/20 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-3 font-mono text-xs text-gray-400">roy.ts</span>
              </div>
              <pre className="p-5 font-mono text-[13px] sm:text-sm leading-7 overflow-x-auto">
                {code.map((line, i) => (
                  <div key={i}>
                    <span className="select-none mr-4 text-gray-600">{i + 1}</span>
                    {line.map((tok, j) => (
                      <span key={j} className={tokenClass(tok, j)}>
                        {tok}
                      </span>
                    ))}
                  </div>
                ))}
                <div className="text-gray-500">
                  <span className="select-none mr-4 text-gray-600">8</span>
                  {"// ¿Tienes una idea ambiciosa? → hablemos."}
                </div>
              </pre>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center hover:border-purple-500/60 transition">
                <div className="text-4xl md:text-5xl font-extrabold text-gradient">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm text-gray-400">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

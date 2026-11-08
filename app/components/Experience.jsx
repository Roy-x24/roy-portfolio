import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { experience, education } from "../data/portfolio";

const statusStyle = {
  Certificado: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
  "En curso": "bg-cyan-500/15 text-cyan-300 border-cyan-400/30",
  "En progreso": "bg-purple-500/15 text-purple-300 border-purple-400/30",
};

export default function Experience() {
  return (
    <section id="experiencia" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          eyebrow="experiencia"
          title="Dónde he trabajado"
          subtitle="Experiencia práctica en sistemas institucionales y proyectos con impacto social."
        />

        {/* Línea de tiempo */}
        <div className="relative border-l border-white/15 pl-8 space-y-10">
          {experience.map((job, i) => (
            <Reveal key={job.org} delay={i * 120}>
              <div className="relative">
                <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full border-2 border-purple-400 bg-black shadow-[0_0_14px_rgba(168,85,247,0.9)]" />
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-purple-500/60 transition">
                  <h3 className="text-xl font-bold">{job.org}</h3>
                  <p className="mt-1 text-sm font-mono text-cyan-300">{job.role}</p>
                  <p className="mt-4 text-gray-400 leading-relaxed">{job.summary}</p>
                  <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-gray-300">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-emerald-400">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-black/50 px-2.5 py-1 font-mono text-xs text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Educación */}
        <Reveal className="mt-20 mb-8 text-center">
          <h3 className="text-3xl font-bold">Formación y certificaciones</h3>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          {education.map((e, i) => (
            <Reveal key={e.title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-purple-500/60 transition">
                <span
                  className={`inline-block rounded-full border px-3 py-1 text-xs font-mono ${statusStyle[e.status]}`}
                >
                  {e.status}
                </span>
                <h4 className="mt-3 font-semibold leading-snug">{e.title}</h4>
                <p className="mt-1 text-sm text-gray-400">{e.org}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

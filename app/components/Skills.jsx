import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { skillGroups, softSkills } from "../data/portfolio";

const allTech = skillGroups.flatMap((g) => g.items);

export default function Skills() {
  return (
    <section id="habilidades" className="relative py-20 md:py-28 px-5 sm:px-6 overflow-hidden">
      <div className="aurora opacity-40">
        <span />
        <span />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="habilidades"
          title="Mi caja de herramientas"
          subtitle="Tecnologías con las que he construido, desplegado y mantenido software."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-7 hover:border-purple-500/60 transition">
                <h3 className="flex items-center gap-3 text-xl font-semibold">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-purple-500/15 text-purple-300 text-lg">
                    {group.icon}
                  </span>
                  {group.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-sm text-gray-300 transition hover:border-cyan-400/60 hover:text-cyan-300 hover:-translate-y-0.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8" delay={150}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <h3 className="text-center text-sm font-mono uppercase tracking-widest text-gray-400">
              Cómo trabajo
            </h3>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {softSkills.map((s) => (
                <span
                  key={s}
                  className="rounded-xl bg-gradient-to-r from-purple-600/20 to-cyan-500/20 border border-white/10 px-4 py-2 text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Cinta infinita de tecnologías */}
      <div
        className="relative z-10 mt-16 overflow-hidden"
        aria-hidden="true"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <div className="marquee">
          {[...allTech, ...allTech].map((t, i) => (
            <span
              key={i}
              className="mx-6 whitespace-nowrap font-mono text-2xl font-bold text-white/15"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

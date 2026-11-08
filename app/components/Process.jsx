import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { principles, learning } from "../data/portfolio";

export default function Process() {
  return (
    <section id="proceso" className="relative py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="cómo trabajo"
          title="Principios y aprendizaje continuo"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-purple-500/60 hover:-translate-y-1 transition">
                <div className="font-mono text-3xl text-gradient">{p.icon}</div>
                <h3 className="mt-4 font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16" delay={100}>
          <div className="rounded-2xl border border-white/10 bg-black/60 p-7 font-mono text-sm">
            <p className="text-gray-400">
              <span className="text-emerald-400">$</span> npm run learn --watch
            </p>
            <div className="mt-5 space-y-5">
              {learning.map((l) => (
                <div key={l.name}>
                  <div className="flex justify-between text-gray-300">
                    <span>
                      {l.name} <span className="text-gray-500">· {l.org}</span>
                    </span>
                    <span className="text-cyan-300">[ loading... ]</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="loading-bar h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

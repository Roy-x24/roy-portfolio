"use client";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { profile } from "../data/portfolio";

const COLORS = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3776ab",
  PHP: "#777bb4",
  HTML: "#e34c26",
  CSS: "#a855f7",
  Java: "#f89820",
  "C#": "#68217a",
};

function ago(iso) {
  const days = Math.floor((Date.now() - new Date(iso)) / 86400000);
  if (days < 1) return "hoy";
  if (days === 1) return "ayer";
  if (days < 30) return `hace ${days} días`;
  const m = Math.floor(days / 30);
  return m < 12 ? `hace ${m} ${m === 1 ? "mes" : "meses"}` : `hace ${Math.floor(m / 12)} año(s)`;
}

// Datos reales y actualizados desde la API pública de GitHub
export default function GithubLive() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [u, r] = await Promise.all([
          fetch("https://api.github.com/users/Roy-x24").then((x) => x.json()),
          fetch("https://api.github.com/users/Roy-x24/repos?per_page=100&sort=pushed").then((x) => x.json()),
        ]);
        if (cancelled || !Array.isArray(r) || !u.public_repos) return;
        const own = r.filter((x) => !x.fork);
        const langs = {};
        own.forEach((x) => x.language && (langs[x.language] = (langs[x.language] || 0) + 1));
        const total = Object.values(langs).reduce((a, b) => a + b, 0);
        setData({
          last: own[0]?.pushed_at,
          langs: Object.entries(langs)
            .sort((a, b) => b[1] - a[1])
            .map(([name, n]) => ({ name, pct: (n / total) * 100 })),
          recent: own.slice(0, 5),
        });
      } catch {
        /* sin conexión o límite de la API: la sección simplemente no se muestra */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!data) return null;

  return (
    <section id="github" className="relative py-20 md:py-28 px-5 sm:px-6 bg-[#0b0a14]">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          eyebrow="github en vivo"
          title="Actividad real, ahora mismo"
          subtitle="Estos datos se leen en directo de la API pública de GitHub cada vez que entras."
        />

        <div className="grid md:grid-cols-5 gap-6">
          <Reveal className="md:col-span-2">
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-4xl font-extrabold text-gradient">{data.langs.length}</div>
                  <p className="text-sm text-gray-400">lenguajes</p>
                </div>
                <div>
                  <div className="text-2xl pt-2 font-extrabold text-gradient">{data.last ? ago(data.last) : "—"}</div>
                  <p className="text-sm text-gray-400">último commit</p>
                </div>
              </div>

              <h3 className="mt-8 mb-3 font-mono text-xs uppercase tracking-widest text-gray-400">
                Lenguajes que uso
              </h3>
              <div className="flex h-3 overflow-hidden rounded-full bg-white/10">
                {data.langs.map((l) => (
                  <div
                    key={l.name}
                    title={`${l.name} ${l.pct.toFixed(0)}%`}
                    style={{ width: `${l.pct}%`, background: COLORS[l.name] || "#64748b" }}
                  />
                ))}
              </div>
              <ul className="mt-4 grid grid-cols-2 gap-y-1 text-sm text-gray-300">
                {data.langs.slice(0, 6).map((l) => (
                  <li key={l.name} className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS[l.name] || "#64748b" }} />
                    {l.name} <span className="text-gray-500">{l.pct.toFixed(0)}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="md:col-span-3" delay={120}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-gray-400">
                Último código subido
              </h3>
              <ul className="divide-y divide-white/10">
                {data.recent.map((r) => (
                  <li key={r.id}>
                    <a
                      href={r.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between gap-4 py-3 transition hover:text-purple-300"
                    >
                      <span className="font-semibold">{r.name}</span>
                      <span className="flex items-center gap-3 text-sm text-gray-400">
                        {r.language && (
                          <span className="hidden sm:inline rounded-md border border-white/10 px-2 py-0.5 font-mono text-xs">
                            {r.language}
                          </span>
                        )}
                        {ago(r.pushed_at)}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-purple-300 hover:text-white transition"
              >
                Ver perfil completo →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

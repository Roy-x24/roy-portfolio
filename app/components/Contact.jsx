import Reveal from "./Reveal";
import { profile } from "../data/portfolio";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    style: "bg-purple-600 hover:bg-purple-500",
  },
  {
    label: "LinkedIn",
    value: "roy-barrera",
    href: profile.linkedin,
    style: "bg-sky-600 hover:bg-sky-500",
  },
  {
    label: "WhatsApp",
    value: "+507 6763-0242",
    href: profile.whatsapp,
    style: "bg-emerald-600 hover:bg-emerald-500",
  },
  {
    label: "GitHub",
    value: "Roy-x24",
    href: profile.github,
    style: "bg-gray-700 hover:bg-gray-600",
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="relative py-32 px-6 overflow-hidden bg-[#0b0a14]">
      <div className="aurora opacity-60">
        <span />
        <span />
        <span />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="font-mono text-sm tracking-widest uppercase text-cyan-400">
            {"// contacto"}
          </p>
          <h2 className="mt-3 text-4xl md:text-6xl font-extrabold">
            ¿Construimos algo <span className="text-gradient">juntos</span>?
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            Estoy abierto a oportunidades, prácticas y proyectos. Si tienes una
            idea, escríbeme y la hacemos realidad.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {links.map((l, i) => (
            <Reveal key={l.label} delay={i * 90}>
              <a
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className={`block rounded-2xl px-6 py-5 text-left transition hover:-translate-y-1 shadow-lg ${l.style}`}
              >
                <span className="block text-xs font-mono uppercase tracking-widest text-white/70">
                  {l.label}
                </span>
                <span className="mt-1 block font-semibold break-all">{l.value}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

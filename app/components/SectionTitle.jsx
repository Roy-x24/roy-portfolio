import Reveal from "./Reveal";

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mb-14 text-center">
      <p className="font-mono text-sm tracking-widest uppercase text-cyan-400">
        {"// "}
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h2>
      {subtitle && (
        <p className="mt-4 mx-auto max-w-2xl text-gray-400">{subtitle}</p>
      )}
    </Reveal>
  );
}

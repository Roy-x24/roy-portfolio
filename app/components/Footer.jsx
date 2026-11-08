import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-8 text-center text-sm text-gray-500">
      <p>
        © {new Date().getFullYear()} {profile.name} · Diseñado y construido con
        Next.js y Tailwind CSS · {profile.location}
      </p>
    </footer>
  );
}

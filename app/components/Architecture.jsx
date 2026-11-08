import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const services = [
  "Identidad",
  "Catálogo",
  "Disponibilidad",
  "Reservas",
  "Pagos",
  "Notificaciones",
  "Reportes",
];
const rowY = (i) => 45 + i * 55;

// Diagrama animado de la arquitectura de "Plataforma de Reservas Turísticas"
export default function Architecture() {
  return (
    <section id="arquitectura" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          eyebrow="bajo el capó"
          title="Así funciona rumbo."
          subtitle="Arquitectura de la Plataforma de Reservas Turísticas: un único punto de entrada, siete microservicios, una base de datos por servicio y eventos asíncronos."
        />

        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-black/50 p-4 md:p-8 overflow-x-auto">
            <svg
              viewBox="0 0 820 420"
              className="mx-auto w-full min-w-[640px]"
              role="img"
              aria-label="Diagrama: cliente React, API Gateway, siete microservicios, RabbitMQ y PostgreSQL por servicio"
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0" stopColor="#a855f7" />
                  <stop offset="1" stopColor="#22d3ee" />
                </linearGradient>
              </defs>

              {/* Cliente → Gateway */}
              <line x1="120" y1="210" x2="190" y2="210" stroke="url(#g1)" strokeWidth="2" className="flow" />
              {services.map((s, i) => (
                <g key={s}>
                  {/* Gateway → servicio */}
                  <path
                    d={`M 290 210 C 340 210, 340 ${rowY(i)}, 390 ${rowY(i)}`}
                    fill="none"
                    stroke="url(#g1)"
                    strokeWidth="1.5"
                    className="flow"
                  />
                  {/* servicio → bus */}
                  <line x1="490" y1={rowY(i)} x2="590" y2={rowY(i)} stroke="#f472b6" strokeOpacity="0.55" strokeWidth="1.2" strokeDasharray="3 4" />
                  {/* servicio → BD */}
                  <line x1="640" y1={rowY(i)} x2="700" y2={rowY(i)} stroke="#34d399" strokeOpacity="0.6" strokeWidth="1.2" />

                  <rect x="390" y={rowY(i) - 18} width="100" height="36" rx="8" fill="#14112a" stroke="#a855f7" strokeOpacity="0.6" />
                  <text x="440" y={rowY(i) + 4} textAnchor="middle" fill="#e5e7eb" fontSize="12" fontFamily="monospace">
                    {s}
                  </text>

                  {/* BD */}
                  <ellipse cx="722" cy={rowY(i) - 8} rx="20" ry="6" fill="#0b2a22" stroke="#34d399" strokeOpacity="0.8" />
                  <path d={`M 702 ${rowY(i) - 8} v 16 a 20 6 0 0 0 40 0 v -16`} fill="#0b2a22" stroke="#34d399" strokeOpacity="0.8" />
                  <ellipse cx="722" cy={rowY(i) - 8} rx="20" ry="6" fill="#123a2e" stroke="#34d399" strokeOpacity="0.8" />
                </g>
              ))}

              {/* Cliente */}
              <rect x="20" y="185" width="100" height="50" rx="10" fill="#14112a" stroke="#22d3ee" strokeOpacity="0.7" />
              <text x="70" y="207" textAnchor="middle" fill="#e5e7eb" fontSize="13" fontFamily="monospace">Cliente</text>
              <text x="70" y="223" textAnchor="middle" fill="#67e8f9" fontSize="11" fontFamily="monospace">React</text>

              {/* Gateway */}
              <rect x="190" y="180" width="100" height="60" rx="12" fill="#1b1238" stroke="url(#g1)" strokeWidth="2" />
              <text x="240" y="207" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="monospace">API</text>
              <text x="240" y="224" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="monospace">Gateway</text>

              {/* RabbitMQ */}
              <rect x="590" y="15" width="50" height="385" rx="12" fill="#2a1020" stroke="#f472b6" strokeOpacity="0.8" />
              <text x="615" y="215" textAnchor="middle" fill="#f9a8d4" fontSize="13" fontFamily="monospace" transform="rotate(-90 615 215)">
                RabbitMQ · eventos
              </text>

              <text x="722" y="412" textAnchor="middle" fill="#6ee7b7" fontSize="11" fontFamily="monospace">PostgreSQL × servicio</text>
            </svg>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-400">
            <span><span className="text-purple-400">━</span> Peticiones HTTP vía Gateway</span>
            <span><span className="text-pink-400">┅</span> Eventos asíncronos</span>
            <span><span className="text-emerald-400">━</span> Base de datos propia</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

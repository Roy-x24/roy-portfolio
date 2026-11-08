export const profile = {
  name: "Roy Barrera",
  location: "Panamá",
  email: "roybarrera508@gmail.com",
  whatsapp: "https://wa.me/50767630242",
  github: "https://github.com/Roy-x24",
  linkedin: "https://www.linkedin.com/in/roy-barrera-0077b1340/",
  roles: [
    "Full Stack Developer",
    "Backend con FastAPI y Bun",
    "Interfaces con React y Next.js",
    "Arquitecturas con Docker",
  ],
};

export const stats = [
  { value: 28, suffix: "", label: "Repositorios públicos" },
  { value: 7, suffix: "", label: "Microservicios en reservas" },
  { value: 2, suffix: "", label: "Experiencias profesionales" },
  { value: 29, suffix: "+", label: "Tecnologías en mi stack" },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: "◧",
    items: ["React", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "JavaScript", "TypeScript", "HTML / CSS"],
  },
  {
    title: "Backend",
    icon: "⌘",
    items: ["Python", "FastAPI", "Flask", "Node.js", "Bun", "Hono", "PHP", "Java", "Spring"],
  },
  {
    title: "Datos",
    icon: "⛁",
    items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "SQLite", "Modelado de datos"],
  },
  {
    title: "DevOps y calidad",
    icon: "⚙",
    items: ["Docker", "Docker Compose", "RabbitMQ", "Playwright", "SonarQube", "Git", "GitHub", "GitLab"],
  },
];

export const softSkills = [
  "Trabajo en equipo",
  "Scrum / Agile",
  "Documentación técnica",
  "Resolución de problemas",
  "Clean Code",
  "Seguridad primero",
];

// Proyectos seleccionados de https://github.com/Roy-x24
export const projects = [
  {
    slug: "plataforma-reservas-turisticas",
    title: "Plataforma de Reservas Turísticas",
    tagline: "rumbo. — microservicios para turismo en Panamá",
    description:
      "Prototipo para gestionar reservas de actividades turísticas: API Gateway como único punto de entrada, 7 servicios (identidad, catálogo, disponibilidad, reservas, pagos, notificaciones y reportes), PostgreSQL por servicio y eventos con RabbitMQ. Roles de cliente y administrador, login con Google, reseñas moderadas y comprobantes descargables.",
    stack: ["React", "TypeScript", "PostgreSQL", "RabbitMQ", "Docker"],
    category: "Full Stack",
    featured: true,
    highlights: ["7 microservicios", "Eventos con RabbitMQ", "Login con Google"],
    repo: "https://github.com/Roy-x24/plataforma-reservas-turisticas",
  },
  {
    slug: "sistema-ddc-inmobiliario",
    title: "DDC/KYC Inmobiliario",
    tagline: "Debida diligencia de clientes con IA/OCR asistida",
    description:
      "Sistema web para promotoras inmobiliarias de Panamá: registro de clientes, revisión documental, beneficiarios finales, matriz de riesgo versionada y auditoría completa. La IA asiste, pero las decisiones de cumplimiento siguen en reglas deterministas y usuarios autorizados.",
    stack: ["React", "FastAPI", "PostgreSQL", "JWT", "Playwright"],
    category: "Full Stack",
    featured: true,
    highlights: ["Roles y auditoría", "OCR + IA configurable", "Pruebas E2E"],
    repo: "https://github.com/Roy-x24/sistema-ddc-inmobiliario",
  },
  {
    slug: "ddc-kyc-sistema",
    title: "Sistema DDC/KYC",
    tagline: "Cumplimiento bajo la Ley 23 de 2015",
    description:
      "Módulo de Debida Diligencia de Clientes para entidades obligadas en Panamá, con flujo de ramas feature → qa → master, autenticación JWT con bcrypt y stack completo orquestado con Docker Compose.",
    stack: ["React", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker"],
    category: "Backend",
    highlights: ["Flujo de ramas con QA", "JWT + bcrypt"],
    repo: "https://github.com/Roy-x24/ddc-kyc-sistema",
  },
  {
    slug: "PokePelea",
    title: "Pokémon Battle Rooms",
    tagline: "Batallas 1 vs 1 por salas con código",
    description:
      "Aplicación web de batallas por turnos: un jugador crea la sala, otro se une con un código y ambos arman equipos de hasta 6 Pokémon con datos de PokéAPI. Autenticación con Clerk y pagos con Stripe en modo prueba.",
    stack: ["React", "Bun", "Hono", "MongoDB", "Clerk", "Stripe"],
    category: "Full Stack",
    highlights: ["Salas multijugador", "Clerk + Stripe"],
    repo: "https://github.com/Roy-x24/PokePelea",
  },
  {
    slug: "checkers",
    title: "Damas AI",
    tagline: "Damas inglesas contra una IA con búsqueda A*",
    description:
      "Juego de damas 8×8 con motor de reglas completo (capturas múltiples, coronación, empate por repetición) y una IA basada en heurísticas de búsqueda A* con tres niveles de dificultad.",
    stack: ["React", "TypeScript", "Bun", "Docker"],
    category: "Frontend",
    highlights: ["IA con A*", "3 niveles de dificultad"],
    repo: "https://github.com/Roy-x24/checkers",
  },
  {
    slug: "pollclass",
    title: "PollClass",
    tagline: "Encuestas en vivo para clases, sin WebSockets",
    description:
      "Sistema de encuestas en tiempo casi real usando polling HTTP sobre una API REST en Bun + Hono, resultados con gráficos de Recharts y pruebas E2E.",
    stack: ["React", "Tailwind", "Bun", "Hono", "MongoDB"],
    category: "Full Stack",
    highlights: ["Polling HTTP", "Gráficos en vivo"],
    repo: "https://github.com/Roy-x24/pollclass",
  },
];

export const experience = [
  {
    org: "DITIC — Universidad Tecnológica de Panamá",
    role: "Desarrollador Web · Práctica profesional",
    summary:
      "Migración de sistemas legacy a una arquitectura moderna con Flask y Vue.js, con validación end-to-end y documentación técnica.",
    bullets: [
      "Arquitectura MVC y API REST",
      "Componentes Vue.js modulares",
      "Ciclo completo de despliegue",
      "Documentación y control de versiones",
    ],
    tags: ["Flask", "Vue.js", "Python", "Docker", "PHP OOP"],
  },
  {
    org: "Fundación Ayudinga",
    role: "Desarrollador Frontend · Voluntariado",
    summary:
      "Interfaces modernas con React y Tailwind CSS bajo metodología Scrum, enfocadas en mantenibilidad y calidad.",
    bullets: [
      "Metodología Scrum / Agile",
      "UI/UX responsivo y accesible",
      "Clean Code y code reviews",
      "Trabajo colaborativo remoto",
    ],
    tags: ["React", "Tailwind CSS", "Git"],
  },
];

export const education = [
  {
    title: "Lic. en Desarrollo y Gestión de Software",
    org: "Universidad Tecnológica de Panamá",
    status: "En progreso",
  },
  {
    title: "Responsive Web Design",
    org: "freeCodeCamp",
    status: "Certificado",
  },
  {
    title: "PCAP – Certified Associate in Python Programming",
    org: "Python Institute",
    status: "En curso",
  },
  {
    title: "Cloud Fundamentals",
    org: "AWS / Microsoft Learn",
    status: "En curso",
  },
];

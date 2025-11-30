import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* INICIO / HERO */}
      <section
        id="inicio"
        className="pt-24 min-h-screen bg-black flex flex-col items-center justify-center text-center px-6 text-white"
      >
        <h1 className="text-5xl font-bold">
          Hola, soy <span className="text-purple-500">Roy Barrera</span>
        </h1>

        <p className="mt-4 text-gray-300 max-w-2xl">
          Software Developer | Frontend & Backend | Modern Web Solutions | Data
          Management
        </p>

        <a
          href="#proyectos"
          className="mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-lg font-semibold"
        >
          Ver mis proyectos
        </a>

        {/* Botón Descargar CV */}
        <a
          href="/Curriculum.pdf"
          download
          className="mt-4 px-8 py-3 bg-gray-800 hover:bg-gray-900 transition rounded-lg font-semibold border border-white/10"
        >
          Descargar CV
        </a>
      </section>

      {/* SOBRE MÍ */}
<section
  id="sobre-mi"
  className="relative min-h-screen bg-gray-900 flex flex-col items-center justify-center px-6 py-20 text-white"
>
  {/* Fondo decorativo */}
  <div className="absolute inset-0 flex justify-center items-center overflow-hidden pointer-events-none">
    <div className="w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-[180px]"></div>
  </div>

  <h2 className="text-4xl font-bold mb-10 z-10">Sobre mí</h2>

  <div className="z-10 max-w-3xl bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-10 shadow-lg hover:border-purple-500 transition">

    <p className="text-gray-300 text-lg leading-relaxed">
      Soy un desarrollador de software en formación con experiencia en proyectos
      colaborativos universitarios, donde he trabajado en aplicaciones web,
      sistemas internos y soluciones prácticas que me han permitido conocer
      distintas áreas del desarrollo.
    </p>

    <div className="h-4"></div>

    <p className="text-gray-300 text-lg leading-relaxed">
      Me gusta analizar bien los problemas antes de escribir código,
      estructurar las ideas de forma clara y construir soluciones limpias,
      mantenibles y que realmente aporten valor.  
    </p>

    <div className="h-4"></div>

    <p className="text-gray-300 text-lg leading-relaxed">
      Disfruto trabajar en equipo, compartir ideas y aprender constantemente.
      Mi objetivo es seguir creciendo profesionalmente y aportar de manera
      responsable en cada proyecto en el que participe.
    </p>
  </div>
</section>


      {/* HABILIDADES */}
      <section
        id="habilidades"
        className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-6 py-20 relative"
      >
        {/* FIGURA DE FONDO */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[180px]"></div>
        </div>

        <h2 className="text-4xl font-bold mb-12 z-10">Habilidades</h2>

        <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl z-10">

          {/* Desarrollo Web */}
          <div className="p-6 bg-gray-900/60 backdrop-blur-md rounded-xl border border-white/10 hover:border-purple-500 transition shadow-lg">
            <h3 className="text-xl font-semibold text-purple-400 mb-4 text-center">
              Desarrollo Web
            </h3>
            <ul className="space-y-2 text-gray-300 text-center">
              <li>Next.js</li>
              <li>React</li>
              <li>TailwindCSS</li>
              <li>HTML / CSS</li>
              <li>Node.js</li>
              <li>PHP</li>
            </ul>
          </div>

          {/* Bases de Datos */}
          <div className="p-6 bg-gray-900/60 backdrop-blur-md rounded-xl border border-white/10 hover:border-purple-500 transition shadow-lg">
            <h3 className="text-xl font-semibold text-purple-400 mb-4 text-center">
              Bases de Datos
            </h3>
            <ul className="space-y-2 text-gray-300 text-center">
              <li>SQL Server</li>
              <li>MySQL</li>
              <li>Modelado de Datos</li>
            </ul>
          </div>

          {/* Control de Versiones */}
          <div className="p-6 bg-gray-900/60 backdrop-blur-md rounded-xl border border-white/10 hover:border-purple-500 transition shadow-lg">
            <h3 className="text-xl font-semibold text-purple-400 mb-4 text-center">
              Control de Versiones
            </h3>
            <ul className="space-y-2 text-gray-300 text-center">
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </div>

          {/* Sistemas y Herramientas */}
          <div className="p-6 bg-gray-900/60 backdrop-blur-md rounded-xl border border-white/10 hover:border-purple-500 transition shadow-lg">
            <h3 className="text-xl font-semibold text-purple-400 mb-4 text-center">
              Sistemas y Herramientas
            </h3>
            <ul className="space-y-2 text-gray-300 text-center">
              <li>Linux</li>
              <li>Docker</li>
              <li>Virtualización (VirtualBox)</li>
            </ul>
          </div>

          {/* IoT y Electrónica */}
          <div className="p-6 bg-gray-900/60 backdrop-blur-md rounded-xl border border-white/10 hover:border-purple-500 transition shadow-lg">
            <h3 className="text-xl font-semibold text-purple-400 mb-4 text-center">
              IoT y Electrónica
            </h3>
            <ul className="space-y-2 text-gray-300 text-center">
              <li>ESP32</li>
              <li>MQTT</li>
              <li>Sensores y Microcontroladores</li>
            </ul>
          </div>

          {/* Competencias Profesionales */}
          <div className="p-6 bg-gray-900/60 backdrop-blur-md rounded-xl border border-white/10 hover:border-purple-500 transition shadow-lg">
            <h3 className="text-xl font-semibold text-purple-400 mb-4 text-center">
              Competencias Profesionales
            </h3>
            <ul className="space-y-2 text-gray-300 text-center">
              <li>Trabajo en Equipo</li>
              <li>Documentación Técnica</li>
              <li>Organización y Responsabilidad</li>
              <li>Resolución de Problemas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section
        id="proyectos"
        className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white px-6"
      >
        <h2 className="text-4xl font-bold mb-10">Proyectos</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {/* Tarjeta 1 */}
          <div className="bg-black p-6 rounded-xl border border-white/10 hover:border-purple-500 transition">
            <h3 className="text-2xl font-semibold">Proyecto Canaleta IoT</h3>
            <p className="text-gray-400 mt-2">
              Sistema de monitoreo con ESP32, sensores y notificaciones.
            </p>
            <a
              href="https://github.com/Roy-x24"
              className="text-purple-400 mt-4 inline-block"
              target="_blank"
            >
              Ver en GitHub →
            </a>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-black p-6 rounded-xl border border-white/10 hover:border-purple-500 transition">
            <h3 className="text-2xl font-semibold">Benchmark SO Docker</h3>
            <p className="text-gray-400 mt-2">
              Sistema de pruebas con FastAPI, contenedores y logs.
            </p>
            <a
              href="https://github.com/Roy-x24"
              className="text-purple-400 mt-4 inline-block"
              target="_blank"
            >
              Ver en GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section
        id="experiencia"
        className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-6"
      >
        <h2 className="text-4xl font-bold mb-6">Experiencia</h2>
        <p className="max-w-3xl text-gray-300 text-lg">
          He trabajado en proyectos universitarios, voluntariados (Ayudinga),
          sistemas en PHP orientado a objetos, aplicaciones Next.js, sensores
          IoT y entornos Docker sobre Linux.
        </p>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white px-6"
      >
        <h2 className="text-4xl font-bold mb-6">Contacto</h2>

        <p className="text-gray-300 mb-6">
          ¿Quieres trabajar conmigo o conocer más?
        </p>

        <div className="flex space-x-4">
          <a
            href="mailto:tu-correo@correo.com"
            className="px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
          >
            Email
          </a>

          <a
            href="https://wa.me/50760000000"
            target="_blank"
            className="px-6 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition"
          >
            WhatsApp
          </a>

          <a
            href="https://github.com/Roy-x24"
            target="_blank"
            className="px-6 py-2 bg-gray-700 rounded-lg hover:bg-gray-800 transition"
          >
            GitHub
          </a>
        </div>
      </section>
    </>
  );
}

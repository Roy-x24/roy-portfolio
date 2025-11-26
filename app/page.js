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
          Desarrollador de Software | Linux | Docker | IoT ESP32 | PHP | Next.js |
          Virtualización | Bases de Datos
        </p>

        <a
          href="#proyectos"
          className="mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-lg font-semibold"
        >
          Ver mis proyectos
        </a>
      </section>

      {/* SOBRE MÍ */}
      <section
        id="sobre-mi"
        className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-center text-white px-6"
      >
        <h2 className="text-4xl font-bold mb-6">Sobre mí</h2>
        <p className="max-w-3xl text-gray-300 text-lg">
          Soy un desarrollador de software apasionado por crear soluciones
          modernas usando tecnologías como Next.js, Docker, Linux, ESP32, PHP,
          SQL Server y más. Me encanta trabajar en proyectos prácticos,
          resolver problemas reales y aprender cosas nuevas todos los días.
        </p>
      </section>

      {/* HABILIDADES */}
      <section
        id="habilidades"
        className="min-h-screen bg-black flex flex-col items-center justify-center text-center text-white px-6"
      >
        <h2 className="text-4xl font-bold mb-10">Habilidades</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xl text-gray-300">
          <span>Next.js</span>
          <span>React</span>
          <span>TailwindCSS</span>
          <span>Node.js</span>
          <span>PHP</span>
          <span>SQL Server</span>
          <span>Docker</span>
          <span>Linux</span>
          <span>ESP32</span>
          <span>MQTT</span>
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
          sistemas en PHP orientado a objetos, aplicaciones Next.js, sensores IoT
          y entornos Docker sobre Linux.
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
            className="px-6 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition"
            target="_blank"
          >
            WhatsApp
          </a>

          <a
            href="https://github.com/Roy-x24"
            className="px-6 py-2 bg-gray-700 rounded-lg hover:bg-gray-800 transition"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </section>
    </>
  );
}

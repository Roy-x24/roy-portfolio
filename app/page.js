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
          Software Developer | Frontend & Backend | Modern Web Solutions | Data Management

        </p>

        <a
          href="#proyectos"
          className="mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-lg font-semibold"
        >
          Ver mis proyectos
        </a>
        {/* BOTON PARA DESCARGAR CV */}
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
        className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-center text-white px-6"
      >
        <h2 className="text-4xl font-bold mb-6">Sobre mí</h2>
        <p className="max-w-3xl text-gray-300 text-lg">
          Soy un desarrollador de software en formación que ha participado en distintos proyectos colaborativos durante la universidad. 
A lo largo de este tiempo he trabajado en aplicaciones web, pequeños sistemas internos y proyectos prácticos que me han permitido 
conocer diferentes áreas del desarrollo. Me gusta organizarme, entender bien los problemas antes de escribir código y asegurarme 
de que lo que hago sea útil y fácil de mantener.
<br />
<br />
Disfruto trabajar en equipo, compartir ideas y aprender de otras personas. Siempre busco mejorar mis habilidades y aplicar lo que 
aprendo en proyectos reales. Mi objetivo es seguir creciendo profesionalmente y aportar de manera responsable en cada proyecto en 
el que participe.
        </p>
      </section>

      {/* HABILIDADES */}
      <section
        id="habilidades"
        className="min-h-screen bg-black flex flex-col items-center justify-center text-center text-white px-6"
      >
        <h2 className="text-4xl font-bold mb-10">Habilidades</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-lg text-gray-300">

  {/* Desarrollo Web */}
  <span className="font-semibold text-purple-400 col-span-2 md:col-span-3 mt-4">Desarrollo Web</span>
  <span>Next.js</span>
  <span>React</span>
  <span>TailwindCSS</span>
  <span>HTML / CSS</span>
  <span>Node.js</span>
  <span>PHP</span>

  {/* Bases de Datos */}
  <span className="font-semibold text-purple-400 col-span-2 md:col-span-3 mt-4">Bases de Datos</span>
  <span>SQL Server</span>
  <span>MySQL</span>
  <span>Modelado de Datos</span>

  {/* Control de Versiones */}
  <span className="font-semibold text-purple-400 col-span-2 md:col-span-3 mt-4">Control de Versiones</span>
  <span>Git</span>
  <span>GitHub</span>

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

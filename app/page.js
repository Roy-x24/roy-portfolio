export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">
      <h1 className="text-5xl font-bold">
        Hola, soy <span className="text-purple-500">Roy Barrera</span>
      </h1>

      <p className="mt-4 text-gray-300 max-w-2xl">
        Desarrollador de Software | Linux | Docker | IoT ESP32 | PHP | Next.js
        | Virtualización | Bases de Datos
      </p>

      <a
        href="#projects"
        className="mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-lg font-semibold"
      >
        Ver mis proyectos
      </a>
    </main>
  );
}

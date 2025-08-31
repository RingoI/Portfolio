"use client";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-bold text-xl">Milton Ibarzabal</a>
        <div className="space-x-4 text-sm">
          <a className="hover:text-blue-600" href="#sobre-mi">Sobre mí</a>
          <a className="hover:text-blue-600" href="#proyectos">Proyectos</a>
          <a className="hover:text-blue-600" href="#contacto">Contacto</a>
        </div>
      </div>
    </nav>
  );
}

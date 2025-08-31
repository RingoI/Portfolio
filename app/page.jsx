"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { profile } from "../data/profile";
import "./globals.css";

export default function Page() {
  const year = new Date().getFullYear();

  return (
    <div className="font-sans text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold"
          >
            ¡Hola! Soy {profile.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-lg md:text-2xl"
          >
            {profile.role}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-3 opacity-90 max-w-2xl mx-auto"
          >
            {profile.summary}
          </motion.p>
          <div className="mt-8 flex justify-center gap-3">
            <a
              href="#proyectos"
              className="px-5 py-2 rounded-xl bg-white text-gray-900 font-medium"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="px-5 py-2 rounded-xl border border-white/80 font-medium"
            >
              Contacto
            </a>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
        <p className="text-gray-700 leading-relaxed">
          Soy estudiante de <strong>Licenciatura en Sistemas (UNNOBA)</strong>.
          Me interesa el desarrollo de software, bases de datos y la resolución
          de problemas algorítmicos. Actualmente practico con Java, Go y SQL,
          además de trabajar proyectos académicos con enfoque práctico.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {profile.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-white border">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {profile.projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <p className="mb-4">📧 {profile.email}</p>
        <div className="flex gap-3">
          <a className="px-4 py-2 rounded-xl border" target="_blank" rel="noreferrer" href={profile.github}>
            GitHub
          </a>
          <a className="px-4 py-2 rounded-xl border" target="_blank" rel="noreferrer" href={profile.linkedin}>
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-center text-gray-600">
          © {year} {profile.name} — Portfolio
        </div>
      </footer>
    </div>
  );
}

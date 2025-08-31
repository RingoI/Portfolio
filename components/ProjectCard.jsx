export default function ProjectCard({ title, description, tech = [], link }) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm p-5 hover:shadow transition">
      <h4 className="font-semibold text-lg mb-1">{title}</h4>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      {tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full border">
              {t}
            </span>
          ))}
        </div>
      )}
      {link && (
        <a className="text-sm underline" target="_blank" rel="noreferrer" href={link}>
          Ver más
        </a>
      )}
    </div>
  );
}

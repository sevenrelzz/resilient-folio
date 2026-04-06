export default function Experience({ experience }) {
  return (
    <section className="py-20 border-t border-slate-800">
      <h2 className="text-3xl font-bold text-slate-100 mb-8">Beyond the Classroom</h2>
      <div className="space-y-6">
        {experience.map((exp) => (
          <div key={exp.id} className="relative pl-8 border-l border-emerald-500/30 before:content-[''] before:absolute before:w-3 before:h-3 before:bg-emerald-500 before:rounded-full before:left-[-6.5px] before:top-2">
            <span className="text-sm text-emerald-400 font-mono block mb-1">{exp.year}</span>
            <h3 className="text-xl font-bold text-slate-200">{exp.role}</h3>
            <h4 className="text-slate-400 font-medium mb-3">{exp.organization}</h4>
            <p className="text-slate-400 max-w-2xl">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
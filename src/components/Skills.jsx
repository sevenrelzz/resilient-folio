import { Code2, Server, Database, Terminal } from 'lucide-react';

export default function Skills({ skills }) {
  return (
    <section className="py-20 border-t border-slate-800">
      <div className="flex items-center gap-3 mb-12">
        <Code2 className="text-emerald-500" />
        <h2 className="text-3xl font-bold text-slate-100">Tech Stack & Tools</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        
        <div className="bg-slate-800/30 border border-slate-700 p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-4 text-slate-200">
            <Server size={20} className="text-emerald-400" />
            <h3 className="font-bold text-lg">Backend Core</h3>
          </div>
          <ul className="space-y-2 text-slate-400">
            {skills.backend.map(skill => (
              <li key={skill} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-800/30 border border-slate-700 p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-4 text-slate-200">
            <Database size={20} className="text-blue-400" />
            <h3 className="font-bold text-lg">Database</h3>
          </div>
          <ul className="space-y-2 text-slate-400">
            {skills.database.map(skill => (
              <li key={skill} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-800/30 border border-slate-700 p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-4 text-slate-200">
            <Terminal size={20} className="text-purple-400" />
            <h3 className="font-bold text-lg">Tools & DevOps</h3>
          </div>
          <ul className="space-y-2 text-slate-400">
            {skills.tools.map(skill => (
              <li key={skill} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> {skill}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
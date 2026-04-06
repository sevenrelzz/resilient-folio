import { Server, ExternalLink } from 'lucide-react';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-20 border-t border-slate-800">
      <div className="flex items-center gap-3 mb-12">
        <Server className="text-emerald-500" />
        <h2 className="text-3xl font-bold text-slate-100">System & Solution</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <div key={proj.id} className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:-translate-y-1 hover:border-emerald-500/50 transition-all duration-300 flex flex-col group">
            <h3 className="text-xl font-bold text-slate-200 mb-4 group-hover:text-emerald-400 transition-colors">{proj.title}</h3>
            
            <div className="space-y-4 flex-grow text-sm">
              <div>
                <span className="text-rose-400 font-semibold mb-1 block">🔴 Problem:</span>
                <p className="text-slate-400">{proj.problem}</p>
              </div>
              <div>
                <span className="text-emerald-400 font-semibold mb-1 block">🟢 Solution:</span>
                <p className="text-slate-400">{proj.solution}</p>
              </div>
              <div>
                <span className="text-blue-400 font-semibold mb-1 block">⚡ Impact:</span>
                <p className="text-slate-400">{proj.impact}</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-700/50">
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.techStack.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-slate-900 text-slate-300 text-xs rounded border border-slate-600 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-sm text-emerald-500 hover:text-emerald-400 font-medium">
                Repository <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
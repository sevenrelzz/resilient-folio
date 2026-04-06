import { Terminal, ChevronRight } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

export default function Hero({ data }) {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center pt-20">
      {/* Badge Terminal */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-mono mb-6 w-max border border-emerald-500/20">
        <Terminal size={14} />
        <span>System.out.println("Hey there!");</span>
      </div>

      {/* Main Headline - Sudah dibenerin spasi & Full English */}
      <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6 leading-tight">
        It’s more than <span className="text-emerald-400">syntax.</span>
        <br className="hidden md:block" />{" "} {/* Spasi aman untuk mobile */}
        It’s about <span className="text-emerald-400">growing alongside the systems I build.</span>
      </h1>

      {/* Sub-headline */}
      <p className="text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed">
        {data.subHeadline}
      </p>

      {/* Action Buttons - Sudah Full English */}
      <div className="flex flex-wrap gap-4 font-mono text-sm">
        <a 
          href="#projects" 
          className="px-6 py-3 bg-emerald-500 text-slate-900 font-bold rounded hover:bg-emerald-400 transition-colors flex items-center gap-2"
        >
          Explore Architecture <ChevronRight size={16} />
        </a>
        
        <a 
          href={data.github || "https://github.com/sevenrelzz"}
          target="_blank" 
          rel="noreferrer"
          className="px-6 py-3 border border-slate-700 text-slate-300 rounded hover:bg-slate-800 transition-colors flex items-center gap-2"
        >
          <FiGithub size={16} /> GitHub Profile
        </a>
      </div>
    </section>
  );
}
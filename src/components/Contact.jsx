import { Mail } from 'lucide-react';
import { FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi';

export default function Contact({ contact }) {
  return (
    <section id="contact" className="py-24 border-t border-slate-800 text-center">
      <h2 className="text-3xl font-bold text-slate-100 mb-4">Lets rock in!</h2>
      <p className="text-slate-400 max-w-xl mx-auto mb-8">
        Looking for a backend partner, or just want to chat about the latest in IT? I’m always looking to learn from new perspectives. Let's talk systems, logic, or just a random life-rant-I’m always online for a good talk.
      </p>
      <a href="mailto:sevenrelzz@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-slate-900 font-bold rounded-lg hover:bg-emerald-400 transition-colors mb-12">
        <Mail size={20} /> Send Email!
      </a>
      
      <div className="flex justify-center gap-6">
        <a href={contact.github} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 text-slate-300 rounded-full hover:bg-emerald-500 hover:text-slate-900 transition-all">
          <FiGithub size={24} />
        </a>
        <a href={contact.instagram} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 text-slate-300 rounded-full hover:bg-emerald-500 hover:text-slate-900 transition-all">
          <FiInstagram size={24} />
        </a>
      </div>
    </section>
  );
}
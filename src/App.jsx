import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Tambahan ikon untuk menu HP
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import mockData from './data/portfolioData.json';

export default function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State untuk mengatur buka/tutup menu HP

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setData(mockData);
        setIsLoading(false);
      }, 1000);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
        <span className="ml-4 text-emerald-500 font-mono text-lg">Fetching data from server...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 scroll-smooth">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between font-mono text-sm">
          <span className="text-emerald-400 font-bold text-lg">SevenRelz_</span>

          {/* Menu Desktop */}
          <div className="hidden sm:flex gap-6 text-slate-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors">/about</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">/projects</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">/contact</a>
          </div>

          {/* Tombol Hamburger (Hanya tampil di HP) */}
          <button 
            className="sm:hidden text-slate-400 hover:text-emerald-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Dropdown Menu HP */}
        {isMobileMenuOpen && (
          <div className="sm:hidden bg-slate-900 border-b border-slate-800 font-mono text-sm shadow-xl">
            <div className="flex flex-col px-6 py-4 space-y-4 text-slate-400">
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-400 transition-colors">/about</a>
              <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-400 transition-colors">/projects</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-400 transition-colors">/contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pt-16">
        <Hero data={data.personal} />
        <About data={data.personal} />
        <Projects projects={data.projects} />
        <Skills skills={data.skills} />
        <Experience experience={data.experience} />
        <Contact contact={data.contact} />
      </main>

      {/* Footer */}
      <footer className="py-6 mt-20 border-t border-slate-800 text-center text-slate-500 font-mono text-sm bg-slate-950">
        <p>Status: 200 OK. Developed by Muhammad Farel Amrulloh.</p>
      </footer>
    </div>
  );
}
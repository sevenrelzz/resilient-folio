import { Activity } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-slate-800">
      <div className="flex items-center gap-3 mb-12">
        <Activity className="text-emerald-500" />
        <h2 className="text-3xl font-bold text-slate-100">Behind the Code</h2>
      </div>
      
      {/* Tambahan: grid-cols-1 agar eksplisit 1 kolom di HP */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Kolom Foto Kiri */}
        {/* PERBAIKAN: w-4/5 sm:w-2/3 lg:w-full mx-auto -> Supaya foto di HP mengecil ke 80% layar dan ke tengah, tidak raksasa */}
        <div className="lg:col-span-4 relative group w-4/5 sm:w-2/3 lg:w-full mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative rounded-xl overflow-hidden border-2 border-slate-700 bg-slate-800 aspect-square flex items-center justify-center">
            <img 
              src="/foto-profil.jpg" 
              alt="Farel - Backend Developer" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="hidden absolute text-slate-500 font-mono text-sm">[Image Placeholder]</span>
          </div>
        </div>

        {/* Kolom Teks & JSON Kanan */}
        {/* PERBAIKAN: min-w-0 w-full -> Ini kunci wajib di CSS Grid agar elemen tidak jebol menuruti tag <pre> */}
        <div className="lg:col-span-8 space-y-6 min-w-0 w-full">
          <div className="space-y-4 text-slate-400 leading-relaxed text-base md:text-lg">
            <p>
              <strong className="text-slate-200">From SMKN 2 Mataram to Electrical Engineering '25.</strong> I’m out here exploring where the software world hits the hardware.
            </p>
            <p>
  Currently deep-diving into <strong className="text-slate-200">backend fundamental, optimizing queries, and tackling those tricky edge cases.</strong> Not just shipping functions, but learning the art of building systems that don't break under pressure. Just a student of the game.
</p>
<p>
  It’s more than just code. I’m exploring the balance between intuitive interfaces and resilient backend logic. Currently deep-diving into how every <em className="text-emerald-400">query</em><em className="text-emerald-400">, every pixel</em><em className="text-emerald-400">, every edge case</em> fits together to create a solid, long-term system. Just a student of the craft, trying to build things that matter.
</p>
          </div>

          {/* PERBAIKAN: overflow-x-auto dipastikan berjalan sempurna karena parent-nya sudah di-lock min-w-0 */}
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 md:p-5 font-mono text-xs md:text-sm text-emerald-300 overflow-x-auto shadow-inner w-full">
            <pre><code>{`{
  "developer": {
    "name": "Muhammad Farel Amrulloh",
    "education": {
      "vocational": "SMKN 2 Mataram (Software Engineering Major)",
      "university": "University of Mataram"
    },
    "major": "Electrical Engineering",
    "batch": 2025,
    "mindset": [
      "Problem Solving", 
      "Scalability", 
      "Clean Architecture"
    ]
  }
}`}</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}
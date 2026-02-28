import React from 'react';
import { Scale, ChevronRight, ShieldCheck, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section id='inicio'  className="relative flex flex-col items-center justify-center px-6 py-24 md:py-32 text-center 
    bg-slate-950 overflow-hidden">
      
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-amber-600/10 blur-[120px] 
      rounded-full pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">
        
        
        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-slate-900 border 
        border-slate-800 text-amber-500 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
          <Award size={14} />
          Atendimento de Excelência
        </span>

        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mb-6 text-white leading-tight">
          A segurança jurídica que <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
            protege o seu patrimônio
          </span>
        </h1>

        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light">
        <strong className="text-slate-200 font-semibold">Dr. Wellington Ribeiro Cavalcanti</strong>, 
          oferecemos atuação estratégica, ética e implacável na defesa dos seus direitos.
        </p>

        
        <div className="flex flex-col sm:flex-row gap-4 items-center mt-4">
          <a 
            href="https://wa.me/5581996444900" 
            target="_blank" 
            rel="noreferrer" 
            className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 
            text-slate-950 font-extrabold text-lg py-4 px-10 rounded-xl shadow-[0_0_30px_rgba(245,158,11,0.2)] 
            hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] transition-all hover:-translate-y-1 flex items-center gap-3"
          >
            Falar com o Dr. Wellington
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="#atuacao" 
            className="text-slate-300 hover:text-amber-400 font-semibold text-sm py-4 px-8 
            rounded-xl transition-colors flex items-center gap-2"
          >
            Conhecer Especialidades
          </a>
        </div>
        
        
        <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row items-center 
        gap-8 text-slate-500 text-sm font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-amber-500/70" />
            <span>Sigilo Absoluto</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-slate-700 rounded-full"></div>
          <div className="flex items-center gap-2">
            <Scale size={18} className="text-amber-500/70" />
            <span>OAB/PE 17.986</span>
          </div>
        </div>

      </div>
    </section>
  );
}
"use client";

import React, { useState } from 'react';
import { Scale, Phone, Mail, MapPin, Menu, X, ChevronRight } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Lista com o nome exato e o link (ID) de cada seção sem acentos
  const navLinks = [
    { nome: 'Início', link: '#inicio' },
    { nome: 'Áreas de Atuação', link: '#atuacao' },
    { nome: 'Jornada', link: '#sobre-mim' }
  ];

  return (
    <>
      <div className="bg-slate-950 text-slate-300 py-2.5 px-6 hidden lg:block text-xs font-medium border-b border-amber-900/30">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2 hover:text-amber-400 transition-colors cursor-default">
              <MapPin size={14} className="text-amber-500" /> 
              Recife, PE 
            </span>
            <a href="mailto:wrcadvogado@outlook.com" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
              <Mail size={14} className="text-amber-500" /> 
              wrcadvogado@outlook.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-white font-bold tracking-wider">
            <span className="text-amber-500/80 uppercase tracking-[0.2em] text-[0.65rem] mr-2">Plantão Jurídico</span>
            <Phone size={14} className="text-amber-500" /> 
            (81) 99644-4900
          </div>
        </div>
      </div>

      <header className="w-full bg-white/90 backdrop-blur-lg border-b border-slate-200/80 sticky top-0 z-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-2.5 rounded-xl shadow-lg shadow-slate-900/20 border border-slate-700/50 group-hover:shadow-amber-900/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Scale className="text-amber-400 relative z-10" size={26} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-2xl font-black text-slate-900 leading-none tracking-tighter">RIBEIRO</span>
              <span className="text-[0.65rem] font-bold text-amber-600 tracking-[0.35em] uppercase mt-0.5">Advocacia</span>
            </div>
          </div>

          {/* Links do Menu Desktop */}
          <nav className="hidden md:flex gap-8 items-center mt-1">
            {navLinks.map((item) => (
              <a 
                key={item.nome} 
                href={item.link} 
                className="text-sm font-bold text-slate-600 hover:text-slate-950 relative group transition-colors py-2"
              >
                {item.nome}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <a 
              href="https://wa.me/558196444900" 
              target="_blank" 
              rel="noreferrer" 
              className="hidden sm:flex group bg-slate-900 hover:bg-slate-800 text-white px-7 py-3 rounded-xl text-sm font-bold transition-all shadow-xl shadow-slate-900/20 hover:shadow-slate-900/40 hover:-translate-y-0.5 items-center gap-3 border border-slate-700"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              Entre em contato
              <ChevronRight size={16} className="text-amber-400 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-slate-900 p-2 hover:bg-amber-50 rounded-xl transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div className={`md:hidden absolute w-full bg-white border-t border-slate-100 shadow-2xl transition-all duration-300 ease-in-out origin-top ${isMobileMenuOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible'}`}>
          <div className="flex flex-col px-6 py-6 gap-2">
            {navLinks.map((item) => (
              <a 
                key={item.nome} 
                href={item.link} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-bold text-slate-600 hover:text-amber-600 hover:bg-amber-50/50 p-4 rounded-xl transition-all flex items-center justify-between group"
              >
                {item.nome}
                <ChevronRight size={18} className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
            <div className="mt-4 pt-6 border-t border-slate-100">
              <a 
                href="https://wa.me/558196444900" 
                target="_blank" 
                rel="noreferrer" 
                className="w-full flex justify-center bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white px-7 py-4 rounded-xl text-sm font-bold transition-all shadow-lg items-center gap-3"
              >
                <Phone size={18} className="text-amber-400" />
                Iniciar Atendimento
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
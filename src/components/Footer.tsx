import React from 'react';
import { Scale, Phone, Mail, MapPin, Instagram, ChevronRight, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 px-6 border-t-[6px] border-amber-600">
      <div className="max-w-6xl mx-auto">
        
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 border-b border-slate-800 pb-12">
          
         
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                <Scale className="text-amber-500" size={26} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-black text-white leading-none tracking-tighter">ROCHA</span>
                <span className="text-[0.65rem] font-bold text-amber-600 tracking-[0.35em] uppercase mt-0.5">Advocacia</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 pr-4">
              Defesa jurídica especializada, estratégica e humanizada. Atuação incansável para proteger o seu patrimônio, sua saúde e os seus direitos fundamentais.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a 
                href="https://www.instagram.com/wellington_ribeiro_oab_pe17986/" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-white transition-all duration-300"
                aria-label="Instagram do Dr. Wellington"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          

          <div className="lg:ml-12">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navegação</h4>
            <ul className="space-y-3">
              {[
                { nome: 'Início', link: '#inicio' },
                { nome: 'Áreas de Atuação', link: '#atuacao' },
                { nome: 'Sobre Mim', link: '#sobre-mim' }
              ].map((item) => (
                <li key={item.nome}>
                  <a 
                    href={item.link} 
                    className="group flex items-center text-sm hover:text-amber-500 transition-colors"
                  >
                    <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 text-amber-500 transition-all duration-300 mr-2" />
                    {item.nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Atendimento</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <Phone size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium mb-0.5">WhatsApp / Plantão</p>
                  <a href="https://wa.me/5581996444900" target="_blank" rel="noreferrer" className="hover:text-amber-500 transition-colors">
                    (81) 99644-4900
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium mb-0.5">E-mail</p>
                  <a href="mailto:wrcadvogado@outlook.com" className="hover:text-amber-500 transition-colors">
                    wrcadvogado@outlook.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium mb-0.5">Localização</p>
                  <p>Recfe,PE</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <p>© {currentYear} Ribeiro Advocacia. Todos os direitos reservados.</p>
            <p className="text-slate-600">OAB/PE 17.986</p>
          </div>
          
          <p className="flex items-center gap-1.5">
            Desenvolvido com excelência por <a href="https://github.com/Luizrocha0" target="_blank" rel="noreferrer" className="font-bold text-slate-300 hover:text-amber-500 transition-colors">Luiz Rocha</a>
            <a href='https://www.linkedin.com/in/luiz-henrique-rocha-silva-450362337/'><Linkedin className='hover:text-amber-500 transition-colors' size={16}/></a>
          </p>
          
        </div>

      </div>
    </footer>
  );
}
import React from 'react';
import { Scale, HeartPulse, Accessibility, Trophy, ChevronRight } from 'lucide-react';

export default function Especialidades() {
  const areas = [
    {
      id: 1,
      titulo: 'Direito Médico e da Saúde',
      descricao: 'Atuação especializada contra negativas de planos de saúde, erro médico, liminares de urgência e fornecimento de medicamentos de alto custo.',
      icone: <HeartPulse size={28} />
    },
    {
      id: 2,
      titulo: 'Direitos de Autistas e PCDs',
      descricao: 'Defesa incansável para garantir o acesso à saúde, terapias especializadas, educação inclusiva, BPC/LOAS e isenções tributárias legais.',
      icone: <Accessibility size={28} />
    },
    {
      id: 3,
      titulo: 'Direito Civil e Previdenciário',
      descricao: 'Resolução de conflitos familiares, contratos, indenizações, além de assessoria completa para aposentadorias e benefícios do INSS.',
      icone: <Scale size={28} />
    },
    {
      id: 4,
      titulo: 'Direito Desportivo',
      descricao: 'Assessoria jurídica focada na defesa de atletas, clubes e agentes, atuando em contratos desportivos, transferências e justiça desportiva.',
      icone: <Trophy size={28} />
    }
  ];

  return (
    <section id="atuacao" className="py-24 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-amber-500"></div>
            <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Áreas de Atuação</span>
            <div className="w-12 h-0.5 bg-amber-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Especialidades do Escritório
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Atuação técnica, dedicada e humanizada para proteger seus direitos e garantir a justiça com a urgência que o seu caso exige.
          </p>
        </div>
        
        
        <div className="grid md:grid-cols-2 gap-8">
          {areas.map((area) => (
            <div 
              key={area.id} 
              className="group bg-white p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-amber-900/5 border border-slate-200 hover:border-amber-400/50 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
            >
              
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              
              <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-8 group-hover:bg-amber-500 group-hover:-translate-y-1 transition-all duration-300 shadow-sm">
                <div className="text-slate-700 group-hover:text-white transition-colors duration-300">
                  {area.icone}
                </div>
              </div>

              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{area.titulo}</h3>
              <p className="text-slate-600 leading-relaxed flex-grow text-lg">
                {area.descricao}
              </p>

              
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-amber-600 font-bold text-sm uppercase tracking-wide">Agendar Consulta</span>
                <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
                  <ChevronRight size={16} className="text-amber-600" />
                </div>
              </div>

              
              <a href="https://wa.me/5581996444900" target="_blank" rel="noreferrer" className="absolute inset-0 z-10">
                <span className="sr-only">Agendar consulta para {area.titulo}</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
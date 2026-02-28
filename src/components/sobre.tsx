import React from 'react';
import { Scale, CheckCircle2, HeartHandshake, ShieldAlert } from 'lucide-react';
import Image from 'next/image';

export default function Sobre() {
  return (
    <section id="sobre-mim" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        
        <div className="relative order-2 md:order-1 mt-10 md:mt-0">
          
          <div className="w-full aspect-[4/5] bg-slate-100 rounded-2xl border border-slate-200 flex flex-col items-center justify-center shadow-2xl shadow-slate-900/10 overflow-hidden relative group">
            <Image 
              src="/wellington1.jpg" 
              alt="Dr. Wellington Ribeiro Cavalcanti"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          
          <div className="absolute -bottom-8 -right-4 md:-right-8 bg-slate-950 p-6 rounded-2xl shadow-2xl border border-amber-900/30">
            <div className="flex items-center gap-3 mb-1">
              <Scale size={18} className="text-amber-500" />
              <p className="text-xs font-bold text-amber-500 uppercase tracking-widest">Registro Ativo</p>
            </div>
            <p className="text-2xl font-black text-white tracking-wide">OAB/PE 17.986</p>
          </div>
        </div>

        
        <div className="order-1 md:order-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-amber-500"></div>
            <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">O Profissional</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight">
            Dr. Wellington Ribeiro Cavalcanti
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Formado pela Universidade Católica de Pernambuco (UNICAP) e atuando de forma incansável no mercado jurídico desde 1998. Com mais de duas décadas de experiência, construí minha carreira com base na ética, no rigor técnico e na proteção do direito de cada cliente. Minha atuação é pautada no atendimento direto e humanizado, garantindo que o seu caso seja tratado com a máxima urgência e dedicação.
          </p>
          
          
          <div className="space-y-6 mb-10">
            <div className="flex gap-4 items-start">
              <div className="mt-1 bg-amber-50 p-2.5 rounded-xl border border-amber-100">
                <HeartHandshake size={22} className="text-amber-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">Atendimento Humanizado</h4>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">Especial atenção a causas sensíveis, como direitos de PCDs, autistas e direito médico, onde a empatia é tão importante quanto a técnica jurídica.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="mt-1 bg-amber-50 p-2.5 rounded-xl border border-amber-100">
                <ShieldAlert size={22} className="text-amber-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">Defesa Estratégica e Combativa</h4>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">Atuação firme contra abusos de planos de saúde, INSS e instituições, buscando sempre o melhor resultado de forma ética e ágil.</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
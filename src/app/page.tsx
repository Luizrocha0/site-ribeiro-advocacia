import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Especialidades from '../components/Especialidades';
import Sobre from '../components/sobre';
import WhatsAppButton from '../components/WhatsAppButton';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900   -webkit-font-smoothing: auto">
      <Header/>

      <Hero/>

      <Especialidades/>
      
      <Sobre/>

      <Footer/>

    <WhatsAppButton/>
    </div>
  );
}
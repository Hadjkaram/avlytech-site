'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { ArrowRight, ExternalLink, Zap, Shield, HeartPulse, Brain, Globe } from 'lucide-react'

export default function Home() {
  const logos = [
    { src: "/ciidentelogo.webp", alt: "CI Identité Logo" },
    { src: "/monetique+.jpeg", alt: "Monétique+" },
    { src: "/MS.png", alt: "Ministère de la Santé" },
    { src: "/MSI.png", alt: "Ministère de la Sécurité et de l'Intérieur" },
  ]

  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-avly-blue selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-50">
        <div className="flex justify-between items-center p-4 md:p-8 max-w-7xl mx-auto">
          <Image src="/LOGO AVLYTECH.png" alt="AVLYTECH" width={50} height={50} className="md:w-[70px] md:h-[70px]" />
          <div className="hidden md:flex gap-12 text-[11px] uppercase tracking-[0.3em] font-bold text-black">
            <a href="#projets" className="hover:text-[#1a5b6e] transition">Projets</a>
            <a href="#vision" className="hover:text-[#1a5b6e] transition">L'Agence</a>
            <a href="#contact" className="border-b-2 border-black pb-1 hover:border-[#e67e22] transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 md:pt-64 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[140px] font-title font-black leading-[0.9] md:leading-[0.75] tracking-tighter uppercase text-black">
            Pure <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a5b6e] via-[#e67e22] to-[#4a148c]">
              Innovation
            </span> <br />
            Digital.
          </h1>
          <div className="mt-12 md:mt-16 flex flex-col md:row md:items-end justify-between gap-8 text-black">
            <p className="max-w-md text-lg md:text-xl text-gray-500 font-light leading-relaxed">
              AVLYTECH transforme vos idées en standards technologiques. Expertise en solutions gouvernementales et applications haute performance.
            </p>
            <a href="#projets" className="text-xl md:text-2xl font-title font-bold flex items-center gap-4 group">
              Nos travaux <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-black rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all"><ArrowRight size={20} /></div>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Bandeau Partenaires */}
      <section className="py-12 border-y border-gray-100 overflow-hidden bg-gray-50/30">
        <div className="flex">
          <motion.div 
            animate={{ x: "-50%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex flex-nowrap gap-20 items-center px-10"
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 grayscale opacity-60 hover:opacity-100 transition-all duration-500">
                <Image src={logo.src} alt={logo.alt} width={140} height={60} className="h-10 md:h-16 w-auto object-contain" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Projets */}
      <section id="projets" className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-32 md:space-y-64">
          
          {/* Projet 1 : AssoFit */}
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            <div className="w-full lg:w-2/5 space-y-6 md:space-y-8 text-black">
              <span className="text-gray-400 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">Social Tech</span>
              <h3 className="text-5xl md:text-8xl font-title font-black tracking-tighter uppercase leading-none">
                AssoFit
              </h3>
              <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
                Connecter les sportifs de demain via Flutter. Une fluidité communautaire sans compromis.
              </p>
              <a href="https://assofit.com/" target="_blank" className="inline-flex items-center gap-2 font-title font-bold uppercase text-sm border-b-2 border-black pb-1">
                Visiter <ExternalLink size={14} />
              </a>
            </div>
            <div className="w-full lg:w-3/5 flex justify-center relative py-10">
              <div className="absolute inset-0 bg-[#e67e22]/5 blur-[80px] rounded-full" />
              <div className="relative z-10 w-[240px] h-[500px] md:w-[300px] md:h-[620px]">
                <div className="absolute inset-0 bg-[#D4CFC7] border-[8px] md:border-[12px] border-neutral-900 rounded-[40px] md:rounded-[55px] shadow-2xl overflow-hidden">
                  <Image src="/assofit.png" alt="AssoFit" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
          </div>

          {/* Projet 2 : CI Identité */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 md:gap-16">
            <div className="w-full lg:w-2/5 space-y-6 md:space-y-8 text-black">
              <span className="text-gray-400 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">ONECI • Gouvernemental</span>
              <h3 className="text-5xl md:text-8xl font-title font-black tracking-tighter uppercase leading-none">
                CI Identité
              </h3>
              <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
                Identification numérique sécurisée pour le Ministère de l'Intérieur de Côte d'Ivoire.
              </p>
              <a href="https://identite.ci/" target="_blank" className="inline-flex items-center gap-2 font-title font-bold uppercase text-sm border-b-2 border-black pb-1">
                Explorer <ExternalLink size={14} />
              </a>
            </div>
            <div className="w-full lg:w-3/5 flex justify-center relative py-10">
              <div className="absolute inset-0 bg-[#1a5b6e]/5 blur-[80px] rounded-full" />
              <div className="relative z-10 w-[240px] h-[500px] md:w-[300px] md:h-[620px]">
                <div className="absolute inset-0 bg-white border-[8px] md:border-[12px] border-neutral-900 rounded-[40px] md:rounded-[55px] shadow-2xl overflow-hidden">
                  <Image src="/ciidentite.webp" alt="CI Identité" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
          </div>

          {/* Projet 3 : Adomed */}
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            <div className="w-full lg:w-2/5 space-y-6 md:space-y-8 text-black">
              <span className="text-gray-400 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">HealthTech • IA</span>
              <h3 className="text-5xl md:text-8xl font-title font-black tracking-tighter uppercase leading-none">
                Adomed
              </h3>
              <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
                Première plateforme de téléconsultation médicale avec IA en Côte d'Ivoire.
              </p>
              <a href="https://adomed.care/" target="_blank" className="inline-flex items-center gap-2 font-title font-bold uppercase text-sm border-b-2 border-black pb-1">
                Visiter <ExternalLink size={14} />
              </a>
            </div>
            <div className="w-full lg:w-3/5 flex justify-center relative py-10">
              <div className="absolute inset-0 bg-[#e67e22]/5 blur-[80px] rounded-full" />
              <div className="relative z-10 w-[240px] h-[500px] md:w-[300px] md:h-[620px]">
                <div className="absolute inset-0 bg-white border-[8px] md:border-[12px] border-neutral-900 rounded-[40px] md:rounded-[55px] shadow-2xl overflow-hidden">
                  <Image src="/adomed.care.jpeg" alt="Adomed Health" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
          </div>

          {/* Projet 4 : Braise & Co */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 md:gap-20 text-black text-black">
            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
              <span className="text-gray-400 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">Restauration Digitale</span>
              <h3 className="text-5xl md:text-8xl font-title font-black tracking-tighter uppercase leading-none">
                Braise & Co
              </h3>
              <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
                Innovation QR Code et fidélité digitale pour la restauration moderne.
              </p>
              <a href="https://braise-and-co-modern.vercel.app/" target="_blank" className="inline-flex items-center gap-2 font-title font-bold uppercase text-sm border-b-2 border-black pb-1">
                Visiter <ExternalLink size={14} />
              </a>
            </div>
            <div className="w-full lg:w-1/2 relative group shadow-2xl">
               <Image src="/braise&co.png" alt="Braise & Co" width={800} height={500} className="object-cover rounded-xl" />
            </div>
          </div>

          {/* Projet 5 : Tila.ci */}
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20 text-black">
            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
              <span className="text-gray-400 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">Santé Publique</span>
              <h3 className="text-5xl md:text-8xl font-title font-black tracking-tighter uppercase leading-none">
                Tila.ci
              </h3>
              <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
                Suivi national de la santé mentale pour le Ministère de la Santé de Côte d'Ivoire.
              </p>
              <a href="https://tila.ci/" target="_blank" className="inline-flex items-center gap-2 font-title font-bold uppercase text-sm border-b-2 border-black pb-1">
                Explorer Tila <ExternalLink size={14} />
              </a>
            </div>
            <div className="w-full lg:w-1/2 relative group shadow-2xl">
               <Image src="/tila.png" alt="Tila" width={800} height={500} className="object-cover rounded-xl" />
            </div>
          </div>

        </div>
      </section>

      {/* Vision & Fondateurs */}
      <section id="vision" className="py-20 md:py-40 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="space-y-8 md:space-y-12 text-black">
             <h2 className="text-4xl md:text-7xl font-title font-black tracking-tighter uppercase leading-tight">
               L'expertise par <br /> 
               <span className="text-[#1a5b6e] italic text-3xl md:text-6xl">David Able</span> <br /> 
               & <br /> 
               <span className="text-[#e67e22] italic text-3xl md:text-6xl">Ibrahim Karamoko</span>
             </h2>
             <p className="text-xl text-gray-400 font-light italic border-l-4 border-black pl-6">
               Direction bicéphale alliant stratégie CEO et innovation CTO.
             </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6 text-black">
            <div className="space-y-4">
              <div className="aspect-[3/4] relative overflow-hidden bg-white shadow-xl rounded-xl">
                <Image src="/DAVIDABLE.jpeg" alt="David ABLE" fill className="object-cover" />
              </div>
              <p className="font-title font-black text-xs md:text-lg uppercase">David ABLE</p>
              <p className="text-[#1a5b6e] text-[8px] md:text-xs font-bold uppercase tracking-widest">CEO & Stratégie</p>
            </div>
            <div className="space-y-4 mt-8 md:mt-12">
              <div className="aspect-[3/4] relative overflow-hidden bg-white shadow-xl rounded-xl">
                <Image src="/IbKARAMOKO.jpg" alt="Ibrahim KARAMOKO" fill className="object-cover" />
              </div>
              <p className="font-title font-black text-xs md:text-lg uppercase">Ibrahim KARAMOKO</p>
              <p className="text-[#e67e22] text-[8px] md:text-xs font-bold uppercase tracking-widest">CTO & Innovation</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { ArrowRight, ExternalLink, Zap } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-avly-blue selection:text-white">
      {/* Navigation Minimaliste */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-50">
        <div className="flex justify-between items-center p-8 max-w-7xl mx-auto">
          <Image src="/LOGO AVLYTECH.png" alt="AVLYTECH" width={70} height={70} className="hover:rotate-12 transition-transform duration-500" />
          <div className="hidden md:flex gap-12 text-[11px] uppercase tracking-[0.3em] font-bold">
            <a href="#projets" className="hover:text-avly-blue transition">Projets</a>
            <a href="#vision" className="hover:text-avly-blue transition">L'Agence</a>
            <a href="#contact" className="border-b-2 border-black pb-1 hover:border-avly-orange transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Titre Arc-en-ciel AVLYTECH */}
      <section className="pt-64 pb-32 px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-7xl md:text-[140px] font-title font-black leading-[0.75] tracking-tighter uppercase">
            Pure <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a5b6e] via-[#e67e22] to-[#4a148c]">
              Innovation
            </span> <br />
            Digital.
          </h1>
          <div className="mt-16 flex flex-col md:row md:items-end justify-between gap-8">
            <p className="max-w-md text-xl text-gray-500 font-light leading-relaxed">
              AVLYTECH transforme vos idées en standards technologiques. Expertise en développement d'applications haute performance et écosystèmes web sécurisés.
            </p>
            <a href="#projets" className="text-2xl font-title font-bold flex items-center gap-4 group">
              Découvrir nos travaux <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all"><ArrowRight /></div>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Section Projets - Mise en page Alternée */}
      <section id="projets" className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-64">
          
          {/* Projet 1 : AssoFit - Nouveau Design avec iPhone 16 Pro */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-2/5 space-y-8">
              <div className="flex items-center gap-2">
                <div className="p-2.5 bg-avly-blue/5 rounded-full text-avly-blue">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="text-gray-400 font-bold tracking-[0.3em] uppercase text-xs">Application Mobile</span>
              </div>
              <h3 className="text-6xl md:text-8xl font-title font-black tracking-tighter uppercase leading-[0.85]">
                Asso<span className="text-avly-orange">Fit</span>
              </h3>
              <p className="text-xl text-gray-500 font-light leading-relaxed">
                Connecter les sportifs de demain. Une plateforme complexe sous <span className="text-black font-medium">Flutter</span> pour une fluidité absolue et une interaction sociale instantanée.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <a href="https://assofit.com/" target="_blank" className="inline-flex items-center gap-2 font-title font-bold uppercase tracking-widest text-sm hover:text-avly-blue transition border-b-2 border-black pb-1">
                  Visiter le site <ExternalLink size={16} />
                </a>
              </div>
            </div>

            <div className="lg:w-3/5 w-full flex justify-center relative">
              {/* Halos de couleur derrière le téléphone */}
              <div className="absolute top-10 left-20 w-[300px] h-[300px] bg-avly-blue/10 blur-[100px] rounded-full z-0" />
              <div className="absolute bottom-10 right-20 w-[250px] h-[250px] bg-avly-orange/10 blur-[90px] rounded-full z-0" />

              {/* Maquette iPhone 16 Pro */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 w-[280px] h-[580px] md:w-[320px] md:h-[650px]"
              >
                {/* Cadre Titane */}
                <div className="absolute inset-0 bg-[#D4CFC7] border-[10px] md:border-[12px] border-neutral-900 rounded-[50px] md:rounded-[55px] shadow-2xl overflow-hidden">
                  {/* Dynamic Island */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-b-xl z-30" />
                  
                  {/* Image App fixe */}
                  <Image 
                    src="/assofit.png" 
                    alt="AssoFit Preview" 
                    fill 
                    className="object-cover object-top z-20"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Projet 2 : Braise & Co */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
            <div className="lg:w-1/2 space-y-8">
              <span className="text-avly-orange font-bold tracking-[0.3em] uppercase text-sm">Web & QR Strategy</span>
              <h3 className="text-6xl md:text-8xl font-title font-black tracking-tighter uppercase leading-none">Braise <br /> & Co</h3>
              <p className="text-xl text-gray-500 font-light leading-relaxed">
                Innovation dans la restauration. Intégration d'un système de <span className="text-black font-medium">Fidélité QR Code</span> natif, réinventant l'engagement client en temps réel.
              </p>
              <a href="https://braise-and-co-modern.vercel.app/" target="_blank" className="inline-flex items-center gap-2 font-title font-bold uppercase tracking-widest text-sm hover:text-avly-orange transition border-b-2 border-black pb-1">
                Visiter le site <ExternalLink size={16} />
              </a>
            </div>
            <div className="lg:w-1/2 w-full relative group">
               <div className="absolute inset-0 bg-avly-orange/5 group-hover:bg-transparent transition-all duration-700 z-10"></div>
               <Image src="/braise&co.png" alt="Braise & Co Preview" width={800} height={500} className="object-cover rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700 shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Agence / Cofondateurs - Design Photo Moderne */}
      <section id="vision" className="py-40 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
               <h2 className="text-5xl md:text-7xl font-title font-black tracking-tighter uppercase leading-[0.9]">
                 L'expertise par <br /> 
                 <span className="text-avly-blue italic">David Able</span> <br /> 
                 & <br /> 
                 <span className="text-avly-orange italic">Ibrahim Karamoko</span>
               </h2>
               <p className="text-2xl font-light leading-relaxed text-gray-600 border-l-4 border-black pl-8 italic">
                 "Nous ne construisons pas seulement des produits numériques, nous bâtissons des vecteurs de croissance technologique pour les leaders de demain."
               </p>
            </div>

            {/* Photos des Cofondateurs */}
            <div className="grid grid-cols-2 gap-6 relative font-sans">
              <motion.div whileHover={{ y: -20 }} className="space-y-4">
                <div className="aspect-[3/4] relative overflow-hidden bg-white shadow-2xl rounded-sm">
                  <Image src="/DAVIDABLE.jpeg" alt="David ABLE" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div>
                  <h4 className="font-title font-black text-xl uppercase tracking-tighter">David ABLE</h4>
                  <p className="text-avly-blue text-xs font-bold uppercase tracking-widest">CEO & Stratégie</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -20 }} className="space-y-4 mt-12">
                <div className="aspect-[3/4] relative overflow-hidden bg-white shadow-2xl rounded-sm">
                  <Image src="/IbKARAMOKO.jpg" alt="Ibrahim KARAMOKO" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div>
                  <h4 className="font-title font-black text-xl uppercase tracking-tighter">Ibrahim KARAMOKO</h4>
                  <p className="text-avly-orange text-xs font-bold uppercase tracking-widest">CTO & Innovation</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}
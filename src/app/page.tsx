'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { ArrowRight, ExternalLink, Zap } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-avly-blue selection:text-white overflow-x-hidden">
      {/* Navigation - Adaptée Mobile */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-50">
        <div className="flex justify-between items-center p-4 md:p-8 max-w-7xl mx-auto">
          <Image src="/LOGO AVLYTECH.png" alt="AVLYTECH" width={50} height={50} className="md:w-[70px] md:h-[70px]" />
          <div className="flex gap-4 md:gap-12 text-[9px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold">
            <a href="#projets" className="hover:text-avly-blue transition">Projets</a>
            <a href="#contact" className="border-b-2 border-black pb-1 hover:border-avly-orange transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Polices fluides */}
      <section className="pt-40 md:pt-64 pb-20 md:pb-32 px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[140px] font-title font-black leading-[0.9] md:leading-[0.75] tracking-tighter uppercase">
            Pure <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a5b6e] via-[#e67e22] to-[#4a148c]">
              Innovation
            </span> <br />
            Digital.
          </h1>
          <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="max-w-md text-lg md:text-xl text-gray-500 font-light leading-relaxed">
              AVLYTECH transforme vos idées en standards technologiques. Expertise en développement d'applications haute performance.
            </p>
            <a href="#projets" className="text-xl md:text-2xl font-title font-bold flex items-center gap-4 group">
              Nos travaux <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-black rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all"><ArrowRight size={20} /></div>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Section Projets - Layout Stacked sur Mobile */}
      <section id="projets" className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-32 md:space-y-64">
          
          {/* AssoFit - iPhone Responsive */}
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            <div className="w-full lg:w-2/5 space-y-6 md:space-y-8">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-avly-blue" />
                <span className="text-gray-400 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">Application Mobile</span>
              </div>
              <h3 className="text-5xl md:text-8xl font-title font-black tracking-tighter uppercase leading-none">Asso<span className="text-avly-orange">Fit</span></h3>
              <p className="text-lg md:text-xl text-gray-500 font-light">
                Connecter les sportifs de demain sous <span className="text-black font-medium">Flutter</span>.
              </p>
              <a href="https://assofit.com/" target="_blank" className="inline-flex items-center gap-2 font-title font-bold uppercase text-sm border-b-2 border-black pb-1">
                Visiter <ExternalLink size={14} />
              </a>
            </div>

            <div className="w-full lg:w-3/5 flex justify-center relative py-10">
              <div className="absolute inset-0 bg-avly-blue/5 blur-[80px] rounded-full" />
              <div className="relative z-10 w-[240px] h-[500px] md:w-[300px] md:h-[620px]">
                <div className="absolute inset-0 bg-[#D4CFC7] border-[8px] md:border-[12px] border-neutral-900 rounded-[40px] md:rounded-[55px] shadow-2xl overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] md:w-[100px] h-[25px] md:h-[30px] bg-black rounded-b-xl z-30" />
                  <Image src="/assofit.png" alt="AssoFit" fill className="object-cover object-top" priority />
                </div>
              </div>
            </div>
          </div>

          {/* Braise & Co - Inversé sur Desktop */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 md:gap-20">
            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
              <span className="text-avly-orange font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">Web Strategy</span>
              <h3 className="text-5xl md:text-8xl font-title font-black tracking-tighter uppercase leading-none">Braise & Co</h3>
              <p className="text-lg md:text-xl text-gray-500 font-light italic">Innovation QR Code pour la restauration.</p>
              <a href="https://braise-and-co-modern.vercel.app/" target="_blank" className="inline-flex items-center gap-2 font-title font-bold uppercase text-sm border-b-2 border-black pb-1">
                Visiter <ExternalLink size={14} />
              </a>
            </div>
            <div className="w-full lg:w-1/2 relative group shadow-2xl">
               <Image src="/braise&co.png" alt="Braise & Co" width={800} height={500} className="object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision - Adaptée */}
      <section id="vision" className="py-20 md:py-40 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="space-y-8 md:space-y-12">
             <h2 className="text-4xl md:text-7xl font-title font-black tracking-tighter uppercase leading-tight">
               L'expertise par <br /> 
               <span className="text-avly-blue italic text-3xl md:text-6xl">David Able</span> <br /> 
               & <br /> 
               <span className="text-avly-orange italic text-3xl md:text-6xl">Ibrahim Karamoko</span>
             </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-4">
              <div className="aspect-[3/4] relative overflow-hidden bg-white shadow-xl rounded-xl">
                <Image src="/DAVIDABLE.jpeg" alt="David ABLE" fill className="object-cover" />
              </div>
              <p className="font-title font-black text-xs md:text-lg uppercase">David ABLE</p>
              <p className="text-avly-blue text-[8px] md:text-xs font-bold uppercase tracking-widest">CEO</p>
            </div>
            <div className="space-y-4 mt-8 md:mt-12">
              <div className="aspect-[3/4] relative overflow-hidden bg-white shadow-xl rounded-xl">
                <Image src="/IbKARAMOKO.jpg" alt="Ibrahim KARAMOKO" fill className="object-cover" />
              </div>
              <p className="font-title font-black text-xs md:text-lg uppercase">Ibrahim KARAMOKO</p>
              <p className="text-avly-orange text-[8px] md:text-xs font-bold uppercase tracking-widest">CTO</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}
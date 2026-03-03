'use client'
import { motion } from 'framer-motion'
import { Send, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-white text-black px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="space-y-8">
          <h2 className="text-6xl md:text-8xl font-title font-black tracking-tighter uppercase leading-[0.8]">
            Parlons <br /><span className="text-avly-orange">Futur.</span>
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-sm leading-relaxed">
            Votre projet mérite une exécution millimétrée. Contactez-nous pour une consultation stratégique.
          </p>
          <a 
            href="https://wa.me/33658584843"
            className="inline-flex items-center gap-4 group"
          >
            <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <MessageCircle fill="currentColor" />
            </div>
            <span className="font-title font-bold text-lg">Discuter sur WhatsApp</span>
          </a>
        </div>

        <form className="space-y-12">
          <div className="relative">
            <input type="text" placeholder="Votre Nom" className="w-full border-b-2 border-gray-100 py-4 outline-none focus:border-avly-blue transition-colors bg-transparent text-2xl font-title" />
          </div>
          <div className="relative">
            <input type="email" placeholder="Email Professionnel" className="w-full border-b-2 border-gray-100 py-4 outline-none focus:border-avly-blue transition-colors bg-transparent text-2xl font-title" />
          </div>
          <div className="relative">
            <textarea rows={3} placeholder="Votre besoin (Appli, Web, Innovation...)" className="w-full border-b-2 border-gray-100 py-4 outline-none focus:border-avly-blue transition-colors bg-transparent text-2xl font-title resize-none" />
          </div>
          <button className="bg-black text-white px-12 py-6 rounded-full font-title font-bold text-lg hover:bg-avly-orange transition-all flex items-center gap-3">
            Envoyer le brief <Send size={20} />
          </button>
        </form>
      </div>
    </section>
  )
}
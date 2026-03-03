'use client'
import Image from 'next/image'
import { Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Colonne 1 : Brand */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Image src="/LOGO AVLYTECH.png" alt="AVLYTECH" width={30} height={30} />
              <span className="text-2xl font-title font-bold tracking-tighter">AVLYTECH</span>
            </div>
            <p className="text-gray-400 max-w-sm font-light leading-relaxed">
              Propulser l'innovation numérique française avec audace et sécurité. 
              De la conception à la protection de vos données.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Colonne 2 : Liens */}
          <div className="space-y-6">
            <h4 className="font-title font-bold text-sm uppercase tracking-[0.2em] text-gray-500">Expertises</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li className="hover:text-white transition cursor-pointer flex items-center gap-2">Cyber Sécurité <ArrowUpRight className="w-3 h-3"/></li>
              <li className="hover:text-white transition cursor-pointer flex items-center gap-2">Data Science <ArrowUpRight className="w-3 h-3"/></li>
              <li className="hover:text-white transition cursor-pointer flex items-center gap-2">Web & Mobile <ArrowUpRight className="w-3 h-3"/></li>
            </ul>
          </div>

          {/* Colonne 3 : Contact */}
          <div className="space-y-6">
            <h4 className="font-title font-bold text-sm uppercase tracking-[0.2em] text-gray-500">Bureaux</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li>Paris, France</li>
              <li>contact@avlytech.fr</li>
              <li>+33 6 58 58 48 43</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-gray-600 font-medium">
          <p>© 2026 AVLYTECH DIGITAL AGENCY</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">Mentions Légales</a>
            <a href="#" className="hover:text-white transition">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
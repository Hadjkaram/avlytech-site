'use client'
import { motion } from 'framer-motion'

const partners = [
  "BNP PARIBAS", "ORANGE", "SOCIETE GENERALE", "TOTAL ENERGIES", 
  "LA FRENCH TECH", "AIR FRANCE", "THALES", "CAPGEMINI"
]

export default function Partners() {
  return (
    <div className="py-20 bg-[#0a0a0a] overflow-hidden border-y border-white/5">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-gray-500 mb-10">
        Ils nous font confiance
      </p>
      
      <div className="flex w-full">
        {/* Animation de défilement infini */}
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-16 items-center"
        >
          {/* On double la liste pour créer la boucle infinie */}
          {[...partners, ...partners].map((partner, index) => (
            <span 
              key={index} 
              className="text-2xl md:text-4xl font-bold text-white/20 hover:text-white/60 transition-colors cursor-default uppercase"
            >
              {partner}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
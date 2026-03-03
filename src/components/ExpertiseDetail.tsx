'use client'
import { motion } from 'framer-motion'
import { ShieldAlert, Lock, Database, Zap } from 'lucide-react'

export default function ExpertiseDetail() {
  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Faisceau lumineux décoratif */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#1a5b6e] to-transparent opacity-20" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#e67e22] to-transparent opacity-20" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Côté Gauche : Animation Cyber */}
          <div className="relative flex justify-center items-center">
            {/* Cercles concentriques animés */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-64 h-64 md:w-96 md:h-96 border border-white/5 rounded-full absolute"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="w-48 h-48 md:w-80 md:h-80 border border-[#1a5b6e]/30 rounded-full absolute border-dashed"
            />
            
            {/* Badge de Sécurité Central */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="relative z-10 p-8 bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl shadow-[#1a5b6e]/20"
            >
              <ShieldAlert className="w-16 h-16 text-[#1a5b6e] mb-4" />
              <div className="text-center">
                <span className="block text-xs font-bold tracking-widest text-[#1a5b6e] uppercase">Status</span>
                <span className="text-white font-mono uppercase tracking-tighter">Secured_Alpha</span>
              </div>
            </motion.div>
          </div>

          {/* Côté Droit : Contenu Data/Cyber */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Forteresse Digitale & <br /> 
                <span className="text-[#e67e22]">Intelligence Data</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                La donnée est le nouvel or noir, mais elle est vulnérable. Nous déployons des protocoles de sécurité de grade militaire pour vos infrastructures.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-[#1a5b6e]/50 transition-all">
                <Lock className="w-6 h-6 text-[#1a5b6e] mb-4" />
                <h4 className="font-bold mb-2">Chiffrement End-to-End</h4>
                <p className="text-sm text-gray-500">Zéro compromis sur la confidentialité de vos échanges.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-[#e67e22]/50 transition-all">
                <Database className="w-6 h-6 text-[#e67e22] mb-4" />
                <h4 className="font-bold mb-2">Architecture Scalable</h4>
                <p className="text-sm text-gray-500">Bases de données optimisées pour la croissance et la vitesse.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
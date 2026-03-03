'use client'
import { motion } from 'framer-motion'
import { ShieldCheck, Database, Code, Globe } from 'lucide-react' // Pensez à faire : npm install lucide-react

const services = [
  {
    title: "Cyber Sécurité",
    desc: "Protection avancée de vos actifs numériques et audits de vulnérabilité.",
    icon: <ShieldCheck className="w-8 h-8 text-[#1a5b6e]" />,
    border: "hover:border-[#1a5b6e]"
  },
  {
    title: "Data & IA",
    desc: "Exploitation de vos bases de données et intégration d'intelligence artificielle.",
    icon: <Database className="w-8 h-8 text-[#e67e22]" />,
    border: "hover:border-[#e67e22]"
  },
  {
    title: "App & Web",
    desc: "Développement Next.js et Flutter pour des expériences fluides.",
    icon: <Code className="w-8 h-8 text-[#4a148c]" />,
    border: "hover:border-[#4a148c]"
  }
]

export default function Services() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className={`p-10 rounded-3xl bg-white/5 border border-white/10 transition-all ${s.border}`}
          >
            <div className="mb-6">{s.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
            <p className="text-gray-400 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
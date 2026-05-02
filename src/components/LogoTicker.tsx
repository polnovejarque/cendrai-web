import { motion } from 'framer-motion'

const companies = [
  'ACME CORP',
  'NEXUS DYNAMICS',
  'HORIZON LOGISTICS',
  'QUANTUM LEAP',
  'VERTEX SOLUTIONS',
  'SYNAPSE INDUSTRIES'
]

export default function LogoTicker() {
  return (
    <section id="casos-uso" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-muted/70 uppercase mb-10">
            Escalando operaciones en empresas líderes
          </p>

          {/* Marquee Container with fade masks on edges */}
          <div 
            className="w-full relative flex overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
          >
            {/* 
              Usamos Framer Motion para mover el contenedor de 0% a -50%.
              Como hemos duplicado el array dentro del contenedor, un -50% equivale a deslizar el array original entero.
              Al usar repeat: Infinity, cuando llegue al 50%, saltará a 0% invisiblemente.
            */}
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                ease: 'linear',
                duration: 30, // Ajusta la velocidad según convenga (mayor = más lento)
                repeat: Infinity,
              }}
              className="flex items-center whitespace-nowrap min-w-max"
            >
              {[...companies, ...companies].map((company, index) => (
                <div 
                  key={index} 
                  className="px-12 flex items-center justify-center group cursor-default"
                >
                  <span className="text-slate-500 font-bold text-xl uppercase tracking-widest transition-colors duration-300 group-hover:text-cyan-400">
                    {company}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

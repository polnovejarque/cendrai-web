import { motion, type Variants } from 'framer-motion'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 } // Efecto cascada
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
}

const useCases = [
  {
    id: "01",
    title: "Finanzas & Operaciones",
    description: "Automatización de auditorías, conciliación en tiempo real y ejecución de modelos de riesgo predictivo sin intervención humana."
  },
  {
    id: "02",
    title: "Logística Autónoma",
    description: "Agentes que detectan cuellos de botella, negocian con proveedores y redirigen cadenas de suministro globales al instante."
  },
  {
    id: "03",
    title: "Sistemas Complejos",
    description: "Estabilización de hardware de vanguardia. Mantén sistemas críticos y robótica avanzada bajo control milimétrico con latencia cero."
  }
]

export default function UseCases() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Luz de fondo sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-vantax-cold/10 via-black/0 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Infraestructura para <br/>
            <span className="text-muted">cualquier escala.</span>
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {useCases.map((item) => (
            <motion.div 
              key={item.id}
              variants={cardVariants}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-500"
            >
              {/* Efecto Glow en Hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none glow-cyan-sm border border-vantax-cold/20" />
              
              <div className="relative z-10 flex flex-col h-full">
                <span className="text-xs font-mono text-cyan-200 mb-6">{item.id} //</span>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-cyan-200 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted font-light leading-relaxed mb-8">
                  {item.description}
                </p>
                
                {/* Botón visual (flecha) al final de la tarjeta */}
                <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-slate-500 group-hover:text-white transition-colors duration-300">
                  <span>Ver despliegue</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
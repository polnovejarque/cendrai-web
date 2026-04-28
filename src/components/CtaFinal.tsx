import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'

export default function CtaFinal() {
  const buttonRef = useRef<HTMLButtonElement>(null)
  
  // Valores de movimiento para el botón magnético
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  // Físicas del muelle (spring) para que el retorno sea suave y orgánico
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return
    
    const rect = buttonRef.current.getBoundingClientRect()
    // Calculamos el centro del botón
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // Distancia del ratón al centro
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    
    // Aplicamos una fuerza magnética (dividimos para que no sea exagerado)
    x.set(distanceX * 0.2)
    y.set(distanceY * 0.2)
  }

  const handleMouseLeave = () => {
    // Cuando el ratón sale, el botón vuelve a su sitio
    x.set(0)
    y.set(0)
  }

  return (
    <section className="relative py-40 overflow-hidden flex items-center justify-center">
      
      {/* ── GLOW MASIVO RESPIRANDO ── */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-vantax-cold/20 via-vantax-purple/5 to-transparent blur-[80px] pointer-events-none rounded-[100%]"
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
          ¿Listo para <span className="text-cyan-200">evolucionar</span>?
        </h2>
        <p className="text-lg text-muted mb-12 max-w-2xl font-light">
          Despliega Vantax hoy y transforma tu infraestructura en un ecosistema inteligente, autónomo y sin límites operativos.
        </p>

        {/* ── BOTÓN MAGNÉTICO ── */}
        <motion.button
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ x: mouseXSpring, y: mouseYSpring }}
          className="relative group px-12 py-5 rounded-full bg-white text-black font-bold text-lg tracking-wide shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(6,182,212,0.4)] transition-shadow duration-300"
        >
          {/* Brillo interno al hacer hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-vantax-cold/20 to-vantax-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <span className="relative z-10">Solicitar Demo</span>
        </motion.button>
      </div>
    </section>
  )
}
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// --- Subcomponente: Contador Animado Inteligente ---
function AnimatedCounter({ value, suffix = "", prefix = "", label, decimals = 0 }: { value: number, suffix?: string, prefix?: string, label: string, decimals?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      const duration = 2000 // 2 segundos de animación
      const startTime = performance.now()

      const updateCounter = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Curva de velocidad easeOutExpo (frena suavemente)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
        
        setCount(easeProgress * value)

        if (progress < 1) {
          requestAnimationFrame(updateCounter)
        }
      }
      requestAnimationFrame(updateCounter)
    }
  }, [isInView, value])

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center">
      <div className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground mb-2 font-mono">
        {prefix}{count.toFixed(decimals)}{suffix}
      </div>
      <div className="text-sm tracking-widest text-muted uppercase font-semibold">
        {label}
      </div>
    </div>
  )
}

// --- Componente Principal ---
export default function SocialProof() {
  // Elementos para el carrusel infinito
  const partners = [
    "AWS PARTNER", "NVIDIA INCEPTION", "STRIPE VERIFIED", "OPENAI ALUMNI", 
    "ISO 27001", "SOC 2 TYPE II", "ENTERPRISE READY", "ZERO TRUST ARCHITECTURE"
  ]
  // Duplicamos el array para que el scroll infinito no tenga cortes
  const marqueeItems = [...partners, ...partners]

  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* ── 1. MÉTRICAS (Contadores Animados) ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          <AnimatedCounter value={99.9} decimals={1} suffix="%" label="Disponibilidad" />
          <AnimatedCounter value={50} suffix="M+" label="Operaciones" />
          <AnimatedCounter value={12} suffix="ms" label="Latencia Media" />
          <AnimatedCounter value={0} label="Intervención" />
        </div>
      </div>

      {/* ── 2. MARQUEE INFINITO (Cinta de Partners/Certificaciones) ── */}
      <div className="relative flex flex-col items-center">
        <p className="text-[11px] text-muted/60 uppercase tracking-[0.2em] font-semibold mb-8">
          Certificaciones e Integraciones Nativas
        </p>

        {/* Contenedor con máscara de degradado para difuminar los bordes laterales */}
        <div 
          className="w-full flex overflow-hidden"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 md:gap-32 whitespace-nowrap items-center w-max px-8"
          >
            {marqueeItems.map((item, index) => (
              <div 
                key={index} 
                className="text-xl md:text-2xl font-bold text-muted/40 tracking-tight"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  )
}
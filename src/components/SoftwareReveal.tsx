import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function SoftwareReveal() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const rotateX = useTransform(scrollYProgress, [0, 0.4], [45, 0])
  const scale   = useTransform(scrollYProgress, [0, 0.4], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section
      ref={containerRef}
      id="plataforma"
      className="relative min-h-[120vh] flex items-center justify-center py-24 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        style={{ rotateX, scale, opacity, perspective: '1000px' }}
        className="relative z-10 w-full max-w-[1100px] px-6"
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Tu propio centro de mando <br />
            <span className="text-cyan-400">inteligente.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto font-light">
            Construimos una plataforma exclusiva para tu negocio. Conecta tu CRM, WhatsApp y todo tu equipo de agentes autónomos en un panel único.
          </p>
        </div>

        {/* Window frame */}
        <div className="bg-[#0a1525] border border-white/10 rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.7)] ring-1 ring-white/[0.04]">
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5 px-4 py-3 bg-[#0a1525] border-b border-white/[0.06]">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          </div>

          {/* Dashboard screenshot */}
          <img
            src="/dashboard-preview.png"
            alt="Cendrai OS — Panel de control de agentes IA"
            className="w-full block"
            draggable={false}
          />
        </div>
      </motion.div>

      {/* Decorative nodes */}
      <div className="absolute top-1/4 right-10 w-24 h-24 border border-cyan-400/10 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-10 w-32 h-32 border border-blue-500/10 rounded-full animate-pulse delay-700" />
    </section>
  )
}
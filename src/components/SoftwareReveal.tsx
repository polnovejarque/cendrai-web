import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { useRef } from 'react'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
}

export default function SoftwareReveal() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Efecto de scroll para la rotación 3D
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const rotateX = useTransform(scrollYProgress, [0, 0.4], [45, 0])
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} id="plataforma" className="relative min-h-[120vh] flex items-center justify-center py-24 overflow-hidden">
      
      {/* Luces de ambiente Cendrai detrás del software */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        style={{ 
          rotateX, 
          scale, 
          opacity,
          perspective: "1000px" 
        }}
        className="relative z-10 w-full max-w-6xl px-6"
      >
        <div className="flex flex-col gap-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Una terminal para <br/>
              <span className="text-cyan-400">dominar la complejidad.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto font-light">
              Control total sobre tus flujos de trabajo autónomos a través de una interfaz diseñada para la precisión.
            </p>
          </div>

          {/* Marco del Software / Dashboard */}
          <div className="bg-slate-900/50 border border-white/10 rounded-2xl backdrop-blur-xl overflow-hidden shadow-2xl">
            
            {/* Header del Software */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              </div>
              <div className="text-[10px] font-mono text-muted tracking-[0.2em] uppercase">
                Cendrai OS v1.0.4 — Kernel Active
              </div>
              <div className="w-12" />
            </div>

            {/* Contenido del Software */}
            <div className="p-6 grid grid-cols-12 gap-6">
              
              {/* Sidebar / Stats */}
              <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                  <div className="text-[10px] text-muted uppercase font-bold tracking-wider mb-1">Carga del Sistema</div>
                  <div className="text-2xl font-bold font-mono text-slate-100">98.4%</div>
                  <div className="w-full h-1 bg-slate-800 mt-2 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ width: ["10%", "98%", "95%"] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="h-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" 
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-muted uppercase font-bold tracking-wider mb-1">Agentes Activos</div>
                  <div className="text-2xl font-bold font-mono text-cyan-400">142</div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-muted uppercase font-bold tracking-wider mb-1">Optimización</div>
                  <div className="text-2xl font-bold font-mono text-blue-400">+32ms</div>
                </div>
              </div>

              {/* Terminal Feed Principal */}
              <div className="col-span-12 md:col-span-8 bg-slate-950/40 rounded-xl border border-white/5 p-4 font-mono text-[12px] h-[300px] overflow-hidden relative">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  className="flex flex-col gap-1 text-slate-400"
                >
                  <motion.div variants={itemVariants} className="text-cyan-400">[OK] Initializing Neural Infrastructure...</motion.div>
                  <motion.div variants={itemVariants}>[INFO] Syncing with Cendrai Core Module...</motion.div>
                  <motion.div variants={itemVariants}>[WARN] High load detected in Sales Agent Node (Rafa)</motion.div>
                  <motion.div variants={itemVariants} className="text-blue-400">[SYS] Re-routing logic through Central Hub...</motion.div>
                  <motion.div variants={itemVariants}>[OK] Latency optimized: 1.2ms</motion.div>
                  <motion.div variants={itemVariants}>[INFO] 5 active agents deployed successfully</motion.div>
                  <motion.div variants={itemVariants}>[INFO] Monitoring real-time operations...</motion.div>
                  <motion.div variants={itemVariants} className="text-cyan-400">[OK] Neural link established.</motion.div>
                  <motion.div variants={itemVariants}>[INFO] Processing incoming leads from Michael Agent...</motion.div>
                  <motion.div variants={itemVariants}>[OK] Data encryption: AES-256 enabled.</motion.div>
                  <motion.div variants={itemVariants} className="text-blue-400">[SYS] Balancing power across nodes...</motion.div>
                  <motion.div variants={itemVariants}>[OK] Critical systems normalized.</motion.div>
                </motion.div>
                
                {/* Degradado inferior para el efecto de feed infinito */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-900 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decoración de nodos flotantes sutiles */}
      <div className="absolute top-1/4 right-10 w-24 h-24 border border-cyan-400/10 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-10 w-32 h-32 border border-blue-500/10 rounded-full animate-pulse delay-700" />
    </section>
  )
}
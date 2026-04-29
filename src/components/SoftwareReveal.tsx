import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { useRef } from 'react'
import { LayoutDashboard, Users, Settings, Search, Bell, Megaphone, TrendingUp, MousePointerClick, BarChart3 } from 'lucide-react'

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
        className="relative z-10 w-full max-w-[1100px] px-6"
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
          <div className="bg-[#0f1d33] border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5">
            
            {/* Header / Controles de ventana */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-[#0a1628]">
               <div className="w-2.5 h-2.5 rounded-full bg-slate-700 hover:bg-red-500 transition-colors" />
               <div className="w-2.5 h-2.5 rounded-full bg-slate-700 hover:bg-yellow-500 transition-colors" />
               <div className="w-2.5 h-2.5 rounded-full bg-slate-700 hover:bg-green-500 transition-colors" />
            </div>

            {/* Dashboard App Shell */}
            <div className="flex flex-col md:flex-row h-[550px] bg-[#0a1628]">
              
              {/* Sidebar */}
              <div className="w-full md:w-64 shrink-0 border-b md:border-b-0 md:border-r border-white/5 bg-[#0f1d33] flex flex-col hidden sm:flex">
                {/* Logo */}
                <div className="p-5 flex items-center gap-2 border-b border-white/5">
                  <span className="font-sans text-xl font-semibold tracking-[-0.02em] text-foreground">cendrai</span>
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                  </span>
                </div>
                
                {/* Nav Principal */}
                <div className="p-4 space-y-1 border-b border-white/5">
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20 shadow-sm">
                    <LayoutDashboard size={16} /> Panel de Control
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors text-sm font-medium">
                    <Users size={16} /> Base de Clientes
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors text-sm font-medium">
                    <Settings size={16} /> Configuración
                  </div>
                </div>

                {/* Agentes IA */}
                <div className="p-4 flex-1 overflow-y-auto custom-scrollbar">
                  <p className="px-3 text-[10px] font-bold tracking-[0.15em] text-slate-500 uppercase mb-3">Escuadrón Activo</p>
                  <div className="space-y-1">
                    {/* Michael */}
                    <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/[0.03] transition-colors cursor-default border border-transparent hover:border-white/5">
                      <Megaphone size={16} className="text-slate-400 shrink-0" />
                      <div>
                        <div className="text-[13px] font-semibold text-slate-200 leading-none">Michael</div>
                        <div className="text-[9px] text-slate-500 mt-1 uppercase tracking-wider font-medium">Marketing & RRSS</div>
                      </div>
                    </div>
                    {/* Luna */}
                    <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/[0.03] transition-colors cursor-default border border-transparent hover:border-white/5">
                      <TrendingUp size={16} className="text-slate-400 shrink-0" />
                      <div>
                        <div className="text-[13px] font-semibold text-slate-200 leading-none">Luna</div>
                        <div className="text-[9px] text-slate-500 mt-1 uppercase tracking-wider font-medium">Desarrollo Negocio</div>
                      </div>
                    </div>
                    {/* Rafa */}
                    <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/[0.03] transition-colors cursor-default border border-transparent hover:border-white/5">
                      <MousePointerClick size={16} className="text-slate-400 shrink-0" />
                      <div>
                        <div className="text-[13px] font-semibold text-slate-200 leading-none">Rafa</div>
                        <div className="text-[9px] text-slate-500 mt-1 uppercase tracking-wider font-medium">Ventas B2B</div>
                      </div>
                    </div>
                    {/* Lucía */}
                    <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/[0.03] transition-colors cursor-default border border-transparent hover:border-white/5">
                      <Users size={16} className="text-slate-400 shrink-0" />
                      <div>
                        <div className="text-[13px] font-semibold text-slate-200 leading-none">Lucía</div>
                        <div className="text-[9px] text-slate-500 mt-1 uppercase tracking-wider font-medium">Recursos Humanos</div>
                      </div>
                    </div>
                    {/* Carol */}
                    <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/[0.03] transition-colors cursor-default border border-transparent hover:border-white/5">
                      <BarChart3 size={16} className="text-slate-400 shrink-0" />
                      <div>
                        <div className="text-[13px] font-semibold text-slate-200 leading-none">Carol</div>
                        <div className="text-[9px] text-slate-500 mt-1 uppercase tracking-wider font-medium">Finanzas & Analítica</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col bg-[#0a1628] min-w-0">
                {/* Topbar */}
                <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-[#0f1d33]/50">
                  <div className="flex items-center gap-2 text-slate-400 bg-[#0a1628] px-3 py-2 rounded-lg border border-white/5 w-64 shadow-inner">
                    <Search size={14} />
                    <span className="text-xs">Buscar flujos de trabajo...</span>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="relative cursor-pointer">
                      <Bell size={18} className="text-slate-400 hover:text-slate-200" />
                      <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-cyan-400 rounded-full border border-[#0f1d33]"></span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-md flex items-center justify-center text-xs font-bold text-white border border-cyan-200/20">
                        JS
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Inner Grid */}
                <div className="flex-1 p-6 overflow-y-auto custom-scrollbar flex flex-col gap-6">
                  
                  {/* Top KPIs */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Tarjeta 1: Ingresos */}
                    <div className="p-5 rounded-2xl border border-white/5 bg-[#0f1d33] relative overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                      <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-1">Ingresos Mensuales</p>
                      <h3 className="text-3xl font-bold text-slate-100 tracking-tight">€24.850</h3>
                      <p className="text-[11px] text-cyan-400 mt-2 font-medium flex items-center gap-1 bg-cyan-400/10 w-max px-2 py-0.5 rounded">
                        <TrendingUp size={12} /> +12.5% vs mes anterior
                      </p>
                      
                      {/* SVG Line Chart Background */}
                      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none opacity-60">
                        <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full">
                          <defs>
                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path d="M0,30 L0,20 L20,25 L40,10 L60,15 L80,5 L100,8 L100,30 Z" fill="url(#chartGradient)" />
                          <path d="M0,20 L20,25 L40,10 L60,15 L80,5 L100,8" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Tarjeta 2: Cuentas */}
                    <div className="p-5 rounded-2xl border border-white/5 bg-[#0f1d33] flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                      <div>
                        <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-1">Cuentas Activas</p>
                        <h3 className="text-3xl font-bold text-slate-100 tracking-tight">286</h3>
                        <p className="text-[11px] text-slate-400 mt-2 font-medium flex items-center gap-1">
                           <span className="text-emerald-400">+43</span> nuevas esta semana
                        </p>
                      </div>
                      
                      {/* SVG Donut Chart */}
                      <div className="w-[72px] h-[72px] relative shrink-0">
                        <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90 drop-shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                          <path
                            className="text-slate-800/80"
                            strokeWidth="4"
                            stroke="currentColor"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <path
                            className="text-cyan-400"
                            strokeWidth="4"
                            strokeDasharray="82, 100"
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xs font-bold text-slate-100">82%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actividad Reciente (Terminal Feed) */}
                  <div className="flex-1 rounded-2xl border border-white/5 bg-[#0f1d33] flex flex-col relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                    <div className="px-5 py-3.5 border-b border-white/5 flex items-center justify-between bg-[#0a1628]/40">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xs font-semibold tracking-wider text-slate-300 uppercase">Registro de Operaciones</h3>
                        <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-mono border border-blue-500/20">Kernel Active</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-md border border-white/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[10px] font-medium text-slate-300 uppercase tracking-wider">Live Feed</span>
                      </div>
                    </div>
                    
                    {/* Terminal Feed Scroll Area */}
                    <div className="p-5 font-mono text-[12px] flex-1 overflow-hidden relative">
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col gap-2 text-slate-400 leading-relaxed"
                      >
                        <motion.div variants={itemVariants} className="flex gap-3"><span className="text-cyan-400 shrink-0">[OK]</span> <span>Initializing Neural Infrastructure...</span></motion.div>
                        <motion.div variants={itemVariants} className="flex gap-3"><span className="text-slate-500 shrink-0">[INFO]</span> <span>Syncing with Cendrai Core Module...</span></motion.div>
                        <motion.div variants={itemVariants} className="flex gap-3"><span className="text-yellow-400 shrink-0">[WARN]</span> <span>High load detected in Sales Agent Node (Rafa)</span></motion.div>
                        <motion.div variants={itemVariants} className="flex gap-3"><span className="text-blue-400 shrink-0">[SYS]</span> <span>Re-routing logic through Central Hub...</span></motion.div>
                        <motion.div variants={itemVariants} className="flex gap-3"><span className="text-cyan-400 shrink-0">[OK]</span> <span>Latency optimized: 1.2ms</span></motion.div>
                        <motion.div variants={itemVariants} className="flex gap-3"><span className="text-slate-500 shrink-0">[INFO]</span> <span>5 active agents deployed successfully</span></motion.div>
                        <motion.div variants={itemVariants} className="flex gap-3"><span className="text-slate-500 shrink-0">[INFO]</span> <span>Monitoring real-time operations...</span></motion.div>
                        <motion.div variants={itemVariants} className="flex gap-3"><span className="text-cyan-400 shrink-0">[OK]</span> <span>Neural link established.</span></motion.div>
                        <motion.div variants={itemVariants} className="flex gap-3"><span className="text-slate-500 shrink-0">[INFO]</span> <span>Processing incoming leads from Michael Agent...</span></motion.div>
                        <motion.div variants={itemVariants} className="flex gap-3"><span className="text-cyan-400 shrink-0">[OK]</span> <span>Data encryption: AES-256 enabled.</span></motion.div>
                        <motion.div variants={itemVariants} className="flex gap-3"><span className="text-blue-400 shrink-0">[SYS]</span> <span>Balancing power across nodes...</span></motion.div>
                        <motion.div variants={itemVariants} className="flex gap-3"><span className="text-cyan-400 shrink-0">[OK]</span> <span>Critical systems normalized.</span></motion.div>
                      </motion.div>
                      
                      {/* Gradient fade out at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f1d33] to-transparent pointer-events-none" />
                    </div>
                  </div>
                  
                </div>
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
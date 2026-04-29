import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { useRef } from 'react'
import {
  LayoutDashboard, CalendarDays, Users, CreditCard, ClipboardList,
  FileText, Settings, LifeBuoy, Megaphone, TrendingUp,
  MousePointerClick, BarChart3, Search, AlertCircle, Calendar
} from 'lucide-react'

/* ── Animación del feed de terminal ───────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
}
const lineVariants: Variants = {
  hidden: { opacity: 0, x: -6 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
}

/* ── Líneas de actividad (estáticas) ─────────────────────────────────────── */
const activityItems = [
  { initials: 'SY', color: 'from-cyan-500 to-blue-500',    title: 'Torneo Interno',   sub: 'Acción de Agente IA (System)',  badge: 'Nuevo' },
  { initials: 'SY', color: 'from-cyan-500 to-blue-500',    title: 'Reserva Pista 1',  sub: 'Acción de Agente IA (System)',  badge: 'Nuevo' },
  { initials: 'MF', color: 'from-violet-500 to-indigo-500',title: 'Pago recibido',    sub: '€350 · Pista Central',          badge: '2m'   },
  { initials: 'SR', color: 'from-emerald-500 to-teal-500', title: 'Nueva cuenta',     sub: 'Club Deportivo Sur',            badge: '18m'  },
]

/* ── Feed de terminal ──────────────────────────────────────────────────────── */
const terminalLines = [
  { tag: '[OK]',   color: 'text-cyan-400',   text: 'Initializing Neural Infrastructure...' },
  { tag: '[INFO]', color: 'text-slate-400',  text: 'Syncing with Cendrai Core Module...' },
  { tag: '[WARN]', color: 'text-yellow-400', text: 'High load detected in Sales Agent Node (Rafa)' },
  { tag: '[SYS]',  color: 'text-blue-400',   text: 'Re-routing logic through Central Hub...' },
  { tag: '[OK]',   color: 'text-cyan-400',   text: 'Latency optimized: 1.2ms' },
  { tag: '[INFO]', color: 'text-slate-400',  text: '5 active agents deployed successfully' },
  { tag: '[INFO]', color: 'text-slate-400',  text: 'Processing incoming leads from Michael Agent...' },
  { tag: '[OK]',   color: 'text-cyan-400',   text: 'Neural link established.' },
  { tag: '[OK]',   color: 'text-cyan-400',   text: 'Data encryption: AES-256 enabled.' },
  { tag: '[SYS]',  color: 'text-blue-400',   text: 'Balancing power across nodes...' },
]

/* ── SVG mini sparkline ───────────────────────────────────────────────────── */
function SparkLine() {
  return (
    <svg
      viewBox="0 0 300 80"
      preserveAspectRatio="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#22d3ee" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* area */}
      <path
        d="M0,80 L0,55 L25,50 L50,58 L75,42 L100,48 L125,35 L150,40 L175,28 L200,32 L225,20 L250,24 L275,15 L300,18 L300,80 Z"
        fill="url(#sparkFill)"
      />
      {/* line */}
      <path
        d="M0,55 L25,50 L50,58 L75,42 L100,48 L125,35 L150,40 L175,28 L200,32 L225,20 L250,24 L275,15 L300,18"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ── SVG donut ───────────────────────────────────────────────────────────── */
function DonutChart({ pct = 72 }: { pct?: number }) {
  const r = 40
  const circ = 2 * Math.PI * r
  const dash = (pct / 100) * circ
  return (
    <div className="relative w-[120px] h-[120px] shrink-0">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#1e3a52" strokeWidth="10" />
        <circle
          cx="50" cy="50" r={r}
          fill="none"
          stroke="#22d3ee"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circ - dash}`}
          className="drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-white leading-none">286</span>
        <span className="text-[10px] text-slate-400 mt-0.5">72% meta</span>
      </div>
    </div>
  )
}

/* ── Componente principal ─────────────────────────────────────────────────── */
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
            Una terminal para <br />
            <span className="text-cyan-400">dominar la complejidad.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto font-light">
            Control total sobre tus flujos de trabajo autónomos a través de una
            interfaz diseñada para la precisión.
          </p>
        </div>

        {/* ── Window frame ── */}
        <div className="bg-[#0d1b2e] border border-white/10 rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)] ring-1 ring-white/[0.04]">
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5 px-4 py-3 bg-[#0a1525] border-b border-white/[0.06]">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700 hover:bg-red-500 transition-colors" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700 hover:bg-yellow-400 transition-colors" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700 hover:bg-emerald-400 transition-colors" />
          </div>

          {/* App Shell */}
          <div className="flex h-[560px] overflow-hidden">

            {/* ── Sidebar ── */}
            <aside className="w-[180px] shrink-0 bg-[#0a1525] flex flex-col border-r border-white/[0.06] hidden sm:flex">
              {/* Logo */}
              <div className="flex items-center gap-1.5 px-4 py-4 border-b border-white/[0.06]">
                <span className="font-sans text-base font-semibold tracking-[-0.02em] text-white">cendrai</span>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
                </span>
              </div>

              {/* Main nav */}
              <nav className="flex-1 overflow-y-auto py-3 space-y-0.5 px-2">
                {[
                  { icon: LayoutDashboard, label: 'Dashboard',   active: true  },
                  { icon: CalendarDays,    label: 'Agenda',       active: false },
                  { icon: Users,           label: 'Cuentas',      active: false },
                  { icon: CreditCard,      label: 'Pagos',        active: false },
                  { icon: ClipboardList,   label: 'Asistencias',  active: false },
                  { icon: FileText,        label: 'Facturación',  active: false },
                ].map(({ icon: Icon, label, active }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[12px] font-medium cursor-default transition-colors ${
                      active
                        ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/20'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                    }`}
                  >
                    <Icon size={14} className="shrink-0" />
                    {label}
                  </div>
                ))}

                {/* Agentes IA */}
                <div className="pt-4 pb-1 px-1">
                  <p className="text-[9px] font-bold tracking-[0.15em] text-slate-500 uppercase mb-2">Agentes IA</p>
                  {[
                    { icon: Megaphone,        label: 'Michael', sub: 'Marketing & RRSS'       },
                    { icon: TrendingUp,       label: 'Luna',    sub: 'Desarrollo de Negocio'  },
                    { icon: MousePointerClick,label: 'Rafa',    sub: 'Ventas B2B'              },
                    { icon: Users,            label: 'Lucía',   sub: 'Recursos Humanos'        },
                    { icon: BarChart3,        label: 'Carol',   sub: 'Finanzas & Analítica'    },
                  ].map(({ icon: Icon, label, sub }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-[11px] cursor-default hover:bg-white/[0.03] transition-colors"
                    >
                      <Icon size={13} className="text-slate-500 shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-300 leading-none">{label}</div>
                        <div className="text-[9px] text-slate-500 mt-0.5 uppercase tracking-wide">{sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </nav>

              {/* Bottom nav */}
              <div className="border-t border-white/[0.06] py-3 px-2 space-y-0.5">
                {[
                  { icon: Settings, label: 'Configuración' },
                  { icon: LifeBuoy, label: 'Soporte'       },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[12px] font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] transition-colors cursor-default"
                  >
                    <Icon size={14} />
                    {label}
                  </div>
                ))}
              </div>
            </aside>

            {/* ── Main area ── */}
            <div className="flex-1 flex flex-col min-w-0 bg-[#0d1b2e]">

              {/* Topbar */}
              <div className="h-14 shrink-0 flex items-center justify-between px-5 border-b border-white/[0.06] bg-[#0a1525]/40">
                <div className="flex items-center gap-2 bg-[#0a1525] border border-white/[0.07] rounded-lg px-3 py-1.5 w-52 shadow-inner">
                  <Search size={13} className="text-slate-500" />
                  <span className="text-xs text-slate-500">Buscar...</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-400 font-medium">Admin</span>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-[11px] font-bold text-white shadow ring-1 ring-white/10">
                    AD
                  </div>
                </div>
              </div>

              {/* 2×2 content grid */}
              <div className="flex-1 overflow-hidden p-4 grid grid-rows-2 grid-cols-2 gap-3">

                {/* ── Card 1: Ingresos ── */}
                <div className="row-span-1 col-span-1 bg-[#0f2033] border border-white/[0.06] rounded-xl flex flex-col overflow-hidden">
                  <div className="px-5 pt-4 pb-2">
                    <p className="text-[9px] font-bold tracking-[0.18em] text-slate-400 uppercase">Ingresos Mensuales</p>
                    <h3 className="text-[28px] font-bold text-white tracking-tight leading-tight mt-1">€24.850</h3>
                    <span className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/20 text-cyan-400 text-[10px] font-medium">
                      <TrendingUp size={10} /> +12.5% vs mes anterior
                    </span>
                  </div>
                  <div className="flex-1 min-h-0">
                    <SparkLine />
                  </div>
                </div>

                {/* ── Card 2: Cuentas activas ── */}
                <div className="row-span-1 col-span-1 bg-[#0f2033] border border-white/[0.06] rounded-xl flex flex-col items-start justify-between p-5">
                  <p className="text-[9px] font-bold tracking-[0.18em] text-slate-400 uppercase">Cuentas Activas</p>
                  <div className="flex items-center justify-between w-full mt-2">
                    <div>
                      <p className="text-cyan-400 text-xs font-semibold mt-2">Meta Mensual: 395</p>
                      <p className="text-emerald-400 text-[10px] mt-1 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 w-max">+15 esta semana</p>
                    </div>
                    <DonutChart pct={72} />
                  </div>
                </div>

                {/* ── Card 3: Próximo evento + Alertas ── */}
                <div className="row-span-1 col-span-1 bg-[#0f2033] border border-white/[0.06] rounded-xl p-4 flex flex-col gap-3 overflow-hidden">
                  <div>
                    <p className="text-[9px] font-bold tracking-[0.18em] text-slate-400 uppercase mb-2">Próximo Evento</p>
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center shrink-0">
                        <Calendar size={14} className="text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Torneo Interno</div>
                        <div className="text-[10px] text-slate-400">2026-05-03 · Agendado por System</div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/[0.06] pt-3">
                    <p className="text-[9px] font-bold tracking-[0.18em] text-slate-400 uppercase mb-2">Alertas Críticas</p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <AlertCircle size={13} className="text-red-400 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-[11px] font-semibold text-red-400">Lucía (HR): Revisión de Asistencias</div>
                          <div className="text-[10px] text-slate-400">2 empleados exceden las horas permitidas.</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <AlertCircle size={13} className="text-orange-400 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-[11px] font-semibold text-orange-400">Luna (Estrategia): GTM</div>
                          <div className="text-[10px] text-slate-400">El lanzamiento B2B requiere atención.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Card 4: Actividad Reciente = Terminal Feed ── */}
                <div className="row-span-1 col-span-1 bg-[#0f2033] border border-white/[0.06] rounded-xl flex flex-col overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-[#0a1525]/40 shrink-0">
                    <p className="text-[9px] font-bold tracking-[0.18em] text-slate-400 uppercase">Actividad Reciente</p>
                    <span className="flex items-center gap-1.5 text-[9px] font-medium text-emerald-400 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  </div>
                  <div className="flex-1 p-4 font-mono text-[11px] overflow-hidden relative">
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-80px' }}
                      className="flex flex-col gap-2 text-slate-400"
                    >
                      {terminalLines.map((l, i) => (
                        <motion.div key={i} variants={lineVariants} className="flex gap-2">
                          <span className={`shrink-0 ${l.color}`}>{l.tag}</span>
                          <span>{l.text}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                    {/* fade */}
                    <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0f2033] to-transparent pointer-events-none" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative nodes */}
      <div className="absolute top-1/4 right-10 w-24 h-24 border border-cyan-400/10 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-10 w-32 h-32 border border-blue-500/10 rounded-full animate-pulse delay-700" />
    </section>
  )
}
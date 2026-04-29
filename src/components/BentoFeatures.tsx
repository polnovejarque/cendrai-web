import { useState } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { MousePointerClick, BarChart3, Megaphone, ArrowRight, CheckCircle2, TrendingUp, Users } from 'lucide-react'

// ── Datos de los agentes ──────────────────────────────────────────────────────
const agents = [
  {
    id: 'rafa',
    name: 'Rafa',
    role: 'Ventas B2B',
    icon: MousePointerClick,
    color: 'from-cyan-500 to-blue-600',
    description:
      'Tu closer incansable. Rafa no solo responde, sino que busca, nutre y cierra oportunidades de negocio mientras tú duermes.',
    pipeline: [
      { step: '01', label: 'Captación de leads fríos',        desc: 'Identifica y contacta prospectos relevantes de forma autónoma.' },
      { step: '02', label: 'Clasificación y scoring',          desc: 'Puntúa cada lead según su potencial de conversión.' },
      { step: '03', label: 'Contacto inicial personalizado',   desc: 'Redacta y envía el primer mensaje adaptado al perfil del cliente.' },
      { step: '04', label: 'Seguimiento constante',            desc: 'Mantiene la conversación activa sin que tengas que intervenir.' },
      { step: '05', label: 'Agendado de reuniones',            desc: 'Reserva citas directamente en tu calendario.' },
    ],
  },
  {
    id: 'carol',
    name: 'Carol',
    role: 'Administración y Finanzas',
    icon: BarChart3,
    color: 'from-violet-500 to-indigo-600',
    description:
      'Orden absoluto en tu back-office. Carol automatiza el papeleo para que tú te centres en crecer.',
    pipeline: [
      { step: '01', label: 'Recepción de datos',                 desc: 'Recoge y valida los movimientos contables de todas las fuentes.' },
      { step: '02', label: 'Creación de facturas',               desc: 'Genera y envía facturas correctas sin fricción.' },
      { step: '03', label: 'Conciliación bancaria',              desc: 'Cruza extractos automáticamente y detecta anomalías.' },
      { step: '04', label: 'Reportes financieros en tiempo real',desc: 'Dashboards actualizados siempre disponibles para la dirección.' },
    ],
  },
  {
    id: 'michael',
    name: 'Michael',
    role: 'Marketing & RRSS',
    icon: Megaphone,
    color: 'from-pink-500 to-rose-600',
    description:
      'Creación y distribución de contenido a escala. Michael planifica, genera y publica sin parar.',
    pipeline: [
      { step: '01', label: 'Análisis de tendencias',     desc: 'Detecta qué contenido funciona en tu sector y en tu audiencia.' },
      { step: '02', label: 'Generación de copys',        desc: 'Redacta textos adaptados a cada canal y formato.' },
      { step: '03', label: 'Programación multicanal',    desc: 'Agenda publicaciones en Instagram, LinkedIn, TikTok y más.' },
      { step: '04', label: 'Optimización de campañas',   desc: 'Ajusta creatividades y presupuestos según el rendimiento.' },
    ],
  },
  {
    id: 'luna',
    name: 'Luna',
    role: 'Desarrollo de Negocio',
    icon: TrendingUp,
    color: 'from-emerald-500 to-teal-600',
    description:
      'Apertura de verticales de negocio y estrategias de expansión. Experta en detectar oportunidades corporativas.',
    pipeline: [
      { step: '01', label: 'Análisis de mercado',       desc: 'Detecta nuevos nichos y segmentos rentables automáticamente.' },
      { step: '02', label: 'Prospección estratégica',   desc: 'Identifica y perfila grandes cuentas clave (Key Accounts).' },
      { step: '03', label: 'Sincronización interna',    desc: 'Se alinea con marketing para empujar estrategias conjuntas.' },
      { step: '04', label: 'Acercamiento de alto nivel',desc: 'Inicia conversaciones corporativas y precalifica oportunidades.' },
    ],
  },
  {
    id: 'lucia',
    name: 'Lucía',
    role: 'Recursos Humanos',
    icon: Users,
    color: 'from-amber-500 to-orange-600',
    description:
      'Gestión integral de tu equipo físico. Lucía controla turnos, ausencias y resuelve dudas operativas al instante.',
    pipeline: [
      { step: '01', label: 'Control de turnos',         desc: 'Organiza horarios basándose en disponibilidad y demanda.' },
      { step: '02', label: 'Gestión de ausencias',      desc: 'Tramita bajas, vacaciones y permisos sin fricción.' },
      { step: '03', label: 'Filtro de consultas',       desc: 'Resuelve el 80% de las dudas frecuentes del staff en segundos.' },
      { step: '04', label: 'Cierre de nóminas',         desc: 'Centraliza horas extras e incidencias mensuales para la gestoría.' },
    ],
  },
]

// ── Variantes de animación ────────────────────────────────────────────────────
const panelVariants: Variants = {
  enter:  { opacity: 0, x: 20 },
  center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit:   { opacity: 0, x: -20, transition: { duration: 0.2 } },
}

const stepVariants: Variants = {
  hidden:  { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.07, ease: 'easeOut' },
  }),
}

// ── Componente ────────────────────────────────────────────────────────────────
export default function BentoFeatures() {
  const [activeId, setActiveId] = useState('rafa')
  const active = agents.find((a) => a.id === activeId)!

  return (
    <section id="modulos" className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Cabecera */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="inline-block text-[11px] font-semibold tracking-[0.18em] text-cyan-400 uppercase mb-4">
            Módulos Autónomos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight max-w-3xl mx-auto leading-tight mt-1">
            Especialistas modulares para cada área.
          </h2>
          <p className="mt-5 text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            No necesitas cambiar todo tu equipo. Despliega al agente exacto para el
            cuello de botella que frena tu negocio.
          </p>
        </motion.div>

        {/* Contenedor principal: dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">

          {/* ── Columna izquierda: Navegación ── */}
          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {/* Label */}
            <p className="text-[10px] font-bold tracking-[0.18em] text-slate-500 uppercase mb-3 px-1">
              Selecciona un agente
            </p>

            {agents.map((agent) => {
              const Icon = agent.icon
              const isActive = agent.id === activeId
              return (
                <button
                  key={agent.id}
                  onClick={() => setActiveId(agent.id)}
                  className={[
                    'group relative w-full flex items-center gap-4 px-5 py-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer select-none',
                    isActive
                      ? 'bg-cyan-400/10 border-cyan-400/30 shadow-[0_4px_24px_rgba(34,211,238,0.08)]'
                      : 'bg-slate-900/40 border-white/[0.08] hover:border-white/20 hover:bg-slate-800/30',
                  ].join(' ')}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="agent-indicator"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 rounded-full bg-cyan-400"
                    />
                  )}

                  {/* Icon */}
                  <div className={[
                    'w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300',
                    isActive ? 'bg-cyan-400/20 text-cyan-400' : 'bg-white/[0.05] text-slate-500 group-hover:text-slate-300',
                  ].join(' ')}>
                    <Icon size={17} />
                  </div>

                  {/* Text */}
                  <div>
                    <p className={[
                      'text-[14px] font-semibold leading-none tracking-tight transition-colors',
                      isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200',
                    ].join(' ')}>
                      {agent.name}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1">{agent.role}</p>
                  </div>

                  {/* Chevron */}
                  <ArrowRight
                    size={14}
                    className={[
                      'ml-auto transition-all duration-200',
                      isActive ? 'text-cyan-400' : 'text-slate-600 group-hover:text-slate-400',
                    ].join(' ')}
                  />
                </button>
              )
            })}

            {/* CTA inferior */}
            <a
              href="#demo"
              className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3.5 text-[13px] font-semibold text-slate-950 hover:bg-cyan-300 transition-colors shadow-[0_0_24px_-4px_rgba(34,211,238,0.7)]"
            >
              Solicitar Presupuesto
              <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* ── Columna derecha: Panel de detalle ── */}
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-slate-900/50 backdrop-blur-xl min-h-[460px]">

            {/* Top glow line */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px pointer-events-none"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.5), transparent)' }}
            />

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeId}
                variants={panelVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="p-8 md:p-10 flex flex-col gap-8"
              >
                {/* Agent header */}
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${active.color} flex items-center justify-center shrink-0 shadow-lg`}>
                    <active.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.18em] text-cyan-400 uppercase mb-1">
                      {active.role}
                    </p>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{active.name}</h3>
                    <p className="text-sm text-slate-400 mt-2 leading-relaxed max-w-lg">
                      {active.description}
                    </p>
                  </div>
                </div>

                {/* Pipeline */}
                <div>
                  <p className="text-[10px] font-bold tracking-[0.18em] text-slate-500 uppercase mb-5">
                    Pipeline de trabajo
                  </p>

                  <div className="flex flex-col gap-3">
                    {active.pipeline.map((item, i) => (
                      <motion.div
                        key={item.step}
                        custom={i}
                        variants={stepVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-start gap-4 p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-400/20 transition-all group cursor-default"
                      >
                        {/* Step number */}
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 bg-cyan-400/10 border border-cyan-400/20 group-hover:bg-cyan-400/15 transition-colors">
                          <CheckCircle2 size={15} className="text-cyan-400" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[10px] font-mono text-cyan-400/60">{item.step}</span>
                            <span className="text-[14px] font-semibold text-slate-100 leading-none">{item.label}</span>
                          </div>
                          <p className="text-[12px] text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer badge */}
                <div className="flex items-center gap-2 pt-2 border-t border-white/[0.05]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] text-slate-500">
                    Despliegue e integración en <span className="text-white font-medium">menos de 48h</span>.
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
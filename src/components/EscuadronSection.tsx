import { useState } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { Target, BarChart3, Users, Zap, Briefcase, Megaphone, CheckCircle, Brain, Shield, Clock } from 'lucide-react'

// ── Data: El Escuadrón Completo ───────────────────────────────────────────────
const agents = [
  {
    id: 'rafa',
    role: 'Corporate Sales & Events',
    name: 'Rafa',
    avatar: 'R',
    status: 'Procesando 47 tareas activas',
    version: 'v2.4.1',
    description: 'Rafa está listo. Haz clic para conocer a tu Agente Comercial.',
    tagline: 'Automatiza tu pipeline corporativo y cierre de eventos.',
    personality: 'Rafa nunca olvida un seguimiento, nunca se equivoca en un número y nunca necesita dormir. Analítico, preciso y orientado a objetivos.',
    traits: ['Persuasivo', 'Proactivo', 'Preciso', 'Estratégico'],
    superpowers: [
      { id: 'crm', title: 'Automatiza CRM', desc: 'Leads, seguimientos y cierres sin intervención humana.', icon: <Target size={16} /> },
      { id: 'ops', title: 'Opera 24/7', desc: 'Sin pausas ni vacaciones. Consistencia perfecta.', icon: <Clock size={16} /> },
      { id: 'decisions', title: 'Apoyo en Toma de Decisiones', desc: 'Evalúa datos en tiempo real y presenta opciones con criterio.', icon: <Brain size={16} /> },
      { id: 'comms', title: 'Comunica por ti', desc: 'Emails e informes con el tono de tu marca.', icon: <Megaphone size={16} /> },
    ]
  },
  {
    id: 'michael',
    role: 'Marketing & Media Agent',
    name: 'Michael',
    avatar: 'M',
    status: 'Optimizando 3 campañas activas',
    version: 'v1.8.0',
    description: 'Michael está en línea. Haz clic para conocer a tu CMO Digital.',
    tagline: 'Gestión de activos, contenido y campañas multicanal.',
    personality: 'Obsesionado con la coherencia visual y el ROI. Michael audita cada asset, programa calendarios y ajusta llamadas a la acción al milímetro.',
    traits: ['Creativo', 'Analítico', 'Brand Guardian', 'Metódico'],
    superpowers: [
      { id: 'brand', title: 'Auditoría de Marca', desc: 'Mantiene la coherencia visual estricta en todo momento.', icon: <Shield size={16} /> },
      { id: 'assets', title: 'Gestión de Activos', desc: 'Categoriza y rota inventarios para evitar fatiga visual.', icon: <Briefcase size={16} /> },
      { id: 'campaigns', title: 'Ejecución de Campañas', desc: 'Lanza promociones con CTAs precisas y timing perfecto.', icon: <Zap size={16} /> },
      { id: 'analytics', title: 'Analítica de Rendimiento', desc: 'Genera reportes de alcance, retención y conversión.', icon: <BarChart3 size={16} /> },
      { id: 'social', title: 'Instagram / TikTok / Meta', desc: 'Agenda el calendario de creaciones durante meses de forma automática.', icon: <Megaphone size={16} /> },
      { id: 'dm', title: 'Contestación de DM', desc: 'Responde mensajes directos en redes sociales de forma automática y personalizada.', icon: <Target size={16} /> },
    ]
  },
  {
    id: 'luna',
    role: 'Business Development',
    name: 'Luna',
    avatar: 'L',
    status: 'Analizando 12 leads B2B',
    version: 'v2.1.0',
    description: 'Luna está operativa. Haz clic para conocer a tu Head of Sales.',
    tagline: 'Abre verticales de negocio y estrategias de cross-selling.',
    personality: 'Experta en detectar oportunidades donde otros ven ruido. Luna cruza datos de diferentes departamentos para maximizar el valor de cada cliente.',
    traits: ['Expansiva', 'Perspicaz', 'Conectora', 'Estratégica'],
    superpowers: [
      { id: 'markets', title: 'Apertura de Mercados', desc: 'Capta nuevos segmentos corporativos e internacionales.', icon: <Target size={16} /> },
      { id: 'sync', title: 'Sincronización', desc: 'Se alinea con marketing para empujar campañas conjuntas.', icon: <Users size={16} /> },
    ]
  },
  {
    id: 'carol',
    role: 'Finance & Data Ops',
    name: 'Carol',
    avatar: 'C',
    status: 'Sincronizando APIs financieras',
    version: 'v3.0.2',
    description: 'Carol monitoriza. Haz clic para conocer a tu Agente Financiero.',
    tagline: 'Facturación automatizada y orquestación de datos.',
    personality: 'Precisión milimétrica. Carol no asume, verifica. Controla el flujo de caja, filtra duplicados y alerta de anomalías antes de que ocurran.',
    traits: ['Precisa', 'Incorruptible', 'Rápida', 'Metódica'],
    superpowers: [
      { id: 'billing', title: 'Facturación Auto', desc: 'Recopila y filtra facturas para la gestoría sin errores.', icon: <CheckCircle size={16} /> },
      { id: 'bi', title: 'Reportes BI', desc: 'Cruza APIs para generar Business Intelligence en tiempo real.', icon: <BarChart3 size={16} /> },
      { id: 'alerts', title: 'Alertas Críticas', desc: 'Monitoriza stock y avisa al alcanzar umbrales de riesgo.', icon: <Zap size={16} /> },
    ]
  },
  {
    id: 'lucia',
    role: 'HR & Team Operations',
    name: 'Lucía',
    avatar: 'L',
    status: 'Gestionando 4 horarios',
    version: 'v1.5.5',
    description: 'Lucía está atenta. Haz clic para conocer a tu Agente de RRHH.',
    tagline: 'Control de turnos, ausencias y pre-nóminas.',
    personality: 'Empática pero estricta con los procesos. Lucía es el puente entre la gerencia y el equipo físico, asegurando que la operativa diaria no tenga fisuras.',
    traits: ['Organizada', 'Comunicativa', 'Resolutiva', 'Eficiente'],
    superpowers: [
      { id: 'shifts', title: 'Control de Turnos', desc: 'Gestiona la disponibilidad del equipo físico al segundo.', icon: <Clock size={16} /> },
      { id: 'absence', title: 'Ausencias', desc: 'Tramita días libres y bajas médicas del personal.', icon: <Users size={16} /> },
      { id: 'payroll', title: 'Cierre de Nóminas', desc: 'Prepara el volcado mensual de horas extra e incidencias.', icon: <CheckCircle size={16} /> },
      { id: 'filter', title: 'Filtro Operativo', desc: 'Resuelve dudas del día a día del staff automáticamente.', icon: <Shield size={16} /> },
    ]
  }
]

// ── Stagger variants con tipado correcto ──────────────────────────────────────
const spContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}
const spItem: Variants = {
  hidden: { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' as const } },
}

export default function EscuadronSection() {
  // Estado para controlar qué agente está expandido (null = ninguno)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="agentes" className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="inline-block text-[11px] font-semibold tracking-[0.18em] text-cyan-200 uppercase mb-4">
            Infraestructura Autónoma
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight max-w-2xl mx-auto leading-tight mb-6">
            Conoce a tu Escuadrón.
          </h2>
          <p className="mt-4 text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            No desplegamos chatbots. Desplegamos perfiles ejecutivos autónomos capaces de coordinarse entre sí y operar áreas completas de tu empresa.
          </p>
        </motion.div>

        {/* Lista de Agentes */}
        <div className="max-w-3xl mx-auto space-y-6">
          {agents.map((agent, index) => {
            const isExpanded = expandedId === agent.id

            return (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
                className="relative"
              >
                {/* ── CTA Trigger ── */}
                <motion.div
                  onClick={() => toggleExpand(agent.id)}
                  className={`cursor-pointer relative rounded-[28px] overflow-hidden bg-white/[0.08] border transition-colors duration-300 select-none ${
                    isExpanded ? 'border-cyan-400/30 shadow-[0_8px_40px_rgba(6,182,212,0.12)]' : 'border-white/[0.14] shadow-[0_1px_3px_rgba(0,0,0,0.15)]'
                  }`}
                  whileHover={{ scale: isExpanded ? 1 : 1.005 }}
                  whileTap={{ scale: 0.995 }}
                >
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 hover:opacity-100"
                    style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(6,182,212,0.1) 0%, transparent 65%)' }}
                  />

                  <div className="relative flex items-center justify-between gap-6 p-6 md:p-8">
                    <div className="flex items-center gap-5">
                      {/* Animated avatar */}
                      <div
                        className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl shrink-0 flex items-center justify-center"
                        style={{
                          background: 'radial-gradient(circle at 35% 35%, rgba(6,182,212,0.22) 0%, rgba(6,182,212,0.06) 100%)',
                          border: '1px solid rgba(6,182,212,0.25)',
                        }}
                      >
                        <motion.span
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                          className="text-xl md:text-2xl font-bold text-cyan-200 tracking-tighter"
                        >
                          {agent.avatar}
                        </motion.span>
                        <motion.div
                          animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: index * 0.5 }}
                          className="absolute inset-0 rounded-2xl border border-cyan-200/40"
                        />
                      </div>

                      <div>
                        <p className="text-[10px] md:text-[11px] font-semibold tracking-[0.16em] text-cyan-200 uppercase mb-1">
                          {agent.role} · En línea
                        </p>
                        <p className="text-[15px] md:text-[17px] font-semibold text-white leading-snug tracking-tight">
                          {agent.description}
                        </p>
                        <p className="hidden md:block text-sm text-slate-500 mt-1 font-normal">
                          {agent.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/[0.1] flex items-center justify-center text-slate-500"
                    >
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Status bar */}
                  <div className="relative border-t border-white/[0.05] px-6 md:px-8 py-2.5 flex items-center gap-3 bg-white/[0.02]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] md:text-[11px] text-slate-500 tracking-wide">
                      {agent.status}
                    </span>
                    <span className="ml-auto text-[10px] md:text-[11px] font-semibold text-slate-600 tracking-widest uppercase">
                      {agent.version}
                    </span>
                  </div>
                </motion.div>

                {/* ── Expandable panel ── */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key={`expanded-${agent.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div
                        className="mt-3 rounded-[28px] overflow-hidden bg-slate-900 border border-cyan-400/20"
                        style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.2), 0 4px 16px rgba(6,182,212,0.06)' }}
                      >
                        <div className="absolute inset-x-0 top-0 h-32 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(6,182,212,0.12) 0%, transparent 70%)' }} />

                        {/* Panel Header */}
                        <div className="relative flex items-center justify-between px-8 md:px-10 pt-7 pb-5 border-b border-white/[0.06]">
                          <div className="flex items-center gap-4">
                            <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl font-bold text-cyan-200 shrink-0 border border-cyan-400/30 bg-cyan-400/10">
                              {agent.avatar}
                            </div>
                            <div>
                              <p className="text-[10px] font-semibold tracking-[0.18em] text-cyan-200 uppercase mb-0.5">
                                Perfil Detallado
                              </p>
                              <h3 className="text-[17px] font-semibold text-white tracking-tight leading-none flex items-center gap-2">
                                {agent.name}
                                <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 px-2 py-0.5 rounded-full tracking-wider uppercase">
                                  <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                                  En línea
                                </span>
                              </h3>
                            </div>
                          </div>
                          <button
                            onClick={(e) => { e.stopPropagation(); setExpandedId(null) }}
                            className="w-8 h-8 rounded-full border border-white/[0.1] flex items-center justify-center text-slate-500 hover:text-slate-200 hover:border-white/20 hover:bg-white/[0.06] transition-all"
                          >
                            <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                          </button>
                        </div>

                        {/* Panel Body */}
                        <div className="relative grid grid-cols-1 md:grid-cols-2">
                          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/[0.05]">
                            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
                              <h4 className="text-[13px] font-semibold text-white mb-3">Personalidad y Enfoque</h4>
                              <p className="text-[13px] text-slate-400 leading-relaxed mb-5">{agent.personality}</p>
                              <div className="flex flex-wrap gap-2">
                                {agent.traits.map((t) => (
                                  <span key={t} className="text-[11px] font-semibold text-cyan-200 bg-cyan-400/5 border border-cyan-400/20 px-3 py-1 rounded-full tracking-wide">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          </div>

                          <div className="p-8 md:p-10">
                            <p className="text-[11px] font-semibold tracking-[0.16em] text-slate-500 uppercase mb-5">Capacidades Técnicas</p>
                            <motion.div className="grid grid-cols-1 gap-3" variants={spContainer} initial="hidden" animate="visible">
                              {agent.superpowers.map((sp) => (
                                <motion.div key={sp.id} variants={spItem} className="flex items-start gap-3.5 p-3 rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-400/20 transition-all cursor-default">
                                  <div className="w-8 h-8 rounded-xl flex items-center justify-center text-cyan-400 bg-cyan-400/10 shrink-0">
                                    {sp.icon}
                                  </div>
                                  <div>
                                    <p className="text-[13px] font-semibold text-white mb-0.5">{sp.title}</p>
                                    <p className="text-[11px] text-slate-400 leading-relaxed">{sp.desc}</p>
                                  </div>
                                </motion.div>
                              ))}
                            </motion.div>
                          </div>
                        </div>

                        {/* Panel Footer */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="border-t border-white/[0.06] px-8 md:px-10 py-5 flex items-center justify-between">
                          <p className="text-[12px] text-slate-500">Despliegue e integración en <span className="text-white font-medium">menos de 48h</span>.</p>
                          <a href="#demo" className="px-6 py-2.5 rounded-full bg-cyan-400 text-slate-950 text-xs font-bold hover:bg-cyan-300 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                            Asignar Tareas
                          </a>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
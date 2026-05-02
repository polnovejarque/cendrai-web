import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
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
      { id: 'crm', title: 'Automatiza CRM', desc: 'Leads, seguimientos y cierres sin intervención humana.', icon: <Target size={18} /> },
      { id: 'ops', title: 'Opera 24/7', desc: 'Sin pausas ni vacaciones. Consistencia perfecta.', icon: <Clock size={18} /> },
      { id: 'decisions', title: 'Apoyo en Toma de Decisiones', desc: 'Evalúa datos en tiempo real y presenta opciones con criterio.', icon: <Brain size={18} /> },
      { id: 'comms', title: 'Comunica por ti', desc: 'Emails e informes con el tono de tu marca.', icon: <Megaphone size={18} /> },
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
      { id: 'brand', title: 'Auditoría de Marca', desc: 'Mantiene la coherencia visual estricta en todo momento.', icon: <Shield size={18} /> },
      { id: 'assets', title: 'Gestión de Activos', desc: 'Categoriza y rota inventarios para evitar fatiga visual.', icon: <Briefcase size={18} /> },
      { id: 'campaigns', title: 'Ejecución de Campañas', desc: 'Lanza promociones con CTAs precisas y timing perfecto.', icon: <Zap size={18} /> },
      { id: 'analytics', title: 'Analítica de Rendimiento', desc: 'Genera reportes de alcance, retención y conversión.', icon: <BarChart3 size={18} /> },
      { id: 'social', title: 'Meta / Instagram / TikTok', desc: 'Agenda el calendario de creaciones durante meses de forma automática.', icon: <Megaphone size={18} /> },
      { id: 'dm', title: 'Contestación de DM', desc: 'Responde mensajes directos en redes de forma automática y personalizada.', icon: <Target size={18} /> },
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
    personality: 'Experta en detectar oportunidades donde otros ven ruido. Luna cruza datos para maximizar el valor de cada cliente.',
    traits: ['Expansiva', 'Perspicaz', 'Conectora', 'Estratégica'],
    superpowers: [
      { id: 'markets', title: 'Apertura de Mercados', desc: 'Capta nuevos segmentos corporativos e internacionales.', icon: <Target size={18} /> },
      { id: 'sync', title: 'Sincronización', desc: 'Se alinea con marketing para empujar campañas conjuntas.', icon: <Users size={18} /> },
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
      { id: 'billing', title: 'Facturación Auto', desc: 'Recopila y filtra facturas para la gestoría sin errores.', icon: <CheckCircle size={18} /> },
      { id: 'bi', title: 'Reportes BI', desc: 'Cruza APIs para generar Business Intelligence en tiempo real.', icon: <BarChart3 size={18} /> },
      { id: 'alerts', title: 'Alertas Críticas', desc: 'Monitoriza stock y avisa al alcanzar umbrales de riesgo.', icon: <Zap size={18} /> },
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
    personality: 'Empática pero estricta con los procesos. Lucía es el puente entre la gerencia y el equipo, asegurando que la operativa diaria no tenga fisuras.',
    traits: ['Organizada', 'Comunicativa', 'Resolutiva', 'Eficiente'],
    superpowers: [
      { id: 'shifts', title: 'Control de Turnos', desc: 'Gestiona la disponibilidad del equipo físico al segundo.', icon: <Clock size={18} /> },
      { id: 'absence', title: 'Ausencias', desc: 'Tramita días libres y bajas médicas del personal.', icon: <Users size={18} /> },
      { id: 'payroll', title: 'Cierre de Nóminas', desc: 'Prepara el volcado mensual de horas extra e incidencias.', icon: <CheckCircle size={18} /> },
      { id: 'filter', title: 'Filtro Operativo', desc: 'Resuelve dudas del día a día del staff automáticamente.', icon: <Shield size={18} /> },
    ]
  }
]

export default function EscuadronSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  return (
    <section id="agentes" className="bg-background relative">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        {/* Section header */}
        <motion.div
          className="text-center mb-10"
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
      </div>

      <div ref={containerRef} className="relative w-full pb-[10vh]">
        {agents.map((agent, i) => {
          // Calculamos la escala final (cada tarjeta se encoge ligeramente más que la anterior)
          const targetScale = 1 - ((agents.length - i) * 0.04)
          // El rango de progreso en el que esta tarjeta empieza a reducir su escala
          const range = [i / agents.length, 1]

          return (
            <StickyCard 
              key={agent.id} 
              i={i} 
              agent={agent} 
              progress={scrollYProgress} 
              range={range} 
              targetScale={targetScale} 
            />
          )
        })}
      </div>
    </section>
  )
}

interface StickyCardProps {
  i: number
  agent: typeof agents[0]
  progress: MotionValue<number>
  range: number[]
  targetScale: number
}

function StickyCard({ i, agent, progress, range, targetScale }: StickyCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Usamos el progreso global para escalar y oscurecer la tarjeta cuando es superada por la siguiente
  const scale = useTransform(progress, range, [1, targetScale])
  const opacity = useTransform(progress, range, [1, 0.4])

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-6">
      <motion.div 
        style={{ scale, opacity, top: `calc(10vh + ${i * 15}px)` }} 
        className="relative flex flex-col md:flex-row w-full max-w-6xl h-[85vh] md:h-[80vh] bg-slate-950 border border-t-slate-800 border-x-slate-800/50 border-b-transparent rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.6)] overflow-hidden"
      >
        {/* Glow de fondo */}
        <div className="absolute inset-x-0 top-0 h-40 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(6,182,212,0.15) 0%, transparent 70%)' }} />

        {/* Columna Izquierda: Perfil y Personalidad */}
        <div className="relative w-full md:w-5/12 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/[0.05] flex flex-col">
          <div className="flex items-center gap-5 mb-8">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-bold text-cyan-200 shrink-0 border border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              {agent.avatar}
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] text-cyan-200 uppercase mb-1">
                {agent.role}
              </p>
              <h3 className="text-3xl font-bold text-white tracking-tight leading-none">
                {agent.name}
              </h3>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-wider w-fit mb-8 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {agent.status}
          </div>

          <h4 className="text-[16px] md:text-[18px] font-semibold text-white mb-4 leading-snug">
            {agent.tagline}
          </h4>
          <p className="text-[13px] md:text-[14px] text-slate-400 leading-relaxed mb-8">
            {agent.personality}
          </p>

          <div className="mt-auto hidden md:block">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-slate-500 uppercase mb-3">Rasgos</p>
            <div className="flex flex-wrap gap-2">
              {agent.traits.map((t) => (
                <span key={t} className="text-[12px] font-medium text-cyan-200 bg-cyan-400/5 border border-cyan-400/20 px-4 py-1.5 rounded-full tracking-wide">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Columna Derecha: Capacidades Técnicas y CTA */}
        <div className="relative w-full md:w-7/12 p-8 md:p-12 flex flex-col bg-slate-900/20">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-slate-500 uppercase mb-6 hidden md:block">Capacidades Técnicas</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-auto overflow-y-auto pb-4" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(34,211,238,0.2) transparent' }}>
            {agent.superpowers.map((sp) => (
              <div key={sp.id} className="flex flex-col gap-3 p-5 rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-400/20 transition-colors duration-300">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-cyan-400 bg-cyan-400/10 shrink-0">
                  {sp.icon}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-white mb-1.5">{sp.title}</p>
                  <p className="text-[12px] text-slate-400 leading-relaxed">{sp.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6 shrink-0">
            <p className="text-[13px] text-slate-500 hidden sm:block">Despliegue e integración en <span className="text-white font-medium">menos de 48h</span>.</p>
            <a 
              href="https://calendly.com/pol-novejarque-cendrai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-cyan-400 text-slate-950 text-[14px] font-bold hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2 group"
            >
              Asignar Tareas
              <svg className="transition-transform duration-300 group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>

      </motion.div>
    </div>
  )
}
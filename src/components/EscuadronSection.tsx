import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
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
    tagline: 'Automatiza tu pipeline corporativo y cierre de eventos.',
    personality: 'Rafa nunca olvida un seguimiento, nunca se equivoca en un número y nunca necesita dormir. Analítico, preciso y orientado a objetivos.',
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
    tagline: 'Gestión de activos, contenido y campañas multicanal.',
    personality: 'Obsesionado con la coherencia visual y el ROI. Michael audita cada asset, programa calendarios y ajusta llamadas a la acción al milímetro.',
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
    tagline: 'Abre verticales de negocio y estrategias de cross-selling.',
    personality: 'Experta en detectar oportunidades donde otros ven ruido. Luna cruza datos para maximizar el valor de cada cliente.',
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
    tagline: 'Facturación automatizada y orquestación de datos.',
    personality: 'Precisión milimétrica. Carol no asume, verifica. Controla el flujo de caja, filtra duplicados y alerta de anomalías antes de que ocurran.',
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
    tagline: 'Control de turnos, ausencias y pre-nóminas.',
    personality: 'Empática pero estricta con los procesos. Lucía es el puente entre la gerencia y el equipo, asegurando que la operativa diaria no tenga fisuras.',
    superpowers: [
      { id: 'shifts', title: 'Control de Turnos', desc: 'Gestiona la disponibilidad del equipo físico al segundo.', icon: <Clock size={18} /> },
      { id: 'absence', title: 'Ausencias', desc: 'Tramita días libres y bajas médicas del personal.', icon: <Users size={18} /> },
      { id: 'payroll', title: 'Cierre de Nóminas', desc: 'Prepara el volcado mensual de horas extra e incidencias.', icon: <CheckCircle size={18} /> },
      { id: 'filter', title: 'Filtro Operativo', desc: 'Resuelve dudas del día a día del staff automáticamente.', icon: <Shield size={18} /> },
    ]
  }
]

export default function EscuadronSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="escuadron" className="bg-background relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-20 lg:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="inline-block text-[11px] font-semibold tracking-[0.18em] text-cyan-200 uppercase mb-4">
            Infraestructura Autónoma
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight max-w-2xl mx-auto leading-tight mb-6">
            Conoce a tu Escuadrón.
          </h2>
          <p className="mt-4 text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            No desplegamos chatbots. Desplegamos perfiles ejecutivos autónomos capaces de coordinarse entre sí y operar áreas completas de tu empresa.
          </p>
        </motion.div>

        {/* ── LAYOUT ESCRITORIO (Scrollspy Split Screen) ── */}
        <div className="hidden lg:flex flex-row gap-10 items-start relative">
          
          {/* Columna Izquierda: Tarjetas (Filas) Apilables */}
          <div className="w-5/12 flex flex-col pb-[30vh]">
            {agents.map((agent, i) => (
              <AgentScrollItem 
                key={agent.id} 
                agent={agent} 
                index={i} 
                isActive={activeIndex === i}
                onActive={() => setActiveIndex(i)} 
              />
            ))}
          </div>

          {/* Columna Derecha: Panel Dinámico (Transición de dentro a fuera) */}
          <div className="w-7/12 sticky top-28 h-[calc(100vh-140px)] flex flex-col">
            <AnimatePresence mode="wait">
              <AgentDetailsPanel key={activeIndex} agent={agents[activeIndex]} />
            </AnimatePresence>
          </div>

        </div>

        {/* ── LAYOUT MÓVIL (Stack Normal) ── */}
        <div className="lg:hidden flex flex-col gap-12">
          {agents.map((agent) => (
            <div key={`mobile-${agent.id}`} className="flex flex-col gap-4">
              {/* Header Card */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold text-cyan-200 bg-cyan-400/10 border border-cyan-400/20">
                    {agent.avatar}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1 text-cyan-400">
                      {agent.role}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                      {agent.name}
                    </h3>
                  </div>
                </div>
              </div>
              {/* Panel Details */}
              <AgentDetailsPanel agent={agent} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ── COMPONENTES INTERNOS ─────────────────────────────────────────────────────────

interface AgentScrollItemProps {
  agent: typeof agents[0]
  index: number
  isActive: boolean
  onActive: () => void
}

function AgentScrollItem({ agent, index, isActive, onActive }: AgentScrollItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  // Se activa cuando el centro de este div cruza el centro de la pantalla
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" })

  useEffect(() => {
    if (isInView) {
      onActive()
    }
  }, [isInView, onActive])

  return (
    // Altura del contenedor define cuánto tiempo dura "activo" este agente durante el scroll
    <div ref={ref} className="h-[80vh] w-full relative">
      <div 
        className="sticky w-full transition-all duration-500 z-10"
        style={{ top: `calc(112px + ${index * 95}px)` }} // Crea el efecto apilado escalonado
      >
        <div className={`p-6 rounded-[2rem] border transition-all duration-500 shadow-2xl ${
          isActive 
            ? 'bg-slate-900 border-cyan-500/40 shadow-cyan-500/10 scale-100 opacity-100' 
            : 'bg-[#0B1120] border-slate-800/60 scale-[0.96] opacity-40 hover:opacity-100 hover:scale-[0.98]'
        }`}>
          <div className="flex items-center gap-5">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0 transition-all duration-500 ${
              isActive ? 'text-cyan-100 bg-cyan-500/20 border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]' : 'text-slate-400 bg-slate-800/50 border border-slate-700'
            }`}>
              {agent.avatar}
            </div>
            <div>
              <p className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-1 transition-colors duration-500 ${
                isActive ? 'text-cyan-400' : 'text-slate-500'
              }`}>
                {agent.role}
              </p>
              <h3 className={`text-2xl font-bold tracking-tight transition-colors duration-500 ${
                isActive ? 'text-white' : 'text-slate-400'
              }`}>
                {agent.name}
              </h3>
            </div>
          </div>
          
          {/* Barra de estado: solo visible cuando está activo */}
          <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-20 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}>
             <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
               {agent.status}
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AgentDetailsPanel({ agent }: { agent: typeof agents[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full bg-[#0B1120] border border-slate-800 rounded-[2rem] p-6 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col h-full overflow-hidden relative"
    >
      {/* Resplandor superior sutil */}
      <div className="absolute inset-x-0 top-0 h-40 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(6,182,212,0.1) 0%, transparent 70%)' }} />

      <h4 className="relative text-[20px] font-semibold text-white mb-4 leading-snug">
        {agent.tagline}
      </h4>
      <p className="relative text-[14px] text-slate-400 leading-relaxed mb-8">
        {agent.personality}
      </p>

      <p className="relative text-[11px] font-bold tracking-[0.16em] text-slate-500 uppercase mb-5">
        Capacidades Técnicas
      </p>
      
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(34,211,238,0.2) transparent' }}>
        {agent.superpowers.map((sp) => (
          <div key={sp.id} className="bg-slate-900/50 rounded-xl p-5 border border-white/[0.03] hover:bg-slate-800/60 hover:border-cyan-500/20 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-cyan-400 w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0">
                {sp.icon}
              </div>
              <h5 className="text-[14px] font-semibold text-white">{sp.title}</h5>
            </div>
            <p className="text-[12px] text-slate-400 leading-relaxed">
              {sp.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="relative mt-auto pt-6 border-t border-white/[0.06] flex flex-col xl:flex-row items-center justify-between gap-6 shrink-0">
        <a 
          href="https://calendly.com/cendrai" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full px-8 py-3.5 rounded-xl bg-cyan-400 text-slate-950 text-[14px] font-bold hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2 group"
        >
          Asignar Tareas
          <svg className="transition-transform duration-300 group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </a>
      </div>
    </motion.div>
  )
}

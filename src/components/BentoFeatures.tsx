import { useState } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { ArrowRight, CheckCircle2, Link2, Zap, ShieldCheck } from 'lucide-react'

// ── Datos de la Infraestructura ────────────────────────────────────────────────
const infrastructure = [
  {
    id: 'integracion',
    name: 'Integración',
    role: 'Conexión nativa',
    icon: Link2,
    color: 'from-cyan-500 to-blue-600',
    title: 'Conexión nativa con tu ecosistema',
    description:
      'Cendrai no es un silo aislado. Se conecta a tus herramientas actuales para operar exactamente donde tu empresa ya trabaja.',
    pipeline: [
      { step: '01', label: 'Sincronización bidireccional', desc: 'Integración nativa con CRMs (HubSpot, Salesforce, Pipedrive).' },
      { step: '02', label: 'Despliegue en canales',       desc: 'Operativa directa en WhatsApp, Slack y Microsoft Teams.' },
      { step: '03', label: 'Conexión financiera',         desc: 'Enlace seguro con pasarelas de pago y ERPs (Stripe, Holded).' },
    ],
  },
  {
    id: 'rendimiento',
    name: 'Rendimiento',
    role: 'Ejecución continua',
    icon: Zap,
    color: 'from-amber-500 to-orange-600',
    title: 'Ejecución ininterrumpida sin latencia',
    description:
      'Operaciones continuas que absorben cualquier pico de demanda sin fatiga y sin errores humanos.',
    pipeline: [
      { step: '01', label: 'Respuesta en milisegundos',   desc: 'Interacción en tiempo real en cualquier canal de comunicación.' },
      { step: '02', label: 'Escalabilidad dinámica',      desc: 'Infraestructura de servidores que se ajusta a la carga de trabajo.' },
      { step: '03', label: 'Auto-recuperación',           desc: 'Manejo de errores y redundancia activa sin intervención manual.' },
    ],
  },
  {
    id: 'seguridad',
    name: 'Seguridad',
    role: 'Grado corporativo',
    icon: ShieldCheck,
    color: 'from-emerald-500 to-teal-600',
    title: 'Tus datos operativos, blindados',
    description:
      'Arquitectura de máxima seguridad con control total sobre los permisos y la información que manejan los agentes.',
    pipeline: [
      { step: '01', label: 'Encriptación E2E',            desc: 'Protección de datos de extremo a extremo en tránsito y reposo.' },
      { step: '02', label: 'Cumplimiento normativo',      desc: 'Adhesión estricta a RGPD y estándares de seguridad corporativa.' },
      { step: '03', label: 'Registro de auditoría',       desc: 'Log completo de acciones y override manual para administradores.' },
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
  const [activeId, setActiveId] = useState('integracion')
  const active = infrastructure.find((a) => a.id === activeId)!

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
            Infraestructura diseñada para escalar.
          </h2>
          <p className="mt-5 text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            No es solo inteligencia. Es un motor de operaciones robusto, seguro y conectado directamente a las herramientas que ya utilizas.
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
              Capacidades
            </p>

            {infrastructure.map((item) => {
              const Icon = item.icon
              const isActive = item.id === activeId
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
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
                      layoutId="infra-indicator"
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
                      {item.name}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1">{item.role}</p>
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
                {/* Infra header */}
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${active.color} flex items-center justify-center shrink-0 shadow-lg`}>
                    <active.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.18em] text-cyan-400 uppercase mb-1">
                      {active.role}
                    </p>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{active.title}</h3>
                    <p className="text-sm text-slate-400 mt-2 leading-relaxed max-w-lg">
                      {active.description}
                    </p>
                  </div>
                </div>

                {/* Pipeline / Features */}
                <div>
                  <p className="text-[10px] font-bold tracking-[0.18em] text-slate-500 uppercase mb-5">
                    Características clave
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
                            <span className="text-[14px] font-semibold text-slate-100 leading-none">{item.label}</span>
                          </div>
                          <p className="text-[12px] text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
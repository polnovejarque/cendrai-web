import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Search, LayoutDashboard, Rocket, Zap } from 'lucide-react'

interface Feature {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  tag?: string
  accent?: boolean
  colSpan?: string
}

const features: Feature[] = [
  {
    id: 'infra',
    title: 'Infraestructura de Agentes',
    description:
      'Arquitectura modular diseñada para escalar. Tus agentes (Rafa, Michael, Luna...) se comunican entre sí para resolver tareas complejas sin intervención humana.',
    icon: <Cpu size={22} />,
    tag: 'Ecosistema',
    colSpan: 'md:col-span-2',
  },
  {
    id: 'audit',
    title: 'Auditoría Operativa',
    description:
      'Michael y Carol analizan tus procesos actuales para identificar cuellos de botella y oportunidades de automatización inmediata.',
    icon: <Search size={22} />,
    tag: 'Análisis',
  },
  {
    id: 'control',
    title: 'Control Centralizado',
    description:
      'Un panel unificado para supervisar las métricas de Carol, el pipeline de Rafa y las campañas de Michael en tiempo real.',
    icon: <LayoutDashboard size={22} />,
    tag: 'Operaciones',
    accent: true,
  },
  {
    id: 'deploy',
    title: 'Despliegue de Escuadrón',
    description:
      'Integración nativa en días con WhatsApp, HubSpot y tu CRM. Conectamos tus herramientas para que la IA actúe donde están tus clientes.',
    icon: <Rocket size={22} />,
    tag: 'Integración',
    colSpan: 'md:col-span-2',
  },
  {
    id: 'agents',
    title: 'Ejecución 24/7',
    description:
      'Luna en ventas, Lucía en operaciones y Carol en finanzas trabajando en paralelo. Sin descanso, sin errores, escalando tu negocio cada segundo.',
    icon: <Zap size={22} />,
    tag: 'Autonomía',
  },
]

// ── Variants ─────────────────────────────────────────────────────────────────
const sectionReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}
const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const cardReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

export default function BentoFeatures() {
  return (
    <section id="plataforma" className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="inline-block text-[11px] font-semibold tracking-[0.18em] text-cyan-400 uppercase mb-4">
            Capacidades
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight max-w-2xl mx-auto leading-tight mt-1">
            Todo lo que necesitas para operar con inteligencia.
          </h2>
          <p className="mt-5 text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Un ecosistema de agentes ejecutivos diseñado para transformar operaciones
            complejas en ventajas competitivas exponenciales.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardReveal}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={[
                'group relative rounded-3xl p-10',
                'border transition-all duration-300 cursor-default overflow-hidden',
                feature.colSpan ?? '',
                feature.accent
                  ? 'bg-cyan-400/10 border-cyan-400/30'
                  : 'bg-slate-900/40 border-white/10 hover:border-cyan-400/30',
              ].join(' ')}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 30% 30%, rgba(34,211,238,0.05) 0%, transparent 65%)',
                }}
              />

              {/* Accent card top glow line */}
              {feature.accent && (
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent 0%, rgba(34,211,238,0.6) 50%, transparent 100%)',
                  }}
                />
              )}

              {/* Tag */}
              {feature.tag && (
                <span className="inline-block text-[10px] font-semibold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full mb-6 bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                  {feature.tag}
                </span>
              )}

              {/* Icon */}
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5 bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold leading-snug mb-3 tracking-tight text-slate-100">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-400">
                {feature.description}
              </p>

              {/* Arrow link */}
              <div className="mt-6 flex items-center gap-1.5 text-[12px] font-semibold tracking-wide text-slate-500 group-hover:text-cyan-400 transition-colors duration-200">
                Detalles del módulo
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
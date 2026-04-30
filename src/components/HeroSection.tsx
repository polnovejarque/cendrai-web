import { useRef, useState } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { ArrowRight, CheckCheck } from 'lucide-react'
import CendraiModal from './CendraiModal'

// ── Coreografía maestra ──
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

const integrations = ['HubSpot', 'Salesforce', 'Zoho', 'WhatsApp', 'Gmail']

// ── Chat data ──────────────────────────────────────────────────────────────────

type Msg = { from: 'customer' | 'agent'; text: string; delay: number }

const pizzeriaMessages: Msg[] = [
  { from: 'customer', text: 'Hola, quería hacer un pedido para esta noche', delay: 0.4 },
  { from: 'agent',    text: '¡Hola! Por supuesto. ¿Qué te apetece?',        delay: 1.4 },
  { from: 'customer', text: 'Una pizza margarita y dos refrescos',           delay: 2.6 },
  { from: 'agent',    text: 'Perfecto. Son 14,50€. ¿Para recoger o entrega?', delay: 3.7 },
  { from: 'customer', text: 'Entrega, calle Mayor 23',                       delay: 4.9 },
  { from: 'agent',    text: 'Confirmado. Llega en 30 min. Te aviso cuando salga del horno', delay: 6.1 },
]

const padelMessages: Msg[] = [
  { from: 'customer', text: 'Hola, ¿tenéis pista libre a las 19:00?',                              delay: 0.4 },
  { from: 'agent',    text: '¡Hola! Déjame revisar... Sí, la pista 4 (panorámica) está libre.',    delay: 1.5 },
  { from: 'customer', text: 'Perfecto, ¿cuánto es la hora?',                                       delay: 2.8 },
  { from: 'agent',    text: 'Son 12€/hora por persona. ¿Te la reservo?',                           delay: 3.8 },
  { from: 'customer', text: 'Sí, genial. ¿Y tenéis palas de alquiler?',                            delay: 5.1 },
  { from: 'agent',    text: '¡Claro! Te añado 2 palas Bullpadel Pro por 5€. Reserva confirmada.', delay: 6.2 },
]

// ── Section ────────────────────────────────────────────────────────────────────

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="relative isolate overflow-hidden">
        {/* Hero-specific glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-50 blur-[140px]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(34,211,238,0.25), transparent 70%)',
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-24 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-4xl text-center"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex justify-center">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-cyan-200 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-200" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  18 meses en producción · probado en negocios reales
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="mt-8 font-sans text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-foreground"
            >
              Agentes de IA que{' '}
              <span className="relative inline-block">
                <span className="absolute -inset-2 rounded-lg bg-cyan-200/20 blur-xl" aria-hidden="true" />
                <span className="relative z-10 text-cyan-200 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">operan</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 z-0 w-full text-cyan-200/60"
                  fill="none"
                >
                  <path
                    d="M2 8 Q50 2 100 5 T198 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              tu negocio.
            </motion.h1>

            {/* Subhead */}
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
            >
              Atienden WhatsApp, email y tu CRM. Cualifican leads, agendan citas y
              resuelven consultas en segundos. 24/7. Sin contratar a nadie.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a
                href="https://calendly.com/pol-novejarque-cendrai"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg bg-cyan-200 px-7 py-3.5 text-[15px] font-medium text-slate-950 shadow-[0_0_30px_-8px_rgba(34,211,238,0.9)] transition-all hover:bg-cyan-100 hover:shadow-[0_0_50px_-4px_rgba(34,211,238,1)]"
              >
                Solicita Presupuesto
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/40 px-7 py-3.5 text-[15px] font-medium text-foreground backdrop-blur-sm transition-colors hover:border-navy-500 hover:bg-surface"
              >
                ¿Qué es Cendrai?
              </button>
            </motion.div>

            {/* Integraciones nativas */}
            <motion.div variants={fadeUp} className="mt-16">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted/70">
                Integraciones nativas
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
                {integrations.map((name) => (
                  <span
                    key={name}
                    className="text-sm font-medium tracking-wide text-muted/70 transition-colors hover:text-foreground"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Two chat mockups side by side ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-24 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2"
          >
            <ChatMockup
              title="Pizzería Centro"
              iconLetter="P"
              messages={pizzeriaMessages}
              metrics="Tiempo medio de respuesta: 1.2s · Resolución sin escalado: 87%"
            />
            <ChatMockup
              title="Club de Pádel"
              iconLetter="C"
              messages={padelMessages}
              metrics="Tiempo medio de respuesta: 1.4s · Resolución sin escalado: 92%"
            />
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-950" />
      </section>

      {/* Modal */}
      <CendraiModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

// ── ChatMockup ─────────────────────────────────────────────────────────────────

interface ChatMockupProps {
  title: string
  iconLetter: string
  messages: Msg[]
  metrics: string
}

function ChatMockup({ title, iconLetter, messages, metrics }: ChatMockupProps) {
  // Trigger animations when card enters viewport
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <div ref={ref} className="relative">
      {/* Outer glow */}
      <div className="absolute -inset-6 rounded-3xl bg-cyan-200/20 blur-2xl" aria-hidden="true" />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/80 shadow-soft-lift backdrop-blur-md">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-border bg-navy-700/50 px-4 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-200 to-cyan-400 text-sm font-semibold text-slate-950">
            {iconLetter}
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm font-medium text-foreground">{title}</p>
            <p className="flex items-center gap-1.5 font-mono text-[10px] text-cyan-200">
              <span className="inline-block h-1.5 w-1.5 animate-pulse-dot rounded-full bg-cyan-200" />
              Cendrai Agent · respondiendo
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="min-h-[360px] space-y-3 p-4">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{
                duration: 0.4,
                delay: msg.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`flex ${msg.from === 'agent' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-[13px] leading-relaxed ${
                  msg.from === 'agent'
                    ? 'rounded-br-sm border border-cyan-200/40 bg-cyan-200/25 text-foreground'
                    : 'rounded-bl-sm border border-border bg-navy-700/70 text-foreground/90'
                }`}
              >
                {msg.text}
                {msg.from === 'agent' && (
                  <CheckCheck className="ml-1.5 inline-block h-3 w-3 text-cyan-200" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-border bg-navy-700/30 px-4 py-2.5">
          <p className="text-center font-mono text-[10px] text-muted">{metrics}</p>
        </div>
      </div>
    </div>
  )
}
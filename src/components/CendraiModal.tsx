import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'

interface CendraiModalProps {
  isOpen: boolean
  onClose: () => void
}

const blocks = [
  {
    title: 'Quiénes somos',
    body: 'Cendrai es un SaaS B2B especializado en la creación y despliegue de agentes de Inteligencia Artificial autónomos. No somos una herramienta de software tradicional; construimos el nuevo músculo operativo de tu empresa.',
  },
  {
    title: 'Qué solucionamos',
    body: 'Eliminamos los cuellos de botella operativos, el caos de datos descentralizados y la saturación de tu equipo. Transformamos tareas manuales y repetitivas en flujos de trabajo autónomos, permitiendo que tu negocio escale sin que los costes de estructura se disparen.',
  },
  {
    title: 'Nuestra visión',
    body: 'Creemos firmemente que el futuro del trabajo pertenece a los equipos híbridos. Nuestra misión es potenciar el talento humano, no reemplazarlo. Al delegar la carga operativa a la IA, liberamos a tus empleados para que se enfoquen en la estrategia y las relaciones de alto valor.',
  },
  {
    title: 'Qué ofrecemos',
    body: 'Un ecosistema a medida donde agentes ejecutivos especialistas operan de forma ininterrumpida. Te entregamos un centro de mando centralizado que se integra nativamente con tu CRM y sistemas actuales.',
  },
]

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 16 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: {
    opacity: 0, scale: 0.96, y: 8,
    transition: { duration: 0.2 },
  },
}

export default function CendraiModal({ isOpen, onClose }: CendraiModalProps) {

  const handleScrollAndClose = () => {
    onClose()
    // Pequeño delay para que la animación de cierre no interfiera con el scroll
    setTimeout(() => {
      const target = document.getElementById('software-preview')
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 150)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        // Backdrop
        <motion.div
          key="modal-backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            key="modal-card"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative w-[90%] md:w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-slate-900/95 border border-slate-800 rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,0.7)] ring-1 ring-white/[0.04]"
          >
            {/* Top glow line */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px pointer-events-none"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.5), transparent)' }}
            />

            {/* Header */}
            <div className="flex items-center justify-between px-8 pt-7 pb-5 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="font-sans text-[15px] font-semibold tracking-[-0.02em] text-white">cendrai</span>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Cerrar modal"
                className="w-8 h-8 rounded-full border border-white/[0.1] flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all"
              >
                <X size={14} />
              </button>
            </div>

            {/* Body */}
            <div className="px-8 py-7 space-y-7">
              {blocks.map((block) => (
                <div key={block.title}>
                  <h3 className="text-cyan-400 font-semibold text-[15px] mb-2 tracking-tight">
                    {block.title}
                  </h3>
                  <p className="text-slate-400 text-[13.5px] leading-relaxed">
                    {block.body}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Footer */}
            <div className="px-8 pb-8">
              <button
                onClick={handleScrollAndClose}
                className="w-full group flex items-center justify-center gap-3 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-4 text-[14px] font-semibold text-cyan-300 hover:bg-cyan-400/20 hover:border-cyan-400/50 hover:text-white transition-all duration-300"
              >
                ¿Quieres ver cómo será tu próximo centro de mando?
                <ArrowRight size={16} className="shrink-0 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

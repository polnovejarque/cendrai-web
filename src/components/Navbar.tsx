import { useState, useEffect } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { label: 'Plataforma', href: '#plataforma' },
  { label: 'Escuadrón IA', href: '#agentes' },
  { label: 'Casos de uso', href: '#casos' },
  { label: 'Empresa', href: '#empresa' },
]

const headerVariants: Variants = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

const mobileMenuVariants: Variants = {
  closed: { opacity: 0, height: 0 },
  open: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'h-14 bg-background/75 backdrop-blur-xl border-b border-border/60'
          : 'h-16 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto h-full max-w-7xl px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          <a
            href="/"
            className="group flex items-center gap-2 shrink-0"
            aria-label="CENDRAI — Inicio"
          >
            <span className="font-sans text-[17px] font-semibold tracking-[-0.02em] text-foreground">
              cendrai
            </span>
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-cyan-200 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-200" />
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative rounded-md px-3 py-2 text-[13px] font-medium text-muted transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
                <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-cyan-200 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#demo"
              className="group inline-flex items-center gap-1.5 rounded-lg bg-cyan-200 px-4 py-2 text-[13px] font-medium text-slate-950 transition-all duration-200 hover:bg-cyan-100 hover:shadow-[0_0_24px_-4px_rgba(34,211,238,0.9)]"
            >
              Solicita Presupuesto
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-foreground"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="mx-auto max-w-7xl px-6 py-6">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                    className="rounded-lg px-2 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-surface hover:text-foreground"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-6 border-t border-border pt-6">
                <a
                  href="#demo"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-200 px-5 py-3 text-sm font-medium text-slate-950 shadow-[0_0_24px_-4px_rgba(34,211,238,0.5)] transition-colors hover:bg-cyan-100"
                >
                  Solicita Presupuesto
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
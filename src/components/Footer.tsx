export default function Footer() {
  return (
    <footer className="relative bg-slate-950/80 pt-20 pb-10 border-t border-white/5 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Contenedor principal del grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Marca y descripción */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-vantax-cold to-vantax-purple flex items-center justify-center font-bold text-sm text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                V
              </div>
              <span className="font-bold tracking-widest text-sm uppercase text-foreground/80">Vantax AI</span>
            </div>
            <p className="text-muted text-sm font-light leading-relaxed max-w-xs">
              La infraestructura inteligente para negocios sin límites. Auditoría y automatización de nivel empresarial.
            </p>
          </div>

          {/* Columna 2: Producto */}
          <div>
            <h4 className="text-foreground font-semibold mb-6 tracking-wide text-sm">Producto</h4>
            <ul className="space-y-4 text-sm text-muted font-light">
              <li><a href="#agentes" className="hover:text-cyan-200 transition-colors duration-200">Agentes Autónomos</a></li>
              <li><a href="#infraestructura" className="hover:text-cyan-200 transition-colors duration-200">Infraestructura Modular</a></li>
              <li><a href="#integraciones" className="hover:text-cyan-200 transition-colors duration-200">Integraciones Nativas</a></li>
              <li><a href="#precios" className="hover:text-cyan-200 transition-colors duration-200">Precios</a></li>
            </ul>
          </div>

          {/* Columna 3: Compañía */}
          <div>
            <h4 className="text-foreground font-semibold mb-6 tracking-wide text-sm">Compañía</h4>
            <ul className="space-y-4 text-sm text-muted font-light">
              <li><a href="#nosotros" className="hover:text-cyan-200 transition-colors duration-200">Sobre Nosotros</a></li>
              <li><a href="#casos" className="hover:text-cyan-200 transition-colors duration-200">Casos de Éxito</a></li>
              <li><a href="#blog" className="hover:text-cyan-200 transition-colors duration-200">Blog Técnico</a></li>
              <li><a href="#contacto" className="hover:text-cyan-200 transition-colors duration-200">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 4: Legal */}
          <div>
            <h4 className="text-foreground font-semibold mb-6 tracking-wide text-sm">Legal</h4>
            <ul className="space-y-4 text-sm text-muted font-light">
              <li><a href="#terminos" className="hover:text-cyan-200 transition-colors duration-200">Términos de Servicio</a></li>
              <li><a href="#privacidad" className="hover:text-cyan-200 transition-colors duration-200">Política de Privacidad</a></li>
              <li><a href="#seguridad" className="hover:text-cyan-200 transition-colors duration-200">Seguridad (SOC 2)</a></li>
            </ul>
          </div>
        </div>

        {/* Barra inferior (Copyright y Redes) */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted/60 text-xs font-light">
            © {new Date().getFullYear()} Vantax AI. Todos los derechos reservados.
          </p>
          
          {/* Iconos sociales minimalistas (SVGs) */}
          <div className="flex gap-4">
            <a href="#twitter" className="text-muted/60 hover:text-foreground transition-colors duration-200">
              <span className="sr-only">Twitter / X</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#linkedin" className="text-muted/60 hover:text-foreground transition-colors duration-200">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
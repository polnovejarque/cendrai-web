import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SoftwareReveal from './components/SoftwareReveal'
import BentoFeatures from './components/BentoFeatures'
import EscuadronSection from './components/EscuadronSection'
import UseCases from './components/UseCases'
import SocialProof from './components/SocialProof'
import CtaFinal from './components/CtaFinal'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="relative bg-slate-950 min-h-screen text-slate-200">
      {/* Global background layers */}
      <div className="fixed inset-0 bg-grid opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="fixed inset-0 bg-grid-fade pointer-events-none" aria-hidden="true" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <SoftwareReveal />
        <BentoFeatures />
        
        {/* Tu equipo estrella en el centro de la atención */}
        <EscuadronSection />
        
        <UseCases />
        <SocialProof />
        <CtaFinal />
        
        {/* El cierre elegante */}
        <Footer />
      </div>
    </main>
  )
}
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import './HeroSection.css'

function HeroSection() {
  const reduceMotion = useReducedMotion()
  const entrance = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: 'easeOut' as const },
      }

  return (
    <section className="hero-section" id="inicio" aria-labelledby="hero-title">
      <div className="hero-glow hero-glow-green" aria-hidden="true" />
      <div className="hero-glow hero-glow-orange" aria-hidden="true" />

      <motion.div className="hero-content" {...entrance}>
        <div className="hero-badge">
          <span className="hero-badge-dot" aria-hidden="true" />
          Ecosistema Gaming &amp; eSports 2026
        </div>

        <h1 className="hero-title" id="hero-title">
          <span className="text-gradient-green">KAOS TEAM</span>
          <span className="hero-title-ampersand">&amp;</span>
          <span className="text-gradient-orange">LABS</span>
        </h1>

        <p className="hero-description">
          Un ecosistema creado para jugar, competir y construir lo que viene.
          Tecnología, comunidad y gaming bajo una misma visión.
        </p>

        <div className="hero-actions">
          <a className="hero-button hero-button-primary" href="#juegos">
            Explorar Juegos
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="hero-button hero-button-secondary" href="#historia">
            Nuestra Historia
          </a>
        </div>

        <a className="hero-scroll-link" href="#historia">
          <ArrowDown size={15} aria-hidden="true" />
          <span>Descubre Kaos</span>
        </a>
      </motion.div>
    </section>
  )
}

export default HeroSection

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiArrowDown } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { heroProofCards, profile } from '../data/portfolioData'
import HeroReveal from './hero/HeroReveal'
import GradientOrbBackground from './hero/GradientOrbBackground'
import FloatingSymbols from './hero/FloatingSymbols'
import ProofCard from './hero/ProofCard'

const Hero = () => {
  const navigate = useNavigate()
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 22])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -16])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.08,
      },
    },
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero" ref={heroRef}>
      <GradientOrbBackground />

      <motion.div className="hero-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.42 }}>
        <div className="hero-layout">
          <motion.div className="hero-image-wrapper" style={{ y: imageY }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55 }}>
            <div className="hero-image-container">
              <img src="/sankalp-profile.png" alt={profile.name} className="hero-profile-image" />
              <div className="hero-image-glow"></div>
              <FloatingSymbols />
            </div>
          </motion.div>

          <motion.div className="hero-content" style={{ y: contentY }} variants={containerVariants} initial="hidden" animate="visible">
            <HeroReveal className="hero-badge">{profile.role}</HeroReveal>

            <HeroReveal>
              <h1 className="hero-title">{profile.name}</h1>
            </HeroReveal>

            <HeroReveal>
              <p className="hero-headline">{profile.headline}</p>
            </HeroReveal>

            <HeroReveal>
              <p className="hero-supporting">{profile.supportingLine}</p>
            </HeroReveal>

            <HeroReveal>
              <p className="hero-stackline">{profile.stackLine}</p>
            </HeroReveal>

            <HeroReveal className="hero-social">
              <motion.a href={profile.github} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                <FaGithub />
              </motion.a>
              <motion.a href={profile.linkedin} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                <FaLinkedin />
              </motion.a>
              <motion.a href={`mailto:${profile.email}`} whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                <FaEnvelope />
              </motion.a>
            </HeroReveal>

            <HeroReveal className="hero-buttons">
              <div className="hero-buttons-row">
                <button className="btn btn-primary" onClick={() => navigate('/projects')}>
                  View Projects
                </button>
                <button className="btn btn-secondary" onClick={() => navigate('/experience')}>
                  Experience
                </button>
              </div>
              <a href={profile.resume} className="btn btn-secondary hero-download-btn" target="_blank" rel="noopener noreferrer">
                Open Resume
              </a>
            </HeroReveal>

            <HeroReveal className="hero-proof-grid">
              {heroProofCards.map((card) => (
                <ProofCard key={card} label={card} />
              ))}
            </HeroReveal>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        onClick={() => scrollToSection('about')}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-label="Scroll to about section"
      >
        <HiArrowDown />
      </motion.div>
    </section>
  )
}

export default Hero

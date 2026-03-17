import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiChip, HiDatabase, HiServer, HiSparkles } from 'react-icons/hi'
import { profile } from '../data/portfolioData'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag">About</span>
          <h2 className="section-title">AI Engineer with Backend Systems Depth</h2>
          <p className="section-description">
            I design and ship production-oriented AI systems that combine reliable backend architecture with practical LLM workflows.
          </p>
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <h3>Who I am</h3>
            <p>
              I'm {profile.name}, an AI Engineer focused on backend AI systems, retrieval pipelines, and production APIs. My work sits at the
              intersection of LLM applications and system reliability.
            </p>
            <p>
              I prioritize applied AI impact over demos: measurable retrieval quality, scalable data workflows, and systems teams can operate with
              confidence in production.
            </p>
            <div className="about-stats about-identity">
              <div className="stat">
                <span className="stat-number">{profile.education}</span>
                <span className="stat-label">Academic foundation</span>
              </div>
              <div className="stat">
                <span className="stat-number">{profile.location}</span>
                <span className="stat-label">Base location</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="about-cards" variants={itemVariants}>
            <div className="about-card">
              <HiChip className="about-card-icon" />
              <h4>What I build</h4>
              <p>
                Retrieval-first AI applications with grounded outputs, model orchestration, and quality evaluation.
              </p>
            </div>
            <div className="about-card">
              <HiServer className="about-card-icon" />
              <h4>Backend systems</h4>
              <p>FastAPI and Flask services, queue-driven workers, and API layers that support real operational workloads.</p>
            </div>
            <div className="about-card">
              <HiDatabase className="about-card-icon" />
              <h4>Data layer</h4>
              <p>PostgreSQL, Redis, and vector databases for reliable retrieval and low-latency inference pipelines.</p>
            </div>
            <div className="about-card">
              <HiSparkles className="about-card-icon" />
              <h4>Engineering mindset</h4>
              <p>Production-oriented decisions, measurable outcomes, and systems that stay maintainable as complexity grows.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

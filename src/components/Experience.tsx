import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi'
import { experiences } from '../data/portfolioData'

const Experience = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag">Experience</span>
          <h2 className="section-title">Engineering Experience</h2>
          <p className="section-description">
            Production-facing work across AI systems, backend services, and cloud deployment.
          </p>
        </motion.div>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {experiences.map((exp) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              className={`experience-item ${exp.featured ? 'experience-item-featured' : ''}`}
              variants={itemVariants}
            >
              <div className="experience-icon">
                <HiBriefcase />
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <div className="experience-title-logo">
                    <div className="experience-title-wrapper">
                      <h3 className="experience-title">{exp.role}</h3>
                      <span className="experience-company">{exp.company}</span>
                      {exp.featured && <span className="experience-badge">Current · Stealth Build</span>}
                    </div>
                  </div>
                </div>
                <div className="experience-meta">
                  <span className="experience-location">
                    <HiLocationMarker />
                    Riverside, CA / Remote
                  </span>
                  <span className="experience-period">
                    <HiCalendar />
                    {exp.period}
                  </span>
                </div>
                <ul className="experience-description">
                  {exp.highlights.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

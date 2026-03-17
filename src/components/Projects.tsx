import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { featuredProjects } from '../data/portfolioData'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const projectsInChronologicalOrder = [...featuredProjects].sort((a, b) => a.sortKey - b.sortKey)

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag">Projects</span>
          <h2 className="section-title">Featured AI & Backend Projects</h2>
          <p className="section-description">
            Work focused on production-ready AI systems, retrieval quality, and backend reliability.
          </p>
        </motion.div>

        <motion.div className="projects-grid" variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          {projectsInChronologicalOrder.map((project) => (
            <motion.article
              key={project.title}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10, rotateX: 2.5, rotateY: -2 }}
              transition={{ type: 'spring', stiffness: 250, damping: 18 }}
            >
              <div className="project-content">
                <div className="project-metrics">
                  {project.metrics.map((metric) => (
                    <span key={metric} className="project-metric">
                      {metric}
                    </span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-meta">
                  {project.period}
                  {project.association ? ` · ${project.association}` : ''}
                </p>
                <p className="project-description">{project.summary}</p>

                <ul className="project-section-list">
                  {project.impact.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="project-technologies">
                  {project.stack.map((tech) => (
                    <span key={tech} className="project-tech">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <a className="project-github-link" href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> View on GitHub
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

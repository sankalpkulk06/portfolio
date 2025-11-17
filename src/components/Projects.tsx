import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'Craigslist SafeBot - AI-Powered Law Enforcement Email Automation',
      description:
        'Developing SafeBot for UCR Police: executed keyword-based risk scoring over 10K+ email records, orchestrated a Groq backend, Redis cache, PostgreSQL on GCP, and React/TypeScript UI displaying suspect profiles. Currently in pilot with 10 investigators, with ~70% of triage automated, lead-generation increased, and end-to-end latency under 300ms.',
      technologies: ['React', 'TypeScript', 'Flask', 'PostgreSQL', 'LLM', 'Redis', 'APScheduler', 'Docker', 'GCP'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      github: 'https://github.com/sankalpkulk06',
      demo: 'https://www.pcloudy.com/qpilotai/',
      featured: true,
    },
    {
      title: 'Recommendation Engine for Test Device Matrix',
      description:
        'Developed a recommendation engine for test-device matrix clustering 1,000+ OEM devices and analysing 125K+ log lines using TF-IDF, clustering algorithms and predictive modelling, achieving recommendation runtime under 90 seconds and improving test coverage efficiency by ~20%.',
      technologies: ['PyTorch', 'Flask', 'React', 'Python', 'Redis', 'Docker'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800',
      github: 'https://github.com/sankalpkulk06',
      demo: 'https://www.pcloudy.com/qpilotai/',
      featured: true,
    },
  ]

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
          <h2 className="section-title">Featured Work</h2>
          <p className="section-description">
            A collection of projects that showcase my skills and expertise
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <HiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="project-tech">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects


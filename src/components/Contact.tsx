import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { profile } from '../data/portfolioData'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: profile.email,
      link: `mailto:${profile.email}`,
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: profile.phone,
      link: 'tel:+19513775843',
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: 'Riverside, CA',
      link: null,
    },
  ]

  const socialLinks = [
    { icon: FaGithub, url: profile.github, label: 'GitHub' },
    { icon: FaLinkedin, url: profile.linkedin, label: 'LinkedIn' },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Open to AI & Backend Engineering Roles</h2>
          <p className="section-description">
            If you're hiring for AI Engineer, Applied AI Engineer, or Backend Python roles, let's connect.
          </p>
        </motion.div>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Let's build production AI systems</h3>
            <p>
              I can help teams ship AI applications with dependable retrieval, backend infrastructure, and measurable business impact.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div key={index} className="contact-detail">
                    <div className="contact-detail-icon">
                      <Icon />
                    </div>
                    <div className="contact-detail-content">
                      <span className="contact-detail-label"> {info.label}</span>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="contact-detail-value"
                        >
                            {` ${info.value}`}
                        </a>
                      ) : (
                        <span className="contact-detail-value">{` ${info.value}`}</span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="contact-social">
              <span>Follow me on:</span>
              <div className="social-links">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div className="contact-form contact-cta-panel" variants={itemVariants}>
            <h3>Quick Actions</h3>
            <a className="btn btn-primary" href={profile.resume} target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
            <a className="btn btn-secondary" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
            <a className="btn btn-secondary" href={`mailto:${profile.email}`}>
              Email Me Directly
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

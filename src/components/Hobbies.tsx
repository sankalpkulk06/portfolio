import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { hobbyGallery } from '../data/portfolioData'

const Hobbies = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-120px' })

  return (
    <section id="hobbies" className="hobbies" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="section-tag">Gallery</span>
          <h2 className="section-title">Hobbies & Passion</h2>
          <p className="section-description">
            Beyond engineering, these interests shape how I think, build, and stay creative.
          </p>
        </motion.div>

        <motion.div
          className="hobbies-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {hobbyGallery.map((item, index) => (
            <motion.article
              key={item.title}
              className="hobby-card"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              whileHover={{ y: -6 }}
            >
              <img src={item.image} alt={item.title} loading="lazy" className="hobby-image" />
              <div className="hobby-overlay">
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hobbies


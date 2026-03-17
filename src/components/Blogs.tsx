import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiOutlineSparkles } from 'react-icons/hi'

const Blogs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-120px' })

  return (
    <section id="blogs" className="blogs" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Writing</span>
          <h2 className="section-title">Engineering Blogs</h2>
          <p className="section-description">
            This section is ready for deep dives on AI systems, backend architecture, and production lessons.
          </p>
        </motion.div>

        <motion.div
          className="blog-empty-state"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <HiOutlineSparkles />
          <h3>First posts coming soon</h3>
          <p>I’ll publish practical write-ups on RAG pipelines, API design, and AI backend system tradeoffs.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Blogs


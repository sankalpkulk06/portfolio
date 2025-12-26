import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiUser, HiAcademicCap, HiHeart } from 'react-icons/hi'

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
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Get to Know Me</h2>
          <p className="section-description">
            A passionate developer with a love for creating exceptional digital
            experiences
          </p>
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <h3>Who I Am</h3>
            <p>
              I'm Sankalp Naveenachandra Kulkarni, an AI Engineer with an MS in Computer Science and hands-on experience building, evaluating, 
              and deploying production-scale AI systems. I specialize in retrieval-augmented generation (RAG), multimodal embedding pipelines, 
              and scalable ML infrastructure using Python, PyTorch, FastAPI, and Redis.
            </p>
            <p>
              I've built cloud-native AI solutions processing 20K+ embeddings per hour, with experience in model evaluation, data pipelines, 
              and deployment on AWS and GCP. My work focuses on creating intelligent systems that make a real impact, from law enforcement 
              automation tools to scalable RAG systems that improve precision and throughput.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">220K+</span>
                <span className="stat-label">Embeddings Processed</span>
              </div>
              <div className="stat">
                <span className="stat-number">22%</span>
                <span className="stat-label">Precision Improvement</span>
              </div>
              <div className="stat">
                <span className="stat-number">300+</span>
                <span className="stat-label">Vectors/Min Throughput</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="about-cards" variants={itemVariants}>
            <div className="about-card">
              <HiAcademicCap className="about-card-icon" />
              <h4>Masters in Computer Science</h4>
              <p>
                University of California - Riverside (Sept 2024 - Mar 2026)
                <br />
                <strong>GPA: 3.81/4.0</strong>
              </p>
            </div>
            <div className="about-card">
              <HiAcademicCap className="about-card-icon" />
              <h4>B.Tech in CSE (ML & Data Science)</h4>
              <p>
                PES University, Bengaluru (Dec 2020 - May 2024)
                <br />
                <strong>GPA: 8.3/10</strong>
              </p>
            </div>
            <div className="about-card">
              <HiHeart className="about-card-icon" />
              <h4>Certifications</h4>
              <ul className="certifications-list">
                <li>
                  <a 
                    href="https://www.udemy.com/certificate/UC-545de3fc-0a87-4a62-a552-b910a7dfdf6b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="certification-link"
                  >
                    Artificial Intelligence A-Z 2025
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.credly.com/badges/b621d037-0c80-4ee0-aaa2-a9bda86cc45f/public_url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="certification-link"
                  >
                    AWS Educate Introduction to Cloud 101
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.credly.com/badges/9c2b3dd4-7369-41cf-9a9e-5407829afefd/public_url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="certification-link"
                  >
                    LFD103: A Beginner's Guide to Linux Kernel Development
                  </a>
                </li>
                <li>Centre for Innovation and Entrepreneurship - Level 1 & 2</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About


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
              I'm Sankalp Naveenachandra Kulkarni, an AI Engineer with advanced MS in Computer Science and internship experience building production-scale RAG automation and embedding pipelines. I design cloud-native solutions processing 20K+ embeddings/hour and improved QA test throughput by 30%+ using FastAPI, Redis, Pinecone and AWS/GCP.
            </p>
            <p>
              Eager to apply generative AI, scalable systems, and full-stack engineering expertise to deliver impactful AI products. My journey in technology has been driven by curiosity and a constant desire to learn. I specialize in developing intelligent systems, implementing machine learning models, and creating scalable applications that make a real difference.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">220K+</span>
                <span className="stat-label">Vectors Processed</span>
              </div>
              <div className="stat">
                <span className="stat-number">1,200+</span>
                <span className="stat-label">Device Configurations</span>
              </div>
              <div className="stat">
                <span className="stat-number">80%</span>
                <span className="stat-label">Relevance Score</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="about-cards" variants={itemVariants}>
            <div className="about-card">
              <HiAcademicCap className="about-card-icon" />
              <h4>Masters in Computer Science</h4>
              <p>
                University of California - Riverside (Sept 2024 - March 2026)
                <br />
                <strong>GPA: 3.77/4.0</strong>
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
              <p>
                Artificial Intelligence A-Z 2025, AWS Educate Introduction to Cloud 101, 
                LFD103: A Beginner's Guide to Linux Kernel Development, 
                Centre for Innovation and Entrepreneurship - Level 1 & 2
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About


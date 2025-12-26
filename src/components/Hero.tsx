import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { HiArrowDown, HiSparkles } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  useEffect(() => {
    console.log('Hero component mounted')
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        onAnimationStart={() => console.log('Hero animation started')}
        onAnimationComplete={() => console.log('Hero animation completed')}
      >
        <div className="hero-layout">
          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="hero-image-container">
              <img 
                src="/sankalp-profile.png" 
                alt="Sankalp Kulkarni" 
                className="hero-profile-image"
              />
              <div className="hero-image-glow"></div>
            </div>
            <motion.div className="hero-buttons" variants={itemVariants}>
              <div className="hero-buttons-row">
                <motion.button
                  className="btn btn-primary"
                  onClick={() => scrollToSection('projects')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.button>
                <motion.button
                  className="btn btn-secondary"
                  onClick={() => scrollToSection('contact')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.button>
              </div>
              <motion.a
                href="/Sankalp_Kulkarni_Resume.pdf"
                download="Sankalp_Kulkarni_Resume.pdf"
                className="btn btn-secondary hero-download-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <FaDownload />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div className="hero-content" variants={itemVariants}>
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <HiSparkles className="hero-badge-icon" />
              <span>Welcome to My Portfolio</span>
            </motion.div>

            <motion.h1 className="hero-title" variants={itemVariants}>
              Hi, I'm{' '}
              <span className="hero-title-highlight">Sankalp Kulkarni</span>
              <br />
              AI Engineer
            </motion.h1>

            <motion.p className="hero-description" variants={itemVariants}>
              AI Engineer with an MS in Computer Science and hands-on experience building, evaluating, and deploying production-scale AI systems. 
              Specialized in retrieval-augmented generation (RAG), multimodal embedding pipelines, and scalable ML infrastructure using Python, 
              PyTorch, FastAPI, and Redis. Built cloud-native AI solutions processing 20K+ embeddings per hour, with experience in model evaluation, 
              data pipelines, and deployment on AWS and GCP.
            </motion.p>

            <motion.div className="hero-social" variants={itemVariants}>
              <motion.a
                href="https://github.com/sankalpkulk06"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sankalpkulkarni/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:sankalpkulk06@gmail.com"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        onClick={() => scrollToSection('about')}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <HiArrowDown />
      </motion.div>
    </section>
  )
}

export default Hero


import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      title: 'Summer Intern (AI Engineer Intern)',
      company: 'Quinnox (Qyrus)',
      location: 'Chicago, Illinois',
      period: 'Jul 2025 - Sep 2025',
      description: [
        'Architected and deployed a retrieval augmented generation (RAG) automation pipeline using Pinecone, Redis and FastAPI, scaling a vector index to 220K+ vectors and building a dashboard to monitor retrieval and matching scores (text + image + rerank) achieving a relevance score of ~80%',
        'Designed and implemented a multi-modal embedding and retrieval framework (120K+ text entries plus 100K+ images) using CLIP, Cohere and ReRank v3, improving precision at top 5 by 22% and handling throughput of 300+ vectors per minute',
        'Developed a fault tolerant ingestion architecture on AWS (SQS with pre-batcher, asynchronous queue workers and upserters) to support high-volume embedding processing and ensure reliable scaling of tens of thousands of embeddings per hour for production-grade AI workflows',
      ],
      type: 'work',
    },
    {
      title: 'Software Development Intern',
      company: 'Pcloudy (by Opkey)',
      location: 'Bangalore, India',
      period: 'Jun 2023 - Jul 2024',
      description: [
        'Developed the MVP of Qpilot.AI on the Pcloudy platform, a live test automation application for script generation and self healing automation used by over 1,200 OEM device combinations; this initiative laid the foundation for its full production release',
        'Built and launched a script-generation framework across 1,200+ OEM device configurations; recorded a 78% success rate on scripted executions, introduced self-healing modules to minimize failures and slashed test execution time by ~90%',
        'Designed and integrated a real time log parsing dashboard capable of processing 100K+ log lines in under 3 minutes, surfacing error patterns and recommended fixes to end users and embedding self healing modules that reduced manual intervention',
        'Architected a scalable microservices architecture using Flask, Python, Redis, LangChain, AutoGen, Docker and AWS, collaborating within a team of four and reporting directly to the CEO while delivering CI/CD enabled releases, version control workflows and cloud native deployment pipelines',
      ],
      type: 'work',
    },
  ]

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
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-description">
            My career path and professional achievements
          </p>
        </motion.div>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              variants={itemVariants}
            >
              <div className="experience-icon">
                <HiBriefcase />
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-company">{exp.company}</span>
                </div>
                <div className="experience-meta">
                  <span className="experience-location">
                    <HiLocationMarker />
                    {exp.location}
                  </span>
                  <span className="experience-period">
                    <HiCalendar />
                    {exp.period}
                  </span>
                </div>
                <ul className="experience-description">
                  {exp.description.map((item, itemIndex) => (
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


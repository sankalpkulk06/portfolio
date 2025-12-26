import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      title: 'AI Engineer Intern',
      company: 'Quinnox (Qyrus)',
      companyUrl: 'https://www.quinnox.com',
      logo: '/qyrus-logo.jpeg',
      location: 'Chicago, Illinois',
      period: 'Jul 2025 - Sep 2025',
      description: [
        'Built and deployed a RAG system using Python, FastAPI, Pinecone, and Redis, scaling to 220K+ embeddings and enabling multimodal retrieval (text + image + rerank).',
        'Designed, tuned, and evaluated multimodal embedding and reranking pipelines using CLIP, Cohere, and ReRank v3, benchmarking with precision@K and recall@K, improving precision@5 by 22% while sustaining 300+ vectors/min throughput.',
        'Integrated LLM-based generation with retrieval, implementing prompt templates, citation-style grounding, and fallback logic, improving response quality by ~15% while balancing latency and cost for GenAI workflows.',
        'Implemented a fault-tolerant data ingestion and inference pipeline on AWS (SQS, asynchronous workers, batch upserts) to process tens of thousands of embeddings/hour, enabling scalable and reliable AI systems.',
      ],
      type: 'work',
    },
    {
      title: 'Software Development Intern',
      company: 'Pcloudy (by Opkey)',
      companyUrl: 'https://www.pcloudy.com',
      logo: '/pcloudy-logo.jpeg',
      location: 'Bangalore, India',
      period: 'Jun 2023 - Jul 2024',
      description: [
        'Developed the MVP of Qpilot.AI, a test-automation platform for script generation (template + heuristic-based) and self-healing execution, supporting runs across 1,200+ OEM device configurations and contributing to production release.',
        'Built an automated script-generation pipeline achieving 78% execution success, integrating self-healing recovery steps that reduced end-to-end test time by ~90%.',
        'Optimized a real-time log analytics and classification service to process ~33K events/min, accelerating failure triage and reducing manual debugging.',
        'Built and deployed Python/Flask microservices and backend APIs with Redis, Docker, and AWS, shipping CI/CD releases and integrating LangChain/AutoGen for automated troubleshooting and workflow orchestration.',
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
                  <div className="experience-title-logo">
                    {exp.logo && (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience-logo-link"
                      >
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="experience-logo"
                        />
                      </a>
                    )}
                    <div className="experience-title-wrapper">
                      <h3 className="experience-title">{exp.title}</h3>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience-company"
                      >
                        {exp.company}
                      </a>
                    </div>
                  </div>
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


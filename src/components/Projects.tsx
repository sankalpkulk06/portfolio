import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiExternalLink, HiChevronDown, HiChevronUp } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isOtherProjectsExpanded, setIsOtherProjectsExpanded] = useState(false)

  const featuredProjects = [
    {
      title: 'Craigslist SafeBot | AI-Powered Law Enforcement Email Automation Tool',
      problem: [
        'Investigators manually text potential suspects to gather evidence, which is time-consuming and inefficient',
        'High volume of suspect communications makes it impossible to manually respond to every lead',
        'Need an automated system to draft bait messages and provide a dashboard for tracking suspect interactions',
      ],
      solution: [
        'AI-powered system that automatically drafts bait messages to potential suspects, eliminating manual texting',
        'Hybrid risk scoring pipeline (keyword rules + LLM) to prioritize high-risk suspects and flag them for investigators',
        'Interactive dashboard providing real-time reports on suspect interactions, risk scores, and communication history',
        'Human-in-the-loop approval workflow: investigators review, edit, or fully control all messages before sending',
      ],
      impact: [
        'Working directly with Riverside law enforcement and an attorney to run a pilot and validate operational and legal requirements',
        'Processed 10K+ emails in pilot workflows, enabling low-latency investigator triage',
        'Planning expansion to additional counties, with intent to raise investment to scale product development and deployments',
      ],
      technologies: ['Python', 'FastAPI', 'Flask', 'React', 'PostgreSQL', 'Redis', 'GCP Cloud Run', 'Docker'],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
      github: 'https://github.com/sankalpkulk06',
      demo: null,
    },
    {
      title: 'SmartBDD | AI-Powered Cucumber BDD Search and Deduplication (RAG)',
      problem: [
        'QA teams accumulate large BDD suites with near-duplicate scenarios, making maintenance expensive and coverage unclear',
        'Keyword search fails when testers phrase the same intent differently',
      ],
      solution: [
        'Built a RAG (Retrieval-Augmented Generation) system for natural-language search of Cucumber BDD scenarios to find similar tests and flag potential duplicates',
        'Embedded test steps and metadata, stored vectors in a retrieval index, and returned top matches with similarity scores',
        'Designed a dedup workflow to help QA engineers decide whether to merge, rewrite, or keep scenarios',
      ],
      impact: [
        'Enabled fast discovery of semantically similar scenarios to reduce redundancy and keep suites maintainable',
        'Improved test suite hygiene by making duplication visible and actionable',
      ],
      technologies: ['Python', 'OpenAI API', 'Pinecone', 'FastAPI', 'Flask', 'React'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      github: 'https://github.com/sankalpkulk06',
      demo: null,
    },
    {
      title: 'Recommendation Engine for Test Device Matrix | Test Combination Optimizer',
      problem: [
        'Testing across many OEMs and device configurations creates a combinatorial explosion',
        'Teams needed fast recommendations for high-value test combinations using historical logs',
      ],
      solution: [
        'Log preprocessing and feature extraction using TF-IDF to convert large-scale logs into searchable vectors',
        'Clustered 1K+ OEMs to group similar device behavior and reduce the recommendation search space',
        'Recommendation ranking using clustering signals + predictive scoring to output optimal test combinations quickly',
        'Delivered results via a web UI and API for practical adoption by QA teams',
      ],
      impact: [
        'Analyzed 125K+ log lines and generated recommendations in under 90 seconds',
        'Reduced manual effort in constructing test matrices and improved consistency of selection',
        'Scaled to large OEM sets while keeping runtime bounded',
      ],
      technologies: ['Python', 'Flask', 'React', 'Redis', 'Docker', 'PyTorch'],
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80',
      github: 'https://github.com/sankalpkulk06',
      demo: null,
    },
    {
      title: 'Android Log Search and Parsing Utility | Real-Time Debugging Dashboard',
      problem: [
        'Debugging Android test runs generates massive, noisy logs that are slow to sift manually',
        'Teams needed real-time parsing, searchable insights, and faster root-cause workflows',
      ],
      solution: [
        'Built a real-time log parser handling 250K+ log lines with severity classification and structured extraction',
        'Created a React dashboard for drill-down analysis, filtering, and log-level exploration',
        'Integrated troubleshooting links for error and warning logs to speed up resolution and reduce context switching',
        'Containerized the system for repeatable deployments and scalable rollouts',
      ],
      impact: [
        'Processed 250K+ lines with a searchable dashboard for operational troubleshooting',
        'Increased speed of debugging by surfacing high-signal errors and actionable links',
        'Work contributed toward a patent effort and published research',
      ],
      technologies: ['Python', 'Flask', 'React', 'Kafka', 'Docker'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      github: 'https://github.com/sankalpkulk06',
      demo: null,
    },
  ]

  const otherProjects = [
    {
      title: 'Reinforcement Learning for Atari Games | DQN, CNN-DQN, A3C Agents',
      problem: [
        'Needed to train agents to learn control policies from sparse rewards and high-dimensional state spaces',
        'Required stable training and improved sample efficiency for different game environments',
      ],
      solution: [
        'Implemented DQN for Lunar Lander-style discrete control with replay buffer and target network stabilization',
        'Built CNN-DQN for Pacman using convolutional feature extraction from frame-based inputs',
        'Developed A3C for Kungfu Master using parallel workers to improve throughput and training efficiency',
        'Added training instrumentation and evaluation routines to track reward curves and convergence behavior',
      ],
      impact: [
        'Demonstrated consistent reward improvements across environments with reproducible training runs',
        'Improved wall-clock training efficiency via parallelized rollouts in A3C',
        'Produced agent gameplay demos and learning curves suitable for evaluation and comparison',
      ],
      technologies: ['Python', 'Gymnasium', 'TensorFlow', 'PyTorch', 'OpenAI Gym'],
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800',
      github: 'https://github.com/sankalpkulk06',
      demo: null,
    },
    {
      title: 'Fandom Wiki Search Engine | Web Search Across Fandom Wikis',
      problem: [
        'Fan knowledge is spread across multiple Fandom wikis, making it hard to find accurate, relevant pages quickly',
        'Needed a search engine that supports both keyword relevance and semantic matching across a large crawl',
      ],
      solution: [
        'Built a search system that crawls and indexes Fandom wiki pages and retrieves ranked results for user queries',
        'Implemented multiple retrieval strategies: Lucene for keyword-based indexing and ranking, BERT-based indexer for semantic retrieval, and FAISS vector store for fast nearest-neighbor search',
        'Created a crawler to collect and clean a large-scale dataset (~15 GB) for indexing and evaluation',
      ],
      impact: [
        'Indexed and searched across multiple wikis with improved relevance vs naive keyword lookup',
        'Compared retrieval approaches (lexical vs semantic) and validated tradeoffs in speed and quality',
      ],
      technologies: ['Python', 'Lucene', 'BERT', 'FAISS', 'Web Crawler', 'Information Retrieval'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      github: 'https://github.com/sankalpkulk06',
      demo: null,
    },
    {
      title: 'n8n Daily Motivation Workflow | Automated Quote-to-Email Pipeline',
      problem: [
        'Wanted a lightweight automation project to explore workflow orchestration, triggers, and email delivery',
        'Needed a reliable daily job with minimal manual intervention',
      ],
      solution: [
        'Built an n8n workflow that sends a motivational quote every day at 9:00 AM via email',
        'Workflow steps: Cron trigger (daily), HTTP request to fetch a random quote, Transform/format step ("quote — author"), SMTP email sender (Gmail)',
      ],
      impact: [
        'Fully automated daily email delivery with clean formatting and repeatable scheduling',
        'Demonstrated practical workflow automation using APIs + orchestration primitives',
      ],
      technologies: ['n8n', 'HTTP APIs', 'Gmail SMTP'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      github: 'https://github.com/sankalpkulk06',
      demo: null,
    },
  ]

  const renderProject = (project: any, index: number) => (
    <motion.div
      key={index}
      className="project-card"
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
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <HiExternalLink />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        {project.problem && (
          <div className="project-section">
            <h4 className="project-section-title">Problem</h4>
            <ul className="project-section-list">
              {Array.isArray(project.problem) ? (
                project.problem.map((point: string, idx: number) => (
                  <li key={idx}>{point}</li>
                ))
              ) : (
                <li>{project.problem}</li>
              )}
            </ul>
          </div>
        )}
        {project.solution && (
          <div className="project-section">
            <h4 className="project-section-title">Solution</h4>
            <ul className="project-section-list">
              {Array.isArray(project.solution) ? (
                project.solution.map((point: string, idx: number) => (
                  <li key={idx}>{point}</li>
                ))
              ) : (
                <li>{project.solution}</li>
              )}
            </ul>
          </div>
        )}
        {project.impact && (
          <div className="project-section">
            <h4 className="project-section-title">Impact</h4>
            <ul className="project-section-list">
              {Array.isArray(project.impact) ? (
                project.impact.map((point: string, idx: number) => (
                  <li key={idx}>{point}</li>
                ))
              ) : (
                <li>{project.impact}</li>
              )}
            </ul>
          </div>
        )}
        {project.description && (
          <p className="project-description">{project.description}</p>
        )}
        <div className="project-technologies">
          {project.technologies.map((tech: string, techIndex: number) => (
            <span key={techIndex} className="project-tech">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )

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
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="projects-subsection-title">Featured Projects</h3>
          <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {featuredProjects.map((project, index) => renderProject(project, index))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginTop: '4rem' }}
        >
          <motion.button
            className="projects-subsection-title projects-subsection-toggle"
            onClick={() => setIsOtherProjectsExpanded(!isOtherProjectsExpanded)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Other Projects</span>
            {isOtherProjectsExpanded ? (
              <HiChevronUp className="toggle-icon" />
            ) : (
              <HiChevronDown className="toggle-icon" />
            )}
          </motion.button>
          <AnimatePresence>
            {isOtherProjectsExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
              >
                <motion.div
                  className="projects-grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {otherProjects.map((project, index) => renderProject(project, index))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects


import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiAmazonaws,
  SiTensorflow,
  SiPytorch,
  SiRedis,
  SiApachekafka,
  SiFlask,
} from 'react-icons/si'
import { HiCode, HiCloud, HiChip } from 'react-icons/hi'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', icon: SiPython, level: 95 },
        { name: 'JavaScript', icon: SiJavascript, level: 90 },
        { name: 'TypeScript', icon: SiTypescript, level: 88 },
        { name: 'Java', icon: HiCode, level: 85 },
        { name: 'C++', icon: HiCode, level: 80 },
      ],
    },
    {
      title: 'AI/ML & Data',
      skills: [
        { name: 'PyTorch', icon: SiPytorch, level: 90 },
        { name: 'TensorFlow', icon: SiTensorflow, level: 88 },
        { name: 'LangChain', icon: HiChip, level: 85 },
        { name: 'Hugging Face', icon: HiChip, level: 85 },
      ],
    },
    {
      title: 'Frameworks & Backend',
      skills: [
        { name: 'React', icon: SiReact, level: 92 },
        { name: 'FastAPI', icon: HiCode, level: 90 },
        { name: 'Flask', icon: SiFlask, level: 88 },
      ],
    },
    {
      title: 'Cloud & Infrastructure',
      skills: [
        { name: 'AWS', icon: SiAmazonaws, level: 85 },
        { name: 'GCP', icon: HiCloud, level: 85 },
        { name: 'Azure', icon: HiCloud, level: 80 },
        { name: 'Docker', icon: SiDocker, level: 88 },
      ],
    },
    {
      title: 'Databases & Tools',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, level: 88 },
        { name: 'MongoDB', icon: SiMongodb, level: 85 },
        { name: 'Redis', icon: SiRedis, level: 90 },
        { name: 'Kafka', icon: SiApachekafka, level: 80 },
        { name: 'Git', icon: SiGit, level: 95 },
      ],
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
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag">Skills</span>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-description">
            A comprehensive toolkit for building modern applications
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              variants={itemVariants}
            >
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="skill-icon">
                        <Icon />
                      </div>
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-bar">
                          <motion.div
                            className="skill-progress"
                            initial={{ width: 0 }}
                            animate={
                              isInView
                                ? { width: `${skill.level}%` }
                                : { width: 0 }
                            }
                            transition={{
                              duration: 1,
                              delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            }}
                          />
                        </div>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills


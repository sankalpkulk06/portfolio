import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

type HeroRevealProps = PropsWithChildren<{
  className?: string
}>

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.46, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const HeroReveal = ({ className, children }: HeroRevealProps) => {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}

export default HeroReveal


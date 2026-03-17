import { motion } from 'framer-motion'

const symbols = [
  { text: '</>', className: 'hero-float hero-float-a', duration: 8.5, offset: -12 },
  { text: '{AI}', className: 'hero-float hero-float-b', duration: 9.2, offset: 10 },
  { text: 'λ', className: 'hero-float hero-float-c', duration: 7.8, offset: -8 },
  { text: '<>', className: 'hero-float hero-float-d', duration: 10.2, offset: 12 },
  { text: '{}', className: 'hero-float hero-float-e', duration: 8.9, offset: -10 },
]

const FloatingSymbols = () => {
  return (
    <>
      {symbols.map((symbol) => (
        <motion.span
          key={symbol.text + symbol.className}
          className={symbol.className}
          animate={{ y: [0, symbol.offset, 0] }}
          transition={{ duration: symbol.duration, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          {symbol.text}
        </motion.span>
      ))}
    </>
  )
}

export default FloatingSymbols


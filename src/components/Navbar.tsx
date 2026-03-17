import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { useLocation, useNavigate } from 'react-router-dom'
import { profile } from '../data/portfolioData'

interface NavbarProps {
  activeSection: string
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home', type: 'section' as const },
    { id: 'about', label: 'About', type: 'section' as const },
    { id: 'skills', label: 'Skills', type: 'section' as const },
    { id: 'experience', label: 'Experience', type: 'route' as const, path: '/experience' },
    { id: 'projects', label: 'Projects', type: 'route' as const, path: '/projects' },
    { id: 'gallery', label: 'Gallery', type: 'route' as const, path: '/gallery' },
    { id: 'blogs', label: 'Blogs', type: 'route' as const, path: '/blogs' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const handleNavClick = (item: (typeof navItems)[number]) => {
    if (item.type === 'route' && item.path) {
      navigate(item.path)
      setIsMobileMenuOpen(false)
      return
    }

    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollToSection(item.id), 80)
      return
    }

    scrollToSection(item.id)
  }

  const isItemActive = (item: (typeof navItems)[number]) => {
    if (item.type === 'route') {
      if (location.pathname === item.path) return true
      if (location.pathname === '/' && (item.id === 'experience' || item.id === 'projects')) {
        return activeSection === item.id
      }
      return false
    }
    return location.pathname === '/' && activeSection === item.id
  }

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <motion.div
          className="navbar-logo"
          onClick={() => handleNavClick(navItems[0])}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          SK
        </motion.div>

        <div className="navbar-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`navbar-item ${isItemActive(item) ? 'active' : ''}`}
              onClick={() => handleNavClick(item)}
            >
              {item.label}
            </button>
          ))}
          <a className="navbar-resume" href={profile.resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`mobile-menu-item ${isItemActive(item) ? 'active' : ''}`}
              onClick={() => handleNavClick(item)}
            >
              {item.label}
            </button>
          ))}
          <a className="mobile-menu-item mobile-resume" href={profile.resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar

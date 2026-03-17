import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Hobbies from './components/Hobbies'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import './App.css'

const homeSectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'contact']

function HomePage() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140
      for (const id of homeSectionIds) {
        const section = document.getElementById(id)
        if (!section) continue
        const top = section.offsetTop
        const bottom = top + section.offsetHeight
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(id)
          break
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <ScrollProgress />
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function GalleryPage() {
  return (
    <div className="app">
      <ScrollProgress />
      <Navbar activeSection="hobbies" />
      <main>
        <Hobbies />
      </main>
      <Footer />
    </div>
  )
}

function BlogsPage() {
  return (
    <div className="app">
      <ScrollProgress />
      <Navbar activeSection="blogs" />
      <main>
        <Blogs />
      </main>
      <Footer />
    </div>
  )
}

function ExperiencePage() {
  return (
    <div className="app">
      <ScrollProgress />
      <Navbar activeSection="experience" />
      <main>
        <Experience />
      </main>
      <Footer />
    </div>
  )
}

function ProjectsPage() {
  return (
    <div className="app">
      <ScrollProgress />
      <Navbar activeSection="projects" />
      <main>
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

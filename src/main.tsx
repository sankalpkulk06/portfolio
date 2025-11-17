import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Main.tsx loaded')
console.log('Root element:', document.getElementById('root'))

try {
  const rootElement = document.getElementById('root')
  if (!rootElement) {
    console.error('Root element not found!')
    document.body.innerHTML = '<div style="padding:50px;color:red;"><h1>ERROR: Root element not found!</h1></div>'
  } else {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
    console.log('React app rendered successfully')
    
    // Debug: Check if content is visible after a delay
    setTimeout(() => {
      const appElement = document.querySelector('.app')
      const heroElement = document.querySelector('.hero')
      console.log('App element:', appElement)
      console.log('Hero element:', heroElement)
      if (appElement) {
        const styles = window.getComputedStyle(appElement)
        console.log('App styles:', {
          display: styles.display,
          visibility: styles.visibility,
          opacity: styles.opacity,
          height: styles.height,
        })
      }
    }, 2000)
  }
} catch (error) {
  console.error('Error rendering app:', error)
  document.body.innerHTML = `<div style="padding:50px;color:red;"><h1>ERROR Rendering App</h1><pre>${String(error)}</pre></div>`
}


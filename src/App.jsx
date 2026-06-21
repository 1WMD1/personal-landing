import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Timeline from './components/Timeline/Timeline'
import './App.css'

function HomePage() {
  return (
    <>
      <Header isHome={true} />
      <Hero />
      <Contact />
      <Footer />
    </>
  )
}



function TimelinePage() {
  return (
    <>
      <Header isHome={false} />
      <Timeline />
      <Footer />
    </>
  )
}

function App() {
  const [currentView, setCurrentView] = useState('home')
  
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === '#/timeline' || hash === '#/timeline/') {
        setCurrentView('timeline')
      } else {
        setCurrentView('home')
      }
    }
    
    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])
  
  return (
    <div className="app">
      {currentView === 'home' && <HomePage />}
      {currentView === 'timeline' && <TimelinePage />}
    </div>
  )
}

export default App

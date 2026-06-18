import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import './App.css'

function HomePage() {
  return (
    <>
      <Header isHome={true} />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

function BlogPage() {
  const handleNavigate = (path) => {
    window.location.hash = path
  }
  
  return (
    <>
      <Header isHome={false} />
      <Blog onNavigate={handleNavigate} />
      <Footer />
    </>
  )
}

function App() {
  const [currentView, setCurrentView] = useState('home')
  
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash.startsWith('#/blog/')) {
        setCurrentView('blogpost')
      } else if (hash === '#/blog' || hash === '#/blog/') {
        setCurrentView('blog')
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
      {currentView === 'blog' && <BlogPage />}
      {currentView === 'blogpost' && (
        <>
          <Header isHome={false} />
          <BlogPost />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App

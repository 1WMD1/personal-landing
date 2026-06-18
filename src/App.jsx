import { HashRouter as Router, Routes, Route } from 'react-router-dom'
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
      <Header />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<><Header /><Blog /><Footer /></>} />
          <Route path="/blog/:slug" element={<><Header /><BlogPost /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

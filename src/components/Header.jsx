import './Header.css'

function Header({ isHome = false }) {
  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      window.location.hash = href
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
  
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">My Portfolio</div>
        <nav className="nav">
          {isHome ? (
            <>
              <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>首页</a>
              <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>关于我</a>
              <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>技能</a>
            </>
          ) : (
            <a href="/">首页</a>
          )}
          <a href="#/blog">博客</a>
          {isHome ? (
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>联系</a>
          ) : (
            <a href="/">联系</a>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header

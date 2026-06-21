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
        <div className="logo">
          <span className="logo-main">💕LUMINOVA VISTA </span>
          <span className="logo-sub">明晴志远</span>
        </div>
        <nav className="nav">
          {isHome ? (
            <>
              <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>首页</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>联系我们</a>
            </>
          ) : (
            <a href="/personal-landing/">首页</a>
          )}
          <a href="/personal-landing/#/timeline">时间线</a>
        </nav>
      </div>
    </header>
  )
}

export default Header

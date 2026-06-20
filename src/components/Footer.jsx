import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>LUMINOVA VISTA-明晴志远</h3>
            <p>用代码创造美好事物</p>
          </div>
          <div className="footer-section">
            <h4>快速链接</h4>
            <a href="#home">首页</a>
            <a href="#about">关于</a>
            <a href="#skills">技能</a>
            <a href="#contact">联系</a>
          </div>
          <div className="footer-section">
            <h4>社交媒体</h4>
            <div className="social-links">
              <a href="https://github.com/1WMD1" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} LUMINOVA VISTA-明晴志远. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

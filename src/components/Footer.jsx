import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>💕 Our  Space</h3>
            <p>我们的私密空间，记录爱的点点滴滴</p>
          </div>
          <div className="footer-section">
            <h4>快速链接</h4>
            <a href="#home">首页</a>
            <a href="/personal-landing/#/timeline">时间线</a>
            <a href="#contact">联系我们</a>
          </div>
          <div className="footer-section">
            <h4>我们的故事</h4>
            <p>从相识到相知，从相爱到相伴</p>
            <p>每一刻都值得珍藏</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Our Love Space. 愿爱无忧 💕</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

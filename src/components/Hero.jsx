import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>你好，我是 <span className="highlight">吴明达</span></h1>
        <p className="subtitle">嵌入式软件开发者 | 噪音制造者 | 技术爱好者</p>
        <p className="description">
          热爱用代码创造美好事物，专注于构建优雅、高效的事务
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">联系我</a>
          <a href="#about" className="btn btn-secondary">了解更多</a>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-placeholder">
          <span>👤</span>
        </div>
      </div>
    </section>
  )
}

export default Hero

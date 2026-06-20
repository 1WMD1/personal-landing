import './Hero.css'
import heroImage from '../assets/wmd.jpg'
import heroBg from '../assets/lx01_02.jpg'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img src={heroBg} alt="background" className="hero-bg-image" />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1>你好，我是 <span className="highlight">吴明达</span></h1>
        <p className="subtitle">嵌入式系统工程师 | AI时代的超级个体</p>
        <p className="description">
          深耕嵌入式系统开发，融合 AI 技术赋能硬件智能化。
          从底层驱动到云端应用，从芯片选型到算法部署，打造端边云一体化的智能解决方案。
          用技术连接物理世界与数字世界，让每一个设备都拥有智慧。
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">联系我</a>
          <a href="#about" className="btn btn-secondary">了解更多</a>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="吴明达" className="hero-photo" />
      </div>
    </section>
  )
}

export default Hero

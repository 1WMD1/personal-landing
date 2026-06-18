import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">关于我</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              我是一名热爱技术的全栈开发者，拥有 2 年的嵌入式软件开发经验。
              擅长构建高性能的嵌入式系统。
            </p>
            <p>
              我相信技术的力量可以改变世界，因此我持续学习新技术，
              并将它们应用到实际项目中。除了编程，我还喜欢音乐和旅行。
            </p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2025 - 至今</h3>
                <p>嵌入式软件工程师 @ 阳光电源股份有限公司</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2024 - 2025</h3>
                <p>嵌入式软件工程师 @ 江淮前沿技术协同创新研究中心</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2021 - 2024</h3>
                <p>嵌入式系统开发实习生 @ CVTE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

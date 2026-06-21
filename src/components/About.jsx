import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">关于我</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              我是一名嵌入式系统工程师，专注于将 AI 技术与硬件深度融合。
              拥有多年嵌入式开发经验，精通 C/C++、嵌入式 Linux、RTOS 等核心技术栈。
            </p>
            <p>
              在 AI 时代，我致力于打造“超级个体”——从底层硬件设计到上层算法部署，
              从传感器数据采集到云端数据分析，独立完成端边云一体化解决方案。
              我相信，未来的工程师不仅需要深耕专业，更要跨界融合，用技术创造无限可能。
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
                <h3>2026 - 2025</h3>
                <p>嵌入式软件工程师 @ 江淮前沿技术协同创新研究中心</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2021 - 2026</h3>
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

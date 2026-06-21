import { useState, useEffect } from 'react'
import './Hero.css'
import heroImage from '../assets/wmd.jpg'
import heroBg from '../assets/lx01_02.jpg'

function Hero() {
  const [timeTogether, setTimeTogether] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // 设置你们在一起的日期（请根据实际情况修改）
    const startDate = new Date('2026-05-30T00:00:00')

    const updateTime = () => {
      const now = new Date()
      const diff = now - startDate

      // 计算年月日时分秒
      const years = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000))
      const months = Math.floor((diff % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000))
      const days = Math.floor((diff % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000))
      const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
      const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000))
      const seconds = Math.floor((diff % (60 * 1000)) / 1000)

      setTimeTogether({ years, months, days, hours, minutes, seconds })
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img src={heroBg} alt="background" className="hero-bg-image" />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1>💕 我们的空间</h1>
        <p className="subtitle">吴明达 && 王雨晴</p>
        <p className="description">
          在这里，记录我们的每一个美好瞬间<br />
          从相识到相知，从相爱到相伴<br />
          每一刻都值得珍藏
        </p>
        
        <div className="love-timer">
          <h2>我们已经认识</h2>
          <div className="timer-display">
            <div className="timer-item">
              <span className="timer-value">{timeTogether.years}</span>
              <span className="timer-label">年</span>
            </div>
            <div className="timer-item">
              <span className="timer-value">{timeTogether.months}</span>
              <span className="timer-label">月</span>
            </div>
            <div className="timer-item">
              <span className="timer-value">{timeTogether.days}</span>
              <span className="timer-label">日</span>
            </div>
            <div className="timer-item">
              <span className="timer-value">{timeTogether.hours}</span>
              <span className="timer-label">时</span>
            </div>
            <div className="timer-item">
              <span className="timer-value">{timeTogether.minutes}</span>
              <span className="timer-label">分</span>
            </div>
            <div className="timer-item">
              <span className="timer-value">{timeTogether.seconds}</span>
              <span className="timer-label">秒</span>
            </div>
          </div>
          <p className="timer-quote">每一秒都是爱的印记</p>
        </div>

        <div className="hero-buttons">
          <a href="#/timeline" className="btn btn-primary">查看我们的时光</a>
          <a href="#contact" className="btn btn-secondary">联系我们</a>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="我们" className="hero-photo" />
      </div>
    </section>
  )
}

export default Hero

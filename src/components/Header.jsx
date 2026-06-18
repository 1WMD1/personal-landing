import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">My Portfolio</div>
        <nav className="nav">
          <a href="#home">首页</a>
          <a href="#about">关于我</a>
          <a href="#skills">技能</a>
          <Link to="/blog">博客</Link>
          <a href="#contact">联系</a>
        </nav>
      </div>
    </header>
  )
}

export default Header

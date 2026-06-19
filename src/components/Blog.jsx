import { useState } from 'react'
import './Blog.css'

// 导入所有文章
import post1 from '../posts/2026-06-18-ai-embedded-engineer.md?raw'
import post2 from '../posts/2026-06-20-weekend-sunset.md?raw'

// 解析 Markdown 文件的 frontmatter
function parsePost(content, slug) {
  const parts = content.split('---')
  const frontmatter = parts[1]
  const markdown = parts[2]
  
  const meta = {}
  frontmatter.split('\n').forEach(line => {
    const match = line.match(/^(\w+):\s*"?(.+?)"?$/)
    if (match) {
      meta[match[1]] = match[2]
    }
  })
  
  return {
    ...meta,
    slug: slug,
    content: markdown
  }
}

const posts = [
  parsePost(post2, 'weekend-sunset'),
  parsePost(post1, 'ai-embedded-engineer')
]

function Blog({ onNavigate }) {
  const [filter, setFilter] = useState('all')
  
  const categories = ['all', '作品', '思考', '日常']
  
  const filteredPosts = filter === 'all' 
    ? posts 
    : posts.filter(post => post.category === filter)

  const handlePostClick = (slug, e) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate(`/blog/${slug}`)
    }
  }

  return (
    <section className="blog">
      <div className="blog-container">
        <h2 className="section-title">博客</h2>
        <p className="blog-subtitle">分享技术、日常与行业思考</p>
        
        {/* 分类筛选 */}
        <div className="blog-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'all' ? '全部' : cat}
            </button>
          ))}
        </div>
        
        {/* 文章列表 */}
        <div className="posts-grid">
          {filteredPosts.map((post, index) => (
            <a 
              href={`/personal-landing/#/blog/${post.slug}`} 
              key={index} 
              className="post-card"
              onClick={(e) => handlePostClick(post.slug, e)}
            >
              <div className="post-header">
                <span className="post-category">{post.category}</span>
                <span className="post-date">{post.date}</span>
              </div>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-summary">{post.summary}</p>
              <div className="post-tags">
                {post.tags && post.tags.split(',').map((tag, i) => (
                  <span key={i} className="tag">{tag.trim()}</span>
                ))}
              </div>
              <span className="read-more">阅读全文 →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog

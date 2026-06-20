import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import './BlogPost.css'

// 导入文章
import post1 from '../posts/2026-06-18-ai-embedded-engineer.md?raw'
import post2 from '../posts/2026-06-20-weekend-sunset.md?raw'

const postsMap = {
  'ai-embedded-engineer': post1,
  'weekend-sunset': post2
}

function BlogPost() {
  // 从 URL hash 中获取 slug
  const hash = window.location.hash
  const slug = hash.replace('#/blog/', '')
  const postContent = postsMap[slug]
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  
  if (!postContent) {
    return <div className="blog-post not-found">文章不存在</div>
  }
  
  // 解析 frontmatter 和 markdown
  const firstDashIndex = postContent.indexOf('---')
  const secondDashIndex = postContent.indexOf('---', firstDashIndex + 3)
  
  const frontmatter = postContent.substring(firstDashIndex + 3, secondDashIndex)
  const markdown = postContent.substring(secondDashIndex + 3)
  
  const meta = {}
  frontmatter.split('\n').forEach(line => {
    const match = line.match(/^(\w+):\s*"?(.+?)"?$/)
    if (match) {
      meta[match[1]] = match[2]
    }
  })

  const handleBackClick = (e) => {
    e.preventDefault()
    window.location.hash = '/personal-landing/#/blog'
  }

  // 点击打开灯箱
  const handleClick = (index) => {
    setLightboxOpen(true)
    setLightboxIndex(index)
  }

  return (
    <article className="blog-post">
      <div className="blog-post-container">
        <a href="/personal-landing/#/blog" className="back-link" onClick={handleBackClick}>← 返回博客列表</a>
        
        <header className="post-header">
          <h1 className="post-title-full">{meta.title}</h1>
          <div className="post-meta">
            <span className="post-category">{meta.category}</span>
            <span className="post-date">{meta.date}</span>
          </div>
          {meta.tags && (
            <div className="post-tags-full">
              {meta.tags.split(',').map((tag, i) => (
                <span key={i} className="tag">{tag.trim()}</span>
              ))}
            </div>
          )}
        </header>
        
        <div className="post-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              img({node, src, alt, ...props}) {
                // 处理图片路径：CDN 链接直接使用，本地路径添加 base path
                const imageSrc = src.startsWith('http') ? src : (src.startsWith('/') ? `/personal-landing${src}` : src)
                
                return (
                  <img 
                    src={imageSrc} 
                    alt={alt} 
                    loading="lazy"
                    decoding="async"
                    style={{ 
                      opacity: 0,
                      cursor: 'pointer'
                    }}
                    onClick={() => {
                      // 简单处理：打开灯箱，显示当前图片
                      setLightboxOpen(true)
                      setLightboxIndex(0)
                    }}
                    onLoad={(e) => {
                      e.target.style.opacity = 1
                      e.target.classList.add('loaded')
                    }}
                    {...props} 
                  />
                )
              },
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
          >
            {markdown}
          </ReactMarkdown>
        </div>
        
        <footer className="post-footer">
          <a href="/personal-landing/#/blog" className="back-link" onClick={handleBackClick}>← 返回博客列表</a>
        </footer>
      </div>
      
      {/* 图片灯箱 */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={(() => {
          // 动态获取所有图片
          const images = document.querySelectorAll('.post-content img')
          return Array.from(images).map(img => ({ src: img.src }))
        })()}
      />
    </article>
  )
}

export default BlogPost

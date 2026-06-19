import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
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
            components={{
              img({node, src, alt, ...props}) {
                // 处理图片路径，添加 base path
                const imageSrc = src.startsWith('/') ? `/personal-landing${src}` : src
                return (
                  <img 
                    src={imageSrc} 
                    alt={alt} 
                    loading="lazy"
                    style={{ 
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      background: '#f0f0f0'
                    }}
                    onLoad={(e) => {
                      e.target.style.opacity = 1
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
    </article>
  )
}

export default BlogPost

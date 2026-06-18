import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import './BlogPost.css'

// 导入文章
import post1 from '../posts/2026-06-18-ai-embedded-engineer.md?raw'

const postsMap = {
  'ai-embedded-engineer': post1
}

function BlogPost() {
  const { slug } = useParams()
  const postContent = postsMap[slug]
  
  if (!postContent) {
    return <div className="blog-post not-found">文章不存在</div>
  }
  
  // 解析 frontmatter 和 markdown
  const parts = postContent.split('---')
  const frontmatter = parts[1]
  const markdown = parts[2]
  
  const meta = {}
  frontmatter.split('\n').forEach(line => {
    const match = line.match(/^(\w+):\s*"?(.+?)"?$/)
    if (match) {
      meta[match[1]] = match[2]
    }
  })

  return (
    <article className="blog-post">
      <div className="blog-post-container">
        <Link to="/blog" className="back-link">← 返回博客列表</Link>
        
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
          <Link to="/blog" className="back-link">← 返回博客列表</Link>
        </footer>
      </div>
    </article>
  )
}

export default BlogPost

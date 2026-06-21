import PhotoGrid from './PhotoGrid'
import './PostCard.css'

function PostCard({ post }) {
  const renderContent = () => {
    switch(post.type) {
      case 'photo-grid':
        return (
          <>
            <p className="post-text">{post.content}</p>
            <PhotoGrid images={post.images.slice(0, 9)} />
          </>
        )
      case 'photo-single':
        return (
          <>
            <p className="post-text">{post.content}</p>
            <div className="post-image-single">
              <img src={post.images[0]} alt="" loading="lazy" />
            </div>
          </>
        )
      case 'tech':
        return (
          <>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-summary">{post.content}</p>
            <a href={`/personal-landing/#/blog/${post.slug}`} className="read-more">
              阅读全文 →
            </a>
          </>
        )
      default:
        return <p className="post-text">{post.content}</p>
    }
  }
  
  return (
    <article className="post-card">
      <header className="post-header">
        <div className="post-meta">
          <span className="author-name">{post.author}</span>
          <time className="post-time">{post.time}</time>
        </div>
      </header>
      
      <div className="post-content">
        {renderContent()}
      </div>
    </article>
  )
}

export default PostCard

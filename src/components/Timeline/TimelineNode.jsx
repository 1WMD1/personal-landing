import PostCard from './PostCard'
import './TimelineNode.css'

function TimelineNode({ post, delay = 0 }) {
  return (
    <div 
      className="timeline-node"
      style={{ animationDelay: `${delay}s` }}
    >
      <PostCard post={post} />
    </div>
  )
}

export default TimelineNode

import { useState, useEffect } from 'react'
import TimelineNode from './TimelineNode'
import TimeDivider from './TimeDivider'
import './Timeline.css'

// 示例情侣照片数据
const couplePosts = [
  {
    id: 'couple-photos-1',
    type: 'photo-grid',
    author: '我们的故事',
    avatar: '/personal-landing/wmd.jpg',
    time: '2026-06-07',
    timestamp: new Date('2026-06-21').getTime(),
    content: '💕 我们的美好时光，每一张照片都是珍贵的回忆～',
    location: {
      name: '中国合肥三十岗',
      latitude: 31.9489,
      longitude: 117.1531,
      icon: '📍'
    },
    images: [
      '/personal-landing/lx02_01.jpg',
      '/personal-landing/lx02_02.jpg',
      '/personal-landing/lx02_03.jpg',
      '/personal-landing/lx02_04.jpg',
      '/personal-landing/lx02_05.jpg',
      '/personal-landing/lx02_06.jpg',
      '/personal-landing/lx02_07.jpg',
      '/personal-landing/lx02_08.jpg',
      '/personal-landing/lx02_09.jpg'
    ],
    likes: 520,
    comments: 13,
    shares: 14,
    liked: false
  },
  {
    id: 'couple-photos-2',
    type: 'photo-grid',
    author: '我们的故事',
    avatar: '/personal-landing/wmd.jpg',
    time: '2026-05-31',
    timestamp: new Date('2026-05-31').getTime(),
    content: '记录下这是我们第一次一起出去,留下了美好的回忆',
    location: {
      name: '中国合肥巢湖小洱海',
      latitude: 31.5944,
      longitude: 117.8616,
      icon: '🌅'
    },
    images: [
      '/personal-landing/lx01_01.jpg',
      '/personal-landing/lx01_02.jpg',
      '/personal-landing/lx01_03.jpg',
      '/personal-landing/lx01_04.jpg',
      '/personal-landing/lx01_05.jpg',
      '/personal-landing/lx01_06.jpg',
      '/personal-landing/lx01_07.jpg',
      '/personal-landing/lx01_08.jpg',
      '/personal-landing/lx01_09.jpg'
    ],
    likes: 999,
    comments: 52,
    shares: 20,
    liked: false
  },
]

const timelineData = couplePosts

function Timeline() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    // 按时间排序（最新的在前）
    const sorted = timelineData.sort((a, b) => b.timestamp - a.timestamp)
    setPosts(sorted)
  }, [])
  
  // 按月份分组
  const groupedPosts = posts.reduce((groups, post) => {
    const date = new Date(post.timestamp)
    const monthKey = `${date.getFullYear()}年${date.getMonth() + 1}月`
    
    if (!groups[monthKey]) groups[monthKey] = []
    groups[monthKey].push(post)
    
    return groups
  }, {})
  
  // 将所有帖子展平并添加位置标记
  let globalIndex = 0
  const allPosts = Object.entries(groupedPosts).flatMap(([month, monthPosts]) => {
    return monthPosts.map(post => ({
      ...post,
      month,
      position: globalIndex++ % 2 === 0 ? 'left' : 'right'
    }))
  })
  
  return (
    <section className="timeline-section">
      <div className="timeline-header">
        <h1>🌳 我们的时光轴</h1>
        <p className="timeline-subtitle">像根须一样，向下生长，记录我们的每一个美好瞬间</p>
      </div>
      
      <div className="timeline">
        {allPosts.map((post, index) => (
          <div 
            key={post.id} 
            className={`timeline-node-wrapper ${post.position}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* 显示月份分隔符（当月份变化时）*/}
            {index === 0 || allPosts[index - 1].month !== post.month ? (
              <TimeDivider month={post.month} />
            ) : null}
            <TimelineNode post={post} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Timeline

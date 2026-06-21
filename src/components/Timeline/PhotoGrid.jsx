import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import './PhotoGrid.css'

function PhotoGrid({ images }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  
  const handleClick = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }
  
  const slides = images.map(src => ({ src }))
  const imageCount = Math.min(images.length, 9)
  
  return (
    <>
      <div className={`photo-grid grid-${imageCount}`}>
        {images.slice(0, 9).map((img, index) => (
          <div 
            key={index} 
            className="photo-item"
            onClick={() => handleClick(index)}
          >
            <img src={img} alt="" loading="lazy" />
          </div>
        ))}
      </div>
      
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
      />
    </>
  )
}

export default PhotoGrid

import React from 'react'
import defaultImage from '../assets/default_image.svg';
import './ImageGenerator.css'
const ImageGenerator = () => {
  return (
    <div className='ai-image-generator'>
        <div className="header">
            Ai image <span>Generator</span>
        </div>
        <div className="img-loading">
            <div className="image">
                <img src={defaultImage} alt="default image"/>
            </div>
        </div>
      
    </div>
  )
}

export default ImageGenerator

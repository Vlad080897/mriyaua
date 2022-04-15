import React, { useState } from 'react'
import { itemData } from '../../../English/PhotoReports/Fullscreen/PhotoReportsFull.jsx'
import '../../../../styles/PhotoReports/PhotoReportsSmall.css'

const PhotoRepotsSmall = () => {
  let swipe
  let swipeEnd
  const [slideIndex, setSlideIndex] = useState(1);

  const handleSwipe = (e) => {
    //document.body.style.overflowY = "hidden";
    if (swipe - swipeEnd === 0 || swipe - swipeEnd >= -15) {
      document.body.style.overflowY = "scroll";
    }
    if (e.changedTouches[0].clientX !== swipe && e.changedTouches[0].clientX - swipe >= 20) {
      e.changedTouches[0].clientX - swipe > -20 && prevSlide()

    } else if (e.changedTouches[0].clientX !== swipe && e.changedTouches[0].clientX - swipe <= -20) {
      e.changedTouches[0].clientX - swipe < -20 && nextSlide()
    }
  }

  const nextSlide = () => {
    if (slideIndex !== itemData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === itemData.length) {
      setSlideIndex(1);
    };
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(itemData.length)
    }
  }
  return (
    <div className='mobile_photo_reports_container'>
      <div className='mobile_photo_reports_title'><span>ФОТОЗВІТ</span></div>
      <div className='mobile_slider_container'>
        {itemData.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
            >
              <img alt=""
                onTouchStart={(e) => swipe = e.changedTouches[0].clientX}
                onTouchEnd={(e) => {
                  swipeEnd = e.changedTouches[0].clientX
                  handleSwipe(e)
                }
                }
                onMouseOver={() => document.body.style.overflowY = "scroll"}
                src={process.env.PUBLIC_URL + require(`../../../../images/PhotoReports/image${index + 1}.jpg`)}
              />
            </div>
          )
        })}
      </div>
      <div className="container-dots">
        {Array.from({ length: 5 }).map((dot, index) => {
          return (
            <div
              onClick={() => setSlideIndex(index + 1)}
              key={index}
              className={slideIndex === index + 1 ? "dot active" : "dot"} >
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PhotoRepotsSmall
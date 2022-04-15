import React from 'react'
import Carousel from "react-elastic-carousel";
import Plyr from 'plyr-react'
import video1 from '../../../../videos/video.mp4'
import video2 from '../../../../videos/video2.mp4'
import video3 from '../../../../videos/video3.mp4'
import video4 from '../../../../videos/video4.mp4'
import video5 from '../../../../videos/video5.mp4'
import video6 from '../../../../videos/video6.mp4'
import video7 from '../../../../videos/video6.mp4'
import '../../../../styles/VideoReports/VideoReportsSmall.css'

const allVideos = [
  {
    type: "video",
    sources: [
      {
        src: video1,
        type: 'video/mp4',
        size: 720
      }
    ]

  },
  {
    type: "video",
    sources: [
      {
        src: video2,
        type: 'video/mp4',
        size: 720
      }
    ]
  },
  {
    type: "video",
    sources: [
      {
        src: video3,
        type: 'video/mp4',
        size: 720
      }
    ]

  },
  {
    type: "video",
    sources: [
      {
        src: video4,
        type: 'video/mp4',
        size: 720
      }
    ]
  },
  {
    type: "video",
    sources: [
      {
        src: video5,
        type: 'video/mp4',
        size: 720
      }
    ]
  },
  {
    type: "video",
    sources: [
      {
        src: video6,
        type: 'video/mp4',
        size: 720
      }
    ]
  },
  {
    type: "video",
    sources: [
      {
        src: video7,
        type: 'video/mp4',
        size: 720
      }
    ]
  }
]

const VideoReportsSmall = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 }
  ];

  const myArrow = () => {
    return (
      <div></div>
    )
  }
  return (
    <div className='mobile_video_reports_container' id='videoReports'>
      <div className='mobile_video_reports_title'><span>Video Reports</span></div>
      <Carousel breakPoints={breakPoints}
        renderPagination={({ pages, activePage, onClick }) => {
          return (
            <div className='dot_container'>
              {pages.map((page) => {
                const isActivePage = activePage === page
                return (
                  <div
                    className={isActivePage ? 'mobile_dot active' : 'mobile_dot'}
                    key={page}
                    onClick={() => onClick(page)}
                    active={isActivePage}
                  />
                )
              })}
            </div>
          )
        }}
        renderArrow={myArrow}>
        {allVideos.map((video, index) => {
          return (
            <>
              <div key={index} >
                <Plyr key={index} source={video}>
                </Plyr>
              </div>
            </>
          )
        })
        }
      </Carousel>
    </div>
  )
}

export default VideoReportsSmall
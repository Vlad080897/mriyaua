import React from 'react'
import Carousel from "react-elastic-carousel";
import video1 from '../../../../videos/video.mp4'
import video2 from '../../../../videos/video2.mp4'
import video3 from '../../../../videos/video3.mp4'
import video4 from '../../../../videos/video4.mp4'
import video5 from '../../../../videos/video5.mp4'
import video6 from '../../../../videos/video6.mp4'
import video7 from '../../../../videos/video6.mp4'
import { Player, ControlBar } from 'video-react';
import VideoPlayer from 'react-video-js-player';
import ReactPlayer from 'react-player'
import Plyr from 'plyr-react'
import "plyr-react/dist/plyr.css";
import '../../../../styles/VideoReports/VideoReportsFull.css'

const VideoReportsFull = () => {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 }
  ];

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
  return (
    <div className='video_reports_container' id='videoReports'>
      <div>
        <span className='video_reports_title'>Video Reports</span>
        <div>
          <Carousel breakPoints={breakPoints} >
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
      </div>
    </div >
  )
}

export default VideoReportsFull
import React from 'react'
import MediaQuery from 'react-responsive'
import VideoReportsFull from './FullScreen/VideoReportsFull'
import VideoReportsSmall from './SmallScreen/VideoReportsSmall'

const VideoReports = () => {
  return (
    <>
      <MediaQuery minDeviceWidth={800}>
        <VideoReportsFull />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={800}>
        <VideoReportsSmall />
      </MediaQuery>
    </>
  )
}

export default VideoReports
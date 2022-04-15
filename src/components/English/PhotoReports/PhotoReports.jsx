import React from 'react'
import MediaQuery from 'react-responsive'
import PhotoReportsFull from './Fullscreen/PhotoReportsFull'
import PhotoRepotsSmall from './SmallScreen/PhotoRepotsSmall'

const PhotoReports = () => {
  return (
    <>
      <MediaQuery minDeviceWidth={800}>
        <PhotoReportsFull />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={800}>
        <PhotoRepotsSmall />
      </MediaQuery>
    </>
  )
}

export default PhotoReports
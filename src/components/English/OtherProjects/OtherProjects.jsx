import React from 'react'
import MediaQuery from 'react-responsive'
import OtherProjectsFullScreen from './OtherProjectsFullScreen/OtherProjectsFullScreen'

const OtherProjects = () => {
  return (
    <>
      <MediaQuery minDeviceWidth={800}>
        <OtherProjectsFullScreen />
      </MediaQuery>
      <MediaQuery minDeviceWidth={500}>

      </MediaQuery>
    </>
  )
}

export default OtherProjects
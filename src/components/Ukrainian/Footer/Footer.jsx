import React from 'react'
import MediaQuery from 'react-responsive'
import FooterFullScreen from './FooterFullScreen/FooterFullScreen'
import FooterSmallScreen from './FooterSmallScreen/FooterSmallScreen'

const Footer = () => {
  return (
    <>
      <MediaQuery minDeviceWidth={800}>
        <FooterFullScreen />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={800}>
        <FooterSmallScreen />
      </MediaQuery>
    </>

  )
}

export default Footer
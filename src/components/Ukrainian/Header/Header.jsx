import React from 'react'
import MediaQuery from 'react-responsive'
import BigHeader from './FullScreen/BigHeader'
import SmallHeader from './SmallScreen/SmallHeader'



const Header = () => {
  return (
    <>
      <MediaQuery minDeviceWidth={800}>
        <BigHeader />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={500}>
        <SmallHeader />
      </MediaQuery>
    </>
  )
}

export default Header
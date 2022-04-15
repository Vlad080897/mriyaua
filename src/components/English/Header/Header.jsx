import React from 'react'
import MediaQuery from 'react-responsive'
import BigHeader from './BigHeader/BigHeader'
import SmallHeader from './SmallHeader/SmallHeader'

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
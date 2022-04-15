import React from 'react'
import MediaQuery from 'react-responsive'
import WalletsFullScreen from './WalletsFullScreen/WalletsFullScreen'
import WalletsSmallScreen from './WalletsSmallScreen/WalletsSmallScreen'

const Wallets = () => {
  return (
    <>
      <MediaQuery minDeviceWidth={800}>
        <WalletsFullScreen />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={500}>
        <WalletsSmallScreen />
      </MediaQuery>
    </>

  )
}

export default Wallets
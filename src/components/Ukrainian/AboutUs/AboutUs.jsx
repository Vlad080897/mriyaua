import React from 'react'
import MediaQuery from 'react-responsive'
import AboutUsFullScreen from './BigScreen/AboutUsFullScreen'
import AboutUsSmallScreen from './SmallScreen/AboutUsSmallScreen'

const AboutUs = () => {
    return (
        <>
            <MediaQuery minDeviceWidth={800}>
                <AboutUsFullScreen />
            </MediaQuery>
            <MediaQuery maxDeviceWidth={800}>
                <AboutUsSmallScreen />
            </MediaQuery>
        </>

    )
}

export default AboutUs
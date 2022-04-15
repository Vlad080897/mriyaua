import React from 'react'
import AboutUs from './AboutUs/AboutUs'
import Header from './Header/Header'
import WhatWeDo from '../Ukrainian/WhatWeDo/WhatWeDo'
import PhotoReports from './PhotoReports/PhotoReports'
import VideoReports from './VideoReports/VideoReports'
import Wallets from './Wallets/Wallets'
import OtherProjects from './OtherProjects/OtherProjects'
import Footer from './Footer/Footer'


const UkrainianVersion = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <WhatWeDo />
      <PhotoReports />
      <VideoReports />
      <Wallets />
      <OtherProjects />
      <Footer />
    </>
  )
}

export default UkrainianVersion
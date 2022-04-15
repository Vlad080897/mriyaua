import React from 'react'
import girl from '../../../../images/OtherProjects/Character 5 1.png'
import '../../../../styles/OtherProjects/OtherProjectsFullScreen.css'

const OtherProjectsFullScreen = () => {
  return (
    <div className='other_projects_container'>
      <div className='other_projects_title'><span>Інші проекти</span></div>
      <div className='other_projects_blocks'>
        <div>
          <div className='footer_info'>
            <span className='footer_info_title'>ІНТЕРАКТИВНА МАПА ЛЮДЕЙ З ЕВАКУАЦІЇ</span>
            <div className='footer_divider'></div>
            <span className='footer_sub_title'>
              Інтерактивна мапа переселенців з України по всьому світу
            </span>
          </div>
        </div>
        <div>
          <div className='footer_info center'>
            <div className='pl pb'>
              <img src={girl} alt="" />
            </div>
            <span className='footer_info_title'>NFT КОЛЕКЦІЯ НА ПІДТРИМКУ УКРАЇНИ</span>
            <div className='footer_divider'></div>
            <span className='footer_sub_title'>
              Unique NFT avatars that were designed in Ukraine and minted on Opensea to support Ukrainians.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherProjectsFullScreen
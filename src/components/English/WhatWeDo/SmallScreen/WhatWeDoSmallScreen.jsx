import React from 'react'
import FoodandMedicine from '../../../../images/mobileversion/activities/Food and medicine.png'
import Evacuation from '../../../../images/mobileversion/activities/Evacuation support.png'
import Army from '../../../../images/mobileversion/activities/Equipment for army.png'
import Medicine from '../../../../images/mobileversion/activities/Medicine, essential.png'
import '../../../../styles/WhatWeDo/WhatWeDoSmallScreen.css'

const WhatWeDoSmallScreen = () => {
  return (
    <div className='mobile_what_we_do_wrapper' id='whatWeDo'>
      <div className='mobile_what_we_do_title'>
        <span>WHAT WE DO</span>
      </div>
      <div className='mobile_what_we_do_container'>
        <div>
          <img src={FoodandMedicine} alt="Food and Medicine" className='mobile_what_we_do_photo' />
          <div className='mobile_what_we_do_info'>
            <span>FOOD AND MEDICINE DELIVERY</span>
            <div className='divider_what_we_do'></div>
            <span>We deliver food and medicine packages to families all over the country.</span>
          </div>
        </div>
        <div>
          <img src={Evacuation} alt="Food and Medicine" className='mobile_what_we_do_photo' />
          <div className='mobile_what_we_do_info'>
            <span>EVACUATION SUPPORT FOR FAMILIES AND KIDS</span>
            <div className='divider_what_we_do'></div>
            <span>We provide the financial support to families and kids during the evacution.</span>
          </div>
        </div>
        <div>
          <img src={Medicine} alt="Food and Medicine" className='mobile_what_we_do_photo' />
          <div className='mobile_what_we_do_info'>
            <span>MEDICINE AND ESSENTIAL GOODS FOR KIDS</span>
            <div className='divider_what_we_do'></div>
            <span>We assist institutions and medical organizations which help kids.</span>
          </div>
        </div>
        <div>
          <img src={Army} alt="Food and Medicine" className='mobile_what_we_do_photo' />
          <div className='mobile_what_we_do_info'>
            <span>ARMY EQUIPMENT  DELIVERY</span>
            <div className='divider_what_we_do'></div>
            <span>We search, order, purchase and deliver goods and equipment for Ukrainian army.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDoSmallScreen
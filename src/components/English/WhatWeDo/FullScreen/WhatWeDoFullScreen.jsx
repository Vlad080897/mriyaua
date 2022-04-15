import React from 'react'
import FoodandMedicine from '../../../../images/activities/Food and medicine 1.jpg'
import Evacuation from '../../../../images/activities/Evacuation support 1.jpg'
import Army from '../../../../images/activities/Equipment for army 1.jpg'
import Medicine from '../../../../images/activities/Medicine, essential 1.jpg'
import '../../../../styles/WhatWeDo/WhatWeDoFullScreen.css'

const WhatWeDoFullScreen = () => {
    return (
        <div className='what_we_do_wrapper' id='whatWeDo'>
            <div className='what_we_do_title'>
                <span>WHAT WE DO</span>
            </div>
            <div className='what_we_do_container'>
                <div>
                    <img src={FoodandMedicine} alt="Food and Medicine" className='what_we_do_photo' />
                    <div className='what_we_do_info'>
                        <span>FOOD AND MEDICINE DELIVERY</span>
                        <div className='divider_what_we_do'></div>
                        <span>We deliver food and medicine packages to families all over the country.</span>
                    </div>
                </div>
                <div>
                    <img src={Evacuation} alt="Evacuation support" className='what_we_do_photo' />
                    <div className='what_we_do_info'>
                        <span>EVACUATION SUPPORT <br /> FOR FAMILIES AND KIDS</span>
                        <div className='divider_what_we_do'></div>
                        <span>We provide the financial support to families and kids during the evacution.</span>
                    </div>
                </div>
                <div>
                    <img src={Army} alt="Army" className='what_we_do_photo' />
                    <div className='what_we_do_info'>
                        <span>ARMY EQUIPMENT DELIVERY</span>
                        <div className='divider_what_we_do'></div>
                        <span>We search, order, purchase and deliver goods and equipment for Ukrainian army.</span>
                    </div>
                </div>
                <div>
                    <img src={Medicine} alt="Medicine" className='what_we_do_photo' />
                    <div className='what_we_do_info'>
                        <span>MEDICINE AND ESSENTIAL GOODS FOR KIDS</span>
                        <div className='divider_what_we_do'></div>
                        <span>We assist institutions and medical organizations which help kids.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDoFullScreen
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
        <span>ЩО МИ РОБИМО</span>
      </div>
      <div className='mobile_what_we_do_container'>
        <div>
          <img src={FoodandMedicine} alt="Food and Medicine" className='mobile_what_we_do_photo' />
          <div className='mobile_what_we_do_info'>
            <span>Закупівля та доставка їжі та ліків</span>
            <div className='divider_what_we_do'></div>
            <span>Ми доставляємо їжу та ліки сім'ям по всій країні</span>
          </div>
        </div>
        <div>
          <img src={Evacuation} alt="Food and Medicine" className='mobile_what_we_do_photo' />
          <div className='mobile_what_we_do_info'>
            <span>Підримка сімей з евакуацією</span>
            <div className='divider_what_we_do'></div>
            <span>Ми надаємо фінансову підтримку сім'ям та дітя протягом эвакуції</span>
          </div>
        </div>
        <div>
          <img src={Medicine} alt="Food and Medicine" className='mobile_what_we_do_photo' />
          <div className='mobile_what_we_do_info'>
            <span>Медичні та важливі товари для дітей</span>
            <div className='divider_what_we_do'></div>
            <span>Ми допомагаємо інституціям та медичним організаціям які утримують дітей</span>
          </div>
        </div>
        <div>
          <img src={Army} alt="Food and Medicine" className='mobile_what_we_do_photo' />
          <div className='mobile_what_we_do_info'>
            <span>Доставка обладнання для армії</span>
            <div className='divider_what_we_do'></div>
            <span>Ми шукаємо, замовляємо і доставляємо товари і обладнання для ЗСУ</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDoSmallScreen
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
                <span>ЩО МИ РОБИМО</span>
            </div>
            <div className='what_we_do_container'>
                <div>
                    <img src={FoodandMedicine} alt="Food and Medicine" className='what_we_do_photo' />
                    <div className='what_we_do_info'>
                        <span>Закупівля та доставка їжі та ліків</span>
                        <div className='divider_what_we_do'></div>
                        <span>Ми доставляємо їжу та ліки сім'ям по всій країні</span>
                    </div>
                </div>
                <div>
                    <img src={Evacuation} alt="Evacuation support" className='what_we_do_photo' />
                    <div className='what_we_do_info'>
                        <span>Підримка сімей з евакуацією</span>
                        <div className='divider_what_we_do'></div>
                        <span>Ми надаємо фінансову підтримку сім'ям та дітя протягом эвакуції</span>
                    </div>
                </div>
                <div>
                    <img src={Army} alt="Army" className='what_we_do_photo' />
                    <div className='what_we_do_info'>
                        <span>Доставка обладнання для армії</span>
                        <div className='divider_what_we_do'></div>
                        <span>Ми шукаємо, замовляємо і доставляємо товари і обладнання для ЗСУ</span>
                    </div>
                </div>
                <div>
                    <img src={Medicine} alt="Medicine" className='what_we_do_photo' />
                    <div className='what_we_do_info'>
                        <span>Медичні та важливі товари для дітей</span>
                        <div className='divider_what_we_do'></div>
                        <span>Ми допомагаємо інституціям та медичним організаціям які утримують дітей</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDoFullScreen
import React from 'react'
import logo from '../../../../images/logo.svg'
import mail from '../../../../images/social-media/mail.svg'
import mailY from '../../../../images/social-media/mail-yellow.svg'
import twitter from '../../../../images/social-media/tw.svg'
import twitterY from '../../../../images/social-media/tw-yellow.svg'
import inst from '../../../../images/social-media/insta.svg'
import instY from '../../../../images/social-media/inst-yellow.svg'
import tg from '../../../../images/social-media/tg.svg'
import tgY from '../../../../images/social-media/tg-yellow.svg'
import fb from '../../../../images/social-media/fb.svg'
import fbY from '../../../../images/social-media/fb-yellow.svg'
import '../../../../styles/Footer/FooterFullScreen.css'

const FooterFullScreen = () => {
  const handleScroll = (id) => {
    let scrollTo = document.getElementById(id)
    console.log(scrollTo);
    scrollTo.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className='footer_wrapper'>
      <div className='footer_container'>
        <div>
          <img src={logo} alt="" />
        </div>
        <div className='basis'>
          <span>
            Зв'яжіться з нами до, або після відправки вашої допомоги.
            Ми сплануємо цілі разом та відзвітуємо Вам про результат.
          </span>
        </div>
        <div>
          <ul className='social_media_footer'>
            <li>
              <a href="mailto:uadream22@gmail.com" target='_blank' rel="noreferrer">
                <img src={mail} alt="mail" />
                <img src={mailY} alt="mail" className='yellow_svg' />
              </a>

            </li>
            <li>
              <a href="https://twitter.com/mriya_ua" target='_blank' rel="noreferrer">
                <img src={twitter} alt="twitter" />
                <img src={twitterY} alt="twitter" className='yellow_svg' />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/mriyaukraine?utm_medium=copy_link" target='_blank' rel="noreferrer">
                <img src={inst} alt="instagram" />
                <img src={instY} alt="instagram" className='yellow_svg' />
              </a>
            </li>
            <li>
              <a href="https://t.me/mriyaUA22" target='_blank' rel="noreferrer">
                <img src={tg} alt="telegram" />
                <img src={tgY} alt="telegram" className='yellow_svg' />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/uamriya" target='_blank' rel="noreferrer">
                <img src={fb} alt="facebook" />
                <img src={fbY} alt="facebook" className='yellow_svg' />
              </a>
            </li>
          </ul>
        </div>
        <div className='justify'>
          <button className='donate_btn_footer' onClick={() => handleScroll('wallets')}>
            ДОПОМОГТИ
          </button>
        </div>

      </div>

    </div>
  )
}

export default FooterFullScreen
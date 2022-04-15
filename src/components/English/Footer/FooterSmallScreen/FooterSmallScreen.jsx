import React from 'react'
import footer_logo from '../../../../images/logo.svg'
import mail from '../../../../images/social-media/mail.svg'
import twitter from '../../../../images/social-media/tw.svg'
import inst from '../../../../images/social-media/insta.svg'
import tg from '../../../../images/social-media/tg.svg'
import fb from '../../../../images/social-media/fb.svg'
import '../../../../styles/Footer/FooterSmallScreen.css'

const FooterSmallScreen = () => {
  const handleScroll = (id) => {
    let scrollTo = document.getElementById(id)
    console.log(scrollTo);
    scrollTo.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className='mobile_footer_wrapper'>
      <div className='mobile_footer_container'>
        <div className='layer1'>
          <img src={footer_logo} alt="" />
          <button className='mobile_footer_btn' onClick={() => handleScroll('mobile_wallets')}>DONATE</button>
        </div>
        <div className='layer2'>
          <span>
            Message us before or after you send your donation. We will plan the aid together and report you on the results.
          </span>
        </div>
        <div className='layer3'>
          <ul className='mobile_social_media_footer'>
            <li>
              <a href="mailto:uadream22@gmail.com" target='_blank' rel="noreferrer">
                <img src={mail} alt="mail" />
              </a>

            </li>
            <li>
              <a href="https://twitter.com/mriya_ua" target='_blank' rel="noreferrer">
                <img src={twitter} alt="twitter" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/mriyaukraine?utm_medium=copy_link" target='_blank' rel="noreferrer">
                <img src={inst} alt="instagram" />
              </a>
            </li>
            <li>
              <a href="https://t.me/mriyaUA22" target='_blank' rel="noreferrer">
                <img src={tg} alt="telegram" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/uamriya" target='_blank' rel="noreferrer">
                <img src={fb} alt="facebook" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FooterSmallScreen
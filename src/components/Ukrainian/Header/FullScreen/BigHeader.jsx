import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo.svg';
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
import '../../../../styles/Header/BigHeader.css'

const useStyles = makeStyles({
  select: {
    "& ul": {
      backgroundColor: "#FFFF",
    },
    "& li": {
      fontSize: 16,
      color: 'black',
    },
    "& li a": {
      textDecoration: 'none',
      color: 'black'
    }
  },
  selectDisplay: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '92px',
    padding: '5px 15px',
    borderRadius: '25px',
    fontFamily: 'Montserrat',
    fontWeight: '800',
    '& a': {
      color: 'white',
      fontFamily: 'Montserrat',
      fontWeight: '800',
      textDecoration: 'none'

    },
    '& svg': {
      color: '#FFFFFF',
      paddingRight: '10px',
    }
  }
});


const BigHeader = () => {
  const classes = useStyles()
  const [lang, setLang] = useState('УКР')
  const handleChange = (e) => {
    setLang(e.target.value)
  }

  const handleScroll = (id) => {
    let scrollTo = document.getElementById(id)
    console.log(scrollTo);
    scrollTo.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className='header_wrapper'>
      <div className='container'>
        <ul className='header_components'>
          <li>
            <img src={logo} alt='Logo' />
          </li>
          <li onClick={() => handleScroll('aboutUs')}>
            ХТО МИ
            <div></div>
          </li>
          <li onClick={() => handleScroll('whatWeDo')}>
            ЩО МИ РОБИМО
            <div></div>
          </li>
          <li onClick={() => handleScroll('photoReports')}>
            ФОТО
            <div></div>
          </li>
          <li onClick={() => handleScroll('videoReports')}>
            ВІДЕО
            <div></div>
          </li>
          <li onClick={() => handleScroll('wallets')}>
            ГАМАНЦІ
            <div></div>
          </li>
          <li>
            <Select
              labelId="demo-simple-select-label"
              id="select"
              value={lang}
              label="Age"
              className={classes.selectDisplay}
              MenuProps={{ classes: { paper: classes.select } }}
              SelectDisplayProps={classes.display}
              variant='standard'
              onChange={handleChange}
              disableUnderline

            >
              <MenuItem value={'УКР'}><Link to='/'>УКР</Link> </MenuItem>
              <MenuItem value={'АНГ'}><Link to='/en'>АНГ</Link></MenuItem>
            </Select>
          </li>
          <li>
            <button className='donate_btn' onClick={() => handleScroll('wallets')}>
              ДОПОМОГТИ
            </button>
          </li>
        </ul>
        <ul className='social_media'>
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
      <ul className='header_info'>
        <li>
          <div>
            <span className='header_info_type'>Зібрано</span>
          </div>
          <div className='divider'></div>
          <div>
            <span className='quantity'>3,627,000</span>
            <span className='currency'>ГРН</span>
          </div>
        </li>
        <li>
          <div>
            <span className='header_info_type'>Розподілено</span>
          </div>
          <div className='divider'></div>
          <div>
            <span className='quantity'>3,081,900</span>
            <span className='currency'>ГРН</span>
          </div>
        </li>
        <li>
          <div>
            <span className='header_info_type'>Проектів виконано</span>
          </div>
          <div className='divider'></div>
          <div>
            <span className='quantity'>14</span>
          </div>
        </li>
        <li>
          <div>
            <span className='header_info_type'>Заплановані проекти</span>
          </div>
          <div className='divider'></div>
          <div>
            <span className='quantity'>5</span>
          </div>
        </li>
      </ul>
    </div >
  )
}

export default BigHeader
import React, { useState } from 'react'
import { makeStyles, Popover, Typography } from '@material-ui/core';
import { IconButton, MenuItem, Select } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import '../../../../styles/Header/SmallHeader.css'
import mobileLogo from '../../../../images/mobileversion/logo.svg'
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
    marginRight: '5px',
    borderRadius: '25px',
    fontFamily: 'Montserrat',
    fontWeight: '800',
    '& a': {
      color: 'white',
      fontFamily: 'Montserrat',
      fontWeight: '800',
      textDecoration: 'none',
      textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'

    },
    '& svg': {
      color: '#FFFFFF',
      paddingRight: '10px',
    }
  },
  menuBtn: {
    color: '#FDE512',
    transition: 'all 0.4s',

  },
  popover: {
    backgroundColor: '#318BFF',
    width: '100%',
    maxWidth: '100%',
    height: '80%',
    borderRadius: '0'
  }
});

const SmallHeader = () => {
  const classes = useStyles();
  const [lang, setLang] = useState('ENG');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [icon, setIcon] = useState(false);

  const handleChange = (e) => {
    setLang(e.target.value)
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIcon(true)
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIcon(false)
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div className='mobile_header_wrapper'>
      <div className='mobile_header_container'>
        <div>
          <img src={mobileLogo} alt="" />
          <div>
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
              <MenuItem value={'UKR'}><Link to='/'>UKR</Link> </MenuItem>
              <MenuItem value={'ENG'}><Link to='/en'>ENG</Link></MenuItem>
            </Select>
            <IconButton
              aria-describedby={id}
              color="inherit"
              size="large"
              sx={{ padding: '0' }}
              onClick={handleClick}
              onClose={handleClose}
            >
              {icon ?
                <CloseIcon className={classes.menuBtn} sx={{ fontSize: 35 }} />
                :
                <MenuIcon className={classes.menuBtn} sx={{ fontSize: 35 }} />}
            </IconButton>
            <Popover
              elevation={0}
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 120, left: '0px' }}
              PaperProps={{ classes: { root: classes.popover } }}
            >
              <ul className='mobile_social_media'>
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
              <ul className='mobile_header_info'>
                <li>
                  <div>
                    <span className='header_info_type'>Raised so far</span>
                  </div>
                  <div className='divider'></div>
                  <div>
                    <span className='quantity'>120,900</span>
                    <span className='currency'>USD</span>
                  </div>
                </li>
                <li>
                  <div>
                    <span className='header_info_type'>Allocated</span>
                  </div>
                  <div className='divider'></div>
                  <div>
                    <span className='quantity'>102,730</span>
                    <span className='currency'>USD</span>
                  </div>
                </li>
                <li>
                  <div>
                    <span className='header_info_type'>Projects done</span>
                  </div>
                  <div className='divider'></div>
                  <div>
                    <span className='quantity'>14</span>
                  </div>
                </li>
                <li>
                  <div>
                    <span className='header_info_type'>Upcoming projects</span>
                  </div>
                  <div className='divider'></div>
                  <div>
                    <span className='quantity'>5</span>
                  </div>
                </li>
              </ul>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmallHeader
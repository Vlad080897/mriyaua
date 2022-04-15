import React, { useState } from 'react'
import privat from '../../../../images/Wallets/privat.jpg'
import mono from '../../../../images/Wallets/mono.jpg'
import paypal from '../../../../images/Wallets/paypal.jpg'
import bit from '../../../../images/Wallets/bit.jpg'
import eth from '../../../../images/Wallets/eth.jpg'
import tron from '../../../../images/Wallets/tron.jpg'
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import '../../../../styles/Wallets/WalletsFullScreen.css'

const WalletsFullScreen = () => {

  const handleCopy = (contained) => {
    if (!navigator.clipboard) {
      console.log('err');
    }
    const textarea = document.getElementById(contained);
    const copiedBlock = document.getElementById('copiedBlock')
    navigator.clipboard.writeText(textarea.innerHTML);
    copiedBlock.classList.toggle('shown')

    let timerId = setTimeout(() => {
      hideCopied()
    }, 1500)

    const hideCopied = () => {
      copiedBlock.classList.toggle('shown')
      clearTimeout(timerId)
    }

  }
  return (
    <>
      <div className='wallets_wrapper' id='wallets'>
        <div className='wallets_container'>
          <div className='wallets_title'>
            <span>Wallets</span>
            <div className='wallets_block_container'>
              <div className='wallets_block'>
                <div className='wallets_block_title'><span>Bank Cards</span></div>
                <div className='wallet_block'>
                  <div >
                    <img src={privat} alt="" className='wallet_block_logo' />
                    <div className='wallet_block_name_id'>
                      <span>Privatbank</span>
                      <textarea name="" id='bankId1' cols="30" rows="0" value='4149 4393 1336 8585' />
                      <ContentCopyOutlinedIcon
                        sx={{
                          color: '#42648F',
                          position: 'absolute',
                          right: '0',
                          top: 47,
                          '&:hover': {
                            cursor: 'pointer'
                          }
                        }}
                        onClick={() => handleCopy('bankId1')} />
                    </div>
                  </div>
                  <div >
                    <img src={mono} alt="" className='wallet_block_logo' />
                    <div className='wallet_block_name_id'>
                      <span>Monobank</span>
                      <textarea name="" id="bankId2" cols="30" rows="0" value='5375 4141 1610 0578' />
                      <ContentCopyOutlinedIcon
                        sx={{
                          color: '#42648F',
                          position: 'absolute',
                          right: '0',
                          top: 47,
                          '&:hover': {
                            cursor: 'pointer'
                          }
                        }}
                        onClick={() => handleCopy('bankId2')} />
                    </div>
                  </div>
                  <div >
                    <img src={paypal} alt="" className='wallet_block_logo' />
                    <div className='wallet_block_name_id'>
                      <span>PayPal</span>
                      <textarea name="" id="bankId3" cols="30" rows="0" value='uadream22@gmail.com' />
                      <ContentCopyOutlinedIcon
                        sx={{
                          color: '#42648F',
                          position: 'absolute',
                          right: '0',
                          top: 47,
                          '&:hover': {
                            cursor: 'pointer'
                          }
                        }}
                        onClick={() => handleCopy('bankId3')} />
                    </div>
                  </div>
                </div>
              </div>
              <div className='wallets_block'>
                <div className='wallets_block_title'><span>Crypto</span></div>
                <div className='wallet_block'>
                  <div >
                    <img src={bit} alt="" className='wallet_block_logo' />
                    <div className='wallet_block_name_id'>
                      <span>Bitcoin</span>
                      <textarea name="" id="bankId4" cols="30" rows="0" value='1HqUK1JKv6se2YqQzsE5Jpu2Nd7sa7arjx' />
                      <ContentCopyOutlinedIcon
                        sx={{
                          color: '#42648F',
                          position: 'absolute',
                          right: '0',
                          top: 47,
                          '&:hover': {
                            cursor: 'pointer'
                          }
                        }}
                        onClick={() => handleCopy('bankId4')} />
                    </div>
                  </div>
                  <div >
                    <img src={eth} alt="" className='wallet_block_logo' />
                    <div className='wallet_block_name_id'>
                      <span>ETH, USDT (ERC20)</span>
                      <textarea name="" id="bankId5" cols="30" rows="0" value='0x6bfbb8569397cadefb204cd62e5575889912ebc3' />
                      <ContentCopyOutlinedIcon
                        sx={{
                          color: '#42648F',
                          position: 'absolute',
                          right: '0',
                          top: 47,
                          '&:hover': {
                            cursor: 'pointer'
                          }
                        }}
                        onClick={() => handleCopy('bankId5')} />
                    </div>
                  </div>
                  <div >
                    <img src={tron} alt="" className='wallet_block_logo' />
                    <div className='wallet_block_name_id'>
                      <span>TRON, USDT (TRC20)</span>
                      <textarea name="" id="bankId6" cols="30" rows="0" value='TCVuLPY4aQpw9FnuDn9L2hNoUinUuKyfgT' />
                      <ContentCopyOutlinedIcon
                        sx={{
                          color: '#42648F',
                          position: 'absolute',
                          right: '0',
                          top: 47,
                          '&:hover': {
                            cursor: 'pointer'
                          }
                        }}
                        onClick={() => handleCopy('bankId6')} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='copied' id='copiedBlock'>
        <span>Copied</span>
      </div>
    </>

  )
}

export default WalletsFullScreen
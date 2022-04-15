import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import privat from '../../../../images/Wallets/privat.jpg'
import mono from '../../../../images/Wallets/mono.jpg'
import paypal from '../../../../images/Wallets/paypal.jpg'
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import bit from '../../../../images/Wallets/bit.jpg'
import eth from '../../../../images/Wallets/eth.jpg'
import tron from '../../../../images/Wallets/tron.jpg'
import '../../../../styles/Wallets/WalletsSmallScreen.css'

const WalletsSmallScreen = () => {
  const [privatId, _setPrivatId] = useState('4149 4393 1336 8585');
  const [monoId, _setMonoID] = useState('5375 4141 1610 0578');
  const [paypalId, _setPaypalId] = useState('uadream22@gmail.com');
  const [bitcoinId, _setBitcoinId] = useState('1HqUK1JKv6se2YqQzsE5Jpu2Nd7sa7arjx');
  const [ethId, _setEthId] = useState('0x6bfbb8569397cadefb204cd62e5575889912ebc3');
  const [tronId, _setTronId] = useState('TCVuLPY4aQpw9FnuDn9L2hNoUinUuKyfgT');

  const copied = () => {
    const copiedBlock = document.getElementById('copiedBlock')
    copiedBlock.classList.toggle('mobile_shown')

    let timerId = setTimeout(() => {
      hideCopied()
    }, 1500)

    const hideCopied = () => {
      copiedBlock.classList.toggle('mobile_shown')
      clearTimeout(timerId)
    }
  }
  return (
    <>
      <div className='mobile_wallets_wrapper' id='mobile_wallets'>
        <div className='mobile_wallets_container'>
          <div className='mobile_wallets_title'>
            <span>Wallets</span>
          </div>
          <div className='mobile_wallets_block_container'>
            <div className='mobile_wallets_block'>
              <div className='mobile_wallets_block_title'><span>Bank Cards</span></div>
              <div className='mobile_wallet_block'>
                <div>
                  <img src={privat} alt="" className='mobile_wallet_block_logo' />
                  <div className='mobile_wallet_block_name_id'>
                    <span>Privatbank</span>
                    <input name="" id='bankId1' value={privatId} />
                    <CopyToClipboard text={privatId}>
                      <ContentCopyOutlinedIcon
                        sx={{
                          color: '#42648F',
                          position: 'absolute',
                          right: 9,
                          top: 27,
                          '&:hover': {
                            cursor: 'pointer'
                          }
                        }}
                        onClick={() => copied()}
                      />
                    </CopyToClipboard>
                  </div>
                </div>
                <div>
                  <img src={mono} alt="" className='mobile_wallet_block_logo' />
                  <div className='mobile_wallet_block_name_id'>
                    <span>Monobank</span>
                    <input name="" id='bankId1' value={monoId} />
                    <CopyToClipboard text={monoId}>
                      <ContentCopyOutlinedIcon
                        sx={{
                          color: '#42648F',
                          position: 'absolute',
                          right: 9,
                          top: 27,
                          '&:hover': {
                            cursor: 'pointer'
                          }
                        }}
                        onClick={() => copied()}
                      />
                    </CopyToClipboard>
                  </div>
                </div>
                <div>
                  <img src={paypal} alt="" className='mobile_wallet_block_logo' />
                  <div className='mobile_wallet_block_name_id'>
                    <span>PayPal</span>
                    <input name="" value={paypalId} />
                    <CopyToClipboard text={paypalId}>
                      <ContentCopyOutlinedIcon
                        sx={{
                          color: '#42648F',
                          position: 'absolute',
                          right: 9,
                          top: 27,
                          '&:hover': {
                            cursor: 'pointer'
                          }
                        }}
                        onClick={() => copied()}
                      />
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
            </div>
            <div className='mobile_wallets_block'>
              <div className='mobile_wallets_block_title'><span>Crypto</span></div>
              <div className='mobile_wallet_block'>
                <div>
                  <img src={bit} alt="" className='mobile_wallet_block_logo' />
                  <div className='mobile_wallet_block_name_id'>
                    <span>Bitcoin</span>
                    <input name="" id='bankId1' value={bitcoinId} />
                    <CopyToClipboard text={bitcoinId}>
                      <ContentCopyOutlinedIcon
                        sx={{
                          color: '#42648F',
                          position: 'absolute',
                          right: 9,
                          top: 27,
                          '&:hover': {
                            cursor: 'pointer'
                          }
                        }}
                        onClick={() => copied()}
                      />
                    </CopyToClipboard>
                  </div>
                </div>
                <div>
                  <img src={eth} alt="" className='mobile_wallet_block_logo' />
                  <div className='mobile_wallet_block_name_id'>
                    <span>ETH, USDT (ERC20)</span>
                    <input name="" id='bankId1' value={ethId} />
                    <CopyToClipboard text={ethId}>
                      <ContentCopyOutlinedIcon
                        sx={{
                          color: '#42648F',
                          position: 'absolute',
                          right: 9,
                          top: 27,
                          '&:hover': {
                            cursor: 'pointer'
                          }
                        }}
                        onClick={() => copied()}
                      />
                    </CopyToClipboard>
                  </div>
                </div>
                <div>
                  <img src={tron} alt="" className='mobile_wallet_block_logo' />
                  <div className='mobile_wallet_block_name_id'>
                    <span>TRON, USDT (TRC20)</span>
                    <input name="" id='bankId1' value={tronId} />
                    <CopyToClipboard text={tronId}>
                      <ContentCopyOutlinedIcon
                        sx={{
                          color: '#42648F',
                          position: 'absolute',
                          right: 9,
                          top: 27,
                          '&:hover': {
                            cursor: 'pointer'
                          }
                        }}
                        onClick={() => copied()}
                      />
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mobile_copied' id='copiedBlock'>
        <span>Copied</span>
      </div>
    </>
  )
}

export default WalletsSmallScreen
import React from 'react'
import metacon from '../images/metacon.png'
import wallet from '../images/wallet.png'
import './Modal.css'


const Modal = props => {
  
  if(!props.show){
    return null
  }
  return (
    <div className='modal'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4 className='modal-title'>Connect Wallet</h4>

            <p>X</p>
          </div>
          <div className='modal-body'>
            <p>Choose your preferred wallet:</p>
            <img src={metacon} alt='metamask wallet'/>
            <img src={wallet} alt='wallet connect'/>
          </div>
        </div>
    </div>
  )
}

export default Modal
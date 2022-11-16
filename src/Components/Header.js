import React from 'react'
import logo from '../images/logo.png'
import four from '../images/4img.png'
import mbtoken from '../images/mbtoken.png'
import metamask from '../images/metamask.png'
import opensea from '../images/opensea.png'
import './Header.css'

const Header = () => {
  return (
    <div>
        <header className='header'>
            <img className='logo' src={logo} alt='company logo'/>
            <ul>
                <a href='#home'>
                    <li>Home</li>
                </a>
                <a href='#place'>
                    <li>Place to stay</li>
                </a>
                <a href='#nfts'>
                    <li>NFTs</li>
                </a>
                <a href='#community'>
                    <li>Community</li>
                </a>
            </ul>

            <button><a href='connect'>Connect Wallet</a></button>
        </header>
        <div className='text'>
            <div>
                <h1>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
                <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                
                <div id='input'>
                    <input type='text' placeholder='Search for location'/>
                    <span><input type='submit' className='submit' name='Search' /></span>
                </div>
            </div>
            
            <div className='images-1'>
                <img src={four} alt='four images' />
            </div>
        </div>

        
        <div className='token'>
            <img src={mbtoken} alt='Mbtoken'/>
            <img src={metamask} alt='Metamask'/>
            <img src={opensea} alt='Opensea'/>
        </div>
    </div>
  )
}

export default Header
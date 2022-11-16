import React from 'react'
import logo2 from '../images/logo2.png'
import { SocialIcon } from 'react-social-icons';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <img className='logo2' src={logo2} alt='company logo'/>
            <ul className='icons'>
                <li>
                    <SocialIcon url='facebook.com/metabnb'/>
                </li>
                <li>
                    <SocialIcon url='instagram.com/metabnb'/>
                </li>
                <li>
                    <SocialIcon url='twitter.com/metabnb'/>
                </li>
            </ul>
            <p>&copy; 2022 Metabnb</p>
        </div>

        
            <div>
                <h5>Community</h5>
                <ul>
                    <li>NFT</li>
                    <li>Tokens</li>
                    <li>Landlords</li>
                    <li>Discord</li>
                </ul>
            </div>
            <div>
                <h5>Places</h5>
                <ul>
                    <li>Castle</li>
                    <li>Farm</li>
                    <li>Beach</li>
                    <li>Learn more</li>
                </ul>
            </div>
            <div>
                <h5>About us</h5>
                <ul>
                    <li>Roadmap</li>
                    <li>Creator</li>
                    <li>career</li>
                    <li>Abouts</li>
                </ul>
            </div>
        
    </div>
  )
}

export default Footer
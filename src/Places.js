import React from 'react'
import './Places.css'
import logo from './images/logo.png'

const Places = () => {
  return (
    <div>
        <header className='header'>
            <a href='/'><img className='logo' src={logo} alt='company logo'/></a>
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
        <ul className='houses'>
            <li>Restaurant</li>
            <li>Cottage</li>
            <li>castle</li>
            <li>Fantast City</li>
            <li>Beach</li>
            <li>Carbins</li>
            <li>Off grid</li>
            <li>Farm</li>
        </ul>
    </div>
  )
}

export default Places
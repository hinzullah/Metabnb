import React from 'react'
import './Places.css'
import logo from './images/logo.png'
import frame from './images/Frame 13.png'
import butter from './images/002.png'
import hut from './images/04.png'
import coast from './images/06.png'
import darkp from './images/08.png'
import purple from './images/001.png'
import cream from './images/03.png'
import purplegreen from './images/001.png'
import purplemosq from './images/001.png'

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
            <li><img src={frame} alt='search'/></li>
        </ul>
        <div className='homes'>
        <img src={butter} alt='card one'/>
            <img src={coast} alt='card two'/>
            <img src={darkp} alt='card three'/>
            <img src={hut} alt='card four'/>
            <img src={purple} alt='card five'/>
            <img src={cream} alt='card six'/>
            <img src={purplegreen} alt='card seven'/>
            <img src={purplemosq} alt='card eight'/>
            <img src={butter} alt='card one'/>
            <img src={coast} alt='card two'/>
            <img src={darkp} alt='card three'/>
            <img src={hut} alt='card four'/>
            <img src={purple} alt='card five'/>
            <img src={cream} alt='card six'/>
            <img src={purplegreen} alt='card seven'/>
            <img src={purplemosq} alt='card eight'/>
        </div>
    </div>
  )
}

export default Places
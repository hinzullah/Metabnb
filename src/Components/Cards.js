import React from 'react'
import butter from '../images/002.png'
import hut from '../images/04.png'
import coast from '../images/06.png'
import darkp from '../images/08.png'
import purple from '../images/001.png'
import cream from '../images/03.png'
import purplegreen from '../images/001.png'
import purplemosq from '../images/001.png'
import './Cards.css'
import aerial from '../images/3img.png'

const Cards = (props) => {
    
  return (

    <div>
        <div className='cards'>
            <h2>Inspiration for your next adventure</h2>
            <img src={butter} alt='card one'/>
            <img src={coast} alt='card two'/>
            <img src={darkp} alt='card three'/>
            <img src={hut} alt='card four'/>
            <img src={purple} alt='card five'/>
            <img src={cream} alt='card six'/>
            <img src={purplegreen} alt='card seven'/>
            <img src={purplemosq} alt='card eight'/>
        </div>
        <div className='nfts'>
            <div className='words'>
                <h2>Metabnb NFTs</h2>
                <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <button>Learn more</button>
            </div>
            <div className='aerial'>
                <img src={aerial} alt='3 bent images'/>
            </div>
        </div>
        
        
    </div>
  )
}

export default Cards
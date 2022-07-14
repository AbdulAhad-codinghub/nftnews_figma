import React from 'react'
import './header.css';
import Graphic from '../../assets/Graphic.png'


const Header = () => {
    return (
        <div className='nft_header'>
            <div className='header__image'>
                <img src={Graphic} alt="graphic" />
            </div>
            <div className='header__content'>
                <h5 className='feature__heading'>FEATURED</h5>
                <h2 className='nft__header-content'>
                    How Azuki
                    Broke The NFT
                    Community?
                </h2>
                <p>Here’s a guide to everything we know — and you need to know — about the Azuki NFT project.</p>
                
                <div className='nft__header-readmore'>
                    <button type='button'>READ MORE</button>
                </div>
            </div>
        </div>
    )
}

export default Header
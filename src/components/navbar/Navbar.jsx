import React from 'react'
import './navbar.css'
import logo from '../../assets/Logo.png'


const Menu = () => (
    <>
        <p><a href='#topics'>TOPICS +</a></p>
        <p><a href='#contactus'>CONTACT</a></p>
        <p><a href='#about'>ABOUT</a></p>
    </>
)

//BEM -> Block Element Modifier (css naming conventions)
const Navbar = () => {
    return (
        <div className='nft__navbar'>
            <div className='nft__navbar-links_logo'>
                <img src={logo} alt="logo" />
            </div>

            <div className='nft__navbar-links'>
                <div className='nft__navbar-links_container'>
                    <Menu />
                </div>
                <div className='nft__navbar-subscribe'>
                    <button type='button'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar


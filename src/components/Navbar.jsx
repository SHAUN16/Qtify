import React from 'react'
import logo from '../assets/logoImage.png';
import searchIcon from '../assets/SearchIcon.png';
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className="logo-container">
                    <img src={logo} alt="logo" width={67} />
                </div>

                <div className="search-container">
                    <form action="" className='search-form'>
                        <input className ='search-input' type="text" placeholder='Search a album of your choice' />
                        <button className="searchbtn">
                            <img src={searchIcon} alt="search" width={10} />
                        </button>
                    </form>
                </div>

                <div className="feedback-button">
                    <button className="feedbackbtn">give feedback</button>
                </div>
            </nav>

        </>
    )
}

export default Navbar
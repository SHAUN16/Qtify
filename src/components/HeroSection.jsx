import React from 'react'
import './HeroSection.css';
import heroImage from '../assets/HeroSection.png';
const HeroSection = () => {
  return (
    <div className='hero-section'>
      <img src={heroImage} alt="hero-section" />
    </div>
  )
}

export default HeroSection
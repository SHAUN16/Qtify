import React from 'react'
import './Card.css'
import cardImage from '../assets/AlbumImage.png';
const Card = () => {
    return (
        <div className="card">
            <img src={cardImage} alt="image"/>
            <div className="container">
                <div className="card-btn">!00 Follows</div>
            </div>
            <div className="card-title">
                New Bollywood
            </div>
        </div>
    )
}

export default Card
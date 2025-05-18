import React from 'react';
import './GameCard.css';

function GameCard({ title, description, iconSrc, altText, onPlay }) {
  return (
    <div className="game-card">
      <img src={iconSrc} alt={altText} className="game-icon" />
      <h2 className="game-title">{title}</h2>
      <p className="game-description">{description}</p>
      <button onClick={onPlay} className="play-button">Play Now</button>
    </div>
  );
}

export default GameCard;

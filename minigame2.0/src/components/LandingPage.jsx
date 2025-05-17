import React from 'react';
import './LandingPage.css';

function LandingPage({ username, onGameSelect }) {
  return (
    <div className="landing-container">
      <h1 className="welcome-text">Welcome, {username || 'Dawn'}!</h1>
      
      <div className="game-cards-container">
        <div className="game-card">
          <div className="game-icon science-icon">
            <img 
              src="/api/placeholder/200/200" 
              alt="Science game illustration" 
              className="game-illustration"
            />
          </div>
          <p className="game-description">
            Match the correct scientific term to its definition before time runs out!
          </p>
          <button 
            className="play-button"
            onClick={() => onGameSelect('science')}
          >
            Play
          </button>
        </div>

        <div className="game-card">
          <div className="game-icon language-icon">
            <img 
              src="/api/placeholder/200/200" 
              alt="Language game illustration" 
              className="game-illustration"
            />
          </div>
          <p className="game-description">
            Translate the Swedish word into English to earn points!
          </p>
          <button 
            className="play-button"
            onClick={() => onGameSelect('language')}
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
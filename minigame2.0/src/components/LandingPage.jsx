import React from 'react';
import GameCard from './GameCard';
import './LandingPage.css';

function LandingPage({ username, onGameSelect, onLogout }) {
  const games = [
    {
      id: 'science',
      title: "Science Game",
      description: "Match the correct scientific term to its definition before time runs out!",
      iconSrc: "/images/science.png",
      altText: "Science game illustration"
    },
    {
      id: 'language',
      title: "Language Game",
      description: "Translate the Swedish word into English to earn points!",
      iconSrc: "/images/language.png",
      altText: "Language game illustration"
    }
  ];

  return (
    <div className="landing-page">
      <button onClick={onLogout} className="logout-button">Logout</button>
      <h1 className="welcome-heading">Welcome, {username}!</h1>
      <div className="game-grid">
        {games.map((game) => (
          <GameCard 
            key={game.id}
            title={game.title}
            description={game.description}
            iconSrc={game.iconSrc}
            altText={game.altText}
            onPlay={() => onGameSelect(game.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default LandingPage;

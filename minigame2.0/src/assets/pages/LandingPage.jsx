import React from 'react';
import GameCard from '../../components/GameCard';
import './LandingPage.css';
import scienceImg from '../images/science.png';
import swedishImg from '../images/language.png';

function LandingPage({ username, onGameSelect, onLogout }) {
  const games = [
    {
      id: 'science',
      title: "Science Game",
      description: "Match the correct scientific term to its definition before time runs out!",
      iconSrc: scienceImg,
      altText: "Science game illustration"
    },
    {
      id: 'language',
      title: "Language Game",
      description: "Translate the Swedish word into English to earn points! Beat it!",
      iconSrc: swedishImg,
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

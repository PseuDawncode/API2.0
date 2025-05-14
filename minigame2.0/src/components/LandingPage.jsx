import { useEffect, useState } from 'react';
import { fetchGames } from '../api/games';

export default function LandingPage({ onSelectGame }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames().then(setGames);
  }, []);

  return (
    <div className="landing">
      <h2>Welcome! Choose a game:</h2>
      {games.map(game => (
        <button key={game.id} onClick={() => onSelectGame(game.id)}>{game.name}</button>
      ))}
    </div>
  );
}

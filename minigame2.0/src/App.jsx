import { useState } from 'react';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import LandingPage from './components/LandingPage';
import SvenskaGame from './components/SvenskaGame';
import ScienceGame from './components/ScienceGame';


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  if (!isLoggedIn) {
    return isRegistered
      ? <LoginForm onLogin={() => setIsLoggedIn(true)} />
      : <SignupForm onSignup={() => setIsRegistered(true)} />;
  }

  if (selectedGame === 'swedish') return <SvenskaGame />;
  if (selectedGame === 'science') return <ScienceGame />;


  return <LandingPage onSelectGame={setSelectedGame} />;
}

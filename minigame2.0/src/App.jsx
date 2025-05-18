import React, { useState, useEffect } from 'react';
import './App.css';
import LandingPage from './assets/pages/LandingPage';
import ScienceGame from './assets/pages/ScienceGame';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [currentGame, setCurrentGame] = useState(null);

  // Check if user is already logged in on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem('loggedInUser');
    if (savedUser) {
      setLoggedInUser(savedUser);
    }
    
    // Initialize users array in localStorage if it doesn't exist
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([]));
    }
  }, []);

  const togglePage = () => {
    setCurrentPage(currentPage === 'login' ? 'signup' : 'login');
  };

  const handleLogin = (username) => {
    setLoggedInUser(username);
    // Save login state to persist through refresh
    localStorage.setItem('loggedInUser', username);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setCurrentPage('login');
    setCurrentGame(null);
    // Clear login state
    localStorage.removeItem('loggedInUser');
  };

  const handleGameSelect = (gameType) => {
    alert(`You selected the ${gameType} game!`);
    setCurrentGame(gameType);
  };

  const handleBackToLanding = () => {
    setCurrentGame(null);
  };

  if (loggedInUser) {
    if (currentGame === 'science') {
      // Pass onBack function to ScienceGame component
      return (
        <div>
          <button onClick={handleBackToLanding} className="back-button">Back to Games</button>
          <ScienceGame />
        </div>
      );
    } else if (currentGame === 'language') {
      // Replace with Language game component when available
      return (
        <div>
          <button onClick={handleBackToLanding} className="back-button">Back to Games</button>
          <div>Language Game Coming Soon!</div>
        </div>
      );
    } else {
      return <LandingPage username={loggedInUser} onGameSelect={handleGameSelect} onLogout={handleLogout} />;
    }
  }


  return (
    <div className="app">
      {currentPage === 'login' ? (
        <LoginForm onRegisterClick={togglePage} onLoginSuccess={handleLogin} />
      ) : (
        <SignupForm onLoginClick={togglePage} onSignupSuccess={handleLogin} />
      )}
    </div>
  );
}

function LoginForm({ onRegisterClick, onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      
      // Ensure storedUsers is actually an array before using find
      if (!Array.isArray(storedUsers)) {
        console.error('Stored users is not an array:', storedUsers);
        localStorage.setItem('users', JSON.stringify([]));
        setError('User database error. Please try again.');
        return;
      }
      
      // Manual search instead of using find method
      let userFound = false;
      for (let i = 0; i < storedUsers.length; i++) {
        if (storedUsers[i].username === username && storedUsers[i].password === password) {
          userFound = true;
          break;
        }
      }

      if (userFound) {
        onLoginSuccess(username);
      } else {
        setError('Invalid username or password!');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred during login');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Enter Your Account</h2>

        {error && <div className="error-message">{error}</div>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="login-button">Login</button>

        <p className="register-text">
          No account yet? <span className="register-link" onClick={onRegisterClick}>Click to Register!</span>
        </p>
      </form>
    </div>
  );
}

function SignupForm({ onLoginClick, onSignupSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!username.trim() || !password.trim()) {
      setError('Username and password cannot be empty');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      let users = JSON.parse(localStorage.getItem('users'));
      
      // Ensure users is an array
      if (!users || !Array.isArray(users)) {
        users = [];
      }

      // Manual check instead of using some method
      let usernameExists = false;
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          usernameExists = true;
          break;
        }
      }

      if (usernameExists) {
        setError('Username already taken!');
        return;
      }

      users.push({ username, password });
      localStorage.setItem('users', JSON.stringify(users));
      
      // Auto-login after successful registration if onSignupSuccess is provided
      if (onSignupSuccess) {
        onSignupSuccess(username);
      } else {
        alert('Registration successful! Please log in.');
        onLoginClick();
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError('An error occurred during registration');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Create an Account</h2>

        {error && <div className="error-message">{error}</div>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit" className="signup-button">Register</button>

        <p className="register-text">
          Already have an account? <span className="register-link" onClick={onLoginClick}>Login</span>
        </p>
      </form>
    </div>
  );
}

export default App;
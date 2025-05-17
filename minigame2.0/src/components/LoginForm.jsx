import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const togglePage = () => {
    setCurrentPage(currentPage === 'login' ? 'signup' : 'login');
  };

  return (
    <div className="app">
      {currentPage === 'login' ? (
        <LoginForm onRegisterClick={togglePage} />
      ) : (
        <SignupForm onLoginClick={togglePage} />
      )}
    </div>
  );
}

function LoginForm({ onRegisterClick }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { username, password });
    // Here you would typically handle authentication
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Enter Your</h2>
        
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

function SignupForm({ onLoginClick }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Signup attempt with:', { username, password });
    // Here you would typically handle registration
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Create an Account</h2>
        
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
        
        <button type="submit" className="signup-button">Submit</button>
      </form>
    </div>
  );
}

export default App;
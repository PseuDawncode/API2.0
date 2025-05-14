import { useState } from 'react';

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[username] === password) {
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleLogin} className="form">
      <h2>Log In</h2>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
}

import { useState } from 'react';

export default function SignupForm({ onSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[username]) {
      alert('User already exists!');
      return;
    }
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
    onSignup();
  };

  return (
    <form onSubmit={handleSignup} className="form">
      <h2>Sign Up</h2>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
}

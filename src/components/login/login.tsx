// src/components/login/login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';

type LoginProps = {
  onLogin: (email: string) => void;
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedData = localStorage.getItem('registrationData');
    if (storedData) {
      const { email: storedEmail, password: storedPassword } = JSON.parse(storedData);
      if (email === storedEmail && password === storedPassword) {
        console.log('Login successful');
        onLogin(storedEmail);
        navigate('/welcome', { state: { email: storedEmail } });
      } else {
        console.log('Invalid email or password');
      }
    } else {
      console.log('No registration data found');
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={handleRegister}>Nemate račun? Registrirajte se!</button>
    </div>
  );
};

export default Login;
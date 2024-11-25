import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

type LoginProps = {
  onLogin: (email: string) => void;
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Login successful');
      onLogin(user.email!);
      navigate('/welcome', { state: { email: user.email } });
    } catch (error) {
      setError((error as Error).message);
      console.log('Error logging in:', error);
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
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;
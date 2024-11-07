import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="app">
      <div className="app__welcome">
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleRegisterClick}>Go to Registration</button>
    </div>
    </div>
  );
};

export default Home;
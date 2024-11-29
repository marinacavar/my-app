import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './welcome.scss';

const Welcome: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { email } = location.state || { email: 'Guest' };

  const handleLogout = () => {
    localStorage.removeItem('registrationData');
    navigate('/');
  };

  const handleToDoList = () => {
    navigate('/categories');
  };

  return (
    <div className="welcome-page" >
      <h1>Welcome: {email}</h1>
      <button className="todo-button" onClick={handleToDoList}>Go to Categories</button>
    </div>
  );
};

export default Welcome;

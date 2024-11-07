import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './welcome.scss';

const Welcome: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state as { email: string };

  const handleLogout = () => {
    
    localStorage.removeItem('registrationData');
    navigate('/');
  };

  return (
    <div className="welcome-page">
      <h1>Welcome: {email}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Welcome;
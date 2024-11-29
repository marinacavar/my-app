import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import welcome from "../../images/welcome.jpg";
import "./home-page.scss";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  console.log(user);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleWelcomeClick = () => {
    navigate('/welcome');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  console.log("Home page loaded", welcome);

  return (
    <div className="app">
      <div
        className="app__welcome"
        style={{ backgroundImage: `url(${welcome})` }}
      >
        <h1>Welcome to the Home Page!</h1>
        {user ? (
          <button onClick={handleWelcomeClick}>Go to Welcome Page</button>
        ) : (
          <button onClick={handleLoginClick}>Go to Login</button>
        )}
        {/* <button onClick={handleRegisterClick}>Go to Registration</button> */}
      </div>
    </div>
  );
};

export default Home;

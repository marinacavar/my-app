import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.scss';

type NavbarProps = {
  email: string | null;
  onLogout: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ email, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <nav className='navbar'>
      <div className='navbar__left'>
        {email && <span className='navbar__email'>{email}</span>}
      </div>
      <div className='navbar__right'>
        {email && (
          <button className='navbar__logout' onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
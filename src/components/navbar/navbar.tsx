import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import './navbar.scss';

type NavbarProps = {
  email: string | null;
  onLogout: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ email, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      onLogout();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
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
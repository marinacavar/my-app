import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './registration.scss';

const Registration: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    const registrationData = {
      email,
      password,
      gender,
      country,
    };
    localStorage.setItem('registrationData', JSON.stringify(registrationData));
    console.log('Registration data saved to local storage:', registrationData);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="registration">
      <form onSubmit={handleRegister} className="registration__form">
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
        <div>
          <label>Gender:</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option value="">Select your country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
      <button onClick={handleLoginClick}>Already have an account? Login</button>
    </div>
  );
};

export default Registration;
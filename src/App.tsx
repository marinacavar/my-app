import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Login from './components/login/login';
import Registration from './components/register/register';
import Home from './components/home-page/index';
import Welcome from './components/welcome/welcome';
import Categories from './components/categories/categories';
import ToDoList from './components/todo/todo-list';
import Navbar from './components/navbar/navbar';

const App: React.FC = () => {
  const [email, setEmail] = useState<string | null>(null);

  const handleLogin = (userEmail: string) => {
    setEmail(userEmail);
  };

  const handleLogout = () => {
    setEmail(null);
    localStorage.removeItem('registrationData');
  };

  return (
    <Router>
      {email && <Navbar email={email} onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/todo-list" element={<ToDoList />} />
      </Routes>
    </Router>
  );
};

export default App;
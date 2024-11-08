import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Login from './components/login/login'; 
import Registration from './components/register/register'; 
import Home from './components/home-page/index';
import Welcome from './components/welcome/welcome';
import Categories from './components/categories/categories';
import TodoList from './components/todo/todo-list';

export const App: FunctionComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/todo-list" element={<TodoList />} />
       
      </Routes>
    </Router>
  );
};